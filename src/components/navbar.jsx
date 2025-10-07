// import React, { useState, useRef, useEffect } from "react";

// function Navbar() {
//   const [activeTab, setActiveTab] = useState("#");
//   const [trackerStyle, setTrackerStyle] = useState({});
//   const navRef = useRef(null);
//   const tabRefs = useRef({});
//   const [shake, setShake] = useState(false);

//   const tabs = ["#", "#about", "#service", "#resume", "#project", "#blogs", "#contact"];

//   useEffect(() => {
//     const currentTab = tabRefs.current[activeTab];
//     const nav = navRef.current;

//     if (currentTab && nav) {
//       const tabRect = currentTab.getBoundingClientRect();
//       const navRect = nav.getBoundingClientRect();

//       setTrackerStyle({
//         left: `${tabRect.left - navRect.left}px`,
//         width: `${tabRect.width}px`,
//       });
//     }
//   }, [activeTab]);aa

//   // Stop shaking after animation ends
//   useEffect(() => {
//     if (shake) {
//       const timer = setTimeout(() => setShake(false), 400);
//       return () => clearTimeout(timer);
//     }
//   }, [shake]);

//   const handleClick = (tab) => {
//     setActiveTab(tab);
//     setShake(true); // Shake the outer div when clicked
//   };

//   return (
//     <div
//       className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[80%] max-w-5xl mx-auto p-[6px] h-14 rounded-full border-black bg-black overflow-hidden transition-all duration-300 ${
//         shake ? "animate-shake" : ""
//       }`}
//     >
//       <nav
//         ref={navRef}
//         className="flex justify-between items-center h-full text-white rounded-full w-full relative overflow-auto md:overflow-hidden scrollbar-hide"
//       >
//         <div
//           className="absolute top-0 bottom-0 bg-orange-500 rounded-full transition-all duration-300"
//           style={{ ...trackerStyle }}
//         />
//         {tabs.map((tab) => (
//           <a
//             key={tab}
//             href={tab}
//             ref={(el) => (tabRefs.current[tab] = el)}
//             onClick={() => handleClick(tab)}
//             className={`z-10 px-8 h-full flex items-center justify-center rounded-full transition-colors duration-300 ${
//               activeTab === tab ? "text-white font-semibold" : "text-white"
//             }`}
//           >
//             {tab.replace("#", "") || "Home"}
//           </a>
//         ))}
//       </nav>
//     </div>
//   );
// }

// export default Navbar;


import React, { useState, useRef, useEffect } from "react";
import "./index.css"; // Make sure this file has the shake animation

function Navbar() {
  const [activeTab, setActiveTab] = useState("#");
  const [trackerStyle, setTrackerStyle] = useState({});
  const navRef = useRef(null);
  const tabRefs = useRef({});
  const [shake, setShake] = useState(false);

  const tabs = ["#", "#about", "#service", "#resume", "#project", "#blogs", "#contact"];

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

  // Stop shaking after animation ends
  useEffect(() => {
    if (shake) {
      const timer = setTimeout(() => setShake(false), 400);
      return () => clearTimeout(timer);
    }
  }, [shake]);

  const handleClick = (tab) => {
    setActiveTab(tab);
    setShake(true); // Shake the outer div when clicked
  };

  return (
    <div
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[80%] max-w-5xl mx-auto p-[6px] h-14 rounded-full border-black bg-black overflow-hidden transition-all duration-300 ${
        shake ? "animate-shake" : ""
      }`}
    >
      <nav
        ref={navRef}
        className="flex justify-between items-center h-full text-white rounded-full w-full relative overflow-auto md:overflow-hidden scrollbar-hide"
      >
        <div
          className="absolute top-0 bottom-0 bg-orange-500 rounded-full transition-all duration-300"
          style={{ ...trackerStyle }}
        />
        {tabs.map((tab) => (
          <a
            key={tab}
            href={tab}
            ref={(el) => (tabRefs.current[tab] = el)}
            onClick={() => handleClick(tab)}
            className={`z-10 px-8 h-full flex items-center justify-center rounded-full transition-colors duration-300 ${
              activeTab === tab ? "text-white font-semibold" : "text-white"
            }`}
          >
            {tab.replace("#", "") || "Home"}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
