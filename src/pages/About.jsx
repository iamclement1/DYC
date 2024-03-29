import Img from '../assets/DYC2.jpeg'

export const About = () => {
    return (
        <main id='about'>
            <div className="mx-auto text-center mt-0 py-0" id="about" >
                <h1 className="md:mt-12 text-[#5C407F] uppercase font-bold md:text-4xl text-xl">
                    About dyc '23
                </h1>
                <img src={Img} alt="About-Us-Image" className="mx-auto md:mt-8 mt-6 mb-6 md:w-[75%] w-[95%]" />
                <div className=" mx-auto  w-6/6 md:w-4/6 ">
                    <p className="md:text-[20px] text-[12px] md:leading-loose leading-6 opacity-60 mx-4">
                        Diocesan Youth Convention (DYC) is an annual camp meeting organized by the Diocesan Youth Department of the Ibadan Anglican Diocese. It has provided unique spiritual learning opportunities since 2000 for Christian youths.
                    </p>
                    <p className="md:text-[20px] text-[12px] md:leading-loose leading-6 opacity-60 py-4 mx-6">
                        A 4-day camp meeting for youth will be offered this year by DYC, designed specifically to help them develop the faith they need to face today's challenges. <b>From 17th - 20th December</b>, the convention will be held at <b>Comfort Akinfenwa Event Center & Chalet, Molete, Ibadan, Nigeria</b>.
                    </p>
                    <p className="md:text-[20px] text-[12px] md:leading-loose leading-6 opacity-60 mx-6">
                        The DYC provides campers with the opportunity to explore their faith, develop their relationship with God, and form friendships with other young people.
                    </p>

                </div>
            </div>
        </main>
    )
}