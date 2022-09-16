import { useForm } from "react-hook-form";

const AddStructuresOffers = ({ partnerOffers }) => {
    const { handleSubmit, register } = useForm();

    const onSubmit = async (data) => {};
    return (
        <form className="flex justify-between" onSubmit={handleSubmit(onSubmit)}>
            <select className="w-2/3 lg:w-1/3 mr-2 p-2 bg-white rounded" {...register("offerId", { required: true })}>
                {partnerOffers &&
                    partnerOffers.map((partnerOffer, index) => (
                        <option key={index} value={partnerOffer.id}>
                            {partnerOffer.offer_name}
                        </option>
                    ))}
            </select>
            <button className="px-4 py-2 rounded bg-emerald-700 text-white" type="submit">
                Ajouter
            </button>
        </form>
    );
};

export default AddStructuresOffers;
