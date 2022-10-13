import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import axios from "../api/axios";
import AddButton from "../components/AddButton";
import AddOffer from "../components/AddOffer";
import EditableInfos from "../components/EditableInfos";
import NewStructureModal from "../components/NewStructureModal";
import OfferList from "../components/OfferList";
import PageTitle from "../components/PageTitle";
import ReadInfos from "../components/ReadInfos";
import StructuresList from "../components/StructuresList";
import ConfirmModal from "../components/ConfirmModal";

const PartnerDetails = () => {
    const { id } = useParams();
    const [edit, setEdit] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openConfirmModal, setOpenConfirmModal] = useState(false);

    const [partner, setPartner] = useState({});
    const [structures, setStructures] = useState([]);
    const [rights, setRights] = useState([]);
    const [offers, setOffers] = useState([]);
    const [partnersOffers, setPartnersOffers] = useState([]);

    const role = useOutletContext();

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
        setOpenConfirmModal(false);
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

    return (
        <>
            <div className="flex justify-between">
                <div className="flex items-center gap-6">
                    <PageTitle title={partner.partner_name} />
                    <div>
                        <button className={`mt-2 p-1 rounded text-sm text-white ${partner.partner_active ? "bg-inactive-bg" : "bg-emerald-500"}`} onClick={() => setOpenConfirmModal(true)}>
                            {partner.partner_active ? "Désactiver" : "Activer"}
                        </button>
                    </div>
                </div>
            </div>

            {edit ? <EditableInfos partner={partner} setPartner={setPartner} id={id} setEdit={setEdit} edit={edit} /> : <ReadInfos partner={partner} handleEditClick={handleEditClick} role={role} />}
            {partnersOffers && <OfferList partnersOffers={partnersOffers} role={role} id={id} setPartnersOffers={setPartnersOffers} />}
            <AddOffer offers={offers} partnerId={id} partnersOffers={partnersOffers} setPartnersOffers={setPartnersOffers} />

            <div className="flex items-center justify-between mt-4">
                <PageTitle title={"Structures"} />
                <AddButton setOpenModal={setOpenModal} />
            </div>

            {structures && <StructuresList structures={structures} role={role} />}
            <NewStructureModal open={openModal} structures={structures} setStructures={setStructures} rights={rights} onClose={() => setOpenModal(false)} partnerId={id} />
            <ConfirmModal open={openConfirmModal} onClose={() => setOpenConfirmModal(false)} setStatus={setStatus} />
        </>
    );
};

export default PartnerDetails;
