// import css from "./Contact.module.css";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations.js";
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    // <div className={css.listItem}>
    //   <p>
    //     <FaUserAlt />
    //     {contact.name}
    //   </p>
    //   <p>
    //     <FaPhoneAlt />
    //     {contact.number}
    //   </p>
    //   <button onClick={handleDelete}>Delete</button>
    // </div>
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
          <FaUserAlt />
          {contact.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <FaPhoneAlt />
          {contact.number}
        </Typography>
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
}
