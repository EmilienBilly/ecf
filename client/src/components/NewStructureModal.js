import axios from "../api/axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

const NewStructureModal = ({ rights, open, onClose, structures, setStructures, partnerId }) => {
    const [confirm, setConfirm] = useState(false);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const right = rights.filter((right) => right.right_name === "structure");
            const response = await axios.post("/structures", {
                name: data.name,
                address: data.address,
                email: data.email,
                password: data.password,
                active: data.active,
                right_id: right[0].id,
                partner_id: partnerId,
            });
            setStructures([...structures, response.data.data.structure]);

            // await axios.post("/mail/send", {
            //     user_email: data.email,
            //     user_password: data.password,
            // });

            onClose();
        } catch (err) {
            console.log(err.message);
        }
    };

    if (!open) return null;

    return (
        <>
            <div className="bg-half-transparent fixed inset-0 z-50">
                <div className="flex h-screen justify-center items-center">
                    <div className="flex flex-col w-80 lg:w-1/4 justify-center bg-main-bg py-4 px-8 rounded-md">
                        <span className="text-center mb-4 font-semibold">Ajouter une structure</span>
                        <div className="flex flex-col">
                            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                                <input className="mb-4 p-2 rounded" type="text" placeholder="Nom" {...register("name", { required: true })} />
                                {errors.name && <p className="text-red-500">Veuillez choisir un nom</p>}
                                <input className="mb-4 p-2 rounded" type="text" placeholder="Adresse" {...register("address", { required: true })} />
                                {errors.email && <p className="text-red-500">Veuillez choisir une adresse email</p>}
                                <input className="mb-4 p-2 rounded" type="text" placeholder="Email" {...register("email", { required: true })} />
                                {errors.email && <p className="text-red-500">Veuillez choisir une adresse email</p>}
                                <input className="mb-4 p-2 rounded" type="text" placeholder="Mot de passe" {...register("password", { required: true })} />
                                {errors.password && <p className="text-red-500">Veuillez choisir un mot de passe</p>}
                                <select className="mb-4 p-2 rounded" name="status" id="status-select" {...register("active")}>
                                    <option disabled selected>
                                        S??lectionner le status
                                    </option>
                                    <option value="true">Active</option>
                                    <option value="false">Inactive</option>
                                </select>
                                {confirm === true ? (
                                    <div>
                                        <p className="text-center text-white-text">Souhaitez vous ajouter cette nouvelle structure ?</p>
                                        <div className="flex justify-center mt-4">
                                            <button className="px-4 py-2 rounded bg-emerald-700 text-white" type="submit">
                                                Confirmer
                                            </button>
                                            <button className="px-4 ml-4 rounded bg-inactive-bg text-white" onClick={onClose}>
                                                Annuler
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex justify-center">
                                        <button
                                            className="px-4 py-2 rounded bg-emerald-700 text-white"
                                            onClick={() => {
                                                setConfirm(true);
                                            }}>
                                            Ajouter
                                        </button>
                                        <button className="px-4 ml-4 rounded bg-inactive-bg text-white" onClick={onClose}>
                                            Annuler
                                        </button>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewStructureModal;
