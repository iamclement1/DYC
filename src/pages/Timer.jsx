import React, { useEffect, useState } from 'react';

const Timer = ({ eventDate }) => {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function calculateTimeRemaining() {
        const now = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
        const timeDifference = eventTime - now;

        if (timeDifference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }

    return (
        <div>
            <div className='bg-gradient-to-r from-fuchsia-600 to-purple-900 p-12 mt-8'>
                <div className="flex items-center justify-center md:gap-12 gap-1  ">
                    <div className='md:w-[249px] w-[80px] flex flex-col items-center bg-white md:p-12 md:px-0 md:py-0 px-7 py-5'>
                        <span className='md:text-5xl text-2xl text-[#5C407F] md:pb-4 font-bold' >{timeRemaining.days} </span>
                        <span className='md:text-xl text-sm'>Days</span>
                    </div>
                    <span className='font-bold md:text-5xl text-md text-white '>:</span>
                    <div className='md:w-[249px] w-[80px] flex flex-col items-center bg-white md:p-12 md:px-0 md:py-0 px-7 py-5'>
                        <span className='md:text-5xl text-2xl text-[#5C407F] md:pb-4 font-bold' >{timeRemaining.hours} </span>
                        <span className='md:text-xl text-sm'>Hours</span>
                    </div>
                    <span className='font-bold md:text-5xl text-md text-white '>:</span>

                    <div className='md:w-[249px] w-[80px] flex flex-col items-center bg-white md:p-12 p-5'>
                        <span className='md:text-5xl text-2xl text-[#5C407F] md:pb-4 font-bold' >{timeRemaining.minutes}</span>
                        <span className='md:text-xl text-sm'>Minutes</span>
                    </div>
                    <span className='font-bold md:text-5xl text-md text-white '>:</span>


                    <div className='md:w-[249px] w-[80px] flex flex-col items-center bg-white md:p-12 p-5'>
                        <span className='md:text-5xl text-2xl text-[#5C407F] md:pb-4 font-bold' >{timeRemaining.seconds} </span>
                        <span className='md:text-xl text-sm'>Seconds</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timer;
