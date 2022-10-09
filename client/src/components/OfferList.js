import PageTitle from "./PageTitle";

const OfferList = ({ partnersOffers }) => {
    console.log(partnersOffers);
    return (
        <>
            <PageTitle title={"Offres"} />
            <div className="grid grid-cols-3 gap-2 mb-4">
                {partnersOffers &&
                    partnersOffers.map((partnersOffer, index) => (
                        <div key={index} className="flex items-center justify-between mb-2 h-16 bg-secondary-bg rounded-lg shadow px-2">
                            <div>
                                <p className="font-semibold text-sm lg:text-lg tracking-tight text-white">{partnersOffer.offer_name}</p>
                            </div>
                            <div>
                                <div className={`rounded-full h-3 w-3 ${partnersOffer.offer_active ? "bg-emerald-700" : "bg-inactive-bg"}`}></div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default OfferList;
