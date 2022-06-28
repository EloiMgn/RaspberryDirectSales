export const schema = gql`
  type Seller {
    id: Int!
    name: String!
    phone: String!
    email: String!
    createdAt: DateTime!
  }

  type Query {
    sellers: [Seller!]! @requireAuth
    seller(id: Int!): Seller @requireAuth
  }

  input CreateSellerInput {
    name: String!
    phone: String!
    email: String!
  }

  input UpdateSellerInput {
    name: String
    phone: String
    email: String
  }

  type Mutation {
    createSeller(input: CreateSellerInput!): Seller! @requireAuth
    updateSeller(id: Int!, input: UpdateSellerInput!): Seller! @requireAuth
    deleteSeller(id: Int!): Seller! @requireAuth
  }
`;
