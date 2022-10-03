const SearchBar = ({ partners, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault();

    const handleSearchChange = (e) => {
        //if the input is empty
        if (!e.target.value) return setSearchResults(partners);

        const resultsArray = partners.filter((partner) => partner.partner_name.toLowerCase().includes(e.target.value));
        setSearchResults(resultsArray);
        console.log(resultsArray);
    };
    return (
        <form className="w-1/2" onSubmit={handleSubmit}>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h- text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input
                    type="text"
                    id="search"
                    className="h-10 lg:h-14 p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Rechercher..."
                    onChange={handleSearchChange}
                />
            </div>
        </form>
    );
};

export default SearchBar;
