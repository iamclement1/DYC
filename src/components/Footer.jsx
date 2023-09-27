import Logo from '../assets/DiocesanLogo.svg'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { RiFacebookCircleLine } from 'react-icons/ri';
import { IoMdMail } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoLocation } from 'react-icons/io5'

export default function Footer() {
    return (
        <div className="md:flex items-center justify-between 
        bg-gradient-to-r from-rose-900 via-fuchsia-900 to-purple-900 text-[#FDFDFD] md:p-14 p-12 ">
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
                </div>
            </div>
            <div className="md:w-2/6">
                <div className="flex items-center space-x-3 py-2">
                    <IoLocation />
                    <span className="md:tex-sm text-xs">
                        No. 3, Arigidi Street, Old Bodija,
                        Ibadan, Oyo State.
                    </span>
                </div>
                <div className="flex items-center space-x-3 py-2">
                    <IoMdMail />
                    <span className="md:tex-sm text-xs">
                        dydibadan@gmail.com
                    </span>
                </div>
                <div className="flex items-center space-x-3 py-2">
                    <BsFillTelephoneFill />
                    <span className="md:tex-sm text-xs">
                        +234 805 530 1983
                    </span>
                </div>
            </div>
            <div>
                <div className="md:mt-8 mb-8 text-3xl md:space-y-6 md:block flex space-x-4 md:space-x-0">
                    <AiOutlineYoutube className="cursor-pointer" 
                    onClick={() => window.location.href="https://www.youtube.com/channel/UCCALjWw_P1zr39vo4qnP94g"} />
                    < AiOutlineInstagram className="cursor-pointer" 
                    onClick={() => window.location.href="https://www.instagram.com/dydibadan/"} />
                    <RiFacebookCircleLine className="cursor-pointer" 
                    onClick={() => window.location.href="https://web.facebook.com/DYDIbadan/"} />
                </div>
            </div>
        </div>
    )
}
