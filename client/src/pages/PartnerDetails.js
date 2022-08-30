import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
            <Navbar />
            <div className="lg:flex min-h-screen w-screen bg-main-bg relative z-0 overflow-auto">
                <div className="w-4/5">
                    <div className="ml-4">
                        <PageTitle title={partner.partner_name} />
                    </div>
                    <div className="h-full w-full flex flex-col justify-center items-center lg:flex-row lg:flex-wrap">
                        {structures.map((structure, index) => (
                            <Link key={index} to={`/structures/${structure.id}`}>
                                <div className="flex w-80 lg:w-96 justify-center bg-white p-4 mt-4 rounded-md">
                                    <div className=" w-3/4 flex flex-col mr-4">
                                        <p className="">{structure.struct_name}</p>
                                    </div>
                                    <div className="w-1/4">
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
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerDetails;
