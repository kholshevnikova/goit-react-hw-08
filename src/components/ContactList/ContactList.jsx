import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
// import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { List, ListItem } from "@mui/material";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    // <ul className={css.list}>
    //   {filteredContacts.map((contact) => (
    //     <li key={contact.id}>
    //       <Contact contact={contact} />
    //     </li>
    //   ))}
    // </ul>
    <List>
      {filteredContacts.map((contact) => (
        <ListItem key={contact.id}>
          <Contact contact={contact} />
        </ListItem>
      ))}
    </List>
  );
}
