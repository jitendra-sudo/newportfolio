import React from 'react'
import { data } from './data'

function Experience() {
   
    return (
        <div id='experience' className='pt-6'>
            <p className='text-3xl font-bold  text-center py-16'>My <span className='text-orange-500'>Work Experience</span></p>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto ">
                <div className="relative flex flex-col gap-14 pr-6 border-r-2 border-dashed border-gray-300">
                    {data?.companyExperience.map((exp, index) => (
                        <div key={index} className="relative">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {exp.company}
                                </h3>
                                <p className="text-sm text-gray-500">{exp.date}</p>
                            </div>
                            <div className={`absolute -right-[38px] top-4 -translate-y-1/2  rounded-full p-1 border-[2px] border-dashed border-gray-400 flex justify-center items-center`}>
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
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-7 ">
                    {data?.companyExperience.map((exp, index) => (
                        <div key={index} className=''>
                            <h3 className="text-lg font-semibold text-orange-600">
                                {exp.role}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
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
