const mutations = `
  type Mutation {
    createUser(userInput: UserInput!) : User!
  }
`;

module.exports = mutations;
