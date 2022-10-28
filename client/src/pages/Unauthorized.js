import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    return (
        <div className="flex flex-col items-center gap-2 text-white-text">
            <h1 className="text-2xl mb-4">Utilisateur non autorisé</h1>
            <p className="text-center">Vous n'avez pas les droits néscessaires pour accéder à cette page</p>
            <button className="bg-button-bg p-2 rounded-md" onClick={goBack}>
                Page précédente
            </button>
        </div>
    );
};
export default Unauthorized;
