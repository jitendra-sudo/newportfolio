import React, { useEffect, useState } from 'react'
import vector1 from '../assets/Vector1.png'
import { data } from './data.js';
import vector2 from '../assets/Vector2.png';
import Profile from '../assets/Profile.png';
import quoteUp from '../assets/quote-up.png';
import Star from '../assets/Star.png';


function TypingEffect({ text, speed = 100, pause = 1000 }) {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                if (index < text.length) {
                    setDisplayedText((prev) => prev + text.charAt(index));
                    setIndex((prev) => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), pause);
                }
            } else {
                if (index > 0) {
                    setDisplayedText((prev) => prev.slice(0, -1));
                    setIndex((prev) => prev - 1);
                } else {
                    setTimeout(() => setIsDeleting(false), pause);
                }
            }
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [text, index, isDeleting, speed, pause]);

    return (
        <span className="text-orange-500">{displayedText}</span>
    );
}

function Home() {
    const [activeTab, setActiveTab] = useState('false')

    return (
        <div id="home" className=" flex flex-col bg-white pt-[100px]">
            <div className="py-4 flex justify-center items-center flex-col">
                <div className="relative">
                    <img src={vector1} alt="logo" className="h-8 w-8 absolute -top-6 -right-6" />
                    <p className="text-black border px-4 py-2 text-xs rounded-full font-semibold">Hallo!</p>
                </div>
            </div>

            <div className="text-center">
                <div className="relative">
                    <p className="font-semibold text-[66px] leading-none tracking-[-0.015em] capitalize text-black">
                        I'm <TypingEffect text={data.name} speed={100} />,
                    </p>
                    <div className='justify-center items-center inline-block relative'>
                        <p className="font-medium text-[76px] text-black leading-none tracking-[-0.015em] capitalize ">
                            {data.role}

                        </p>
                        <img src={vector2} alt="logo" className="h-8 w-8 absolute -bottom-7 -left-9" />

                    </div>

                </div>
            </div>

            <div className="flex-1 min-h-[400px] grid grid-cols-2 gap-4">
                <div className="flex justify-center items-end  relative ">
                    <div className="w-[80%] h-[60%] bg-orange-500 rounded-t-full absolute bottom-0 left-1/2 -translate-x-1/2 z-0"></div>
                    <img src={Profile} alt='logo' className=' absolute bottom-0 left-1/2 -translate-x-1/2 ' />
                    <div className="my-4">
                        <div className="flex gap-2 p-1 rounded-full border border-gray-300 bg-white/10 backdrop-blur-3xl w-auto">
                            <button
                                onClick={() => setActiveTab('false')}
                                className={`${activeTab === 'false' ? "bg-orange-500 rounded-full px-4" : "px-2"
                                    } py-2 text-white font-semibold `}
                            >
                                Portfolio
                            </button>
                            <button
                                onClick={() => setActiveTab('true')}
                                className={`${activeTab === 'true' ? "bg-orange-500 rounded-full px-4" : "px-2"} py-2 text-white font-semibold `}
                            >
                                Hire me
                            </button>
                        </div>
                    </div>

                </div>

                <div className="flex items-end py-8">
                    <div>
                        <img src={quoteUp} alt="quote" className="h-8" />
                        <div className="py-2">
                            <p>{data?.title}</p>
                            <div className="flex gap-1">
                                <img src={Star} alt="star" className="h-6" />
                                <img src={Star} alt="star" className="h-6" />
                                <img src={Star} alt="star" className="h-6" />
                                <img src={Star} alt="star" className="h-6" />
                                <img src={Star} alt="star" className="h-6" />
                            </div>
                        </div>
                        <div>
                            <p className="flex items-end gap-1">
                                <span className="text-3xl font-bold">{data?.experience}</span> Experience
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;
