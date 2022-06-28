import { Link, routes } from '@redwoodjs/router';

import Sellers from 'src/components/Seller/Sellers';

export const QUERY = gql`
  query FindSellers {
    sellers {
      id
      name
      phone
      email
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No sellers yet. '}
      <Link to={routes.newSeller()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ sellers }) => {
  return <Sellers sellers={sellers} />;
};
