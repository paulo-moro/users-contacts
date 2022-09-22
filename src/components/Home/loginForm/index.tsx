import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useModal } from "../../../providers/modal";
import Api from "../../../api";
import { useAuth } from "../../../providers/authtoken";

function LoginForm() {
  const { changeModal } = useModal();
  const { changeAuth, auth } = useAuth();
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Digite seu Email!")
      .email("Email não é válido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "A senha precisa ter 8 digitos")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{4,}$/,
        "Está faltando um caractere especial, ou um número ou uma letra maiuscula ou minuscula"
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const history = useHistory();

  const handleLogin = ({ email, password }: FieldValues) => {
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
      Api.post("users/login", { email, password }).then((res) => {
        localStorage.setItem("@authToken", res.data.token);
        changeAuth(res.data.token);
      });

      Api.get("users/", {
        headers: { Authorization: `Bearer ${auth}` },
      }).then((res) => {
        localStorage.setItem("@user", res.data);
      });

      history.push("/dashboard");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input type="email" placeholder="E-mail" {...register("email")} />
        <span>{String(errors.email?.message)}</span>
        <input
          type="password"
          placeholder="Password"
          required
          {...register("password")}
        />
        <span>{String(errors.password?.message)}</span>
        <button type="submit">Login</button>
        <p>
          You do not have an account? click{" "}
          <span onClick={changeModal}>here</span>
        </p>
      </form>
    </>
  );
}

export default LoginForm;
