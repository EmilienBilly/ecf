import { Link } from "react-router-dom";

const StructuresList = ({ structures }) => {
    return (
        <div className="bg-main-bg p-4 mx-auto w-full m-4 rounded-lg">
            <h2 className="mb-4 text-2xl font-bold">Structures</h2>
            {structures.map((structure, index) => (
                <Link key={index} to={`/partners/${structure.partner_id}/${structure.id}`}>
                    <div className="flex bg-secondary-bg shadow-sm rounded-lg mb-4 h-24 gap-4">
                        <div className={`rounded-l-lg w-5 h-full ${structure.struct_active ? "bg-green-bg" : "bg-secondary-button"}`}></div>
                        <div className="flex flex-col justify-between w-4/5 py-2">
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
    );
};

export default StructuresList;