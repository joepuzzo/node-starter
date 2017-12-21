const types = `
  type User {
    id: ID!
    name: String!
    email: String!
    address: Address!
  }
  input UserInput {
    name: String!
    email: String!
    address: AddressInput!
  }
  type Address {
    id: ID!
    state: String!
    city: String!
    zip: String!
    street: String!
  }
  input AddressInput {
    state: String!
    city: String!
    zip: String!
    street: String!
  }

`;

module.exports = types;
