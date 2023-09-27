import HeroImage from '../assets/DYC3.jpeg';
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <div className="relative md:py-32 py-6 h-screen text-center text-white">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${HeroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Black Overlay */}
                <div
                    className="absolute inset-0 bg-black opacity-50" />
            </div>

            {/* Content */}
            <div className="md:py-60 py-72 mb-0 relative z-10">
                <h1 className="md:text-3xl text-2xl font-bold uppercase md:mb-7">
                    Welcome to
                </h1>
                <h2 className="md:text-6xl text-4xl font-bold uppercase md:mb-6 md:py-0 py-6">
                    diocesan youth department
                </h2>
                <span className="md:py-6 py-8 text-center text-white md:text-2xl text-sm font-semibold uppercase block">
                    #dyc'23
                </span>
                <motion.div
                    whileTap={{ scale: 0.6 }}>
                    <a href="https://forms.gle/PTanyCkFyWJ5ptqS7" target="_blank">
                        <button className="bg-[#ff9500] px-3 py-2 text-sm rounded-sm text-white uppercase hover:bg-[#eea135] hover:border-none hover:text-black transition ease-in-out duration-300">
                            register
                        </button>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}


// onClick = {() => window.location.href = "https://forms.gle/PTanyCkFyWJ5ptqS7"}

// top-28