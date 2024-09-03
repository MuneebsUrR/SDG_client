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

const InfoBox = ({stat,description}) => {
    return (
        <div className="relative flex items-center justify-center bg-gradient-to-r from-yellow-100 via-red-50 to-pink-100 rounded-lg py-10 px-6 mt-12 ">
            {/* Circle */}
            <div className="absolute top-2 text-center bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white  font-bold text-lg">{stat}</span>
            </div>
            {/* Text */}
            <div className="flex-grow text-center mt-10">
                <p className="text-black">
                    {description}
                </p>
            </div>
        </div>
    );
};

const Tabs = ({ overview,facts, targets, id }) => {
    const [selectedTab, setSelectedTab] = useState("OVERVIEW");

    const tabs = [
        { text: "OVERVIEW", icon: <ListIcon /> },
        { text: "FACTS & FIGURES", icon: <AutoGraphIcon /> },
        { text: "TARGETS", icon: <CrisisAlertIcon /> },
    ];

    const content = {
        "FACTS & FIGURES": (
            <div>
                <h1 className='mt-5 mb-10 font-bold text-3xl'>Did You Know These Facts About SDG {id}?</h1>
                {facts.map((fact,index)=>{
                    return(
                        <div key={index}>
                            <InfoBox stat={fact.stat} description={fact.description} />
                        </div>
                    )
                })}
                
            </div>
        ),
        "OVERVIEW": <div>
            {overview.map((item, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} my-5`}>
                    <div style={{ flex: '1', padding: '10px' }}>
                        <img className='object-cover w-full' src={item.imgurl} alt="overview" />
                    </div>
                    <div className='text-center md:text-left max-w-2xl' style={{ flex: '2', padding: '20px' }}>
                        <div dangerouslySetInnerHTML={{ __html: item.text }} />
                    </div>
                </div>
            ))}
        </div>,
        "TARGETS": <div><h2 className="text-3xl font-bold mt-5 mb-10">Targets For SDG {id} </h2>
        {targets.map((target,index)=>{
                    return(
                        <div key={index}>
                            <InfoBox stat={target.heading} description={target.description} />
                        </div>
                    )
                })}
        </div>
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-row md:flex-col" style={{ overflowX: 'auto', scrollbarWidth: 'none' }}>
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