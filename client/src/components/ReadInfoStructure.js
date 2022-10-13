const ReadInfoStructure = ({ role, structure, handleEditClick }) => {
    return (
        <>
            <div className="flex justify-between xl:w-1/3 mb-8 bg-secondary-bg rounded-md shadow-sm py-4 px-3">
                <div className="flex flex-col gap-2 text-white text-sm lg:text-lg">
                    <p>Adresse email : {structure.user_email}</p>
                    <p>Adresse postale : {structure.struct_address}</p>
                    <div className="flex items-center gap-2">
                        <p>Status : {structure.struct_active ? "Active" : "Inactive"}</p>
                        <div className={`rounded-full h-2.5 w-2.5 ${structure.struct_active ? "bg-emerald-700" : "bg-inactive-bg"}`}></div>
                    </div>
                </div>
                <div className="flex items-end">
                    {/* if the user is admin show the edit button, else remove it */}
                    {role === 1 ? (
                        <button className="text-white" type="button" onClick={(e) => handleEditClick(e)}>
                            <svg width="22" height="22" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575q.837 0 1.412.575l1.4 1.4q.575.575.6 1.388q.025.812-.55 1.387ZM4 21q-.425 0-.712-.288Q3 20.425 3 20v-2.825q0-.2.075-.387q.075-.188.225-.338l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225q-.188.075-.388.075Z"
                                />
                            </svg>
                        </button>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default ReadInfoStructure;
