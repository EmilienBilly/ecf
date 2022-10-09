import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import AddButton from "../components/AddButton";
import AddOffer from "../components/AddOffer";
import EditableInfos from "../components/EditableInfos";
import NewStructureModal from "../components/NewStructureModal";
import OfferList from "../components/OfferList";
import PageTitle from "../components/PageTitle";
import ReadInfos from "../components/ReadInfos";
import StructuresList from "../components/StructuresList";

const PartnerDetails = () => {
    const { id } = useParams();
    const [edit, setEdit] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const [partner, setPartner] = useState({});
    const [structures, setStructures] = useState([]);
    const [rights, setRights] = useState([]);
    const [offers, setOffers] = useState([]);
    const [partnersOffers, setPartnersOffers] = useState([]);

    const handleEditClick = (e, edit) => {
        e.preventDefault();
        setEdit(!edit);
    };

    const setStatus = async () => {
        const response = await axios.put(`/partners/${id}/status`, {
            status: partner.partner_active ? false : true,
        });
        const reFetchOffers = await axios.get(`/partners_offers/${id}`);
        setPartnersOffers(reFetchOffers.data.partnerOffers);
        setPartner({ ...partner, partner_active: response.data.partner.partner_active });
        console.log(response);
    };

    useEffect(() => {
        const fetchData = async () => {
            const getPartnersOffers = await axios.get(`/partners_offers/${id}`);
            setPartnersOffers(getPartnersOffers.data.partnerOffers);

            const getPartners = await axios.get(`/partners/${id}`);
            setPartner(getPartners.data.partner);
            setStructures(getPartners.data.structures);

            const getRights = await axios.get("/partners/rights");
            setRights(getRights.data.rights);

            const getOffers = await axios.get("/offers");
            setOffers(getOffers.data.offers);
        };
        fetchData();
    }, [id]);
    console.log(partnersOffers);
    return (
        <>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div>
                        <PageTitle title={partner.partner_name} />
                    </div>
                    <div>
                        <button className="px-4 py-2 rounded text-white bg-button-bg" onClick={setStatus}>
                            {partner.partner_active ? "Désactiver" : "Activer"}
                        </button>
                    </div>
                </div>
            </div>

            {edit ? <EditableInfos partner={partner} setPartner={setPartner} id={id} handleEditClick={handleEditClick} setEdit={setEdit} edit={edit} /> : <ReadInfos partner={partner} handleEditClick={handleEditClick} />}
            {partnersOffers && <OfferList partnersOffers={partnersOffers} />}
            <AddOffer offers={offers} partnerId={id} partnersOffers={partnersOffers} setPartnersOffers={setPartnersOffers} />

            <div className="flex items-center justify-between mt-4">
                <PageTitle title={"Structures"} />
                <AddButton setOpenModal={setOpenModal} />
            </div>

            {structures && <StructuresList structures={structures} />}
            <NewStructureModal open={openModal} structures={structures} setStructures={setStructures} rights={rights} onClose={() => setOpenModal(false)} partnerId={id} />
        </>
    );
};

export default PartnerDetails;
