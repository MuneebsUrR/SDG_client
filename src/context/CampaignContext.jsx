// CampaignContext.jsx
import { createContext, useState,useEffect } from 'react';

const CampaignContext = createContext();

export const CampaignProvider = ({ children }) => {
    const [campaigns, setCampaigns] = useState([]);


    useEffect(() => {
     //fetch all campaigns
       const fetchData = async()=>{
        const response =  await fetch('https://sdg-server-nine.vercel.app/campaigns/get-all');
        const data = await response.json();
        //reversing the array to get the latest campaign first
        data.reverse();
        setCampaigns(data);

        
      
       }
        
         fetchData();
    }, [])
    

    return (
        <CampaignContext.Provider value={{campaigns, setCampaigns}}>
            {children}
        </CampaignContext.Provider>
    );
};

export default CampaignContext;
