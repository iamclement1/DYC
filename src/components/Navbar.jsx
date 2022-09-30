import { Link } from "react-router-dom";
import Button from './Button'
import Logo from '../assets/dyc.svg'
import { useState } from "react";
import { FaBars } from 'react-icons/fa'


export default function () {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <nav className="bg-white shadow">
                <div className="flex items-center text-sm justify-between md:pr-28">
                    <div className="z-50 p-5 md:w-auto w-full flex justify-between items-center">
                        <img src={Logo} alt="brand__logo" />
                        <div className="text-2xl md:hidden items-center" onClick={() => setOpen(!open)}>
                            <FaBars name={`${open ? "close" : "menu"}`} />
                        </div>
                    </div>
                    <ul className="md:flex hidden uppercase items-center gap-8 ">
                        <li>
                            <Link to="/" className="py-7 px-3 inline-block mr-2">
                                Home
                            </Link>
                            <Link to="/" className="py-7 px-3 inline-block mr-2">
                                support us
                            </Link>
                            <Link to="/" className="py-7 px-3 inline-block mr-2">
                                about dyd
                            </Link>
                        </li>
                        <div className="md:block hidden">
                            <Button />
                        </div>
                    </ul>
                    <ul className={`
                    md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
                    duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                        <li>
                            <Link to="/" className="py-7 px-3 inline-block">
                                Home
                            </Link>
                            <Link to="/" className="py-7 px-3 inline-block">
                                Home
                            </Link>
                            <Link to="/" className="py-7 px-3 inline-block">
                                Home
                            </Link>
                        </li>
                        <div className="py-5">
                            <Button />
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
