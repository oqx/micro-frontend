const express = require("express");
const Schema = require("./apollo/schema");
const next = require("next");
const { ApolloServer } = require("apollo-server-express");
const path = require('path')

const isDev = process.env.NODE_ENV !== "production";
const nextApp = next({ isDev });
const handle = nextApp.getRequestHandler();
const app = express();
const COMPONENT_DIR = path.join(__dirname, '../../zippy/creditscore-1.0.0/')
const MANIFEST = require(COMPONENT_DIR + 'manifest.json')

nextApp
  .prepare()
  .then(() => {
    const server = new ApolloServer(Schema);
    server.applyMiddleware({ app });

    app.use('/credit-score/main.js', express.static(COMPONENT_DIR, MANIFEST['main.js']))

    app
      .get("*", (req, res) => {
        return handle(req, res);
      })
      .listen({ port: 4000 }, () =>
        console.log(
          `🚀 GraphQL Playground ready at http://localhost:4000${server.graphqlPath}\n`,
          `🎷 UI ready at http://localhost:4000`
        )
      );
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
