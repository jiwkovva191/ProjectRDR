import { useNavigate } from "react-router-dom";

const LoginButton = () => {
   const navigate = useNavigate();
    return (

        <button onClick={() => navigate("/login-signinForm")}
            className="bg-white text-green-950 px-6 py-3 rounded-lg hover:opacity-70 transition">Login</button>
    )
  }
  export default LoginButton;