import { useEffect, useState } from "react";
import axios from "../api/axios";

const List = () => {
    const [partners, setPartners] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/");
            setPartners(response.data.partners);
        };
        fetchData();
    }, []);
    return (
        <>
            {/* Conditional templating to avoid TypeError */}
            {partners && (
                <div class="flex flex-col space-y-2 w-[85%] m-auto">
                    {partners.map((partner, index) => (
                        <div key={index} class="item w-auto h-16">
                            <div>{partner.partner_id}</div>
                            <div>{partner.partner_name}</div>
                            <div>{partner.partner_logo_url}</div>
                            <div>{partner.partner_email}</div>
                            <div>{partner.partner_active.toString()}</div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default List;
