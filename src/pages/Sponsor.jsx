import { FlutterWaveButton, closePaymentModal, useFlutterwave } from "flutterwave-react-v3"
import { useState } from "react"
export default function Sponsor() {

    const [amount, setAmount] = useState(0);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const config = {
        public_key: 'FLWPUBK_TEST-6712fed870fe318eae2d81de96bf8b73-X',
        tx_ref: Date.now(),
        amount: amount,
        currency: 'NGN',
        payment_options: 'card, mobilemoney,ussd',
        customer: {
            email: email,
            name: name,
            phone_number: phone,
        },
        customization: {
            title: 'Support DYC 2022',
            description: 'Support DYC 2022',
            logo: ''
        },

    };
    const handleFlutterPayment = useFlutterwave(config);

    return (
        <div id="sponsor">
            <hr className="w-5/6 mx-auto mt-6 " />
            <h3 className="text-center text-[#5C407F] md:text-3xl text-xl font-bold mt-8 uppercase">Support us</h3>
            <div className="w-5/6 md:w-4/6 mx-auto ">
                <p className="md:text-[20px] text-sm text-center mt-4 leading-loose opacity-60">
                    To make the Diocesan Youth Convention (DYC) as affordable and accessible as possible
                    for young people that lack the necessary funds to attend, we have created our
                    financial aid fund, which is used every year in an attempt to make sure that no
                    youth is unable to attend due to financial constraints.
                </p>
                <p className="md:text-[20px] text-sm text-center mt-4  leading-loose opacity-60">
                    Your donation to the Diocesan Youth Department would be greatly appreciated.
                    We will use these donations to fund the DYC, provide additional programming at DYC, and pay for other program expenses.
                </p>
            </div>
            <hr className="m-6 w-3/6 mx-auto" />

            <div className="md:w-4/6 w-5/6 mx-auto text-center">
                {/* <h3 className="text-[#5C407F] mt-6 font-semibold text-xl">
                    Donor's Information
                </h3> */}
                {/* <div className="container">
                    <div className="block mt-4">
                        <label htmlFor="name" className="block mb-2 text-start">Name</label>
                        <input type="text" placeholder="Enter your name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                            dark:bg-gray-400 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white
                            dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="md:flex md:space-x-12">
                        <div className="w-full mt-4 mb-4">
                            <div className="flex md:space-x-60 space-x-20 items-center mb-2">
                                <label htmlFor="Phone md:text-md text-xs">Phone Number</label>

                            </div>
                            <input type="text" placeholder="0800 000 0000"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400
                                dark:border-gray-400 dark:placeholder-gray-400 dark:text-white
                                dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) => setPhone(e.target.value)} />

                        </div>
                        <div className="w-full justify-end mt-4">
                            <div className="flex md:space-x-60 space-x-20 items-center mb-2">
                                <label htmlFor="Phone md:text-md text-xs">Email Address</label>
                            </div>
                            <input type="text" placeholder="Enter your email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400
                            dark:border-gray-400 dark:placeholder-gray-400 dark:text-white 
                            dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="w-full justify-end mt-4">
                            <div className="flex md:space-x-60 space-x-20 items-center mb-2">
                                <label htmlFor="Phone md:text-md text-xs">Amount</label>
                            </div>
                            <input type="number" placeholder="Enter Amount"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400
                            dark:border-gray-400 dark:placeholder-gray-400 dark:text-white 
                            dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) => setAmount(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-6 mb-4">
                        <div className="md:text-sm text-xs text-gray-500">
                            <input type="checkbox" /> Donate anonymously
                        </div>
                        <button className="bg-[#5C407F] text-white p-2 rounded-sm "
                            onClick={() =>
                                handleFlutterPayment({
                                    callback: (response) => {
                                        console.log(response);
                                        closePaymentModal();
                                    },
                                    onClose: () => { },
                                })
                            }>Donate</button>
                    </div>
                </div> */}

                <span className="text-[20px] mt-5 text-gray-600">
                    If you would like to make a transfer, you can send your donations to the account provided below 👇.
                </span>
                <div className="mt-8">
                    <div>
                        <span className="md:text-xl text-sm  opacity-60 uppercase">account number</span>
                        <h3 className="text-[20px] text-[#5C407F] font-semibold">
                            2031428004
                        </h3>
                    </div>
                    <div className="my-3">
                        <span className="md:text-xl text-sm  text-gray-600 uppercase">account Name</span>
                        <h3 className="text-[20px] text-[#5C407F] font-semibold">
                            DIOCESAN YOUTH DEPARTMENT
                        </h3>
                    </div>
                    <div>
                        <span className="md:text-xl text-sm  text-gray-600 uppercase">BANK NAME</span>
                        <h3 className="text-xl text-[#5C407F] font-semibold uppercase">
                            first Bank
                        </h3>
                    </div>

                </div>
            </div>
        </div>
    )
}