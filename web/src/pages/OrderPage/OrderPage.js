import { useState } from 'react';

import {
  FieldError,
  Form,
  Label,
  // TextField,
  // TextAreaField,
  Submit,
  NumberField,
  DateField,
} from '@redwoodjs/forms';
import { MetaTags } from '@redwoodjs/web';

import BerriesCell from 'src/components/BerriesCell';
import ClientSelectionCell from 'src/components/ClientSelectionCell';
// import Product from 'src/components/Product/Product';
import SalesCell from 'src/components/SalesCell';

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

// console.log(products);

const OrderPage = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  const [quantity, setQuantity] = useState(0);
  // const [unit, setunit] = useState('');
  const [unitPrice, setUnitPrice] = useState(0);

  return (
    <>
      <MetaTags title="Order" description="Order page" />

      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <SalesCell />

        <BerriesCell />

        <ClientSelectionCell />

        <Label name="quantity" errorClassName="error">
          Quantité
        </Label>
        <NumberField
          name="quantity"
          validation={{ required: true }}
          errorClassName="error"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <FieldError name="quantity" className="error" />

        <Label name="deliveryDate" errorClassName="error">
          Date de livraison
        </Label>
        <DateField
          name="deliveryDate"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="deliveryDate" className="error" />

        <Label name="unitPrice" errorClassName="error">
          Prix unitaire
        </Label>
        <NumberField
          name="unitPrice"
          validation={{ required: true }}
          errorClassName="error"
          onChange={(e) => setUnitPrice(e.target.value)}
        />
        <FieldError name="unitPrice" className="error" />

        <Label name="price" errorClassName="error">
          Prix
        </Label>
        <NumberField
          name="price"
          value={quantity * unitPrice}
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="price" className="error" />

        <Submit>Save</Submit>
      </Form>
    </>
  );
};

export default OrderPage;
