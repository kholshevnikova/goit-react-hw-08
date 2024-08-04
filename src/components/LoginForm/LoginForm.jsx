// import { Field, Formik, Form } from "formik";
// import css from "./LoginForm.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../redux/auth/operations";
// import { selectIsRegistering } from "../../redux/auth/selectors";

// export default function LoginForm() {
//   const dispatch = useDispatch();
//   const isRegistering = useSelector(selectIsRegistering);

//   const handleSubmit = (values, options) => {
//     // console.log(values);
//     dispatch(login(values));
//     options.resetForm();
//   };

//   return (
//     <Formik
//       initialValues={{
//         email: "",
//         password: "",
//       }}
//       onSubmit={handleSubmit}
//     >
//       <Form className={css.form} autoComplete="off">
//         <label className={css.label}>
//           Email
//           <Field type="email" name="email" />
//         </label>
//         <label className={css.label}>
//           Password
//           <Field type="password" name="password" />
//         </label>
//         <button type="submit">
//           {isRegistering ? "Logging in..." : "Log In"}
//         </button>
//         {/* {isRegistering && <div>Logging in...</div>} */}
//       </Form>
//     </Formik>
//   );
// }

import { Formik, Form } from "formik";
// import css from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { selectIsRegistering } from "../../redux/auth/selectors";
import { Box, Button, TextField } from "@mui/material";

export default function LoginForm() {
  const dispatch = useDispatch();
  const isRegistering = useSelector(selectIsRegistering);

  const handleSubmit = (values, options) => {
    // console.log(values);
    dispatch(login(values));
    options.resetForm();
  };

  return (
    <Formik
      initialValues={{
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
              {isRegistering ? "Logging in..." : "Log In"}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
