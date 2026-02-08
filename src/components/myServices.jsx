import React, { useEffect, useRef, useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { data } from './data';

const ServicesSection = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const cardsPerView = 1;
   const totalPages = Math.ceil(data.services.length / cardsPerView);

    useEffect(() => {
        const handleScroll = () => {
            const container = scrollRef.current;
            if (!container) return;

            const cardWidth = 276;
            const index = Math.round(container.scrollLeft / cardWidth);
            setActiveIndex(index);
        };

        const container = scrollRef.current;
        container?.addEventListener("scroll", handleScroll);

        return () => container?.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <section id='service' className="py-16 px-4 lg:px-16 text-white relative">
            <div className=" mx-auto  px-2">
                <div className="mb-10  px-0 grid grid-cols-1 md:grid-cols-2">
                    <h2 className="text-3xl font-bold bord">
                        My <span className="text-orange-400">Services</span>
                    </h2>
                    <p className="mt-4 text-xs lg:text-sm  text-gray-300">
                        Frontend Development: HTML5, CSS3, JavaScript, React.js, Vite, Bootstrap, Tailwind CSS, Material-UI (MUI), Redux, Context API, GSAP
                    </p>
                </div>

                <div
                    ref={scrollRef}
                    className="flex min-w-[260px]  gap-8  xl:w-[1200px] mx-auto xl:py-4 justify-between   overflow-x-scroll scrollbar-hide scroll-smooth"
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
                                        className="w-full h-49 object-cover transition-transform duration-300 rounded-xl"
                                    />
                                </div>
                            </div>

                            <div className="absolute h-14 w-14 bottom-0 right-0 z-50 p-2 flex justify-center items-center rounded-tl-xl">
                                <a
                                    href={service?.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open service link"
                                    className="rounded-full p-2 bg-black inline-flex"
                                >
                                    <MdArrowOutward className="text-white text-2xl" />
                                </a>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="  md:hidden flex justify-center mt-6 gap-2">
                    {Array.from({ length: totalPages }).map((_, pageIndex) => (
                        <div
                            key={pageIndex}
                            onClick={() => {
                                setActiveIndex(pageIndex);
                                scrollRef.current?.scrollTo({
                                    left: 276 * cardsPerView * pageIndex,
                                    behavior: "smooth",
                                });
                            }}
                            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${pageIndex === activeIndex
                                    ? "bg-orange-400 scale-110"
                                    : "bg-white/30"
                                }`}
                        />
                    ))}
                </div>


            </div>
        </section>
    );
};

export default ServicesSection;
