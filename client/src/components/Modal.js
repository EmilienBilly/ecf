const Modal = () => {
    return (
        <>
            <div className="bg-half-transparent fixed inset-0 z-50">
                <div className="flex h-screen w-full justify-center items-center">
                    <div className="flex flex-col justify-center w-1/2 h-1/2 bg-white px-4 border-4 border-teal-800 rounded-xl">
                        <div className="mb-10">
                            <h1>Ajouter un partenaire</h1>
                        </div>
                        <div className="flex flex-col">
                            <form method="post" className="flex flex-col">
                                <input className="mb-6 h-14 bg-main-bg rounded" type="text" placeholder="Nom" />
                                <input className="mb-6 h-14 bg-main-bg rounded" type="text" placeholder="Email" />
                                <input className="mb-6 h-14 bg-main-bg rounded" type="text" placeholder="Mot de passe" />
                                <select className="mb-6 h-14 bg-main-bg rounded" name="status" id="status-select">
                                    <option value="TRUE">Actif</option>
                                    <option value="FALSE">Inactif</option>
                                </select>
                                <div className="flex">
                                    <button className="py-2 px-4 rounded bg-primary-button text-white font-semibold">Ajouter</button>
                                    <button className="py-2 px-4 ml-4 rounded bg-secondary-button text-white font-semibold">Annuler</button>
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
