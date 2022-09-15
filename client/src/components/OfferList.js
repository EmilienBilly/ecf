const OfferList = ({ partnersOffers }) => {
    return (
        <div className="grid grid-cols-2 gap-2">
            {partnersOffers &&
                partnersOffers.map((partnerOffer) => (
                    <div key={partnerOffer.id} class="flex items-center justify-between mb-2 bg-white rounded-lg shadow px-4 py-1">
                        <p class="font-semibold text-sm lg:text-lg tracking-tight text-gray-900">{partnerOffer.offer_name}</p>
                        {(partnerOffer.offer_active = true ? <p className="rounded-full h-3 w-3 bg-emerald-700"></p> : <p className="rounded-full h-3 w-3 bg-secondary-button"></p>)}
                    </div>
                ))}
        </div>
    );
};

export default OfferList;
