const fetch = require('node-fetch')

exports.getAsset = async() => {
    const data = await fetch(
        `https://rockhounds-images.s3-us-west-2.amazonaws.com/creditscore-${process.env.APP_VERSION}/manifest.json`
      );
      const manifest = await data.json();

      return {
          src: `https://rockhounds-images.s3-us-west-2.amazonaws.com/creditscore-${process.env.APP_VERSION}/${manifest["main.js"]}`
      }
}