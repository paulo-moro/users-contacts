import HomeModal from "../../components/Home/homeModal";
import LoginForm from "../../components/Home/loginForm";
import { useModal } from "../../providers/modal";
import { useModalType } from "../../providers/modalType";

function HomePage() {
  const { modalType } = useModalType();
  const { modal } = useModal();
  return (
    <>
      <section>
        <h2>User Contacts</h2>
      </section>
      <section>
        <LoginForm />
      </section>
      {modalType === "register" && modal && <HomeModal />}
    </>
  );
}

export default HomePage;
