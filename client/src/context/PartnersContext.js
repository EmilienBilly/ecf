import { useState, createContext } from "react";

export const PartnersContext = createContext();

export const PartnersContextProvider = (props) => {
    const [partners, setPartners] = useState([]);

    const addPartners = (partner) => {
        setPartners([...partners, partner]);
    };

    return <PartnersContext.Provider value={{ partners, setPartners, addPartners }}>{props.children}</PartnersContext.Provider>;
};
