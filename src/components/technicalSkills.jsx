import React, { useEffect, useState } from 'react';
import { data } from '../components/data';

function TechnicalSkills() {
    const [techProgress, setTechProgress] = useState(data?.technicalSkills.map(() => 0));
    const [profProgress, setProfProgress] = useState(data?.professionalSkills.map(() => 0));

    useEffect(() => {
        const interval = setInterval(() => {
            setTechProgress(prev =>
                prev.map((val, i) =>
                    val < data?.technicalSkills[i].percent ? val + 1 : val
                )
            );
            setProfProgress(prev =>
                prev.map((val, i) =>
                    val < data?.professionalSkills[i].percent ? val + 1 : val
                )
            );
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id='technicalSkill' className="text-white py-10 px-0 md:px-16 ">
            <div className="mx-auto grid md:grid-cols-2 gap-14">
                <div>
                    <h2 className="text-2xl font-semibold py-4 text-center">Technical Skills</h2>
                    <div className="space-y-5">
                        {data?.technicalSkills.map((skill, index) => (
                            <div key={index}>
                                <div className="flex text-sm lg:text-lg justify-between mb-1">
                                    <span>{skill.name}</span>
                                    <span>{techProgress[index]}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-1 lg:h-2">
                                    <div
                                        className="bg-orange-500 h-1 lg:h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${techProgress[index]}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold py-6 text-center">Professional Skills</h2>
                    <div className="grid grid-cols-2 gap-6">
                        {data?.professionalSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center"
                            >
                                <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 border-orange-500 flex items-center justify-center">
                                    <span className="text-xl font-bold">{profProgress[index]}%</span>
                                </div>
                                <p className="mt-2 text-sm">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-white mt-4 py-3 px-4 overflow-hidden">
                <div className=" mx-auto border-blue-500 rounded-md text-center">
                    <h2 className="text-2xl font-semibold py-6 text-center">Skills</h2>

                    <div className="relative w-full overflow-hidden">
                        <div className="flex animate-scroll gap-6 md:gap-12 py-4">
                            {[...data?.skills, ...data?.skills].map((skill, index) => (
                                <img
                                    key={index}
                                    src={skill.src}
                                    alt={skill.name}
                                    title={skill.name}
                                    className="w-9 h-9 sm:w-15 sm:h-15 hover:scale-110 transition-transform duration-200 flex-shrink-0"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TechnicalSkills;
