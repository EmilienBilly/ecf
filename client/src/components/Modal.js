const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <>
            <div className="bg-half-transparent fixed inset-0 z-50">
                <div className="flex h-screen justify-center items-center">
                    <div className="flex flex-col w-80 lg:w-96 justify-center bg-white py-4 px-8 rounded-md">
                        <span className="text-center mb-4 font-semibold">Ajouter un partenaire</span>
                        <button></button>
                        <div className="flex flex-col">
                            <form method="post" className="flex flex-col text-md">
                                <input className="mb-4 p-2 bg-main-bg rounded" type="text" placeholder="Nom" />
                                <input className="mb-4 p-2 bg-main-bg rounded" type="text" placeholder="Email" />
                                <input className="mb-4 p-2 bg-main-bg rounded" type="text" placeholder="Mot de passe" />
                                <select className="mb-4 p-2 bg-main-bg rounded" name="status" id="status-select">
                                    <option value="TRUE">Actif</option>
                                    <option value="FALSE">Inactif</option>
                                </select>
                                <div className="flex justify-center">
                                    <button className="px-4 py-2 rounded bg-primary-button text-white">Ajouter</button>
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
