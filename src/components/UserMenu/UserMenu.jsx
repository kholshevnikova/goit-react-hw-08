import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { Button } from "@mui/material";

export default function UserMenu() {
  const user = useSelector(selectUser);
  // console.log(user);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name} !</p>
      {/* <button type="button" onClick={handleLogOut}>
        Logout
      </button> */}
      <Button variant="contained" onClick={handleLogOut}>
        Logout
      </Button>
    </div>
  );
}
