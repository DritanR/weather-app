import { Link } from "react-router-dom";

function Header () {
    return (
        <nav className="bg-gray-600 text-white p-4 flex gap-4">
            <Link to="/about">About</Link>
            <Link to="/">Weather App</Link>
        </nav>
    )
}

export default Header;