import React from 'react'
import { data } from './data'

function Experience() {

    return (
        <div id='myworkExperience' className='md:px-16 py-8'>
            <p className='text-2xl lg:text-3xl font-bold  text-center py-4 md:py-8'>My <span className='text-orange-500'>Work Experience</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto ">
                <div className="relative flex flex-col gap-4 md:gap-14 md:pr-6 md:border-r-2 md:border-dashed md:border-gray-300">
                    {data?.companyExperience.map((exp, index) => (
                        <div key={index} className="relative">
                            <div>
                                <h3 className="text-sm lg:text-lg font-semibold text-gray-900">
                                    {exp.company}
                                </h3>
                                <p className="text-xs lg:text-sm text-gray-500">{exp.date}</p>
                            </div>
                            <div className={`absolute hidden -right-[38px] top-4 -translate-y-1/2  rounded-full p-1 border-[2px] border-dashed border-gray-400 md:flex justify-center items-center`}>
                                <div
                                    className={`w-4 h-4 rounded-full border-4 ${index === 0
                                        ? "border-orange-500 bg-orange-500"
                                        : index === 1
                                            ? "border-gray-800 bg-gray-800"
                                            : "border-orange-500 bg-orange-500"
                                        }`}
                                >
                                </div>
                            </div>
                            <div key={index} className='py-2 md:hidden'>
                                <h3 className="text-sm lg:text-lg font-semibold text-orange-600">
                                    {exp.role}
                                </h3>
                                <p className="text-xs lg:text-sm text-gray-600 leading-relaxed line-clamp-3">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hidden md:flex flex-col gap-4 lg:gap-7 ">
                    {data?.companyExperience.map((exp, index) => (
                        <div key={index} className=''>
                            <h3 className="text-lg font-semibold text-orange-600">
                                {exp.role}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 min-h-8 xl:line-clamp-3">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;
