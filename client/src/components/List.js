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
                <div className="h-full flex flex-col justify-center">
                    <table class="table-auto w-full">
                        <thead className="text-sm text-gray-700 uppercase">
                            <tr>
                                <th></th>
                                <th className="font-normal">Id</th>
                                <th className="font-normal">Nom</th>
                                <th className="font-normal">Email</th>
                                <th className="font-normal">Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            {partners.map((partner, index) => (
                                <tr key={index} className="text-center font-medium text-xs sm:text-lg h-14 shadow hover:bg-light-gray active:bg-light-gray">
                                    <td>{partner.partner_logo_url}</td>
                                    <td>{partner.id}</td>
                                    <td>{partner.partner_name}</td>
                                    <td>{partner.partner_email}</td>
                                    {partner.partner_active ? (
                                        <td>
                                            <div className="flex gap-2 justify-center items-center">
                                                <p className="rounded-full h-3 w-3 bg-green-600"></p>
                                                <p>Actif</p>
                                            </div>
                                        </td>
                                    ) : (
                                        <td>
                                            <div className="flex gap-2 justify-center items-center">
                                                <p className="rounded-full h-3 w-3 bg-red-600"></p>
                                                <p>Inactif</p>
                                            </div>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};

export default List;
