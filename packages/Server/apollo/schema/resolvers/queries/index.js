const { getCreditScore } = require("./credit.query");
const { getTransactionsById } = require("./transactions.query");
const { getUserById } = require("./user.query");

module.exports = {
  getCreditScore,
  getTransactionsById,
  getUserById
};
