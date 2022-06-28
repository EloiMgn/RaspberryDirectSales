export const schema = gql`
  type Product {
    id: Int!
    title: String!
    unit: String!
    unitPrice: Float!
    createdAt: DateTime!
  }

  type Query {
    products: [Product!]! @requireAuth
    product(id: Int!): Product @requireAuth
  }

  input CreateProductInput {
    title: String!
    unit: String!
    unitPrice: Float!
  }

  input UpdateProductInput {
    title: String
    unit: String
    unitPrice: Float
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: Int!, input: UpdateProductInput!): Product! @requireAuth
    deleteProduct(id: Int!): Product! @requireAuth
  }
`;
