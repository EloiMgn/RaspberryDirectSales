import { FieldError, Label, SelectField } from '@redwoodjs/forms';

export const QUERY = gql`
  query BerriesQuery {
    products {
      id
      title
      unit
      unitPrice
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ products }) => {
  console.log(products);
  return (
    <>
      <Label
        name="product"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Produit
      </Label>

      <SelectField
        name="product"
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: true }}
      >
        {products.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          );
        })}
      </SelectField>

      <FieldError name="product" className="rw-field-error" />
    </>
  );
};
