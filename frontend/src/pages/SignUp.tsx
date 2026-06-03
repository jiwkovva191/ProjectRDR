import LogoSkills from "../assets/LogoSkills.png";
import { Link } from "react-router-dom";
import { RegisterUser } from "../components/auth/RegisterUser";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Link
        to="/"
        className="absolute left-4 top-8 sm:left-8 sm:top-10 md:left-16 md:top-12 lg:left-24 lg:top-14 xl:left-32 xl:top-16"
      >
        <img
          src={LogoSkills}
          className="w-24 sm:w-28 md:w-36 lg:w-44 xl:w-52 h-auto object-contain"
          alt="LogoSkills"
        />
      </Link>
      <RegisterUser />
    </div>
  );
};
export default SignUp;
