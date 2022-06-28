import humanize from 'humanize-string';

import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/Seller/SellersCell';

const DELETE_SELLER_MUTATION = gql`
  mutation DeleteSellerMutation($id: Int!) {
    deleteSeller(id: $id) {
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

const SellersList = ({ sellers }) => {
  const [deleteSeller] = useMutation(DELETE_SELLER_MUTATION, {
    onCompleted: () => {
      toast.success('Seller deleted');
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
    if (confirm('Are you sure you want to delete seller ' + id + '?')) {
      deleteSeller({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller.id}>
              <td>{truncate(seller.id)}</td>
              <td>{truncate(seller.name)}</td>
              <td>{truncate(seller.phone)}</td>
              <td>{truncate(seller.email)}</td>
              <td>{timeTag(seller.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.seller({ id: seller.id })}
                    title={'Show seller ' + seller.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSeller({ id: seller.id })}
                    title={'Edit seller ' + seller.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete seller ' + seller.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(seller.id)}
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

export default SellersList;