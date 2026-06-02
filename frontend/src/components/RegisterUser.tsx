import { useForm } from "react-hook-form";
import type {CreateUserDTO} from "../../../"

export const RegisterUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserDTO>();

  const createUser = async (data) =>{

  }

  return (
    <form onSubmit={handleSubmit(createUser)}>
      <input
        placeholder="Username"
        {...register("username", {
          required: "Enter username to create your profile.",
        })}
      />
      <input
        placeholder="Email"
        {...register("email", {
          required: "Enter email to create your profile.",
        })}
      />
      <input
        placeholder="Password"
        {...register("password", { required: "Password is required" })}
      />
      <button>Register</button>
    </form>
  );
};
