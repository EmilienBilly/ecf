import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import axios from "../api/axios";

const StructureDetails = () => {
    const role = useOutletContext();
    const { partnerId, structureId } = useParams();
    const [structureInfos, setStructureInfos] = useState([]);
    const [partnersOffers, setPartnersOffers] = useState([]);
    console.log(partnersOffers);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/structures/${structureId}`);
            setStructureInfos(response.data.structure);

            const getPartnersOffers = await axios.get(`/partners_offers/${partnerId}`);
            setPartnersOffers(getPartnersOffers.data.partnerOffers);
            console.log(getPartnersOffers);
        };
        fetchData();
    }, [partnerId, structureId]);
    return (
        <div className="lg:flex-grow">
            <PageTitle title={structureInfos.struct_name} />

            <div className="mb-4">
                <p>{structureInfos.struct_address}</p>
                <p>{structureInfos.user_email}</p>
            </div>
            <PageTitle title={"Offres"} />
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                {partnersOffers &&
                    partnersOffers.map((partnersOffer, index) => (
                        <div key={index} className={`flex flex-col gap-2 ${role === 1 ? "justify-between" : "justify-center"} mb-2 bg-secondary-bg rounded-lg shadow px-4 py-2`}>
                            <div className="flex items-center justify-between">
                                <p className="font-semibold text-sm lg:text-lg tracking-tight text-white">{partnersOffer.offer_name}</p>
                                <div className={`rounded-full h-3 w-3 ${partnersOffer.offer_active ? "bg-emerald-700" : "bg-inactive-bg"}`}></div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default StructureDetails;
