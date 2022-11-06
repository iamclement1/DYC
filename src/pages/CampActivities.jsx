import Fellowship from '../assets/ceremony-1.png';
import Studying from '../assets/studying-1.png';
import Sport from '../assets/football-1.png';
import Communion from '../assets/holy-chalice-1.png';
import Activities from '../assets/activities-1.png';
import Prayer from '../assets/pray-1.png';
import Worship from '../assets/hands-1.png';
import Fun from '../assets/laugh-1.png';
import { Fade } from 'react-awesome-reveal';


export default function CampActivity() {
    return (
        <section className=" relative -z-10">

            <h3 className="mt-6 mb-6 uppercase text-gray-500 text-center text-xl font-semibold">
                Camp Activities
            </h3>
            <Fade direction="up" cascade>
                <div className="mx-auto md:w-3/4 md:flex px-6 py-4 md:px-0 md:py-0 justify-between overflow-hidden ">
                    <div className="md:mb-0 mb-4 text-center items-center shadow-md p-4 ">
                        <img src={Fellowship} alt="Fellowship-logo" className="w-2/6 mx-auto mt-2" />
                        <p className="uppercase text-sm w-2/5 mx-auto py-2 font-semibold text-gray-600">
                            daily Fellowship
                        </p>
                    </div>
                    <div className="md:mb-0 mb-4 text-center items-center shadow-md p-4">
                        <img src={Studying} alt="Fellowship-logo" className="w-2/6 mx-auto mt-2" />
                        <p className="uppercase text-sm w-3/6 mx-auto py-2 font-semibold text-gray-600">
                            daily bible classes
                        </p>
                    </div>
                    <div className="md:mb-0 mb-4 text-center items-center shadow-md p-4 px-auto">
                        <img src={Sport} alt="Fellowship-logo" className="w-2/6 mx-auto mt-2" />
                        <p className="uppercase text-sm w-2/5 mx-auto py-2 font-semibold text-gray-600">
                            sports
                        </p>
                    </div>
                    <div className="md:mb-0 mb-4 text-center items-center shadow-md p-4">
                        <img src={Communion} alt="Fellowship-logo" className="w-2/6 mx-auto mt-2" />
                        <p className="uppercase text-sm w-4/6 mx-auto py-2 font-semibold text-gray-600">
                            an inspiring communion service
                        </p>
                    </div>
                </div>

                <div className="mx-auto md:w-3/4 md:flex px-6 py-4 md:px-0 md:py-0 justify-between overflow-hidden md:mt-5 mt-2 ">
                    <div className="md:mb-0 mb-4 text-center items-center shadow-md p-4 ">
                        <img src={Activities} alt="Fellowship-logo" className="w-2/6 mx-auto mt-2" />
                        <p className="uppercase text-sm w-2/5 mx-auto py-2 font-semibold text-gray-600">
                            platoon activities
                        </p>
                    </div>
                    <div className="md:mb-0 mb-4 text-center items-center shadow-md p-4">
                        <img src={Prayer} alt="Fellowship-logo" className="w-2/6 mx-auto mt-2" />
                        <p className="uppercase text-sm w-3/6 mx-auto py-2 font-semibold text-gray-600">
                            corporate devotions
                        </p>
                    </div>
                    <div className="md:mb-0 mb-4 text-center items-center shadow-md p-4 px-auto">
                        <img src={Worship} alt="Fellowship-logo" className="w-2/6 mx-auto mt-2" />
                        <p className="uppercase text-sm w-3/5 mx-auto py-2 font-semibold text-gray-600">
                            worship & prayers
                        </p>
                    </div>
                    <div className="md:mb-0 mb-4 text-center items-center shadow-md p-4">
                        <img src={Communion} alt="Fellowship-logo" className="w-2/6 mx-auto mt-2" />
                        <p className="uppercase text-sm w-4/6 mx-auto py-2 font-semibold text-gray-600">
                            an inspiring communion service
                        </p>
                    </div>
                </div>

            </Fade>


            <main>
                <div>
                    <h3 className="mt-6 mb-2 uppercase text-gray-500 text-center text-xl font-semibold">
                        Theme:
                    </h3>
                    <h2 className="text-[#5C407F] text-center md:text-3xl text-xl font-bold">
                        A Peculiar Youth
                    </h2>
                </div>
                <div>
                    <h3 className="mt-6 mb-2 uppercase text-gray-500 text-center text-xl font-semibold">
                        Date:
                    </h3>
                    <h2 className="text-[#5C407F] text-center md:text-3xl text-xl font-bold">
                        December 18 - 21, 2022
                    </h2>
                </div>
                <div>
                    <h3 className="mt-6 mb-2 uppercase text-gray-500 text-center text-xl font-semibold">
                        Venue:
                    </h3>
                    <h2 className=" mx-auto md:w-3/6 text-[#5C407F] text-center md:text-3xl text-xl font-bold">
                        United Missionary Comprehensive College, Molete, Ibadan
                    </h2>
                </div>
            </main>
        </section>
    )
}