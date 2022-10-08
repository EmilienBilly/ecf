import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import axios from "../api/axios";
import AddStructuresOffers from "../components/AddStructuresOffers";

const StructureDetails = () => {
    const { partnerId, structureId } = useParams();
    const [structureInfos, setStructureInfos] = useState([]);
    const [partnerOffers, setPartnerOffers] = useState([]);
    console.log(partnerOffers);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/structures/${structureId}`);
            setStructureInfos(response.data.structure);

            const getPartnersOffers = await axios.get(`/partners_offers/${partnerId}`);
            setPartnerOffers(getPartnersOffers.data.partnerOffers);
            console.log(getPartnersOffers);
        };
        fetchData();
    }, [partnerId, structureId]);
    return (
        <div className="lg:flex-grow">
            <div className="ml-4">
                <PageTitle title={structureInfos.struct_name} />
            </div>

            <div className="mb-4">
                <p>{structureInfos.struct_address}</p>
                <p>{structureInfos.user_email}</p>
            </div>
            <AddStructuresOffers partnerOffers={partnerOffers} structureId={structureId} />
        </div>
    );
};

export default StructureDetails;
