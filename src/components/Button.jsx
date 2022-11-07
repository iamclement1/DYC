
export default function Button (Props) {
    return (
        <button className="px-4 py-2 border border-[#5C407F] text-[#5C407F] rounded-md hover:bg-[#5C407F]
        hover:text-white transition-all duration-500 uppercase  " >
            {Props.Text}
        </button>
    )
}

