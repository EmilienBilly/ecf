import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
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
    console.log(rights);
    return (
        <>
            <div className="h-screen bg-main-bg">
                <Navbar />
                <div className="w-11/12 xl:w-1/2 mx-auto">
                    <div className="">
                        <PageTitle title="Partenaires" />
                    </div>
                    <AddButton setOpenModal={setOpenModal} title={"Ajouter"} />
                    <List />
                </div>
                <Modal open={openModal} rights={rights} onClose={() => setOpenModal(false)} />
            </div>
        </>
    );
};

export default Partners;
