import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import OfferList from "../components/OfferList";
import StructuresList from "../components/StructuresList";

const User = () => {
    const { id } = useParams();
    const authenticatedUser = localStorage.getItem("user");
    const parsedAuthenticatedUser = JSON.parse(authenticatedUser);
    const [user, setUser] = useState();
    const [structures, setStructures] = useState([]);
    const [partnersOffers, setPartnersOffers] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/users/${id}`);
            setUser(response.data.user.infos);
            setStructures(response.data.user.structures);
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        const fetchOffers = async () => {
            const getPartnersOffers = await axios.get(`/users/${user.id}/offers`);
            setPartnersOffers(getPartnersOffers.data.offers);
            console.log(getPartnersOffers);
        };
        fetchOffers();
    }, [user]);

    if (parsedAuthenticatedUser?.right_id === 2) {
        return (
            <>
                {user && (
                    <div>
                        <h1>Bienvenue sur la page de l'utilisateur {user.partner_name}</h1>
                        {partnersOffers && <OfferList offers={partnersOffers} />}
                        <StructuresList structures={structures} />
                    </div>
                )}
            </>
        );
    }
    return (
        <>
            <div>
                <h1>Veuillez vous connecter</h1>
            </div>
        </>
    );
};
export default User;
