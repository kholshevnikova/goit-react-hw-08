// import { Route, Routes } from "react-router-dom";
// import Layout from "../Layout/Layout";
// import { Suspense, lazy, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { refreshUser } from "../../redux/auth/operations";
// import { selectIsRefreshing } from "../../redux/auth/selectors";
// import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import { Toaster } from "react-hot-toast";

// const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
// const RegistrationPage = lazy(() =>
//   import("../../pages/RegistrationPage/RegistrationPage")
// );
// const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
// const ContactsPage = lazy(() =>
//   import("../../pages/ContactsPage/ContactsPage")
// );

// export default function App() {
//   const dispatch = useDispatch();
//   const isRefreshing = useSelector(selectIsRefreshing);

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <div>Refreshing user, please wait...</div>
//   ) : (
//     <Layout>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route
//             path="/register"
//             element={
//               <RestrictedRoute
//                 component={<RegistrationPage />}
//                 redirectTo="/contacts"
//               />
//             }
//           />
//           <Route
//             path="/login"
//             element={
//               <RestrictedRoute
//                 component={<LoginPage />}
//                 redirectTo="/contacts"
//               />
//             }
//           />
//           {/* <Route path="/contacts" element={<ContactsPage />} /> */}
//           <Route
//             path="/contacts"
//             element={
//               <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
//             }
//           />
//         </Routes>
//       </Suspense>
//       <Toaster position="top-center" />
//     </Layout>
//   );
// }

import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { Toaster } from "react-hot-toast";
import {
  Box,
  CircularProgress,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const theme = createTheme({
  palette: {
    primary: {
      main: "#3ca36b", // Зелений колір для основних елементів
    },
    secondary: {
      main: "#81c784", // Світло-зелений колір для вторинних елементів
    },
  },
});

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Suspense
          fallback={
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <CircularProgress />
            </Box>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegistrationPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
            {/* <Route path="/contacts" element={<ContactsPage />} /> */}
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              }
            />
          </Routes>
        </Suspense>
        <Toaster position="top-center" />
      </Layout>
    </ThemeProvider>
  );
}
