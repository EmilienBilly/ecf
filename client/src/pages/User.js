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
    const [userOffers, setUserOffers] = useState();

    useEffect(() => {
        const fetchDataPartner = async () => {
            const response = await axios.get(`/users/partner/${id}`);
            setUser(response.data.user.infos);
            setStructures(response.data.user.structures);
        };

        const fetchDataStructure = async () => {
            const response = await axios.get(`/users/structure/${id}`);
            setUser(response.data.user.infos);
        };
        if (parsedAuthenticatedUser.right_id === 2) {
            fetchDataPartner();
        } else {
            fetchDataStructure();
        }
    }, [id, parsedAuthenticatedUser.right_id]);

    useEffect(() => {
        const fetchOffersPartner = async () => {
            const results = await axios.get(`/users/partner/${user.id}/offers`);
            setUserOffers(results.data.offers);
        };
        const fetchOffersStructure = async () => {
            const results = await axios.get(`/users/partner/${user.partner_id}/offers`);
            setUserOffers(results.data.offers);
        };
        if (parsedAuthenticatedUser.right_id === 2) {
            fetchOffersPartner();
        } else {
            fetchOffersStructure();
        }
    }, [user, parsedAuthenticatedUser.right_id]);

    if (parsedAuthenticatedUser?.right_id === 2) {
        return (
            <>
                {user && (
                    <div>
                        <PageTitle title={user.partner_name} />
                        <div className="flex flex-col mt-2 mb-2">
                            <div className="flex gap-2">
                                <p className="font-semibold">Adresse email : </p>
                                <p>{user.user_email}</p>
                            </div>
                            <div className="flex gap-2">
                                <p className="font-semibold">Status :</p>
                                <p>{user.partner_active ? "Actif" : "Inactif"}</p>
                            </div>
                        </div>
                        {userOffers && <OfferList offers={userOffers} />}
                        <StructuresList structures={structures} />
                    </div>
                )}
            </>
        );
    }
    return (
        <>
            {user && (
                <div>
                    <PageTitle title={user.struct_name} />
                    <div className="flex flex-col mt-2 mb-2">
                        <div className="flex gap-2">
                            <p className="font-semibold">Franchise :</p>
                            <p>{user.partner_name}</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="font-semibold">Adresse email : </p>
                            <p>{user.user_email}</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="font-semibold">Adresse postale : </p>
                            <p>{user.struct_address}</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="font-semibold">Status :</p>
                            <p>{user.struct_active ? "Active" : "Inactive"}</p>
                        </div>
                    </div>
                    {userOffers && <OfferList offers={userOffers} />}
                </div>
            )}
        </>
    );
};
export default User;
