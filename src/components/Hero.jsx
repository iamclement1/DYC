import IMG1 from '../assets/hero.png'
import Button from './Button'

export default function Hero() {
    return (
        <div className="md:mt-12 lg:mt-12 xl:mt-12 mt-20 md:py-32 py-6 hero h-screen text-center text-white">
            <div className="md:py-32 py-6 mb-0" >
                <h2 className="md:text-5xl text-md font-bold uppercase md:mb-6 ">
                    diocesan youth department
                </h2>
                <span className=" md:py-6 text-center text-white md:text-2xl text-sm font-semibold uppercase block">
                    #dyc'22
                </span>
                <button className="bg-[#ff9500] px-3 py-2 text-sm rounded-sm text-white  uppercase
                            hover:bg-[#eea135] hover:border hover:text-white transition ease-in-out duration-300 "
                    onClick={() => window.location.href = "https://forms.gle/BeJidbUiXhbLpcDU9"}>
                    register
                </button>

            </div>
        </div>
    )
}

// top-28