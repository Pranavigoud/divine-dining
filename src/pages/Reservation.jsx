import React from 'react'
import Group1 from "../assets/Group1.png"
import Group2 from "../assets/Group2.png"
import Group3 from "../assets/Group3.png"
import Group4 from "../assets/Group4.png"

const Reservation = () => {
    const timeslots = [
        "8:30pm","8:45pm","8:50pm","8:40pm","8:45pm","8:46pm",
        "8:45pm","8:45pm","8:45pm","8:45pm","8:45pm","8:45pm"
    ]

    return (
        <div className='relative bg-[#FCF8F5] overflow-hidden'>
            {/* Background Images */}
            <img src={Group1} alt="" className='absolute z-0 bottom-5 left-0 w-28 md:w-40' />
            <img src={Group3} alt="" className='absolute z-0 top-0 w-32 md:w-48' />
            <img src={Group2} alt="" className='absolute z-0 right-0 bottom-0 w-28 md:w-40' />

            {/* Title & Description */}
            <div className='flex flex-col justify-center items-center gap-3 py-10 px-4'>
                <h1 className='font-playfair font-[400] text-4xl md:text-6xl italic text-[#1E2C45]'>
                    Reservation
                </h1>
                <p className='font-poppins max-w-2xl text-center text-sm md:text-base'>
                    To help us find the best table for you, select the preferred party size, date, and time
                    <br className='hidden md:block' /> of your reservation.
                </p>
            </div>

            {/* Form Section */}
            <div className='grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto py-10 gap-6 border-b-2 px-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="party" className='font-semibold'>Party Size</label>
                    <input type="text" id='party' className='border rounded-sm px-2 py-1' placeholder="guests" />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="date" className='font-semibold'>Date</label>
                    <input type="text" id='date' className='border rounded-sm px-2 py-1' placeholder="date" />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="time" className='font-semibold'>Time</label>
                    <input type="text" id='time' className='border rounded-sm px-2 py-1' placeholder="time" />
                </div>
            </div>

            {/* Time Slots */}
            <div className='max-w-4xl mx-auto px-4'>
                <h1 className='font-semibold py-5'>Choose Available Time Slot</h1>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
                    {timeslots.map((time, index) => (
                        <p
                            key={index}
                            className='border py-1 w-full text-center rounded-sm hover:bg-gray-100 cursor-pointer'
                        >
                            {time}
                        </p>
                    ))}
                </div>
            </div>

            {/* Reservation Button */}
            <div className='flex justify-center'>
                <button className='border bg-[#1E2C45] text-white px-8 py-2 mb-20 mt-10 rounded-md font-semibold hover:bg-[#152033] transition'>
                    Make Reservation
                </button>
            </div>
        </div>
    )
}

export default Reservation
