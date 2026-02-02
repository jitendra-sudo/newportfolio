import React from 'react'
import { data } from './data';
import Profile2 from '../assets/Profile2.png';

function WhyHireMe() {
    return (
        <div id='whyhireme' className="flex flex-col md:flex-row items-center  md:p-12 mx-auto gap-4 md:gap-10 py-5">
            <div className="flex justify-center items-end w-full h-[300px] lg:h-[380px] md:w-[50%] xl:w-[40%] relative">
                <div className='h-40 w-40 md:h-60 md:w-60 xl:h-70 xl:w-70  bg-orange-500/70 rounded-xl'>
                      <img src={Profile2} alt="logo" className="w-auto h-[280px] md:h-[400px] xl:h-[420px] absolute bottom-0 left-1/2 -translate-x-1/2" />
                </div>
            </div>

            <div className="w-full md:w-[50%]">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Why <span className="text-orange-500">Hire me</span>?
                </h2>

                <p className="text-gray-700 mb-6 text-md xl:text-lg leading-relaxed">
                    {data?.whyHireMe}
                </p>
                <div className='flex flex-row-reverse justify-end gap-4 lg:gap-0 lg:flex-col '>
                    <div className="md:mb-6">
                        <h3 className="text-xl md:text-2xl font-bold">{data?.ProjectsCompleted}+</h3>
                        <p className="text-sm text-gray-500">Projects Completed</p>
                    </div>
                    <div>
                        <a href='#contacts' className="border border-black text-black px-6 py-3 rounded-xl hover:text-white hover: hover:bg-black transition duration-300">
                            Hire me
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default WhyHireMe
