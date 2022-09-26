import { useEffect, useState } from "react";
import List from "../components/List";
import PageTitle from "../components/PageTitle";
import Modal from "../components/Modal";
import axios from "../api/axios";
import AddButton from "../components/AddButton";
import NotAdmin from "./NotAdmin";

const Partners = ({ role, user_id }) => {
    const [openModal, setOpenModal] = useState(false);
    const [rights, setRights] = useState([]);
    const [partner, setPartner] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/partners/rights");
            setRights(response.data.rights);

            const partnerResults = await axios.get("/partners/details", {
                userId: user_id,
            });
            setPartner(partnerResults.data.partner);
        };
        fetchData();
        console.log(partner);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (role !== 1) return <NotAdmin role={role} />;

    return (
        <>
            <div className="flex justify-between">
                <PageTitle title="Partenaires" />
                <AddButton setOpenModal={setOpenModal} title={"Ajouter"} />
            </div>
            <List />
            <Modal open={openModal} rights={rights} onClose={() => setOpenModal(false)} />
        </>
    );
};

export default Partners;
