const ReadInfos = ({ partner, handleEditClick }) => {
    return (
        <>
            <div className="mb-8">
                <p className="text-lg font-bold">{partner.partner_name}</p>
                <p className="text-sm">{partner.user_email}</p>
                <p className="text-sm">{partner.partner_password}</p>
                <p className="text-sm">{partner.partner_active ? "Actif" : "Inactif"}</p>
                <button className="mt-2 px-3 py-1 rounded bg-emerald-700 text-white" type="button" onClick={(e) => handleEditClick(e)}>
                    Modifier
                </button>
            </div>
        </>
    );
};

export default ReadInfos;
