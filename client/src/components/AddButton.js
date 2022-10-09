const AddButton = ({ setOpenModal, title }) => {
    return (
        <div>
            <button type="button" className="font-semibold text-xs md:text-base text-white bg-emerald-700 rounded shadow" onClick={() => setOpenModal(true)}>
                <svg width="25" height="25" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
            </button>
        </div>
    );
};

export default AddButton;
