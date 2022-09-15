import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import axios from "../api/axios";

const StructureDetails = () => {
    const { id } = useParams();
    const [structure, setStructure] = useState([]);
    const [offers, setOffers] = useState([]);
    const partnerId = structure.partner_id;
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/structures/${id}`);
            setStructure(response.data.structure);

            const getOffers = await axios.get(`/partners_offers/${partnerId}`);
            setOffers(getOffers.data.offers);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(offers);
    return (
        <div className="lg:flex min-h-screen bg-main-bg relative z-0 overflow-auto">
            <div className="lg:flex-grow">
                <div className="ml-4">
                    <PageTitle title={structure.struct_name} />
                </div>
                <p>{structure.struct_address}</p>
                <p>{structure.user_email}</p>
                {offers.map((offer) => (
                    <div key={offer.id}>
                        <p>{offer.offer_name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StructureDetails;
