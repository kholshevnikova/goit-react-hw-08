// import { useSelector } from "react-redux";
// import AuthNav from "../AuthNav/AuthNav";
// import Navigation from "../Navigation/Navigation";
// import UserMenu from "../UserMenu/UserMenu";
// import css from "./AppBar.module.css";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";

// export default function AppBar() {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return (
//     <header className={css.header}>
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
// }

import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
// import css from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function CustomAppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Navigation />
          </Typography>

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 4 }} />
    </>
  );
}
