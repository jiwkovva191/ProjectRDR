import LogoSkills from "../assets/LogoSkills.png";
import { Link } from "react-router-dom";

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
      <div className="w-full max-w-md border border-gray-300 bg-white p-8 shadow-sm">
        <div className="text-center text-3xl mb-8">
          <h1>Sign up</h1>
        </div>
        <div className="mb-5">
          <h2>Name:</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black mb-5"
          />

          <h2>Email:</h2>
          <input
            type="text"
            placeholder="Your Email"
            className="w-full border border-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black mb-5"
          />

          <h2>Password:</h2>
          <input
            type="text"
            placeholder="Your Password"
            className="w-full border border-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black mb-5"
          />

          <button className="w-full bg-black text-white py-3 font-semibold hover:opacity-90 transition mb-5 ">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
