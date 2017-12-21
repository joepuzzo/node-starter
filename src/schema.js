const { makeExecutableSchema } = require('graphql-tools');
const types = require('./types');
const queries = require('./queries');
const mutations = require('./mutations');
const resolvers = require('./resolvers');

const typeDefs = `
  ${types}
  ${queries}
  ${mutations}
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
