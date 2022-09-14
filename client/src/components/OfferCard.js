const OfferCard = ({ offers }) => {
    return (
        <div className="md:grid grid-cols-2 gap-6 w-full">
            {offers.map((offer, index) => (
                <div key={index} class="mb-4 md:mb-0 p-4 max-w-sm md:max-w-full bg-white rounded-lg shadow-md">
                    <h5 class="mb-6 text-xl lg:text-2xl font-semibold tracking-tight text-gray-900">{offer.offer_name}</h5>
                    <p class="mb-3 font-normal text-gray-500">{offer.offer_description}</p>
                </div>
            ))}
        </div>
    );
};

export default OfferCard;
