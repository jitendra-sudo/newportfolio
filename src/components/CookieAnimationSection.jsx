import React, { useEffect, useRef, useState } from 'react'
import ServicesSection from './myServices';
import Cookie from '../assets/cookie.png';

const CookieAnimationSection = ({ bg }) => {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="relative">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bg})` }}
            />
            <div
                className="relative group overflow-hidden"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bg})` }}
                />

                <img
                    src={Cookie}
                    alt="Cookie 1"
                    className={`absolute z-10 w-[100px] top-16 md:top-[30%] left-[20%] transform -translate-x-1/2 -translate-y-1/2
                        transition-transform duration-700 ease-in-out
                        ${inView ? "animate-random-move" : ""}
                        ${hovering ? "animate-hover-fast" : ""}
                    `}
                />

                <img
                    src={Cookie}
                    alt="Cookie 2"
                    className={`absolute z-10 w-[120px] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2
                        transition-transform duration-700 ease-in-out
                        ${inView ? "animate-random-move-slow" : ""}
                        ${hovering ? "animate-hover-fast" : ""}
                    `}
                />

                <img
                    src={Cookie}
                    alt="Cookie 3"
                    className={`absolute z-10 w-[200px] xl:w-[300px] -bottom-50 -right-50 transform -translate-x-1/2 -translate-y-1/2
                        transition-transform duration-700 ease-in-out
                        ${inView ? "animate-random-move" : ""}
                        ${hovering ? "animate-hover-fast" : ""}
                    `}
                />

                <div className="absolute inset-0 bg-black/10 backdrop-blur-xs" />

                <div className="relative z-10  mx-auto">
                    <ServicesSection />
                </div>
            </div>
        </div>
    );
};

export default CookieAnimationSection;