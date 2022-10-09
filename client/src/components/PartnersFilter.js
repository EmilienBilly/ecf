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
            <div className="inline-flex rounded-md shadow-sm" role="group">
                <button onClick={() => filterAll()} type="button" className="py-2 px-4 text-sm font-medium rounded-l-lg border focus:z-10 focus:ring-2 focus:text-blue-700bg-gray-700 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white">
                    Tous
                </button>
                <button onClick={() => filterActive()} type="button" className="py-2 px-4 text-sm font-medium  border-t border-b focus:z-10 focus:ring-2 focus:text-blue-700bg-gray-700 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white">
                    Actifs
                </button>
                <button onClick={() => filterInactive()} type="button" className="py-2 px-4 text-sm font-medium rounded-r-lg border focus:z-10 focus:ring-2 focus:text-blue-700bg-gray-700 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white">
                    Inactifs
                </button>
            </div>
        </>
    );
};

export default PartnersFilter;
