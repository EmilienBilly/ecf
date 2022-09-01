const ReadInfos = ({ partner }) => {
    return (
        <>
            <div className="mb-8">
                <p className="text-lg font-bold">{partner.partner_name}</p>
                <p className="text-sm">{partner.partner_email}</p>
                <p className="text-sm">{partner.partner_password}</p>
                <p className="text-sm">{partner.partner_active ? "Actif" : "Inactif"}</p>
            </div>
        </>
    );
};

export default ReadInfos;
