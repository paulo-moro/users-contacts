import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

function ContactAddForm() {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Digite seu nome completo!")
      .min(8, "Digite seu nome com ao menos 08 caracteres!")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Nome Inválido! "
      ),
    email: yup
      .string()
      .required("Digite seu Email!")
      .email("Email não é válido"),
    phone: yup
      .string()
      .required("Digite o seu telefone")
      .min(11, "Número de telefone inválido"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Complete name"
          required
          {...register("name")}
        />
        <input
          type="tel"
          placeholder="(xx)xxxxx-xxxx"
          required
          {...register("phone")}
        />
        <input type="email" placeholder="email" {...register("email")} />
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default ContactAddForm;
