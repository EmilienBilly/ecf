import { useState } from "react";
import Navbar from "../components/Navbar";
import List from "../components/List";
import PageTitle from "../components/PageTitle";
import Modal from "../components/Modal";

const Partners = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <div className="flex relative bg-main-bg mx-auto">
                <Navbar />
                <div className="flex flex-col align-center justify-center bg-main-bg min-h-screen w-full ml-64">
                    <div className="flex flex-col h-[90%] m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl shadow-lg">
                        <div className="flex justify-between mb-16">
                            <PageTitle title="Partenaires" />
                            <div>
                                <button
                                    type="button"
                                    className="align-self-center font-semibold text-white bg-teal-600 px-4 py-2 rounded shadow"
                                    onClick={() => {
                                        setOpenModal(true);
                                    }}>
                                    Ajouter
                                </button>
                                {openModal && <Modal />}
                            </div>
                        </div>
                        <List />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Partners;
