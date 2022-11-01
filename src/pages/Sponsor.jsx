export default function Sponsor() {

    return (
        <>
            <h3 className="text-center text-[#5C407F] text-3xl font-bold mt-20 uppercase">Support us</h3>
            <div className="w-5/6 md:w-4/6 mx-auto">
                <p className="md:text-md text-sm text-center mt-4">
                    To make the Diocesan Youth Convention (DYC) as affordable and accessible as possible for young people that lack the necessary funds to attend, we have created our financial aid fund, which is used every year in an attempt to make sure that no youth is unable to attend due to financial constraints.
                </p>
                <p className="md:text-md text-sm text-center mt-4">
                    Your donation to the Diocesan Youth Department would be greatly appreciated. We will use these donations to fund the DYC, provide additional programming at DYC, and pay for other program expenses.
                </p>
            </div>
            <div className="md:w-4/6 w-5/6 mx-auto">
                <h3 className="text-[#5C407F] mt-6 font-semibold text-xl">
                    Donor's Information
                </h3>
                <form action="">
                    <div className="block mt-4">
                        <label htmlFor="name" className="block mb-2">Name</label>
                        <input type="text" name="name" placeholder="Enter your name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="md:flex md:space-x-12">
                        <div className="w-full mt-4 mb-4">
                            <div className="flex md:space-x-60 space-x-20 items-center mb-2">
                                <label htmlFor="Phone md:text-md text-xs">Phone Number</label>
                                <span className="text-gray-400 text-xs text-right">Optional</span>
                            </div>
                            <input type="number" name="phone" placeholder="0800 000 0000"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                        </div>
                        <div className="w-full justify-end mt-4">
                            <div className="flex md:space-x-60 space-x-20 items-center mb-2">
                                <label htmlFor="Phone md:text-md text-xs">Phone Number</label>
                                <span className="text-gray-400 text-xs">Optional</span>
                            </div>
                            <input type="text" name="name" placeholder="Enter your name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-6 mb-4">
                        <div className="text-sm text-gray-500">
                            <input type="checkbox" /> Donate anonymously
                        </div>
                        <button className="bg-[#5C407F] text-white p-2 rounded-sm ">Donate</button>
                    </div>
                </form>
            </div>
        </>
    )
}