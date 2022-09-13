import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import AddButton from "../components/AddButton";
import EditableInfos from "../components/EditableInfos";
import Navbar from "../components/Navbar";
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

    const handleEditClick = (e, edit) => {
        e.preventDefault();
        setEdit(!edit);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/partners/${id}`);
            const rightsResponse = await axios.get("/partners/rights");
            setPartner(response.data.partner);
            setStructures(response.data.structures);
            setRights(rightsResponse.data.rights);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(structures);
    return (
        <>
            <div className="h-screen bg-main-bg">
                <Navbar />
                <div className="w-11/12 xl:w-1/2 mx-auto">
                    <PageTitle title="Détails du partenaire" />
                    {edit ? <EditableInfos partner={partner} setPartner={setPartner} id={id} handleEditClick={handleEditClick} setEdit={setEdit} edit={edit} /> : <ReadInfos partner={partner} handleEditClick={handleEditClick} />}
                    <AddButton setOpenModal={setOpenModal} title={"Ajouter une structure"} />
                    {structures && <StructuresList structures={structures} />}
                </div>
                <NewStructureModal open={openModal} rights={rights} onClose={() => setOpenModal(false)} />
            </div>
        </>
    );
};

export default PartnerDetails;
