import { useState } from "react";
import axios from "../api/axios";
import { useForm } from "react-hook-form";

const Modal = ({ open, setOpenModal, rights, searchResults, setSearchResults }) => {
    const [confirm, setConfirm] = useState(false);
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm();

    const onClose = () => {
        setOpenModal(false);
        setConfirm(false);
        reset();
    };
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const right = rights.filter((right) => right.right_name === "partner");
            const response = await axios.post("/partners", {
                name: data.name,
                email: data.email,
                password: data.password,
                active: data.active,
                right_id: right[0].id,
            });

            // await axios.post("/mail/send", {
            //     user_email: data.email,
            //     user_password: data.password,
            // });

            setSearchResults([...searchResults, response.data.data.partner]);
            onClose();
        } catch (err) {}
    };

    if (!open) return null;

    return (
        <>
            <div className="bg-half-transparent fixed inset-0 z-50">
                <div className="flex h-screen justify-center items-center">
                    <div className="flex flex-col w-80 lg:w-1/4 justify-center bg-main-bg py-4 px-8 rounded-md">
                        <span className="text-center mb-4 font-semibold">Ajouter un partenaire</span>
                        <div className="flex flex-col">
                            <form className="flex flex-col text-md" onSubmit={handleSubmit(onSubmit)}>
                                <input className="mb-4 p-1.5 rounded" type="text" placeholder="Nom" {...register("name", { required: true })} />
                                {errors.name && <p className="text-red-500">Veuillez choisir un nom</p>}
                                <input className="mb-4 p-1.5 rounded" type="text" placeholder="Email" {...register("email", { required: true })} />
                                {errors.email && <p className="text-red-500">Veuillez choisir une adresse email</p>}
                                <input className="mb-4 p-1.5 rounded" type="text" placeholder="Mot de passe" {...register("password", { required: true })} />
                                {errors.password && <p className="text-red-500">Veuillez choisir un mot de passe</p>}
                                <select className="mb-4 p-2 rounded font-semibold" name="status" id="status-select" {...register("active")}>
                                    <option value="true">Actif</option>
                                    <option value="false">Inactif</option>
                                </select>
                                {confirm === true ? (
                                    <div>
                                        <p className="text-center">Souhaitez vous ajouter ce partenaire ?</p>
                                        <div className="flex justify-center mt-2">
                                            <button className="px-4 py-2 rounded bg-emerald-700 text-white" type="submit">
                                                Confirmer
                                            </button>
                                            <button className="px-4 ml-4 rounded bg-red-700 text-white" onClick={onClose}>
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
                                        <button className="px-4 ml-4 rounded bg-red-700 text-white" onClick={onClose}>
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

export default Modal;
