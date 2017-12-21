const queries = `
  type Query {
    user(id: ID!): User!
    users(name: String, email: String): [User!]!
    allUsers: [User!]!
  }
`;

module.exports = queries;
