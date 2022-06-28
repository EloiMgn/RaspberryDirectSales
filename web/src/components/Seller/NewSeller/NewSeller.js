import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import SellerForm from 'src/components/Seller/SellerForm';

const CREATE_SELLER_MUTATION = gql`
  mutation CreateSellerMutation($input: CreateSellerInput!) {
    createSeller(input: $input) {
      id
    }
  }
`;

const NewSeller = () => {
  const [createSeller, { loading, error }] = useMutation(
    CREATE_SELLER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Seller created');
        navigate(routes.sellers());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input) => {
    createSeller({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Seller</h2>
      </header>
      <div className="rw-segment-main">
        <SellerForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewSeller;
