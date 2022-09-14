import { useEffect, useState } from "react";
import List from "../components/List";
import PageTitle from "../components/PageTitle";
import Modal from "../components/Modal";
import axios from "../api/axios";
import AddButton from "../components/AddButton";

const Partners = () => {
    const [openModal, setOpenModal] = useState(false);
    const [rights, setRights] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/partners/rights");
            setRights(response.data.rights);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="lg:flex min-h-screen bg-main-bg relative z-0 overflow-auto">
            <div className="w-11/12 xl:w-1/2 mx-auto">
                <div className="flex justify-between">
                    <PageTitle title="Partenaires" />
                    <AddButton setOpenModal={setOpenModal} title={"Ajouter"} />
                </div>
                <List />
            </div>
            <Modal open={openModal} rights={rights} onClose={() => setOpenModal(false)} />
        </div>
    );
};

export default Partners;
