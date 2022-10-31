import Countdown from '../components/Countdown'


export default function Timer() {
    const THREE_DAYS_IN_MS = 118 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    return (
        <div className="mt-5">

            <Countdown targetDate={dateTimeAfterThreeDays} />
            <div className="flex justify-center">
                <button className="bg-[#5C407F] p-3 rounded-sm text-white mt-4 mb-4 uppercase">register</button>
            </div>
        </div>
    );
}
