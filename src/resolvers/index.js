const queries = require('../queries/resolvers');
const mutations = require('../mutations/resolvers');
const types = require('../types/resolvers');

module.exports = Object.assign( {
  Query: queries,
  Mutation: mutations
}, types);
