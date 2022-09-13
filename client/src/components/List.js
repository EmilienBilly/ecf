import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { PartnersContext } from "../context/PartnersContext";

const List = () => {
    const { partners, setPartners } = useContext(PartnersContext);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/partners");
            setPartners(response.data.partners);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {partners && (
                <div class="mx-auto w-full">
                    <div class="mx-auto w-full">
                        {partners.map((partner, index) => (
                            <Link key={index} to={`/partners/${partner.id}`}>
                                <div class="bg-white shadow rounded-lg">
                                    <div className="flex flex-col p-4 mt-4 rounded-md">
                                        <div className=" w-3/4 flex flex-col mr-4">
                                            <p className="">{partner.partner_name}</p>
                                        </div>
                                        <div>
                                            {partner.partner_active ? (
                                                <div className="flex gap-2 items-center text-sm">
                                                    <p className="rounded-full h-3 w-3 bg-emerald-700"></p>
                                                    <p>Active</p>
                                                </div>
                                            ) : (
                                                <div className="flex gap-2 items-center text-sm">
                                                    <p className="rounded-full h-3 w-3 bg-secondary-button"></p>
                                                    <p>Inactive</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default List;
