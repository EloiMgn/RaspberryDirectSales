import { Link, routes } from '@redwoodjs/router';

import Clients from 'src/components/Client/Clients';

export const QUERY = gql`
  query FindClients {
    clients {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No clients yet. '}
      <Link to={routes.newClient()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ clients }) => {
  return <Clients clients={clients} />;
};
