import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../api/axios";
import EditableInfos from "../components/EditableInfos";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import ReadInfos from "../components/ReadInfos";

const PartnerDetails = () => {
    const { id } = useParams();
    const [partner, setPartner] = useState([]);
    const [structures, setStructures] = useState([]);
    const [edit, setEdit] = useState(false);

    const handleEditClick = (e, edit) => {
        e.preventDefault();
        setEdit(!edit);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/${id}`);
            setPartner(response.data.partner);
            setStructures(response.data.structures);
        };
        fetchData();
        console.log(edit);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <div className="h-screen bg-main-bg">
                <Navbar />
                <div className="w-11/12 xl:w-1/2 mx-auto">
                    <PageTitle title="Détails du partenaire" />
                    {edit ? <EditableInfos partner={partner} id={id} /> : <ReadInfos partner={partner} handleEditClick={handleEditClick} />}
                    {structures && (
                        <div class="mx-auto w-full">
                            {structures.map((structure, index) => (
                                <Link key={index} to={`/structures/${structure.id}`}>
                                    <div class="flex bg-secondary-bg shadow-sm rounded-lg mb-4 h-24 gap-4">
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
                    )}
                </div>
            </div>
        </>
    );
};

export default PartnerDetails;
