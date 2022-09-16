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

    const [partner, setPartner] = useState([]);
    const [structures, setStructures] = useState([]);
    const [rights, setRights] = useState([]);
    const [offers, setOffers] = useState([]);
    const [partnersOffers, setPartnersOffers] = useState([]);

    const handleEditClick = (e, edit) => {
        e.preventDefault();
        setEdit(!edit);
    };

    useEffect(() => {
        const fetchData = async () => {
            const getPartnersOffers = await axios.get(`/partners_offers/${id}`);
            setPartnersOffers(getPartnersOffers.data.offers);

            const getPartners = await axios.get(`/partners/${id}`);
            setPartner(getPartners.data.partner);
            setStructures(getPartners.data.structures);

            const getRights = await axios.get("/partners/rights");
            setRights(getRights.data.rights);

            const getOffers = await axios.get("/offers");
            setOffers(getOffers.data.offers);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="lg:flex min-h-screen bg-main-bg relative z-0 overflow-auto">
            <div className="w-11/12 xl:w-1/2 mx-auto">
                <div className="flex justify-between">
                    <PageTitle title={partner.partner_name} />
                    <AddButton setOpenModal={setOpenModal} title={"Ajouter une structure"} />
                </div>
                {edit ? <EditableInfos partner={partner} setPartner={setPartner} id={id} handleEditClick={handleEditClick} setEdit={setEdit} edit={edit} /> : <ReadInfos partner={partner} handleEditClick={handleEditClick} />}
                {partnersOffers && <OfferList offers={partnersOffers} />}
                <AddOffer offers={offers} partnerId={id} setOffers={setPartnersOffers} />
                {structures && <StructuresList structures={structures} />}
            </div>

            <NewStructureModal open={openModal} structures={structures} setStructures={setStructures} rights={rights} onClose={() => setOpenModal(false)} partnerId={id} />
        </div>
    );
};

export default PartnerDetails;
