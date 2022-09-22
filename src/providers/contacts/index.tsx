import { createContext, useState, useContext } from "react";
import Api from "../../api";
import { Ichildrentype } from "../../interface";

interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
}

interface ContactPatial {
  name?: string;
  phone?: string;
  email?: string;
}

interface ContactsProviderData {
  contacts: Contact[];
  addContacts: (contact: Contact) => void;
  getContacts: () => void;
  updateContacts: (id: string, newData: ContactPatial) => void;
  deleteContacts: (id: string) => void;
}

export const ContactsContext = createContext<ContactsProviderData>(
  {} as ContactsProviderData
);

export const ContactsProvider = ({ children }: Ichildrentype) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContacts = (contact: Contact) => setContacts([contact, ...contacts]);

  const getContacts = () => {
    Api.get(`contact`).then((res) => {
      setContacts(res.data);
    });
  };

  const updateContacts = (id: string, newData: ContactPatial) => {
    Api.patch(`contact/${id}`, newData).then((res) => {
      getContacts();
    });
  };

  const deleteContacts = (id: string) => {
    Api.delete(`contact/${id}`).then((res) => {
      getContacts();
    });
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        addContacts,
        updateContacts,
        deleteContacts,
        getContacts,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => {
  const context = useContext(ContactsContext);
  return context;
};
