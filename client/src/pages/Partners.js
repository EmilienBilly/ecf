import { useState } from "react";
import Navbar from "../components/Navbar";
import List from "../components/List";
import PageTitle from "../components/PageTitle";
import Modal from "../components/Modal";

const Partners = () => {
    const [openModal, setOpenModal] = useState(false);

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
