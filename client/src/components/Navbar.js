import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {!isOpen ? (
                <button className="fixed top-4 right-4 p-2 focus:outline-none focus:bg-gray-600 hover:bg-gray-600 rounded-md" onClick={() => setIsOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            ) : (
                <nav className="+translate-y-full absolute inset-0 lg:relative z-10 w-80 text-white h-screen bg-teal-700 p-3">
                    <div>
                        <div className="flex justify-between">
                            <span className="font-bold text-2xl sm:text-3xl p-2">One Gym</span>
                            <button className="p-2 focus:outline-none focus:bg-teal-800 hover:bg-teal-800 rounded-md" onClick={() => setIsOpen(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        </div>
                        <ul className="mt-8">
                            <li>
                                <Link className="block px-4 py-2 hover:bg-teal-800" to="/">
                                    Partenaires
                                </Link>
                            </li>
                            <li>
                                <Link className="block px-4 py-2 hover:bg-teal-800" to="/">
                                    Structures
                                </Link>
                            </li>
                            <li>
                                <Link className="block px-4 py-2 hover:bg-teal-800" to="/">
                                    Préstations
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            )}
        </>
    );
};

export default Navbar;
