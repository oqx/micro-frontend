const express = require("express");
const Schema = require("./apollo/schema");
const next = require("next");
const { ApolloServer } = require("apollo-server-express");
const fetch = require("node-fetch");

const isDev = process.env.NODE_ENV !== "production";
const nextApp = next({ isDev });
const handle = nextApp.getRequestHandler();
const app = express();

nextApp
  .prepare()
  .then(() => {
    const server = new ApolloServer(Schema);
    server.applyMiddleware({ app, cors: true });

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
