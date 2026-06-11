import { useNavigate } from "react-router";
import LogoSkills from "../assets/LogoSkills.png";

const WelcomePage = () => {
  const navigate=useNavigate();
  return (
    <div className="bg-[#b4f0c4] min-h-screen w-screen">
      <div className="flex flex-row justify-center">
        <div>
          <h1 className="text-5xl mb-5 font-bold">Welcome to UMenie!</h1>
          <div className="flex flex-row text-center gap-5">
            <button onClick={() => navigate("/login")} className="bg-[#0F2D52] text-white px-6 py-3 rounded-lg hover:opacity-70 transition">
              Login
            </button>
            <button onClick={() => navigate("/signup")} className="bg-[#0F2D52] text-white px-6 py-3 rounded-lg hover:opacity-70 transition">
              Sign Up
            </button>
          </div>
        </div>
        <img
          src={LogoSkills}
          className="w-64 sm:w-80 md:w-96 lg:w-[450px] xl:w-[550px] h-auto object-contain drop-shadow-xl"
          alt="LogoSkills"
        />
      </div>
    </div>
  );
};
export default WelcomePage;
