import { useForm } from "react-hook-form";
import axios from "../api/axios";

const AddOffer = ({ offers, partnerId, setPartnersOffers }) => {
    const { handleSubmit, register } = useForm({
        defaultValues: {},
    });

    const onSubmit = async (data) => {
        try {
            await axios.post("/partners_offers", {
                offer_id: data.offerId,
                partner_id: partnerId,
                active: true,
            });
            const getPartnersOffers = await axios.get(`/partners_offers/${partnerId}`);
            setPartnersOffers(getPartnersOffers.data.partnerOffers);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form className="lg:grid grid-cols-3 gap-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-2">
                <select className="w-full p-2 text-sm bg-white rounded" {...register("offerId", { required: true })}>
                    <option value="" disabled selected>
                        Sélectionner une offre
                    </option>
                    {offers.map((offer, index) => (
                        <option key={index} value={offer.id}>
                            {offer.offer_name}
                        </option>
                    ))}
                </select>
                <button className="px-4 py-2 rounded text-white bg-button-bg" type="submit">
                    Ajouter
                </button>
            </div>
        </form>
    );
};

export default AddOffer;
