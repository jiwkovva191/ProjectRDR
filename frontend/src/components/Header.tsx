import {Link} from "react-router";
import LoginButton from "./LoginButton.tsx";

const Header= () => {
    return (
       <div className="w-full h-20 bg-white border-b shadow-sm flex items-center justify-between px-8">
        <div className="flex-1 max-w-2xl ">
            <input
                type="text"
                placeholder="Search skills..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
        </div>

    <Link to={'/login'}><LoginButton/></Link>

           </div>
    )
}

export default Header;