import { useForm } from "react-hook-form";

const Login = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    return (
        <div className="flex h-screen justify-center items-center">
            <div className="flex flex-col w-80 lg:w-5/12 justify-center">
                <div className="mb-8">
                    <h1 className="text-center text-2xl lg:text-4xl mb-6 font-semibold">Bienvenue sur OneGym</h1>
                    <p className="text-center text-gray-400 text-sm mb-4">Veuillez entrer vos identifiants pour accéder à votre compte</p>
                </div>
                <form className="flex flex-col text-md" onSubmit={handleSubmit()}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                            Adresse Email
                        </label>
                        <input className="border border-gray-300 placeholder-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5" type="text" placeholder="Entrez votre Email" {...register("name", { required: true })} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                            Mot de passe
                        </label>
                        <input className="border border-gray-300 placeholder-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5" type="text" placeholder="Entrez votre mot de passe" {...register("name", { required: true })} />
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
