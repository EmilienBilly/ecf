import { useState } from "react";
import { useOutlet, useOutletContext } from "react-router-dom";
import axios from "../api/axios";
import PageTitle from "./PageTitle";

const OfferList = ({ partnersOffers, id, setPartnersOffers }) => {
    const role = useOutletContext();
    const [offer, setOffer] = useState();
    const [editOfferId, setEditOfferId] = useState(null);

    const updateStatus = async (offerId) => {
        try {
            const response = await axios.put(`/partners_offers/${id}/${offerId}`, {
                status: offer.offer_active ? false : true,
            });
            const reFetchOffers = await axios.get(`/partners_offers/${id}`);
            setPartnersOffers(reFetchOffers.data.partnerOffers);
            setOffer(response.data.offer);
            setEditOfferId(null);
        } catch (err) {
            console.log(err.message);
        }
    };

    const clickedOffer = (e, partnerOffer) => {
        e.preventDefault();
        setOffer(partnerOffer);
        if (editOfferId === null) {
            setEditOfferId(partnerOffer.id);
        } else {
            setEditOfferId(null);
        }
    };
    console.log(editOfferId);
    return (
        <>
            <PageTitle title={"Offres"} />
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                {partnersOffers &&
                    partnersOffers.map((partnersOffer, index) => (
                        <div key={index} className={`flex flex-col gap-2 ${role === 1 ? "justify-between" : "justify-center"} mb-2 bg-secondary-bg rounded-lg shadow px-4 py-2`}>
                            <div className="flex items-center justify-between">
                                <p className="font-semibold text-sm lg:text-lg tracking-tight text-white">{partnersOffer.offer_name}</p>
                                <div className={`rounded-full h-3 w-3 ${partnersOffer.offer_active ? "bg-emerald-700" : "bg-inactive-bg"}`}></div>
                            </div>
                            {role === 1 ? (
                                <div>
                                    <button
                                        className="text-white-text"
                                        onClick={(e) => {
                                            clickedOffer(e, partnersOffer);
                                        }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575q.837 0 1.412.575l1.4 1.4q.575.575.6 1.388q.025.812-.55 1.387ZM4 21q-.425 0-.712-.288Q3 20.425 3 20v-2.825q0-.2.075-.387q.075-.188.225-.338l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225q-.188.075-.388.075Z"
                                            />
                                        </svg>
                                    </button>
                                    {editOfferId === partnersOffer.id ? (
                                        <button
                                            className={`p-1 rounded text-sm text-white ${partnersOffer.offer_active ? "bg-inactive-bg" : "bg-emerald-500"}`}
                                            onClick={() => {
                                                updateStatus(partnersOffer.id);
                                            }}>
                                            Changer
                                        </button>
                                    ) : null}
                                </div>
                            ) : null}
                        </div>
                    ))}
            </div>
        </>
    );
};

export default OfferList;
