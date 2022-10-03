import { useContext, useEffect, useState } from "react";
import { PartnersContext } from "../context/PartnersContext";
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
    }, [setPartners]);

    return (
        <>
            <div className="flex justify-between w-full">
                <PageTitle title="Partenaires" />
                <AddButton setOpenModal={setOpenModal} title={"Ajouter"} />
            </div>
            <div className="flex justify-between items-center">
                <PartnersFilter partners={searchResults} setSearchResults={setSearchResults} />
                <SearchBar partners={partners} setSearchResults={setSearchResults} />
            </div>

            <List partners={searchResults} setPartners={setPartners} />
            <Modal open={openModal} rights={rights} onClose={() => setOpenModal(false)} />
        </>
    );
};

export default Partners;
