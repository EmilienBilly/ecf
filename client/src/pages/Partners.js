import { useState } from "react";
import Navbar from "../components/Navbar";
import List from "../components/List";
import PageTitle from "../components/PageTitle";
import Modal from "../components/Modal";

const Partners = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Navbar />
            <div className="w-full">
                <div className="bg-main-bg relative overflow-auto lg:min-w-7xl">
                    <div className="flex items-center px-3">
                        <PageTitle title="Partenaires" />
                        <div>
                            <button type="button" className="align-self-center font-semibold text-white bg-emerald-700 px-4 py-2 rounded shadow" onClick={() => setOpenModal(true)}>
                                Ajouter
                            </button>
                        </div>
                    </div>
                    <List />
                </div>
                <Modal open={openModal} onClose={() => setOpenModal(false)} />
            </div>
        </>
    );
};

export default Partners;
