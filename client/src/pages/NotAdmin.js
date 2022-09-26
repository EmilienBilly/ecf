const NotAdmin = ({ role }) => {
    if (role === 2) {
        return (
            <div>
                <h1>Vous n'avez pas les droits néscessaires pour accéder à cette page</h1>
                <link rel="stylesheet" href="" />
            </div>
        );
    }
};

export default NotAdmin;
