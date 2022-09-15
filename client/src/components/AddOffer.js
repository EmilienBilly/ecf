import { useForm } from "react-hook-form";
import axios from "../api/axios";

const AddOffer = ({ offers, partnerId, partnersOffers, setPartnersOffers }) => {
    const { handleSubmit, register } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("/partners_offers", {
                offer_id: data.offerId,
                partner_id: partnerId,
                active: true,
            });
            console.log(response);
            setPartnersOffers([...partnersOffers, response.data.offer]);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form className="flex justify-between" onSubmit={handleSubmit(onSubmit)}>
            <select className="w-2/3 lg:w-1/3 mr-2 p-2 bg-white rounded" {...register("offerId", { required: true })}>
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
