export const schema = gql`
  type Client {
    id: Int!
    title: String!
    contact: String!
    phone: String!
    email: String!
    type: String!
    sector: String!
    adress: String!
    createdAt: DateTime!
  }

  type Query {
    clients: [Client!]! @requireAuth
    client(id: Int!): Client @requireAuth
  }

  input CreateClientInput {
    title: String!
    contact: String!
    phone: String!
    email: String!
    type: String!
    sector: String!
    adress: String!
  }

  input UpdateClientInput {
    title: String
    contact: String
    phone: String
    email: String
    type: String
    sector: String
    adress: String
  }

  type Mutation {
    createClient(input: CreateClientInput!): Client! @requireAuth
    updateClient(id: Int!, input: UpdateClientInput!): Client! @requireAuth
    deleteClient(id: Int!): Client! @requireAuth
  }
`;
