import React from 'react'
import { data } from './data';
import Profile2 from '../assets/Profile2.png';

function WhyHireMe() {
    return (
        <div className="flex flex-col md:flex-row items-center p-8 md:p-12 mx-auto gap-10 mt-10">
            <div className="flex justify-center items-end w-full h-[380px] md:w-[50%] relative">
                <div className='h-60 w-60  bg-orange-500/70 rounded-xl'>
                    <img
                        src={Profile2}
                        alt="Developer Character"
                        className="absolute bottom-0 left-2  h-full w-full rounded-2xl"
                    />
                </div>
            </div>

            <div className="w-full md:w-[50%]">
                <h2 className="text-3xl font-bold mb-4">
                    Why <span className="text-orange-500">Hire me</span>?
                </h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    {data?.whyHireMe}
                </p>

                <div className="mb-6">
                    <h3 className="text-2xl font-bold">{data?.ProjectsCompleted}+</h3>
                    <p className="text-sm text-gray-500">Projects Completed</p>
                </div>

                <button className="border border-black text-black px-6 py-3 rounded-xl hover:text-white hover: hover:bg-black transition duration-300">
                    Hire me
                </button>
            </div>
        </div>
    )
}

export default WhyHireMe
