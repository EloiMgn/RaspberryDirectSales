import { FieldError, Label, SelectField } from '@redwoodjs/forms';

export const QUERY = gql`
  query ClientSelectionQuery {
    clients {
      id
      title
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ clients }) => {
  return (
    <>
      <Label
        name="client"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Client
      </Label>

      <SelectField
        name="client"
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: true }}
      >
        {clients.map((item) => {
          return (
            <option key={item.id} value={`${item.id}`}>
              {item.title}
            </option>
          );
        })}
      </SelectField>

      <FieldError name="client" className="rw-field-error" />
    </>
  );
};
