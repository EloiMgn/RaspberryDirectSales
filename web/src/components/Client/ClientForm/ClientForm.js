import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  SelectField,
} from '@redwoodjs/forms';

const ClientForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.client?.id);
  };

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.client?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="contact"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Contact
        </Label>

        <TextField
          name="contact"
          defaultValue={props.client?.contact}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="contact" className="rw-field-error" />

        <Label
          name="phone"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone
        </Label>

        <TextField
          name="phone"
          defaultValue={props.client?.phone}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="phone" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.client?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>

        <SelectField
          name="type"
          defaultValue={props.client?.type}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        >
          <option value="">Sélectionner un type de client</option>
          <option value="Boulangerie">Boulangerie</option>
          <option value="Restaurant">Restaurant</option>
          <option value="Distributeur">Distributeur</option>
          <option value="Famille/Amis">Famille/Amis</option>
          <option value="Client direct">Client direct</option>
        </SelectField>

        <FieldError name="type" className="rw-field-error" />

        <Label
          name="sector"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sector
        </Label>

        <SelectField
          name="sector"
          defaultValue={props.client?.sector}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        >
          <option value="">Sélectionner un secteur</option>
          <option value="Soissonnais">Soissonnais</option>
          <option value="Allemant">Allemant</option>
          <option value="Reims">Reims</option>
          <option value="Seine-et-Marne">Seine-et-Marne</option>
        </SelectField>

        <FieldError name="sector" className="rw-field-error" />

        <Label
          name="adress"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Adress
        </Label>

        <TextField
          name="adress"
          defaultValue={props.client?.adress}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="adress" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default ClientForm;
