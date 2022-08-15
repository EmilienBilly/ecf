const Modal = () => {
    return (
        <>
            <div className="bg-half-transparent">
                <div>
                    <h1>Ajouter un partenaire</h1>
                </div>
                <div>
                    <form method="post" className="flex flex-col">
                        <input type="text" placeholder="Nom" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Mot de passe" />
                        <select name="status" id="status-select">
                            <option value="TRUE">Actif</option>
                            <option value="FALSE">Inactif</option>
                        </select>
                        <button>Ajouter</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;
