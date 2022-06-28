import { FieldError, Label, SelectField } from '@redwoodjs/forms';

export const QUERY = gql`
  query SalesQuery {
    sellers {
      id
      name
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ sellers }) => {
  return (
    <>
      <Label
        name="seller"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Vendeur
      </Label>

      <SelectField
        name="seller"
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: true }}
      >
        {sellers.map((item) => {
          return (
            <option key={item.id} value={`${item.name}`}>
              {item.name}
            </option>
          );
        })}
      </SelectField>

      <FieldError name="seller" className="rw-field-error" />
    </>
  );
};
