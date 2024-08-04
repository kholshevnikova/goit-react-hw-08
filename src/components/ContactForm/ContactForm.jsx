import { useDispatch } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
// import { nanoid } from "nanoid";
import * as Yup from "yup";
// import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";
import { Box, Button, TextField } from "@mui/material";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // const id = nanoid();
    dispatch(addContact({ name: values.name, number: values.number }));
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long")
      .required("Required"),
  });

  return (
    // <Formik
    //   initialValues={{ name: "", number: "" }}
    //   onSubmit={handleSubmit}
    //   validationSchema={FeedbackSchema}
    // >
    //   <Form className={css.formContainer}>
    //     <div className={css.fieldContainer}>
    //       <label htmlFor="name">Name</label>
    //       <Field type="text" name="name" id="name" />
    //       <ErrorMessage name="name" component="span" />
    //     </div>
    //     <div className={css.fieldContainer}>
    //       <label htmlFor="number">Number</label>
    //       <Field type="tel" name="number" id="number" />
    //       <ErrorMessage name="number" component="span" />
    //     </div>
    //     <button type="submit" className={css.addButton}>
    //       Add contact
    //     </button>
    //   </Form>
    // </Formik>
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ handleChange, values }) => (
        <Form autoComplete="off">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: 300,
            }}
          >
            <TextField
              label="Name"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <ErrorMessage name="name" component="span" />
            <TextField
              label="Number"
              type="text"
              name="number"
              value={values.number}
              onChange={handleChange}
            />
            <ErrorMessage name="name" component="span" />
            <Button type="submit" variant="contained">
              Add contact
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
