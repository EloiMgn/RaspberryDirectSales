import humanize from 'humanize-string';

import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/Client/ClientsCell';

const DELETE_CLIENT_MUTATION = gql`
  mutation DeleteClientMutation($id: Int!) {
    deleteClient(id: $id) {
      id
    }
  }
`;

const MAX_STRING_LENGTH = 150;

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

const truncate = (text) => {
  let output = text;
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...';
  }
  return output;
};

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2));
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

const ClientsList = ({ clients }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT_MUTATION, {
    onCompleted: () => {
      toast.success('Client deleted');
    },
    onError: (error) => {
      toast.error(error.message);
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete client ' + id + '?')) {
      deleteClient({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Contact</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Type</th>
            <th>Sector</th>
            <th>Adress</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{truncate(client.id)}</td>
              <td>{truncate(client.title)}</td>
              <td>{truncate(client.contact)}</td>
              <td>{truncate(client.phone)}</td>
              <td>{truncate(client.email)}</td>
              <td>{truncate(client.type)}</td>
              <td>{truncate(client.sector)}</td>
              <td>{truncate(client.adress)}</td>
              <td>{timeTag(client.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.client({ id: client.id })}
                    title={'Show client ' + client.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editClient({ id: client.id })}
                    title={'Edit client ' + client.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete client ' + client.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(client.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsList;
