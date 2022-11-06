import IMG1 from '../assets/hero.png'

export default function Hero() {
    return (
        <div>
            <div className="">
                <img src={IMG1} alt="" className="md:py-0 py-12 mb-0" />
            </div>
            {/* <div className="absolute md:bottom-36  text-center md:text-4xl text-xl text-white font-bold uppercase border border-red-100 w-full">
                <h2>
                    Diocesan Youth Convention
                </h2>
                <span className="md:text-xl text-sm block">
                    #dyc
                </span>

            </div>
            <button className="absolute bottom-36 bg-[#5C407F] px-5 py-2 rounded-sm text-white  uppercase
                            hover:bg-white hover:border hover:border-[#5C407F] hover:text-[#5C407F]
                            transition ease-in-out duration-300 "
                onClick={() => window.location.href = "https://forms.gle/BeJidbUiXhbLpcDU9"}>
                register
            </button> */}
        </div>
    )
}

// top-28