import axios from "../api/axios";

const PartnersFilter = ({ setSearchResults }) => {
    const filterActive = async () => {
        const response = await axios.get("/partners/active");
        setSearchResults(response.data.partners);
    };

    const filterInactive = async () => {
        const response = await axios.get("/partners/inactive");
        setSearchResults(response.data.partners);
    };

    const filterAll = async () => {
        const response = await axios.get("/partners");
        setSearchResults(response.data.partners);
    };

    return (
        <>
            <div className="flex mt-4 mb-4 gap-2">
                <button type="button" onClick={() => filterActive()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                    Actifs
                </button>
                <button type="button" onClick={() => filterInactive()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                    Inactifs
                </button>
                <button type="button" onClick={() => filterAll()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                    Tous
                </button>
            </div>
        </>
    );
};

export default PartnersFilter;
