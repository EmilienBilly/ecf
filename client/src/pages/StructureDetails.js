import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import axios from "../api/axios";
import ReadInfoStructure from "../components/ReadInfoStructure";
import EditInfoStructure from "../components/EditInfoStructure";
import ConfirmModal from "../components/ConfirmModal";

const StructureDetails = () => {
    const role = useOutletContext();
    const [edit, setEdit] = useState(false);
    const { partnerId, structureId } = useParams();
    const [structure, setStructure] = useState([]);
    const [partnersOffers, setPartnersOffers] = useState([]);
    const [openConfirmModal, setOpenConfirmModal] = useState(false);

    const handleEditClick = (e, edit) => {
        e.preventDefault();
        setEdit(!edit);
    };

    const setStatus = async () => {
        await axios.put(`/structures/${structure.id}/status`, {
            status: structure.struct_active ? false : true,
        });
        const response = await axios.get(`/structures/${structureId}`);
        setStructure(response.data.structure);
        setOpenConfirmModal(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/structures/${structureId}`);
            setStructure(response.data.structure);

            const getPartnersOffers = await axios.get(`/partners_offers/${partnerId}`);
            setPartnersOffers(getPartnersOffers.data.partnerOffers);
            console.log(getPartnersOffers);
        };
        fetchData();
    }, [partnerId, structureId]);
    return (
        <>
            <div className="flex justify-between">
                <div className="flex items-center gap-6">
                    <PageTitle title={structure.struct_name} />
                    <div>
                        <button className={`mt-2 p-1 rounded text-sm text-white ${structure.struct_active ? "bg-inactive-bg" : "bg-emerald-500"}`} onClick={() => setOpenConfirmModal(true)}>
                            {structure.struct_active ? "Désactiver" : "Activer"}
                        </button>
                    </div>
                </div>
            </div>
            {edit ? <EditInfoStructure structure={structure} setStructure={setStructure} handleEditClick={handleEditClick} setEdit={setEdit} edit={edit} /> : <ReadInfoStructure structure={structure} role={role} handleEditClick={handleEditClick} />}

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
            <ConfirmModal open={openConfirmModal} onClose={() => setOpenConfirmModal(false)} setStatus={setStatus} />
        </>
    );
};

export default StructureDetails;
