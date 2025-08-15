import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer"
import Group1 from "../assets/Group1.png";
import Group2 from "../assets/Group2.png";
import Group3 from "../assets/Group3.png";

const Reservation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const timeslots = [
        "8:30 am", "8:45 am", "9:30 am", "9:40 am",
        "8:30 pm", "9:30 pm", "10:30 pm", "8:30 pm",
        "8:30 pm", "8:30 pm", "8:30 pm", "8:30 pm"
    ];

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [partySize, setPartySize] = useState("");
    const [date, setDate] = useState("");
    const [selectedSlot, setSelectedSlot] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState("");

    const handleReservation = () => {
        if (!name || !email || !phone || !partySize || !date || !selectedSlot) {
            setError("Please fill in all details and select a time slot.");
            return;
        }
        setError("");
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setName("");
        setEmail("");
        setPhone("");
        setPartySize("");
        setDate("");
        setSelectedSlot("");
    };

    return (
        <div className='relative bg-[#FCF8F5] overflow-hidden min-h-screen'>
            {/* Background Images */}
            <img src={Group1} alt="decoration" className='absolute z-0 md:bottom-[35%] bottom-[80%] left-0 w-20 md:w-40 pointer-events-none' />
            <img src={Group3} alt="decoration" className='absolute z-0 md:top-0 top-[-5%] w-24 md:w-48 pointer-events-none' />
            <img src={Group2} alt="decoration" className='absolute z-0 md:right-0 right-[-5%] md:bottom-[30%] bottom-[70%] w-20 md:w-40 pointer-events-none' />

            {/* Title */}
            <div className='flex flex-col justify-center items-center gap-3 py-10 px-4'>
                <h1 className='font-playfair font-[400] text-4xl md:text-6xl  text-[#1E2C45]'>
                    Reservation
                </h1>
                <p className='font-poppins max-w-2xl text-center text-sm md:text-base'>
                    To help us find the best table for you, select the preferred party size, date, and time
                    <br className='hidden md:block' /> of your reservation.
                </p>
            </div>

            {/* User Info Section */}
            <div className='grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto gap-6 px-4 mb-8 border-b-2 py-10'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name" className='font-semibold'>Your Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='border rounded-sm px-2 py-1'
                        placeholder="Enter your name"
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className='font-semibold'>Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='border rounded-sm px-2 py-1'
                        placeholder="Enter your email"
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="phone" className='font-semibold'>Phone No.</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className='border rounded-sm px-2 py-1'
                        placeholder="Enter your phone number"
                    />
                </div>
            </div>

            {/* Reservation Details */}
            <div className='grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto py-10 gap-6 border-b-2 px-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="party" className='font-semibold'>Party Size</label>
                    <input
                        type="text"
                        id='party'
                        value={partySize}
                        onChange={(e) => setPartySize(e.target.value)}
                        className='border rounded-sm px-2 py-1'
                        placeholder="2 guests"
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="date" className='font-semibold'>Date</label>
                    <input
                        type="date"
                        id='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className='border rounded-sm px-2 py-1'
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="time" className='font-semibold'>Time</label>
                    <input
                        type="text"
                        id='time'
                        value={selectedSlot}
                        onChange={(e) => setSelectedSlot(e.target.value)}
                        className='border rounded-sm px-2 py-1'
                        placeholder="Select from slots below"
                        readOnly
                    />
                </div>
            </div>

            {/* Time Slots */}
            <div className='max-w-4xl mx-auto px-4'>
                <h1 className='font-semibold py-5'>Choose Available Time Slot</h1>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
                    {timeslots.map((time, index) => (
                        <p
                            key={index}
                            onClick={() => setSelectedSlot(time)}
                            className={`border py-1 w-full text-center rounded-sm cursor-pointer 
                            ${selectedSlot === time ? 'bg-[#1E2C45] text-white' : 'hover:bg-gray-100'}`}
                        >
                            {time}
                        </p>
                    ))}
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <p className='text-red-500 text-center mt-4'>{error}</p>
            )}

            {/* Reservation Button */}
            <div className='flex justify-center'>
                <button
                    onClick={handleReservation}
                    className='border bg-[#1E2C45] text-white px-8 py-2 mb-20 mt-10 rounded-md font-semibold hover:bg-[#152033] transition'
                >
                    Make Reservation
                </button>
            </div>

            {/* Popup Modal */}
            {showPopup && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative text-center'>
                        <button
                            onClick={closePopup}
                            className='absolute top-2 right-3 text-gray-500 hover:text-black text-lg'
                        >
                            ×
                        </button>
                        <p className='text-lg font-bold text-[#1E2C45]'>Your reservation is secured.</p>
                        <p className='mt-2 text-gray-700'>
                            {name}, we look forward to serving you on <b>{date}</b> at <b>{selectedSlot}</b> 
                            for <b>{partySize}</b>. Confirmation will be sent to <b>{email}</b>.
                        </p>
                        <button
                            onClick={closePopup}
                            className='mt-5 px-6 py-2 bg-[#1E2C45] text-white rounded-md font-semibold hover:bg-[#152033] transition cursor-pointer'
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
            <Footer/>
        </div>
    );
};

export default Reservation;
