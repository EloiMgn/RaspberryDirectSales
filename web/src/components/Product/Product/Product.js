import humanize from 'humanize-string';

import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProductMutation($id: Int!) {
    deleteProduct(id: $id) {
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

const Product = ({ product }) => {
  const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION, {
    onCompleted: () => {
      toast.success('Product deleted');
      navigate(routes.products());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete product ' + id + '?')) {
      deleteProduct({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Product {product.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{product.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{product.title}</td>
            </tr>
            <tr>
              <th>Unit</th>
              <td>{product.unit}</td>
            </tr>
            <tr>
              <th>Unit price</th>
              <td>{product.unitPrice}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(product.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProduct({ id: product.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(product.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default Product;
