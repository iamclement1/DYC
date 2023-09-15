import Img from '../assets/dyc2.png'

export const About = () => {
    return (
        <main id='about'>
            <div className="mx-auto text-center mt-0 py-0" id="about" >
                <h1 className="md:mt-12 text-[#5C407F] uppercase font-bold md:text-4xl text-xl">
                    About dyc '22
                </h1>
                <img src={Img} alt="About-Us-Image" className="mx-auto md:mt-8 mt-6 mb-6 md:w-[75%] w-[85%]" />
                <div className=" mx-auto  w-5/6 md:w-3/6">
                    <p className="md:text-md text-sm leading-loose">
                        Diocesan Youth Convention (DYC) is an annual camp meeting organized by the Diocesan Youth Department of the Ibadan Anglican Diocese. It has provided unique spiritual learning opportunities since 2000 for Christian youths.
                    </p>
                    <p className="md:text-md text-sm leading-loose py-8">
                        A 4-day camp meeting for youth will be offered this year by DYC, designed specifically to help them develop the faith they need to face today's challenges. From 18th to 22nd December, the convention will be held at the United Missionary Comprehensive College (UMCC), Molete, Ibadan, Nigeria.
                    </p>
                    <p className="md:text-md text-sm leading-loose">
                        The DYC provides campers with the opportunity to explore their faith, develop their relationship with God, and form friendships with other young people.
                    </p>

                </div>
            </div>
        </main>
    )
}