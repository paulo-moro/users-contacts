import { useModal } from "../../../providers/modal";
import { useModalType } from "../../../providers/modalType";
import ContactAddForm from "../contactAddForm";
import ContactEditForm from "../contactEditAddForm";

function DashboardModal() {
  const { modalType } = useModalType();
  const { modal } = useModal();

  return (
    <>
      {modalType === "edit" && modal ? (
        <div>
          <h2>Contact</h2>
          <ContactAddForm />
        </div>
      ) : (
        modalType === "add" &&
        modal && (
          <div>
            <h2>Contact</h2>
            <ContactEditForm />
          </div>
        )
      )}
    </>
  );
}

export default DashboardModal;
