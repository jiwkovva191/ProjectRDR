import {Link} from "react-router-dom";
import LogoSkills from "../assets/LogoSkills.png"

const LoginSignForm = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <Link to="/"
                className="absolute left-4 top-8 sm:left-8 sm:top-10 md:left-16 md:top-12 lg:left-24 lg:top-14 xl:left-32 xl:top-16">
                <img src={LogoSkills}
                     className="w-24 sm:w-28 md:w-36 lg:w-44 xl:w-52 h-auto object-contain"
                     alt="LogoSkills"/>
                    </Link>
                <div className="w-full max-w-md border border-gray-300 bg-white p-8 shadow-sm">
                    <div className="text-center text-3xl mb-8">
                <h1>Login</h1>
                    </div>
                <div className="mb-5">
                <h3>Email:</h3>
                <input type="text" placeholder="Email"  className="w-full border border-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"/>
                </div>

                    <div className="mb-5">
                <h3>Password:</h3>
                <input type="text" placeholder="Password" className="w-full border border-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"/>
                    </div>


                    <button className="w-full bg-black text-white py-3 font-semibold hover:opacity-90 transition mb-5">
                        Sign In
                    </button>

                <h5 className="text-center text-[#0F2D52] underline cursor-pointer"> Forgot Password?</h5>
                <h5 className="text-center">Don't have an account? </h5>
                  <Link to ="/signup"
                        className="block text-center text-[#0F2D52] underline cursor-pointer">
                      Sign up</Link>
            </div>

        </div>
        </div>

    )

}

export default LoginSignForm