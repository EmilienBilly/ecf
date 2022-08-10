import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed top-0 h-screen w-64 flex flex-col bg-gray-900 text-white shadow-lg">
            <div className="basis-1/3">
                <img src="" alt="" />
                <p>One Gym</p>
            </div>
            <ul className="basis-2/3 mx-auto flex flex-col text-xl font-medium">
                <Link className="p-6" to="/">
                    Partenaires
                </Link>
                <Link className="p-6" to="/">
                    Structures
                </Link>
                <Link className="p-6" to="/">
                    Préstations
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
