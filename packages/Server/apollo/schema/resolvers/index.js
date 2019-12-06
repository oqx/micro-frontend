const fromQueries  = require('./queries')

exports.resolvers = {
    Query: {
      viewer: fromQueries.getUserById,
      creditScore: fromQueries.getCreditScore,
      transactions: fromQueries.getTransactionsById
    },
    User: {
      creditScore: fromQueries.getCreditScore,
      transactions: fromQueries.getTransactionsById
    }
  }