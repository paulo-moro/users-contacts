import { Ichildrentype } from "../interface";
import { AuthProvider } from "./authtoken";
import { ContactTypeProvider } from "./contactForm";
import { ContactsProvider } from "./contacts";
import { ModalProvider } from "./modal";

const Providers = ({ children }: Ichildrentype) => {
  return (
    <ContactsProvider>
      <AuthProvider>
        <ContactTypeProvider>
          <ModalProvider>{children}</ModalProvider>
        </ContactTypeProvider>
      </AuthProvider>
    </ContactsProvider>
  );
};

export default Providers;
