import { Ichildrentype } from "../interface";
import { ContactProvider } from "./contactForm";

const Providers = ({ children }: Ichildrentype) => {
  return <ContactProvider>{children}</ContactProvider>;
};

export default Providers;
