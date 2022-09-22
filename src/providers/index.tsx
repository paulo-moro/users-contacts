import { Ichildrentype } from "../interface";
import { AuthProvider } from "./authtoken";
import { ContactTypeProvider } from "./contactForm";
import { ContactsProvider } from "./contacts";
import { ModalProvider } from "./modal";
import { ModalTypeProvider } from "./modalType";

const Providers = ({ children }: Ichildrentype) => {
  return (
    <ContactsProvider>
      <AuthProvider>
        <ContactTypeProvider>
          <ModalTypeProvider>
            <ModalProvider>{children}</ModalProvider>
          </ModalTypeProvider>
        </ContactTypeProvider>
      </AuthProvider>
    </ContactsProvider>
  );
};

export default Providers;
