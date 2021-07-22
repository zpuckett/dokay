const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }

  type User {
    _id: ID!
    username: String!
    email: String
  }
  
  type Query {
    me: User
  }  
  
  type Auth {
    token: ID!
    user: User
  }

  # type Vote { 
   # _id: ID!
   # vote: Boolean!
   # username: String
 # }

`;

module.exports = typeDefs;