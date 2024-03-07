import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.contactListItem}>
            <Contact contactName={name} contactNumber={number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
