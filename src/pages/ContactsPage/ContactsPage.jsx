import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const operation = fetchContacts();
    dispatch(operation);
  }, [dispatch]);
  return (
    <div>
      <h2>Your contacts</h2>
      {loading && <Loading />}
      {error && <Error />}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
