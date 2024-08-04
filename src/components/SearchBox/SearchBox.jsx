import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";
import { TextField } from "@mui/material";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div>
      <p className={css.searchText}>Find contacts by name</p>
      {/* <input type="text" onChange={handleChange} /> */}
      <TextField type="text" onChange={handleChange} />
    </div>
  );
}
