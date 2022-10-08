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
                <button
                    onClick={() => filterAll()}
                    type="button"
                    className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Tous
                </button>
                <button
                    onClick={() => filterActive()}
                    type="button"
                    className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Actifs
                </button>
                <button
                    onClick={() => filterInactive()}
                    type="button"
                    className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Inactifs
                </button>
            </div>
        </>
    );
};

export default PartnersFilter;
