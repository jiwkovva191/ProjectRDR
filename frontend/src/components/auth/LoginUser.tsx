import type { CreateUserDTO } from "../../../../types/User";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { InputField } from "./InputField";
import { SubmitButton } from "./SubmitButton";
import { InputError } from "./InputError";

export const LoginUser = () =>{
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<CreateUserDTO>();

    const navigate = useNavigate();
    const handleLogin = async (data: Partial<CreateUserDTO>) => {
        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: data.username,
                    password: data.password
                }),
        });

        const result = await response.json();

        if(!response.ok) {
            alert(result.message || "Invalid credentials")
            return;
        }

        navigate("/");

        console.log("Logged in usr:", result.user)
        } catch(err){
            console.error("Login error:", err);
            alert("Login Unsuccessful");
        }
    };


    return (
        <div className="w-full max-w-sm flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-blue-900">Log In</h2>
          <form className="w-full"
          onSubmit={handleSubmit(handleLogin)}
          >
            <InputField
              placeholder="Username"
              {...register("username", {
                required: "Enter username to create your profile.",
              })}
            />
            {errors.username && <InputError text={errors.username.message} />}
    
            <InputField
              placeholder="Password"
              {...register("password", { required: "Password is required." })}
            />
            {errors.password && <InputError text={errors.password.message} />}
    
            <SubmitButton text="Log In" />
          </form>
        </div>
      );
}