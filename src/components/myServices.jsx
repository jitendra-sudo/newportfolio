import bg from '../assets/bg.jpg';
import React from 'react';
import { MdArrowOutward } from "react-icons/md";
const services = [
    {
        name: "Frontend Coding",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png",
    },
    {
        name: "Responsive Design",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png",
    },
    {
        name: "Data Visualization",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png",
    }
];

const ServicesSection = () => {
    return (
        <section className=" py-16 text-white relative h-screen">
            <div className="max-w-6xl mx-auto px-4">
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
                            className="bg-white/10 backdrop-blur-xs rounded-xl overflow-hidden roun shadow-lg relative group h-68 w-65"
                        >
                            <div className='border-b-1  p-3 border-b-gray-100 w-full '>
                                <p className='font-semibold'>Name</p>
                            </div>

                          
                            <div className='bg-black/10 backdrop-blur-lg  rounded-4xl z-10  absolute bottom-0 pt-2 border-t border-t-gray-100/30'>
                                <div className='bg-black/5 backdrop-blur-lg border-t border-t-gray-100/30  rounded-3xl z-10 pt-2' >
                                    <img src={service.image} alt={service.name} className="w-full h-48 object-cover transition-transform duration-300  rounded-xl" />
                                </div>
                            </div>


                            <div className="absolute h-14 w-14 bottom-0 right-0 z-50 p-2 transition-colors duration-300 flex justify-center items-center rounded-tl-xl">
                                <div className='rounded-full p-2 bg-black'>
                                    <MdArrowOutward className="text-white text-2xl" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
