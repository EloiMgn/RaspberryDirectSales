import { SelectField } from '@redwoodjs/forms';

export const QUERY = gql`
  query ClientSelectionQuery {
    clients {
      id
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
    <SelectField
      name="client"
      validation={{ required: true }}
      errorClassName="error"
    >
      {clients.map((item) => {
        return (
          <option key={item.id} value={`${item.id}`}>
            {item.id}
          </option>
        );
      })}
    </SelectField>
  );
};
