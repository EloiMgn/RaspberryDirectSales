import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import ClientForm from 'src/components/Client/ClientForm';

export const QUERY = gql`
  query EditClientById($id: Int!) {
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
const UPDATE_CLIENT_MUTATION = gql`
  mutation UpdateClientMutation($id: Int!, $input: UpdateClientInput!) {
    updateClient(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ client }) => {
  const [updateClient, { loading, error }] = useMutation(
    UPDATE_CLIENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Client updated');
        navigate(routes.clients());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateClient({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Client {client.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ClientForm
          client={client}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
