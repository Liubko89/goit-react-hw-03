import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "User name must be at least 2 characters!")
    .max(50, "User name must be less than 50 characters!")
    .required("Contact name is required!"),
  number: Yup.string()
    .number("Must be a valid number! For example: '000-00-00'")
    .required("Number is required!"),
});

const INITIAL_FORM_DATA = {
  name: "",
  number: "",
};

const ContactForm = ({ handleAddContact }) => {
  const handleSubmit = (data, actions) => {
    handleAddContact(data);
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={ContactsSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.formLabel}>
          <span>Name</span>
          <Field className={css.formInput} type="text" name="name" />
          <ErrorMessage className={css.errorMsg} name="name" component="span" />
        </label>
        <label className={css.formLabel}>
          <span>Number</span>
          <Field className={css.formInput} type="text" name="number" />
          <ErrorMessage
            className={css.errorMsg}
            name="number"
            component="span"
          />
        </label>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
