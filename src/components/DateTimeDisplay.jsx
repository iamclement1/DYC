
const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
        <>
            <div className={`isDanger ? 'countdown danger' : 'countdown' mx-auto text-center bg-white p-8 md:w-1/5 w-2/6`}>
                <p className="bg-white text-[#5C407F]">{value}</p>
                <span className="bg-white text-sm font-semibold text-gray-700 uppercase">{type}</span>
            </div>
        </>
    );
};

export default DateTimeDisplay;
