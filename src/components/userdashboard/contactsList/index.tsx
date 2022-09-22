import { useContacts } from "../../../providers/contacts";

function ContactList() {
  const { contacts } = useContacts();

  return (
    <section>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <section>
                <p>{contact.name}</p> <p>{contact.phone}</p>
              </section>
              <section>
                <p>{contact.email}</p>
                <p>Edit</p>
              </section>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ContactList;
