import { useState } from "react";
import Navbar from "../components/Navbar";
import List from "../components/List";
import PageTitle from "../components/PageTitle";
import Modal from "../components/Modal";

const Partners = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className="lg:flex min-h-screen bg-main-bg relative z-0 overflow-auto">
                <Navbar />
                <div className="lg:flex-grow">
                    <div className="flex items-center px-3">
                        <PageTitle title="Partenaires" />
                        <div>
                            <button
                                type="button"
                                className="align-self-center font-semibold text-white bg-primary-button px-4 py-2 rounded shadow"
                                onClick={() => setOpenModal(true)}>
                                Ajouter
                            </button>
                        </div>
                    </div>
                    <List />
                </div>
            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
        </>
    );
};

export default Partners;
