import { Link } from "react-router-dom";

const StructuresList = ({ structures }) => {
    return (
        <div className="mx-auto w-full m-4 rounded-lg">
            <div className="flex flex-col lg:grid grid-cols-2 lg:gap-6">
                {structures.map((structure, index) => (
                    <Link key={index} to={`/partners/${structure.partner_id}/${structure.id}`}>
                        <div className="flex bg-secondary-bg text-white shadow-sm rounded-lg mb-4 h-16 lg:h-24 gap-4">
                            <div className={`rounded-l-lg w-5 h-full ${structure.struct_active ? "bg-emerald-700" : "bg-inactive-bg"}`}></div>
                            <div className="flex flex-col justify-center w-4/5 py-2">
                                <div>
                                    <p className="text-md font-semibold">{structure.struct_name}</p>
                                </div>
                                <div>
                                    <p className="text-sm">{structure.struct_address}</p>
                                    <p className="text-sm">{structure.struct_email}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default StructuresList;
