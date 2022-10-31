import Countdown from '../components/Countdown'


export default function Timer() {
    const THREE_DAYS_IN_MS = 118 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    return (
        <div className="">
            <h1>Countdown Timer</h1>
            <Countdown targetDate={dateTimeAfterThreeDays} />
        </div>
    );
}
