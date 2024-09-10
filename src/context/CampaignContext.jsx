// CampaignContext.jsx
import { createContext, useState } from 'react';

const CampaignContext = createContext();

export const CampaignProvider = ({ children }) => {
    const [campaigns, setCampaigns] = useState([]);
    return (
        <CampaignContext.Provider value={campaigns}>
            {children}
        </CampaignContext.Provider>
    );
};

export default CampaignContext;
