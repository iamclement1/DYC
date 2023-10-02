import Bishop from '../assets/DYC_Day4-90.webp'
export default function AboutDYD() {
    return (
        <>
            <section id='about-dyd'>
                <div className="md:w-5/6 mx-auto mt-6">
                    <img src={Bishop} alt="Bishop__Image" />
                    <h3 className="text-[#5C407F] md:text-2xl text-md text-center mt-4 font-semibold uppercase">
                        About the diocesan youth department
                    </h3>
                    <p className="text-center text-gray-600 mt-3 md:w-5/6 w-5/6  md:text-[20px] text-[12px] md:leading-loose leading-6 opacity-60 mx-6">
                        The Diocesan Youth Department (DYD) is the youth arm of the Ibadan Anglican Diocese, Church of Nigeria. In 1996, the organization was founded to provide opportunities for fellowship, leadership, and service to young people.
                    </p>
                    <div className="md:flex justify-center md:space-x-6 mb-24">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4">
                            <div className="p-12 pt-4 pb-2">
                                <h3 className="text-3xl text-gray-400 text-center p-4 font-semibold uppercase ">
                                    Vision
                                </h3>
                                <p className="text-sm  text-gray-500 text-center mb-4">
                                    DYD is an organization dedicated to spreading the gospel of Jesus Christ through preaching and teaching, as well as by example.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4">
                            <div className="p-12 pt-4 pb-2">
                                <h3 className="text-3xl text-gray-400 text-center p-4 font-semibold uppercase ">
                                    Mission
                                </h3>
                                <p className="text-sm  text-gray-500 text-center mb-4">
                                It is the mission of DYD to provide young people with a sense of themselves, their values, their spirituality, and the skills they need to serve, advocate, and lead.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}