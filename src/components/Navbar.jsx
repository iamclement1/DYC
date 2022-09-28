import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'


export default function Navbar() {

    const [showNav, setShowNav] = useState(false);
    return (
        <div>
            <nav className="md:px-16 px-5 py-6 shadow bg-white md:flex items-center justify-between">
                <div>
                    <Link to="/">
                        <span className="text-2xl font-bold cursor-pointer">
                            DYC
                        </span>
                    </Link>
                </div>
                <div className="md:flex md:items-center md:space-x-12">
                    <ul className="md:flex md:px-5 md:space-x-8 uppercase text-sm">
                        <li className="hover:text-[#5C407F] duration-500">
                            <Link to="/">
                                About dyc 22
                            </Link>
                        </li>
                        <li className="hover:text-[#5C407F] duration-500">
                            <Link to="/">
                                Support us
                            </Link>
                        </li>
                        <li className="hover:text-[#5C407F] duration-500">
                            <Link to="/">
                                about dyd
                            </Link>
                        </li>
                    </ul>

                    <button className="text-[#5C407F] uppercase text-sm border border-[#5C407F] rounded px-6
                    py-2 hover:bg-[#5C407F] hover:text-white transition-all duration-500">
                        Donate
                    </button>
                </div>
            </nav>
        </div>
    )
}
