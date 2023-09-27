

export default function Hero() {
    return (
        <div className=" md:py-32 py-6 hero h-screen text-center text-white">
            <div className="md:py-60 py-6 mb-0" >
                <h1 className="md:text-3xl text-md font-bold uppercase md:mb-7">
                    Welcome to
                </h1>
                <h2 className="md:text-6xl text-md font-bold uppercase md:mb-6 ">
                    diocesan youth department
                </h2>
                <span className=" md:py-6 text-center text-white md:text-2xl text-sm font-semibold uppercase block">
                    #dyc'23
                </span>
                <a href="https://forms.gle/PTanyCkFyWJ5ptqS7" target="_blank">
                    <button className="bg-[#ff9500] px-3 py-2 text-sm rounded-sm text-white  uppercase
                            hover:bg-[#eea135] hover:border hover:text-white transition ease-in-out duration-300 ">
                        register
                    </button>
                </a>
            </div>
        </div>
    )
}

// onClick = {() => window.location.href = "https://forms.gle/PTanyCkFyWJ5ptqS7"}

// top-28