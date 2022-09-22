import { useModal } from "../../../providers/modal";

import RegisterForm from "../registerForm";

function HomeModal() {
  const { changeModal } = useModal();

  return (
    <>
      <div>
        <section>
          <button onClick={changeModal}>x</button>
        </section>
        <section>
          <RegisterForm />
        </section>
      </div>
    </>
  );
}

export default HomeModal;
