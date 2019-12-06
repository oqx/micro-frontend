exports.users = [
  {
    firstName: "Larry",
    lastName: "Gentlebread",
    phone: "612-555-5555",
    id: "1"
  }
];

exports.userCredit = [
  {
    id: "credit1",
    belongsTo: "1",
    scores: [
      {
        agency: "TransUnion",
        creditScore: "768"
      },
      {
        agency: "Equifax",
        creditScore: "750"
      }
    ]
  }
];

exports.transactions = [
  {
    id: "trans1",
    belongsTo: "1",
    transactions: [
      {
        datetime: Date.now(),
        statementAs: "GBRA ENDEAVORS",
        amount: 12.48
      },
      {
        datetime: Date.now(),
        statementAs: "CHIPOTLE INC",
        amount: 8.12
      },
      {
        datetime: Date.now(),
        statementAs: "CUZZYS BAR",
        amount: 345.23
      },
      {
        datetime: Date.now(),
        statementAs: "SPOTIFY INC",
        amount: 12.48
      },
      {
        datetime: Date.now(),
        statementAs: "NETFLIX INC",
        amount: 12.48
      }
    ]
  }
];
