import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import SellerForm from 'src/components/Seller/SellerForm';

export const QUERY = gql`
  query EditSellerById($id: Int!) {
    seller: seller(id: $id) {
      id
      name
      phone
      email
      createdAt
    }
  }
`;
const UPDATE_SELLER_MUTATION = gql`
  mutation UpdateSellerMutation($id: Int!, $input: UpdateSellerInput!) {
    updateSeller(id: $id, input: $input) {
      id
      name
      phone
      email
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ seller }) => {
  const [updateSeller, { loading, error }] = useMutation(
    UPDATE_SELLER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Seller updated');
        navigate(routes.sellers());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateSeller({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Seller {seller.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SellerForm
          seller={seller}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
