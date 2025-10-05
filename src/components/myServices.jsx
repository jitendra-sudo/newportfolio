import bg from '../assets/bg.jpg';
import React from 'react';
import { MdArrowOutward } from "react-icons/md";
const services = [
    {
        name: "Frontend Coding",
        image: "/images/code.jpg",
    },
    {
        name: "Responsive Design",
        image: "/images/setup.jpg",
    },
    {
        name: "Data Visualization",
        image: "/images/charts.jpg",
    }
];

const ServicesSection = () => {
    return (
        <section className=" py-16 text-white relative h-screen">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="mb-10 flex justify-between">
                    <h2 className="text-3xl font-bold">
                        My <span className="text-orange-400">Services</span>
                    </h2>
                    <p className="mt-4 text-sm max-w-xl text-gray-300">
                        Frontend Development: HTML5, CSS3, JavaScript, React.js, Vite, Bootstrap, Tailwind CSS, Material-UI (MUI), Redux, Context API, GSAP
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-xs rounded-xl  overflow-hidden shadow-lg relative group h-68 w-65"
                        >
                            <div className='border-b-1  p-3 border-b-gray-100 w-full '>
                                <p className='font-semibold'>Name</p>
                            </div>

                            {/* <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                            /> */}

                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{service.name}</h3>
                            </div>

                            {/* Button in the bottom-right corner */}
                            <div className="absolute h-14 w-14 bottom-0 right-0  bg-black/30 p-2 transition-colors duration-300 flex justify-center items-center rounded-tl-xl">
                                <div className='rounded-full p-2 bg-black'>
                                    <MdArrowOutward className="text-white text-2xl" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* <div className="flex justify-center mt-8 space-x-2">
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <span className="w-3 h-3 bg-white/30 rounded-full"></span>
          <span className="w-3 h-3 bg-white/30 rounded-full"></span>
        </div> */}
            </div>
        </section>
    );
};

export default ServicesSection;
