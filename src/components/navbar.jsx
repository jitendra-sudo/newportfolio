import React, { useState, useRef, useEffect } from 'react';

function Navbar() {
    const [activeTab, setActiveTab] = useState('home');
    const [trackerStyle, setTrackerStyle] = useState({});
    const navRef = useRef(null);
    const tabRefs = useRef({});

    const tabs = ['home', 'about', 'service', 'resume', 'project', 'blogs', 'contact'];

    useEffect(() => {
        const currentTab = tabRefs.current[activeTab];
        const nav = navRef.current;

        if (currentTab && nav) {
            const tabRect = currentTab.getBoundingClientRect();
            const navRect = nav.getBoundingClientRect();

            setTrackerStyle({
                left: `${tabRect.left - navRect.left}px`,
                width: `${tabRect.width}px`,
            });
        }
    }, [activeTab]);

    return (
        <div className='relative'>
            <div className='absolute mx-auto top-6 left-[44px] right-[70px] p-[6px] h-14  rounded-full border-black bg-black overflow-hidden'>
                <nav ref={navRef} className='flex justify-between items-center h-full text-white rounded-full w-full relative overflow-auto md:overflow-hidden scrollbar-hide ' >
                    <div className='absolute top-0 bottom-0  bg-orange-500 rounded-full transition-all duration-300' style={{ ...trackerStyle }} />
                    {tabs.map((tab) => (
                        <a key={tab} href="#" ref={(el) => (tabRefs.current[tab] = el)} onClick={() => setActiveTab(tab)} className={`z-10 px-8 h-full flex items-center justify-center rounded-full transition-colors duration-300 ${activeTab === tab ? 'text-white font-semibold' : 'text-white'}`}>
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
