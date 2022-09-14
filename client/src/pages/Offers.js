import { useEffect, useState } from "react";
import axios from "../api/axios";
import NewOfferModal from "../components/NewOfferModal";

import OfferCard from "../components/OfferCard";
import PageTitle from "../components/PageTitle";
import AddButton from "../components/AddButton";

const Offers = () => {
    const [offers, setOffers] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/offers");
            setOffers(response.data.offers);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(offers);
    return (
        <div className="min-h-screen bg-main-bg relative z-0 overflow-auto">
            <div className="w-11/12 xl:w-1/2 mx-auto">
                <div className="flex justify-between">
                    <PageTitle title="Offres & Services" />
                    <AddButton setOpenModal={setOpenModal} title={"Ajouter"} />
                </div>
                {offers && <OfferCard offers={offers} />}
            </div>
            <NewOfferModal open={openModal} offers={offers} setOffers={setOffers} onClose={() => setOpenModal(false)} />
        </div>
    );
};

export default Offers;
