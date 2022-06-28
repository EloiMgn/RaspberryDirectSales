import Seller from 'src/components/Seller/Seller';

export const QUERY = gql`
  query FindSellerById($id: Int!) {
    seller: seller(id: $id) {
      id
      name
      phone
      email
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Seller not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ seller }) => {
  return <Seller seller={seller} />;
};
