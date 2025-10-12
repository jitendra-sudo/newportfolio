import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, } from "react-icons/fa";
import { data } from "./data";

const Footer = () => {
    return (
        <footer id="footer" className=" text-white py-10 px-0 md:px-16">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 justify-between ">
                <div>
                    <h2 className="font-bold text-lg tracking-wide">{data?.name}</h2>
                    <p className="mt-4 text-sm text-gray-300">{data?.footerTitle}</p>
                    <div className="flex space-x-4 mt-4 text-xl">
                        {data?.mediaLink?.map((details, idx) => {
                            const Icon = details?.icon
                            return (
                                <a href={details?.link} key={idx} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <Icon />
                                </a>
                            )
                        })}
                    </div>
                </div>

                <div className=" flex justify-start  md:justify-center">
                    <div>
                        <h3 className="text-orange-500 font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-orange-400">Home</a></li>
                            <li><a href="#myworkExperience" className="hover:text-orange-400">Experiences</a></li>
                            <li><a href="#whyhireme" className="hover:text-orange-400">Why Hire me</a></li>
                            <li><a href="#technicalskill" className="hover:text-orange-400">Technical Skill</a></li>
                            <li><a href="#service" className="hover:text-orange-400">Service</a></li>
                            <li><a href="#blogs" className="hover:text-orange-400">Blogs</a></li>
                            <li><a href="#contact" className="hover:text-orange-400">Contacts</a></li>
                            <li>  <a href="#resume" onClick={(e) => {
                                e.preventDefault();
                                const link = document.createElement("a");
                                link.href = data.resume.resumePng;
                                link.download = data?.resume?.name;
                                link.click();
                                window.open(data?.resume?.link, "_blank");
                            }}
                                className="hover:text-orange-400 cursor-pointer"
                            >
                                Resume
                            </a>
                            </li>


                        </ul>
                    </div>

                </div>

                <div id="contact" className=" flex justify-start  md:justify-end ">
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
