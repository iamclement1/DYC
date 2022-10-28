import Logo from '../assets/dyc.svg'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { RiFacebookCircleLine } from 'react-icons/ri';
import { IoMdMail } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoLocation } from 'react-icons/io5'

export default function Footer() {
    return (
        <div className="md:flex items-center justify-between bg-gradient-to-r from- text-[#FDFDFD] md:p-14 p-3 ">
            <div>
                <div>
                    <div className="md:flex items-center md:space-x-3">
                        <img src={Logo} alt="" className="w-[48px] " />
                        <div className="">
                            <span className="block md:text-2xl text-sm font-bold mb-0 ">
                                Diocesan Youth Department
                            </span>
                            <span className="pt-0 mt-0 md:text-sm text-xs">
                                Ibadan Anglican Diocese
                            </span>
                        </div>
                    </div>
                    <div className="md:mt-8 mb-8 text-3xl flex space-x-6">
                        <AiOutlineYoutube className="cursor-pointer" />
                        < AiOutlineInstagram className="cursor-pointer"/>
                        <RiFacebookCircleLine className="cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="md:w-2/6">
                <div className="flex items-center space-x-3 py-2">
                    <IoLocation />
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
                    <BsFillTelephoneFill />
                    <span>
                        +234 805 530 1983
                    </span>
                </div>
            </div>
        </div>
    )
}
