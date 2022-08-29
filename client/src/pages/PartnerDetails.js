import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";

const PartnerDetails = () => {
    const { id } = useParams();
    const [partner, setPartner] = useState([]);
    const [structures, setStructures] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/${id}`);
            setPartner(response.data.partner);
            setStructures(response.data.structures);
        };
        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <div className="lg:flex min-h-screen bg-main-bg relative z-0 overflow-auto">
                <Navbar />
                <div className="lg:flex-grow">
                    <div className="ml-4">
                        <PageTitle title={partner.partner_name} />
                    </div>
                    <div className="h-screen flex flex-col justify-center items-center">
                        {structures.map((structure, index) => (
                            <div className="flex w-80 lg:w-96 justify-center bg-white py-4 px-2 mt-4 rounded-md">
                                <div className="h-full w-3/4 flex flex-col mr-4">
                                    <p className="">{structure.struct_name}</p>
                                    <p className="text-xs">{structure.struct_address}</p>
                                    <p className="text-xs">{structure.struct_email}</p>
                                </div>
                                {structure.struct_active ? (
                                    <div className="flex gap-2 justify-center items-center">
                                        <p className="rounded-full h-3 w-3 bg-primary-button"></p>
                                        <p>Active</p>
                                    </div>
                                ) : (
                                    <div className="flex gap-2 justify-center items-center">
                                        <p className="rounded-full h-3 w-3 bg-secondary-button"></p>
                                        <p>Inactive</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerDetails;
