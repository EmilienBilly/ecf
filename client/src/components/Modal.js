import { useContext, useState } from "react";
import axios from "../api/axios";
import { PartnersContext } from "../context/PartnersContext";

const Modal = ({ open, onClose }) => {
    const { addPartners } = useContext(PartnersContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [active, setActive] = useState(true);

    const formSubmit = async (e) => {
        // Avoid reloading the page and losing our state
        e.preventDefault();
        try {
            const response = await axios.post("/", {
                name: name,
                email: email,
                password: password,
                active: active,
            });
            //Function created in the context to add the newly added partner into partners state
            addPartners(response.data.data.job);
            console.log(response);
        } catch (err) {}
    };

    if (!open) return null;

    return (
        <>
            <div className="bg-half-transparent fixed inset-0 z-50">
                <div className="flex h-screen justify-center items-center">
                    <div className="flex flex-col w-80 lg:w-96 justify-center bg-white py-4 px-8 rounded-md">
                        <span className="text-center mb-4 font-semibold">Ajouter un partenaire</span>
                        <div className="flex flex-col">
                            <form className="flex flex-col text-md">
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="mb-4 p-2 bg-main-bg rounded"
                                    type="text"
                                    placeholder="Nom"
                                />
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mb-4 p-2 bg-main-bg rounded"
                                    type="text"
                                    placeholder="Email"
                                />
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mb-4 p-2 bg-main-bg rounded"
                                    type="text"
                                    placeholder="Mot de passe"
                                />
                                <select
                                    value={active}
                                    onChange={(e) => setActive(e.target.value)}
                                    className="mb-4 p-2 bg-main-bg rounded"
                                    name="status"
                                    id="status-select">
                                    <option value="true">Actif</option>
                                    <option value="false">Inactif</option>
                                </select>
                                <div className="flex justify-center">
                                    <button className="px-4 py-2 rounded bg-primary-button text-white" onClick={formSubmit} type="submit">
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

export default Modal;
