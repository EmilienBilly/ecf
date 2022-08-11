import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed top-0 h-screen w-64 flex flex-col text-white bg-teal-800 shadow-lg">
            <div className="flex flex-col justify-center align-center basis-1/3">
                <img src="" alt="" />
                <p className="text-xl font-bold text-center">One Gym</p>
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
