import { Link } from "react-router-dom";

const List = ({ partners }) => {
    if (partners?.length === 0) {
        return (
            <>
                <p className="mt-4">Aucun résultat</p>
            </>
        );
    }

    return (
        <>
            {partners && (
                <div className="mx-auto w-full ">
                    <div className="mx-auto w-full gap-4 xl:grid lg:grid-cols-3">
                        {partners.map((partner, index) => (
                            <Link key={index} to={`/partners/${partner.id}`}>
                                <div className="bg-secondary-bg  tracking-wide font-semibold shadow rounded-lg">
                                    <div className="flex flex-col text-white-text p-4 mt-3 rounded-md">
                                        <div className=" w-3/4 flex flex-col mr-4">
                                            <p className="">{partner.partner_name}</p>
                                        </div>
                                        <div>
                                            {partner.partner_active ? (
                                                <div className="flex gap-2 items-center text-sm">
                                                    <p className="rounded-full h-3 w-3 bg-emerald-500"></p>
                                                    <p>Active</p>
                                                </div>
                                            ) : (
                                                <div className="flex gap-2 items-center text-sm">
                                                    <p className="rounded-full h-3 w-3 bg-red-500"></p>
                                                    <p>Inactive</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default List;
