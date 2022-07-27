const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageDisabled } = require('apollo-server-core')
const express = require('express')
const http = require('http')
const cors = require('cors')
const { typeDefs } = require('./schema/typeDefs')
const { resolvers } = require('./schema/resolvers')
const { MovieAPI } = require('./data')

async function startApolloServer (typeDefs, resolvers) {
    const app = express()
    app.use(cors())
    const httpServer = http.createServer(app)
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        cache: 'bounded',
        csrfPrevention: true,
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer })
        ],
        dataSources: () => {
            return {
                movieApi: new MovieAPI()
            }
        }
    })
    await server.start()
    server.applyMiddleware({
        path: '/graphql',
        app
    })
    await new Promise(resolve => httpServer.listen({ port: 4000}, resolve))
    console.log(`GraphQL Server started at http://localhost:4000${server.graphqlPath}`)
}

startApolloServer(typeDefs, resolvers)