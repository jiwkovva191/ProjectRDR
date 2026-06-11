import { useForm } from "react-hook-form";
import type { CreateUserDTO } from "../../../../types/User";
import { InputField } from "./InputField";
import { SubmitButton } from "./SubmitButton";
import { InputError } from "./InputError";
import { useNavigate } from "react-router";

export const RegisterUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserDTO>();

  const navigate = useNavigate();

  const createUser = async (data: CreateUserDTO) => {
    const port = import.meta.env.VITE_SERVER_PORT;
    console.log(port);
    const response = await fetch(`http://localhost:${port}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if(response.ok){
      alert("Registration successful!")
      navigate('/login');
    }
  };

  console.log(errors);

  return (
    <div className="w-full max-w-sm flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-blue-900">Sign Up</h2>
      <form className="w-full"
        onSubmit={handleSubmit(createUser)}
      >
        <InputField
          placeholder="Username"
          {...register("username", {
            required: "Enter username to create your profile.",
          })}
        />
        {errors.username && <InputError text={errors.username.message} />}

        <InputField
          placeholder="Email"
          {...register("email", {
            required: "Enter email to create your profile.",
          })}
        />
        {errors.email && <InputError text={errors.email.message} />}

        <InputField
          placeholder="Password"
          {...register("password", { required: "Password is required." })}
        />
        {errors.password && <InputError text={errors.password.message} />}

        <SubmitButton text="Register" />
      </form>
      <h3>Already have an account? <a className="font-bold text-blue-800" href="/login">Log In</a></h3>
    </div>
  );
};
