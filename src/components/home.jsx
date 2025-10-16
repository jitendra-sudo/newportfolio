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
        <div id="home" className=" flex flex-col gap-2 lg:gap-4 bg-white pt-[100px] md:h-screen">
            <div className=" flex justify-center items-center flex-col lg:py-4">
                <div className="relative">
                    <img src={vector1} alt="logo" className="h-6 w-6 lg:h-8 lg:w-8 absolute -top-4 -right-4 lg:-top-6 lg:-right-6" />
                    <p className="text-black border px-3 py-1 lg:px-4 lg:py-2 text-xs rounded-full font-semibold">Hallo!</p>
                </div>
            </div>

            <div className="text-center">
                <div className="relative flex flex-col justify-center items-center gap-4 lg:gap-0">
                    <p className="font-semibold text-2xl lg:text-[55px] xl:text-[66px] leading-none tracking-[-0.015em] capitalize text-black">
                        I'm <TypingEffect text={data.name} speed={100} />,
                    </p>
                    <div className='justify-center items-center inline-block relative'>
                        <p className="font-medium text-2xl lg:text-[55px] xl:text-[85px] text-black leading-none tracking-[-0.015em] capitalize ">
                            {data.role}

                        </p>
                        <img src={vector2} alt="logo" className="h-8 w-8 absolute -bottom-7 left-1 md:-bottom-7 md:-left-9" />
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 h-full">
                <div className="flex min-h-80 lg:h-full justify-center items-end  relative ">
                    <div className="w-full  h-[150px] lg:h-[200px] xl:h-[260px] md:w-[300px] lg:w-[400px] xl:w-[540px] bg-[#FEB273] rounded-t-full absolute bottom-0 left-1/2 -translate-x-1/2 z-0"></div>
                    <img src={Profile} alt="logo" className="w-auto h-[340px] lg:h-[370px] xl:h-[440px] absolute bottom-0 left-1/2 -translate-x-1/2" />
                    <div className="my-4">
                        <div className="flex gap-2 p-2 rounded-full border border-gray-300 bg-white/10 backdrop-blur-lg w-auto">
                            <button
                                onClick={(e) => { e.stopPropagation(); setActiveTab('false'); window.open(data?.portfolioLink, "_blank") }}
                                className={`${activeTab === 'false' ? "bg-orange-500 rounded-full px-8" : "px-4"
                                    } py-2 xl:py-4 text-white font-semibold `}
                            >
                                Portfolio
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); setActiveTab('true')
                                    const link = document.createElement("a");
                                    link.href = data.resume.resumePng;
                                    link.download = data?.resume?.name;
                                    link.click();
                                    window.open(data?.resume?.link, "_blank");
                                }}
                                className={`${activeTab === 'true' ? "bg-orange-500 rounded-full px-8" : "px-4"} py-2 xl:py-4 text-white font-semibold `}
                            >
                                Hire me
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-end py-4 lg:py-8 xl:px-8">
                    <div>
                        <img src={quoteUp} alt="quote" className="h-6 lg:h-8" />
                        <div className="py-2">
                            <p className='text-md lg:text-2xl'>{data?.title}</p>
                            <div className="flex gap-1 py-1 md:py-0">
                                <img src={Star} alt="star" className="h-4 md:h-6" />
                                <img src={Star} alt="star" className="h-4 md:h-6" />
                                <img src={Star} alt="star" className="h-4 md:h-6" />
                                <img src={Star} alt="star" className="h-4 md:h-6" />
                                <img src={Star} alt="star" className="h-4 md:h-6" />
                            </div>
                        </div>
                        <div>
                            <p className="flex items-end gap-1 text-xs lg:text-md">
                                <span className="text-3xl lg:text-3xl font-bold">{data?.experience}</span> Experience
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;
