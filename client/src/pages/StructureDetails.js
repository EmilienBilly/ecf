import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import axios from "../api/axios";
import ReadInfoStructure from "../components/ReadInfoStructure";
import EditInfoStructure from "../components/EditInfoStructure";

const StructureDetails = () => {
    const role = useOutletContext();
    const [edit, setEdit] = useState(false);
    const { partnerId, structureId } = useParams();
    const [structure, setStructure] = useState([]);
    const [partnersOffers, setPartnersOffers] = useState([]);

    const handleEditClick = (e, edit) => {
        e.preventDefault();
        setEdit(!edit);
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
        <div className="lg:flex-grow">
            <PageTitle title={structure.struct_name} />
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
        </div>
    );
};

export default StructureDetails;
