import humanize from 'humanize-string';

import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

const DELETE_SELLER_MUTATION = gql`
  mutation DeleteSellerMutation($id: Int!) {
    deleteSeller(id: $id) {
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

const Seller = ({ seller }) => {
  const [deleteSeller] = useMutation(DELETE_SELLER_MUTATION, {
    onCompleted: () => {
      toast.success('Seller deleted');
      navigate(routes.sellers());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete seller ' + id + '?')) {
      deleteSeller({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Seller {seller.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{seller.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{seller.name}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{seller.phone}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{seller.email}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(seller.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSeller({ id: seller.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(seller.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default Seller;
