import PageTitle from "./PageTitle";

const OfferList = ({ partnersOffers }) => {
    console.log(partnersOffers);
    return (
        <>
            <PageTitle title={"Offres"} />
            <div className="grid grid-cols-2 gap-2">
                {partnersOffers &&
                    partnersOffers.map((partnersOffer, index) => (
                        <div key={index} className="flex items-center justify-between mb-2 bg-white rounded-lg shadow px-">
                            <p className="font-semibold text-sm lg:text-lg tracking-tight text-gray-900">{partnersOffer.offer_name}</p>
                            <span className={`rounded-full h-3 w-3 ${partnersOffer.offer_active ? "bg-emerald-700" : "bg-secondary-button"}`}></span>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default OfferList;
