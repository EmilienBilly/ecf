import { useNavigate } from "react-router-dom";

const NotAdmin = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    return (
        <div className="">
            <h1>Utilisateur non autorisé</h1>
            <p>Vous n'avez pas les droits néscessaires pour accéder à cette page</p>
            <button onClick={goBack}>Page précédente</button>
        </div>
    );
};
export default NotAdmin;
