import React, { useEffect, useState } from 'react';
import { data } from '../components/data';

const skills = [
  { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'Redux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TailwindCSS', src: 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000' },
  { name: 'GraphQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Bootstrap', src: 'https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000' },
  { name: 'Vercel', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg' },
  { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Firebase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Redis', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
];

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
        <div id='technicalSkill' className="text-white py-10 px-4 md:px-16 ">
            <div className="mx-auto grid md:grid-cols-2 gap-14">
                <div>
                    <h2 className="text-2xl font-semibold py-4 text-center">Technical Skills</h2>
                    <div className="space-y-5">
                        {data?.technicalSkills.map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-1">
                                    <span>{skill.name}</span>
                                    <span>{techProgress[index]}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div
                                        className="bg-orange-500 h-2 rounded-full transition-all duration-300"
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
                                <div className="relative w-24 h-24 rounded-full border-4 border-orange-500 flex items-center justify-center">
                                    <span className="text-xl font-bold">{profProgress[index]}%</span>
                                </div>
                                <p className="mt-2 text-sm">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className=" text-white mt-4 py-7 px-4">
                <div className="max-w-5xl mx-auto  border-blue-500 rounded-md text-center">
                    <h2 className="text-2xl font-semibold py-6 text-center">Skills</h2>
                    <div className="flex flex-wrap justify-between gap-6 py-4">
                        {data?.skills.map((skill, index) => (
                            <img key={index} src={skill.src} alt={skill.name} title={skill.name} className="w-9 h-9 hover:scale-110 transition-transform duration-200" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechnicalSkills;
