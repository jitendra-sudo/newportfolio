import React, { useState } from 'react'
import vector1 from '../assets/Vector1.png'
import { data } from './data.js';
import vector2 from '../assets/Vector2.png';
import Profile from '../assets/Profile.png';
import Ellipse from '../assets/Ellipse2.png';
import quoteUp from '../assets/quote-up.png';
import Star from '../assets/Star.png';

function Home() {
    const [activeTab, setActiveTab] = useState('false')

    return (
        <div id='home' className='pt-[100px] h-screen '>
            <div className='w-full flex-col relative flex justify-center items-center py-4'>
                <div className='relative'>
                    <img src={vector1} alt='logo' className='h-8 w-8 absolute -top-6 -right-6' />
                    <p className='text-black border-1 px-4 py-2 text-xs rounded-full font-semibold'>Hallo!</p>
                </div>

            </div>
            <div className="flex justify-center  text-center">
                <div className="relative">
                    <p className=" font-semibold text-[66px] leading-none tracking-[-0.015em] capitalize text-black">
                        I'm <span className="text-orange-500">{data.name}</span>,
                    </p>
                    <p className="font-medium text-[76px] text-black leading-none tracking-[-0.015em] capitalize">
                        {data.role}
                    </p>
                    <img src={vector2} alt='logo' className='h-8 w-8 absolute -bottom-7 -left-7' />
                </div>
            </div>

            <div className=' h-78 relative flex justify-between  gap-4 items-end'>
                <div className=' w-[60%] relative'>
                    <img src={Ellipse} alt='logo' className='h-[228px] absolute bottom-0 left-25' />
                    <img src={Profile} alt='logo' className='h-[360px] absolute bottom-0 right-2' />
                    <div className='flex justify-center my-2'>
                        <div className="flex  mx-auto gap-2 p-1 rounded-full border border-gray-300 bg-white/10 backdrop-blur-3xl w-auto">
                            <button onClick={() => setActiveTab('false')} className={`  ${activeTab == 'false' ? "bg-orange-500  rounded-full px-4" : "px-2"} py-2 text-white font-semibold hover:shake`}>
                                Portfolio
                            </button>
                            <button onClick={() => setActiveTab('true')} className={`${activeTab == 'true' ? "bg-orange-500  rounded-full px-4" : "px-2"} py-2 text-white font-semibold hover:shake`}>
                                Hire me
                            </button>
                        </div>
                    </div>

                </div>
                <div className='w-[40%] py-8'>
                    <img src={quoteUp} alt='logo' className='h-8' />
                    <div className='py-2'>
                        <p className=''>{data?.title}</p>
                        <div className='flex gap-1'>
                            <img src={Star} alt='logo' className='h-6 ' />
                            <img src={Star} alt='logo' className='h-6 ' />
                            <img src={Star} alt='logo' className='h-6 ' />
                            <img src={Star} alt='logo' className='h-6 ' />
                            <img src={Star} alt='logo' className='h-6 ' />
                        </div>

                    </div>
                    <div className=''>
                        <p className="flex items-end gap-1">
                            <span className="text-3xl font-bold">{data?.experience}</span> Experience
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
