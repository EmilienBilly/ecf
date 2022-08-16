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
            {partners && (
                <div className="min-w-screen min-h-screen flex items-center justify-center font-sans overflow-auto">
                    <div class="w-full lg:w-5/6">
                        <div class="bg-white shadow-md rounded m-2 overflow-auto">
                            <table class="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">Id</th>
                                        <th className="py-3 px-6 text-left">Nom</th>
                                        <th className="py-3 px-6 text-left">Email</th>
                                        <th className="py-3 px-6 text-center">Statut</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm lg:text-lg font-md">
                                    {partners.map((partner, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-6 text-left whitespace-nowrap">{partner.id}</td>
                                            <td className="py-3 px-6 text-left">{partner.partner_name}</td>
                                            <td className="py-3 px-6 text-left">{partner.partner_email}</td>
                                            {partner.partner_active ? (
                                                <td class="py-3 px-6 text-center">
                                                    <div className="flex gap-2 justify-center items-center">
                                                        <p className="rounded-full h-3 w-3 bg-primary-button"></p>
                                                        <p>Actif</p>
                                                    </div>
                                                </td>
                                            ) : (
                                                <td class="py-3 px-6 text-center">
                                                    <div className="flex gap-2 justify-center items-center">
                                                        <p className="rounded-full h-3 w-3 bg-secondary-button"></p>
                                                        <p>Inactif</p>
                                                    </div>
                                                </td>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default List;
