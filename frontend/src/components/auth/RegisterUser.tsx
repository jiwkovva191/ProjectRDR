import { useForm } from "react-hook-form";
import type { CreateUserDTO } from "../../../../types/User";
import { InputField } from "./InputField";
import { SubmitButton } from "./SubmitButton";
import { InputError } from "./InputError";

export const RegisterUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserDTO>();

  const createUser = async (data: CreateUserDTO) => {
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  console.log(errors);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold text-blue-900">Sign Up</h2>
      <form
        className="w-1/2 border-solid border-blue-100 rounded p-6"
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
    </div>
  );
};
