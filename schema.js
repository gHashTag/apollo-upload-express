export default `
scalar Upload

type File {
  id: ID!
  path: String!
  filename: String!
  mimetype: String!
  encoding: String!
}

type Query {
  hello: String
  uploads: [File]
}

type Mutation {
  singleUpload (file: Upload!): File!
  multipleUpload (files: [Upload!]!): [File!]!
}
`
