import { useForm } from "react-hook-form";
import type {CreateUserDTO} from "../../../../types/User"


export const RegisterUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserDTO>();

  const createUser = async (data: CreateUserDTO) =>{
     await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
     })
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(createUser)}>
      <input
        placeholder="Username"
        {...register("username", {
          required: "Enter username to create your profile.",
        })}
      />
      {errors.username && <span>{errors.username.message}</span>}

      <input
        placeholder="Email"
        {...register("email", {
          required: "Enter email to create your profile.",
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        placeholder="Password"
        {...register("password", { required: "Password is required" })}
      />
      {errors.password && <span>{errors.password.message}</span>}
    
      <button type={'submit'}>Register</button>
    </form>
  );
};
