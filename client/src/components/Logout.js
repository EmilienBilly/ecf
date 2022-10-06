const Logout = ({ setAuthorized }) => {
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setAuthorized(false);
    };
    return (
        <>
            <li className="text-red-500 text-lg font-semibold">
                <button onClick={(e) => logout(e)}>Se déconnecter</button>
            </li>
        </>
    );
};

export default Logout;
