import React, { useState } from 'react';
import ListIcon from '@mui/icons-material/List';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';

const TabButton = ({ text, icon, isSelected, onClick }) => {
    const baseStyle = "flex items-center p-3 font-semibold text-secondary transition-all hover:brightness-110 relative cursor-pointer mb-2";
    const colorStyle = isSelected ? "bg-primary text-white" : "bg-buttonGray border";
    const shadowColor = isSelected ? "rgba(177, 0, 74)" : "rgba(35, 3, 110)";
    const widthStyle = isSelected ? "w-52" : "w-48";

    return (
        <div className="p-3" onClick={onClick}>
            <div
                className={`${baseStyle} ${colorStyle} ${widthStyle}`}
                style={{
                    boxShadow: `-5px -5px 0 ${shadowColor}`,
                    borderRadius: '8px 0 0 0',
                }}
            >
                {icon && <span className="mr-2">{React.cloneElement(icon, { style: { fontSize: 24 } })}</span>}
                {text}
            </div>
        </div>
    );
};

const Tabs = () => {
    const [selectedTab, setSelectedTab] = useState("FACTS & FIGURES");

    const tabs = [
        { text: "OVERVIEW", icon: <ListIcon /> },
        { text: "FACTS & FIGURES", icon: <AutoGraphIcon /> },
        { text: "TARGETS", icon: <CrisisAlertIcon /> },
    ];

    const content = {
        "FACTS & FIGURES": (
            <div>
                <h2 className="text-2xl font-bold mb-4">Did You Know These Facts About SDG 2 - Zero Hunger?</h2>
                <div className="bg-yellow-100 p-4 rounded-lg relative">
                    <div className="absolute -top-6 -right-6 bg-yellow-500 rounded-full w-24 h-24 flex items-center justify-center text-white font-bold">
                        <div>
                            <div className="text-3xl">690</div>
                            <div className="text-sm">Million</div>
                        </div>
                    </div>
                    <p className="text-gray-800">
                        Current estimates are that nearly <span className="text-blue-600 font-semibold">690 million people</span> are hungry, or 8.9 percent of the world population - up by 10 million people in one year and by nearly 60 million in five years.
                    </p>
                </div>
            </div>
        ),
        "OVERVIEW": <div><h2 className="text-2xl font-bold">Overview Content</h2><p>Overview information would go here.</p></div>,
        "TARGETS": <div><h2 className="text-2xl font-bold">Targets Content</h2><p>Targets information would go here.</p></div>
    };

    return (
        <div className="flex">
            <div className="flex flex-col">
                {tabs.map((tab) => (
                    <TabButton
                        key={tab.text}
                        text={tab.text}
                        icon={tab.icon}
                        isSelected={selectedTab === tab.text}
                        onClick={() => setSelectedTab(tab.text)}
                    />
                ))}
            </div>
            <div className="flex-1 bg-[#FDF3F7] p-6 rounded-r-lg border-l-4 border-primary">
                {content[selectedTab]}
            </div>
        </div>
    );
};

export default Tabs;