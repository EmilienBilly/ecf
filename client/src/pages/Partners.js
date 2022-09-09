import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import List from "../components/List";
import PageTitle from "../components/PageTitle";
import Modal from "../components/Modal";
import axios from "../api/axios";

const Partners = () => {
    const [openModal, setOpenModal] = useState(false);
    const [rights, setRights] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/rights");
            setRights(response.data.rights);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(rights);
    return (
        <>
            <div className="h-full bg-main-bg">
                <Navbar />
                <div className="w-11/12 xl:w-1/2 mx-auto">
                    <div className="">
                        <PageTitle title="Partenaires" />
                    </div>
                    <div>
                        <button type="button" className="align-self-center font-semibold text-xs md:text-base text-white bg-emerald-700 px-4 py-2 rounded shadow" onClick={() => setOpenModal(true)}>
                            Ajouter
                        </button>
                        <List />
                    </div>
                </div>
                <Modal open={openModal} onClose={() => setOpenModal(false)} />
            </div>
        </>
    );
};

export default Partners;
