import React, { useEffect, useRef, useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { data } from './data';

const ServicesSection = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Update active index on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollContainer = scrollRef.current;
            if (!scrollContainer) return;

            const scrollLeft = scrollContainer.scrollLeft;
            const itemWidth = scrollContainer.scrollWidth / data?.services.length;

            const index = Math.round(scrollLeft / itemWidth);
            setActiveIndex(index);
        };

        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <section className="py-16 text-white relative">
            <div className="max-w-6xl mx-auto  px-4">
                <div className="mb-10 flex justify-between flex-wrap">
                    <h2 className="text-3xl font-bold">
                        My <span className="text-orange-400">data?.services</span>
                    </h2>
                    <p className="mt-4 text-sm max-w-xl text-gray-300">
                        Frontend Development: HTML5, CSS3, JavaScript, React.js, Vite, Bootstrap, Tailwind CSS, Material-UI (MUI), Redux, Context API, GSAP
                    </p>
                </div>

                    <div
                        ref={scrollRef}
                        className="flex px-16 justify-between gap-4  overflow-x-scroll scrollbar-hide scroll-smooth"
                    >
                        {data?.services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-xs rounded-xl overflow-hidden shadow-lg relative group h-68 w-65 min-w-[260px]"
                            >
                                <div className='border-b p-3 border-b-gray-100 w-full '>
                                    <p className='font-semibold'>{service.name}</p>
                                </div>

                                <div className='bg-black/10 backdrop-blur-lg rounded-4xl absolute bottom-0 pt-2 border-t border-t-gray-100/30'>
                                    <div className='bg-black/5 backdrop-blur-lg border-t border-t-gray-100/30 rounded-3xl pt-2'>
                                        <img
                                            src={service.image}
                                            alt={service.name}
                                            className="w-full h-48 object-cover transition-transform duration-300 rounded-xl"
                                        />
                                    </div>
                                </div>

                                <div className="absolute h-14 w-14 bottom-0 right-0 z-50 p-2 flex justify-center items-center rounded-tl-xl">
                                    <div className='rounded-full p-2 bg-black'>
                                        <MdArrowOutward className="text-white text-2xl" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
              
                  <div className="flex justify-center mt-6 gap-2">
                        {data?.services.map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === activeIndex ? 'bg-orange-400 scale-110' : 'bg-white/30'
                                }`}
                            ></div>
                        ))}
                    </div>
            </div>
        </section>
    );
};

export default ServicesSection;
