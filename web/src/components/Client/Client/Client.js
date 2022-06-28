import humanize from 'humanize-string';

import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

const DELETE_CLIENT_MUTATION = gql`
  mutation DeleteClientMutation($id: Int!) {
    deleteClient(id: $id) {
      id
    }
  }
`;

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value));
      return humanizedValues.join(', ');
    } else {
      return humanize(values);
    }
  }
};

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  );
};

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  );
};

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />;
};

const Client = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT_MUTATION, {
    onCompleted: () => {
      toast.success('Client deleted');
      navigate(routes.clients());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete client ' + id + '?')) {
      deleteClient({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Client {client.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{client.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{client.title}</td>
            </tr>
            <tr>
              <th>Contact</th>
              <td>{client.contact}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{client.phone}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{client.email}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{client.type}</td>
            </tr>
            <tr>
              <th>Sector</th>
              <td>{client.sector}</td>
            </tr>
            <tr>
              <th>Adress</th>
              <td>{client.adress}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(client.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editClient({ id: client.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(client.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default Client;
