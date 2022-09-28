import Logo from '../assets/dyc.svg'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { RiFacebookCircleLine } from 'react-icons/ri';
import { GoLocation } from 'react-icons/go';
import { IoMdMail } from 'react-icons/io';
import { FiPhoneCall } from 'react-icons/fi';

export default function Footer() {
    return (
        <div className="md:flex items-center justify-between bg-[#5C407F] text-white p-14 ">
            <div>
                <div>
                    <div className="flex items-center space-x-3">
                        <img src={Logo} alt="" className="w-[48px] " />
                        <div className="">
                            <span className="block text-2xl font-bold mb-0">
                                Diocesan Youth Department
                            </span>
                            <span className="pt-0 mt-0">
                                Ibadan Anglican Diocese
                            </span>
                        </div>
                    </div>
                    <div className="mt-8 text-3xl flex space-x-6">
                        <AiOutlineYoutube />
                        < AiOutlineInstagram />
                        <RiFacebookCircleLine />
                    </div>
                </div>
            </div>
            <div className="w-2/6">
                <div className="flex items-center space-x-3 py-2">
                    <GoLocation />
                    <span>
                        No. 3, Arigidi Street, Old Bodija,
                        Ibadan, Oyo State.
                    </span>
                </div>
                <div className="flex items-center space-x-3 py-2">
                    <IoMdMail />
                    <span>
                        dydibadan@gmail.com
                    </span>
                </div>
                <div className="flex items-center space-x-3 py-2">
                    <FiPhoneCall />
                    <span>
                        +234 805 530 1983
                    </span>
                </div>
            </div>
        </div>
    )
}
