import React from 'react'
import { data } from './data';
import Profile2 from '../assets/Profile2.png';

function WhyHireMe() {
    return (
        <div id='about' className="flex flex-col md:flex-row items-center  md:p-12 mx-auto gap-4 md:gap-10 py-5">
            <div className="flex justify-center items-end w-full h-[300px] lg:h-[380px] md:w-[50%] relative">
                <div className='h-50 w-50 md:h-60 md:w-60 xl:h-65 xl:w-65  bg-orange-500/70 rounded-xl'>
                    <img
                        src={Profile2}
                        alt="Developer Character"
                        className="absolute bottom-0 left-2 h-full  md:h-[350px] lg:h-[420px] xl:h-[400px] w-full rounded-2xl"
                    />
                </div>
            </div>

            <div className="w-full md:w-[50%]">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Why <span className="text-orange-500">Hire me</span>?
                </h2>

                <p className="text-gray-700 mb-6 text-xs lg:text-md xl:text-lg leading-relaxed">
                    {data?.whyHireMe}
                </p>
                <div className='flex flex-row-reverse justify-end gap-4 lg:gap-0 lg:flex-col '>
                    <div className="md:mb-6">
                        <h3 className="text-xl md:text-2xl font-bold">{data?.ProjectsCompleted}+</h3>
                        <p className="text-sm text-gray-500">Projects Completed</p>
                    </div>
                    <div>
                        <button className="border border-black text-black px-6 py-3 rounded-xl hover:text-white hover: hover:bg-black transition duration-300">
                            Hire me
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default WhyHireMe
