import { useForm } from "react-hook-form";
import axios from "../api/axios";

const AddOffer = ({ offers, partnerId, setPartnersOffers, partnersOffers }) => {
    const { handleSubmit, register } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.post("/partners_offers", {
                offer_id: data.offerId,
                partner_id: partnerId,
                active: true,
            });
            setPartnersOffers(...partnersOffers, response.data.offer);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(partnersOffers);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("offerId", { required: true })}>
                {offers.map((offer, index) => (
                    <option key={index} value={offer.id}>
                        {offer.offer_name}
                    </option>
                ))}
            </select>
            <button className="px-4 py-2 rounded bg-emerald-700 text-white" type="submit">
                Ajouter
            </button>
        </form>
    );
};

export default AddOffer;
