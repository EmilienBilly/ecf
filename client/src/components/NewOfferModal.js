import axios from "../api/axios";
import { useForm } from "react-hook-form";

const NewOfferModal = ({ offers, setOffers, onClose, open }) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.post("/offers", {
                offerName: data.name,
                offerDescription: data.description,
            });
            setOffers([...offers, response.data.offer]);
            onClose();
        } catch (err) {
            console.log(err);
        }
    };

    if (!open) return null;

    return (
        <>
            <div className="bg-half-transparent fixed inset-0 z-50">
                <div className="flex h-screen justify-center items-center">
                    <div className="flex flex-col w-80 lg:w-1/4 justify-center bg-white py-4 px-8 rounded-md">
                        <span className="text-center mb-4 font-semibold">Nouveau service</span>
                        <div className="flex flex-col">
                            <form className="flex flex-col text-md" onSubmit={handleSubmit(onSubmit)}>
                                <input className="mb-4 p-2 bg-main-bg rounded" type="text" placeholder="Nom du service" {...register("name", { required: true })} />
                                {errors.name && <p className="text-red-500">Veuillez choisir un nom</p>}
                                <textarea className="mb-4 p-2 bg-main-bg rounded" placeholder="Description du service" {...register("description", { required: true })} />
                                {errors.description && <p className="text-red-500">Veuillez choisir une adresse email</p>}
                                <div className="flex justify-center">
                                    <button className="px-4 py-2 rounded bg-emerald-700 text-white" type="submit">
                                        Ajouter
                                    </button>
                                    <button className="px-4 ml-4 rounded bg-secondary-button text-white" onClick={onClose}>
                                        Annuler
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewOfferModal;
