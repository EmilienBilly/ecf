import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import OfferList from "../components/OfferList";
import StructuresList from "../components/StructuresList";
import PageTitle from "../components/PageTitle";
import ReadInfos from "../components/ReadInfos";

const User = ({ role }) => {
    const { id } = useParams();
    const [user, setUser] = useState();
    const [structures, setStructures] = useState([]);
    const [userOffers, setUserOffers] = useState();
    console.log(userOffers);
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
        if (role === 2) {
            fetchDataPartner();
        } else {
            fetchDataStructure();
        }
    }, [id, role]);

    useEffect(() => {
        const fetchOffersPartner = async () => {
            const results = await axios.get(`/users/partner/${user.id}/offers`);
            setUserOffers(results.data.offers);
        };
        const fetchOffersStructure = async () => {
            const results = await axios.get(`/users/partner/${user.user_id}/offers`);
            setUserOffers(results.data.offers);
        };
        if (role === 2) {
            fetchOffersPartner();
        } else {
            fetchOffersStructure();
        }
    }, [user, role]);

    return (
        <>
            {user && (
                <div>
                    <PageTitle title={user.partner_name} />
                    {user && <ReadInfos partner={user} role={role} />}
                    {userOffers && <OfferList partnersOffers={userOffers} />}
                    <PageTitle title={"Structures"} />
                    <StructuresList structures={structures} role={role} />
                </div>
            )}
        </>
    );
};
export default User;
