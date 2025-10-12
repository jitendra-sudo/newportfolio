import React, { useState, useRef, useEffect } from "react";
import { data } from './data'

function Navbar() {
  const [activeTab, setActiveTab] = useState("#");
  const [trackerStyle, setTrackerStyle] = useState({});
  const navRef = useRef(null);
  const tabRefs = useRef({});
  const [shake, setShake] = useState(false);

  const tabs = [
    { id: "#", label: "Home" },
    { id: "#myworkExperience", label: "Experiences" },
    { id: "#whyhireme", label: "Why Hire Me" },
    { id: "#resume", label: "Resume" },
    { id: "#technicalskill", label: "Technical Skill" },
    { id: "#service", label: "Service" },
    { id: "#blogs", label: "Blogs" },
    { id: "#contact", label: "Contact" },
  ];

  const updateTracker = (tabId, smooth = true) => {
    const currentTab = tabRefs.current[tabId];
    const nav = navRef.current;
    if (currentTab && nav) {
      const tabRect = currentTab.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();

      setTrackerStyle({
        left: `${tabRect.left - navRect.left + nav.scrollLeft}px`,
        width: `${tabRect.width}px`,
      });

      const scrollTo =
        currentTab.offsetLeft -
        nav.clientWidth / 2 +
        currentTab.offsetWidth / 2;

      nav.scrollTo({
        left: scrollTo,
        behavior: smooth ? "smooth" : "auto",
      });
    }
  };

  useEffect(() => {
    updateTracker(activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (shake) {
      const timer = setTimeout(() => setShake(false), 400);
      return () => clearTimeout(timer);
    }
  }, [shake]);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      const clickedOnTab = Object.values(tabRefs.current).some(
        (tabEl) => tabEl && tabEl.contains(e.target)
      );
      if (!clickedOnTab) setShake(true);
    };
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "#";
      tabs.forEach(({ id }) => {
        const section = document.querySelector(id === "#" ? "body" : id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) currentSection = id;
        }
      });
      setActiveTab(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (tabId) => {
    setActiveTab(tabId);
    document.querySelector(tabId === "#" ? "body" : tabId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] lg:w-auto mx-auto p-[6px] h-11 lg:h-14 rounded-full bg-black backdrop-blur-md bg-opacity-70 overflow-hidden shadow-lg transition-all duration-300 ${shake ? "animate-shake" : ""
        }`}
    >
      <nav
        ref={navRef}
        className="flex items-center h-full text-white rounded-full w-full relative overflow-x-auto scrollbar-hide"
      >
        <div
          className="absolute top-0 bottom-0 bg-orange-500 rounded-full transition-all duration-300"
          style={{ ...trackerStyle }}
        />

        {tabs.map(({ id, label }) => (
          <a
            key={id}
            href={id}
            ref={(el) => (tabRefs.current[id] = el)}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              if (id === "#resume") {
                const link = document.createElement("a");
                link.href = data.resume.resumePng;
                link.download = data?.resume?.name || "resume.png";
                link.click();
                if (data?.resume?.link) {
                  window.open(data.resume.link, "_blank");
                }

                setActiveTab("#");
                updateTracker("#");
                document.querySelector("body")?.scrollIntoView({ behavior: "smooth" });
              } else {
                handleClick(id);
                updateTracker(id);
              }
            }}

            className={`z-10 px-6 py-2 flex items-center justify-center whitespace-nowrap rounded-full transition-colors duration-300 ${activeTab === id
              ? "text-white font-semibold"
              : "text-gray-300"
              }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;