import Client from 'src/components/Client/Client';

export const QUERY = gql`
  query FindClientById($id: Int!) {
    client: client(id: $id) {
      id
      title
      contact
      phone
      email
      type
      sector
      adress
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Client not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ client }) => {
  return <Client client={client} />;
};
