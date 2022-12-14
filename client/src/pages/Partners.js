import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PartnersContext } from "../context/PartnersContext";
import { UserContext } from "../context/UserContext";
// import { toast } from "react-toastify";
import List from "../components/List";
import PageTitle from "../components/PageTitle";
import Modal from "../components/Modal";
import axios from "../api/axios";
import AddButton from "../components/AddButton";
import SearchBar from "../components/SearchBar";
import PartnersFilter from "../components/PartnersFilter";

const Partners = () => {
    const [openModal, setOpenModal] = useState(false);
    const [rights, setRights] = useState([]);
    const { partners, setPartners } = useContext(PartnersContext);
    const [searchResults, setSearchResults] = useState([]);
    const { authUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRights = async () => {
            const response = await axios.get("/partners/rights");
            setRights(response.data.rights);
        };
        const fetchPartners = async () => {
            const response = await axios.get("/partners");
            setPartners(response.data.partners);
            setSearchResults(response.data.partners);
        };
        fetchRights();
        fetchPartners();
    }, [setPartners, authUser.id, authUser.right_id, navigate]);

    console.log(authUser);

    return (
        <>
            <div className="flex justify-between items-center">
                <PageTitle title="Partenaires" />
                <AddButton setOpenModal={setOpenModal} title={"Ajouter"} />
            </div>
            <div className="lg:flex gap-5">
                <PartnersFilter partners={searchResults} setSearchResults={setSearchResults} />
                <SearchBar partners={partners} setSearchResults={setSearchResults} />
            </div>

            <List partners={searchResults} />
            <Modal open={openModal} rights={rights} setSearchResults={setSearchResults} searchResults={searchResults} setOpenModal={setOpenModal} />
        </>
    );
};

export default Partners;