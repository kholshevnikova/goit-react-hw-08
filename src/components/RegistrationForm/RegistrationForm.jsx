import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { selectIsRegistering } from "../../redux/auth/selectors";
import { Box, Button, TextField } from "@mui/material";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const isRegistering = useSelector(selectIsRegistering);

  const handleSubmit = (values, actions) => {
    // console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values }) => (
        <Form autoComplete="off">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: 400,
              margin: "0 auto",
            }}
          >
            <TextField
              label="Username"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained">
              {isRegistering ? "Registering" : "Register"}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
