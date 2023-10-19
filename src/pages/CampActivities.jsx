import { Fade } from 'react-awesome-reveal';
import { CampActivities } from '../util/activities';


export default function CampActivity() {
    return (
        <section className=" relative -z-10">

            <h3 className="mt-6 mb-6 uppercase text-gray-500 text-center text-xl font-semibold">
                Camp Activities
            </h3>
            <Fade direction="up" triggerOnce cascade>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-6 md:px-12 px-4">
                    {
                        CampActivities.map((activities) => (
                            <div key={activities.id} className='flex flex-col gap-2 items-center justify-center bg-white rounded-lg shadow-md p-4'>
                                <img src={activities.img} alt={activities.title} className='w-12 h-12' />
                                <span className='text-center text-xs'>
                                    {activities.title}
                                </span>
                            </div>
                        ))
                    }

                </div>


            </Fade>


            <main>
                <div>
                    <h3 className="mt-6 mb-2 uppercase text-gray-500 text-center md:text-xl text-sm font-semibold">
                        Theme:
                    </h3>
                    <h2 className="text-[#5C407F] text-center md:text-3xl text-xl font-bold">
                        Abundance
                    </h2>
                </div>
                <div>
                    <h3 className="mt-6 mb-2 uppercase text-gray-500 text-center md:text-xl text-sm  font-semibold">
                        Date:
                    </h3>
                    <h2 className="text-[#5C407F] text-center md:text-3xl text-xl font-bold">
                        17 - 20 December, 2023
                    </h2>
                </div>
                <div>
                    <h3 className="mt-6 mb-2 uppercase text-gray-500 text-center md:text-xl text-sm font-semibold">
                        Venue:
                    </h3>
                    <h2 className=" mx-auto md:w-3/6 text-[#5C407F] text-center md:text-3xl text-xl font-bold">
                        ...TO BE UPDATED
                    </h2>
                </div>
            </main>
        </section>
    )
}