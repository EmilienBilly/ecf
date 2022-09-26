const OfferList = ({ offers }) => {
    return (
        <div className="grid grid-cols-2 gap-2">
            {offers &&
                offers.map((offers, index) => (
                    <div key={index} className="flex items-center justify-between mb-2 bg-white rounded-lg shadow px-4 py-1">
                        <p className="font-semibold text-sm lg:text-lg tracking-tight text-gray-900">{offers.offer_name}</p>
                        {(offers.offer_active = true ? <p className="rounded-full h-3 w-3 bg-emerald-700"></p> : <p className="rounded-full h-3 w-3 bg-secondary-button"></p>)}
                    </div>
                ))}
        </div>
    );
};

export default OfferList;
