const { transactions } = require('../../stubs')


exports.getTransactionsById = (parent, {id}, {user}) => {
    if(parent && parent.id) {
        return transactions.find(t => t.belongsTo === parent.id)
    }
    if(id === user.id) {
        return transactions.find(t => t.belongsTo === id)
    }
    throw new Error('User is not authorized to access transaction data.')
}