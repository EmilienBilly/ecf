import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import OfferList from "../components/OfferList";
import StructuresList from "../components/StructuresList";
import PageTitle from "../components/PageTitle";

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
    console.log(user);
    if (parsedAuthenticatedUser?.right_id === 2) {
        return (
            <>
                {user && (
                    <div>
                        <PageTitle title={user.partner_name} />
                        <div className="flex flex-col mt-2 mb-2">
                            <div className="flex gap-2">
                                <p className="font-semibold">Adresse Email : </p>
                                <p>{user.user_email}</p>
                            </div>
                            <div className="flex gap-2">
                                <p className="font-semibold">Status :</p>
                                <p>{user.partner_active ? "Actif" : "Inactif"}</p>
                            </div>
                        </div>
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
