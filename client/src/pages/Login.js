import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const Login = ({ setAuthorized, setRole }) => {
    const [error, setError] = useState(false);
    console.log(error);
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const navigateUser = (user) => {
        if (user.right_id === 1) {
            return navigate("/partners");
        }
        if (user.right_id === null) {
            return null;
        } else {
            return navigate(`/user/${user.id}`);
        }
    };

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("/login", {
                user_email: data.email,
                user_password: data.password,
            });
            toast.success("Connexion réussie !");
            const user = response.data.user;
            setRole(user.right_id);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            setAuthorized(true);
            navigateUser(user);
        } catch (err) {
            console.log(err.message);
            setError(true);
        }
    };

    useEffect(() => {
        if (error) {
            toast.error("Connexion refusée, veuillez vérifier votre adresse email ainsi que votre mot de passe");
        }
    }, [error]);

    return (
        <div className="flex h-screen justify-center items-center">
            <div className="flex text-white-text flex-col w-80 lg:w-5/12 justify-center">
                <div className="mb-8">
                    <h1 className="text-center text-2xl lg:text-4xl mb-6 font-semibold">Bienvenue sur OneGym</h1>
                    <p className="text-center  text-sm mb-4">Veuillez entrer vos identifiants pour accéder à votre compte</p>
                </div>
                <form className="flex flex-col text-md" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white-text">
                            Adresse Email
                        </label>
                        <input className="border border-gray-300 placeholder-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5" type="text" placeholder="Entrez votre Email" {...register("email", { required: true })} />
                        {errors.email && <p className="text-red-500">Veuillez entrer votre adresse email</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white-text">
                            Mot de passe
                        </label>
                        <input className="border border-gray-300 placeholder-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5" type="password" placeholder="Entrez votre mot de passe" {...register("password", { required: true })} />
                        {errors.email && <p className="text-red-500">Veuillez entrer votre mot de passe</p>}
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-emerald-700 text-white font-medium" type="submit">
                        Connexion
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
