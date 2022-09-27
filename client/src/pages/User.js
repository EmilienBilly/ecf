import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(`/users/${id}`);
        setUser(response.data.user);
        console.log(user);
    };
    useEffect(() => {
        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h1>Bienvenue sur la page de l'utilisateur {user.user_email}</h1>
        </>
    );
};
export default User;
