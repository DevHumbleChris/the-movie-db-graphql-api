const { ApolloServer } = require("apollo-server-express");
const {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageDisabled,
} = require("apollo-server-core");
const express = require("express");
const http = require("http");
const cors = require("cors");
const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");
const { MovieAPI } = require("./data");

const app = express();
app.use(cors());
const httpServer = http.createServer(app);

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    cache: "bounded",
    csrfPrevention: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    dataSources: () => {
      return {
        movieApi: new MovieAPI(),
      };
    },
    introspection: true,
    context: () => {
      return {
        api_key: '27d24c908a5cad31bea867f46aaaa316'
      }
    }
  });
  await server.start();
  server.applyMiddleware({
    path: "/graphql",
    app,
  });
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(
    `GraphQL Server started at http://localhost:4000${server.graphqlPath}`
  );
}

startApolloServer(typeDefs, resolvers);
module.exports = httpServer