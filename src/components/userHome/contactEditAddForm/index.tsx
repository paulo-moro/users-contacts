import { IcontactType } from "../../../interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface ContactFormProps {
  contact?: IcontactType;
}

function ContactEditForm({ contact }: ContactFormProps) {
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
  return (
    <form>
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
      <button type="submit">Delete</button>
      <button type="submit">Save</button>
    </form>
  );
}

export default ContactEditForm;
