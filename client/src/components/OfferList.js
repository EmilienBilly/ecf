import PageTitle from "./PageTitle";

const OfferList = ({ partnersOffers }) => {
    return (
        <>
            <PageTitle title={"Offres"} />
            <div className="grid grid-cols-2 gap-2">
                {partnersOffers &&
                    partnersOffers.map((offer, index) => (
                        <div key={index} className="flex items-center justify-between mb-2 bg-white rounded-lg shadow px-4 py-1">
                            <p className="font-semibold text-sm lg:text-lg tracking-tight text-gray-900">{offer.offer_name}</p>
                            <div className={`rounded-full h-3 w-3 ${offer.offer_active ? "bg-emerald-700" : "bg-secondary-button"}`}></div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default OfferList;
