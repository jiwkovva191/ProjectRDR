import {Link} from 'react-router';
import LogoSkills from "../assets/LogoSkills.png";


const Navigation = () => {
    return (
        <nav className="bg-[#90D7AC] min-h-screen w-35 p-4 shadow-lg ">
            <img src={LogoSkills} alt="LogoSkills" />
            <ul className="flex flex-col gap-4">
                <li> <Link to={'/'}>Home</Link></li>
                <h1>Categories</h1>
                <li><Link to={'/education'}>Education</Link></li>
                <li><Link to={'/languages'}>Languages</Link></li>
                <li><Link to={'/trades'}>Trades</Link></li>
                <li><Link to={'/programming'}>Programming</Link></li>
                <li><Link to={'/design'}>Design</Link></li>



            </ul>
        </nav>
    )
}

export default Navigation;

