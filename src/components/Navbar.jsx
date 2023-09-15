import { Link } from "react-router-dom";
import Button from './Button'
import Logo from '../assets/Diocesan-Logo.svg'
import { useState } from "react";
import { FaBars } from 'react-icons/fa'


export default function () {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <nav className="bg-white shadow-md fixed inset-x-0 top-0 z-10 w-full mb-5 ">
                <div className="flex items-center text-sm justify-between md:pr-20">
                    <div className="z-50 p-3 md:w-auto w-full flex justify-between items-center">
                        <img src={Logo} alt="brand__logo" className="md:ml-12 
                        md:w-full w-1/5 border border-radius border-purple-600 rounded-full"/>
                        <div className="text-2xl md:hidden items-center" onClick={() => setOpen(!open)}>
                            <FaBars name={`${open ? "close" : "menu"}`} />
                        </div>
                    </div>
                    <ul className="md:flex  font-semibold hidden uppercase items-center md:mr-6">
                        <li>
                            <a href="#about" className="py-7 px-3 inline-block md:mr-4 hover:text-[#5C407F]">
                                about dyc 22
                            </a>
                            <a href="#sponsor" className="py-7 px-3 inline-block md:mr-4 hover:text-[#5C407F]">
                                support us
                            </a>
                            <a href="#about-dyd" className="py-7 px-3 inline-block md:mr-4 hover:text-[#5C407F]">
                                about dyd
                            </a>
                            <a href="#speakers" className="py-7 px-3 inline-block md:mr-4 hover:text-[#5C407F]">
                                meet our ministers
                            </a>
                        </li>
                        {/* <div className="md:flex md:space-x-7 hidden">
                            <Button Text="Donate" />
                            
                        </div> */}
                    </ul>
                    <ul className={`
                    md:hidden bg-white fixed uppercase w-full top-0 overflow-y-auto bottom-0 py-24 md:px-4
                    duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                        <li className="">
                            <a href="#about" className="py-3 hover:text-[#5C407F] px-12 inline-block">
                                about dyc 22
                            </a>
                        </li>
                        <li className="">
                            <a href="#sponsor" className="py-3 hover:text-[#5C407F] px-12 inline-block">
                                support us
                            </a>
                        </li>
                        <li className="">
                            <a href="#about-dyd" className="py-3 hover:text-[#5C407F] px-12 inline-block">
                                about dyd
                            </a>
                        </li>
                        <li className="">
                            <a href="#speakers" className="py-3 hover:text-[#5C407F] px-12 inline-block">
                                meet our ministers
                            </a>
                        </li>
                        {/* <div className="px-12 py-5">
                            <Button Text="Donate" />
                        </div> */}

                    </ul>
                </div>
            </nav>
        </div>
    )
}
