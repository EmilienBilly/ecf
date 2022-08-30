import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import axios from "../api/axios";

const StructureDetails = () => {
    const { id } = useParams();
    const [structure, setStructure] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/structures/${id}`);
            setStructure(response.data.structure);
            console.log(response);
        };
        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Navbar />
            <div className="lg:flex min-h-screen bg-main-bg relative z-0 overflow-auto">
                <div className="lg:flex-grow">
                    <div className="ml-4">
                        <PageTitle title={structure.struct_name} />
                    </div>
                    <p>{structure.struct_address}</p>
                    <p>{structure.struct_email}</p>
                </div>
            </div>
        </div>
    );
};

export default StructureDetails;
