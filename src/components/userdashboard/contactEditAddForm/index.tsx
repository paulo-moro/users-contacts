import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";
import { useContacts } from "../../../providers/contacts";
import { useEditContact } from "../../../providers/editcontact";
import { useModal } from "../../../providers/modal";

function ContactEditForm() {
  const { updateContacts } = useContacts();

  const { changeModal } = useModal();

  const { contact } = useEditContact();

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(8, "Digite seu nome com ao menos 08 caracteres!")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Nome Inválido! "
      ),
    email: yup.string().email("Email não é válido"),
    phone: yup.string().min(11, "Número de telefone inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const updateContact = (newData: FieldValues) => {
    const errorsIsEmpty = () => {
      for (let key in errors) {
        if (errors.hasOwnProperty(key)) {
          return false;
        } else {
          return true;
        }
      }
    };

    if (errorsIsEmpty()) {
      updateContacts(contact!.id, newData);
      changeModal();
    }
  };

  const deleteContact = (contactId: string) => {
    deleteContact(contactId);
    changeModal();
  };

  return (
    <form onSubmit={handleSubmit(updateContact)}>
      <input
        type="text"
        placeholder="Complete name"
        required
        {...register("name")}
        value={contact?.name}
      />
      <input
        type="tel"
        placeholder="(xx)xxxxx-xxxx"
        required
        {...register("phone")}
        value={contact?.phone}
      />
      <input
        type="email"
        placeholder="email"
        required
        {...register("email")}
        value={contact?.email}
      />
      <button type="button" onClick={() => deleteContact(contact!.id)}>
        Delete
      </button>
      <button type="submit">Save</button>
    </form>
  );
}

export default ContactEditForm;
