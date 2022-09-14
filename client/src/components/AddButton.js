const AddButton = ({ setOpenModal, title }) => {
    return (
        <div className="my-auto">
            <button type="button" className="align-self-center font-semibold text-xs md:text-base text-white bg-emerald-700 px-4 py-2 rounded shadow" onClick={() => setOpenModal(true)}>
                {title}
            </button>
        </div>
    );
};

export default AddButton;
