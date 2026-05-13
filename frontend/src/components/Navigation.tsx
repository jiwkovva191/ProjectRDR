import {Link} from 'react-router';
import LoginButton from "./LoginButton.tsx";

const Navigation = () => {
    return (
        <nav className="bg-[#90D7AC] min-h-screen w-35 p-4 shadow-lg ">
            <ul className="flex flex-col gap-4">
                <li><Link to={'/login'}><LoginButton/></Link></li>
                <li> <Link to={'/'}>Home</Link></li>
                <h1>Categories</h1>
                <li><Link to={'/education'}>Education</Link></li>
                <li><Link to={'/languages'}>Languages</Link></li>
                <li><Link to={'/trades'}>Trades</Link></li>



            </ul>
        </nav>
    )
}

export default Navigation;

