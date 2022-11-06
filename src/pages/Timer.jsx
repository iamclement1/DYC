// import Countdown from '../components/Countdown'

import { useState, useEffect } from "react";
import { getRemainingTimestamp } from "../util/timerCountdown"; 

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}


export default function Timer({countdownTimestampMs}) {
    const [ remainingTime, setRemainingTime ] = useState(defaultRemainingTime)
    

    useEffect(() =>{
        // creates an interval that is executed every seconds
        const intervalId  = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000)
        return () => clearTimeout(intervalId) //stops interval
    }, [countdownTimestampMs])

    // creates a function that is called everytime to update the timer
    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimestamp(countdown))
    }

    return (
        <section className="bg-[#5C407F] p-12 mt-8">
        <div className=" text-4xl text-center text-white">
            <span className=""> {remainingTime.days} </span>
            <span className=""> days </span>
            <span> :</span>
            <span> {remainingTime.hours} </span>
            <span> hours </span>
            <span>:</span>
            <span> {remainingTime.minutes} </span>
            <span> minutes </span>
            <span>:</span>
            <span> {remainingTime.seconds} </span>
            <span> seconds </span>
        </div>
        </section>
    )
}


// export default function Timer() {
//     const THREE_DAYS_IN_MS = 118 * 24 * 60 * 60 * 1000;
//     const NOW_IN_MS = new Date().getTime();

//     const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

//     return (
//         <div className="mt-5">

//             <Countdown targetDate={dateTimeAfterThreeDays} />
//             <div className="flex justify-center">
//                 <button className="bg-[#5C407F] p-3 rounded-sm text-white mt-16 mb-4 uppercase"
//                     onClick={() => window.location.href = "https://forms.gle/BeJidbUiXhbLpcDU9"}>
//                     register
//                 </button>
//             </div>
//         </div>
//     );
// }