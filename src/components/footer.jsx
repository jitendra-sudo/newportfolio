import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { data } from "./data";

const Footer = () => {
    return (
        <footer id="footer" className=" text-white py-10 px-6 md:px-16">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 justify-between ">
                <div>
                    <h2 className="font-bold text-lg tracking-wide">{data?.name}</h2>
                    <p className="mt-4 text-sm text-gray-300">{data?.footerTitle}</p>
                    <div className="flex space-x-4 mt-4 text-xl">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaLinkedinIn />
                        </a>

                    </div>
                </div>

                <div className=" flex  justify-center">
                    <div>
                        <h3 className="text-orange-500 font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-orange-400">Home</a></li>
                            <li><a href="#" className="hover:text-orange-400">About me</a></li>
                            <li><a href="#" className="hover:text-orange-400">Service</a></li>
                            <li><a href="#" className="hover:text-orange-400">Resume</a></li>
                            <li><a href="#" className="hover:text-orange-400">Project</a></li>
                        </ul>
                    </div>

                </div>

                <div className=" flex justify-end ">
                    <div>
                        <h3 className="text-orange-500 font-semibold mb-4">Contact</h3>
                        <ul className="text-sm space-y-2">
                            <li><a href={`tel:${data?.number}`} className="hover:text-orange-400">{data?.number}</a></li>
                            <li><span className="hover:text-orange-400">{data?.name}</span></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
