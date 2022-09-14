import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import AddButton from "../components/AddButton";
import AddOffer from "../components/AddOffer";
import EditableInfos from "../components/EditableInfos";
import NewStructureModal from "../components/NewStructureModal";
import PageTitle from "../components/PageTitle";
import ReadInfos from "../components/ReadInfos";
import StructuresList from "../components/StructuresList";

const PartnerDetails = () => {
    const { id } = useParams();
    const [partner, setPartner] = useState([]);
    const [structures, setStructures] = useState([]);
    const [edit, setEdit] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [rights, setRights] = useState([]);
    const [offers, setOffers] = useState([]);
    const [partnersOffers, setPartnersOffers] = useState([]);

    const handleEditClick = (e, edit) => {
        e.preventDefault();
        setEdit(!edit);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/partners/${id}`);
            setPartner(response.data.partner);
            setStructures(response.data.structures);

            const rightsResponse = await axios.get("/partners/rights");
            setRights(rightsResponse.data.rights);

            const getOffers = await axios.get("/offers");
            setOffers(getOffers.data.offers);

            const offerResponse = await axios.get(`/partners_offers/${id}`);
            setPartnersOffers(offerResponse.data.offers);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="lg:flex min-h-screen bg-main-bg relative z-0 overflow-auto">
            <div className="w-11/12 xl:w-1/2 mx-auto">
                <div className="flex justify-between">
                    <PageTitle title="Détails du partenaire" />
                    <AddButton setOpenModal={setOpenModal} title={"Ajouter une structure"} />
                </div>

                {edit ? <EditableInfos partner={partner} setPartner={setPartner} id={id} handleEditClick={handleEditClick} setEdit={setEdit} edit={edit} /> : <ReadInfos partner={partner} handleEditClick={handleEditClick} />}
                <div>
                    <h2>DROIT</h2>
                    {partnersOffers.map((partnerOffer, index) => (
                        <span>{partnerOffer.id}</span>
                    ))}
                </div>
                <AddOffer offers={offers} partnerId={id} setPartnersOffers={setPartnersOffers} partnersOffers={partnersOffers} />
                {structures && <StructuresList structures={structures} />}
            </div>

            <NewStructureModal open={openModal} structures={structures} setStructures={setStructures} rights={rights} onClose={() => setOpenModal(false)} partnerId={id} />
        </div>
    );
};

export default PartnerDetails;
