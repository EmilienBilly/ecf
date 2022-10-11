const ConfirmModal = ({ open, onClose, setStatus }) => {
    if (!open) return null;

    return (
        <>
            <div className="bg-half-transparent fixed inset-0 z-50">
                <div className="flex h-screen justify-center items-center">
                    <div className="flex flex-col w-80 lg:w-1/4 justify-center bg-main-bg py-4 px-8 rounded-md">
                        <div>
                            <p className="text-center text-white-text">Souhaitez vous confirmer cette action ?</p>
                            <div className="flex justify-center mt-2">
                                <button className="px-4 py-2 rounded bg-emerald-700 text-white" onClick={setStatus}>
                                    Confirmer
                                </button>
                                <button className="px-4 ml-4 rounded bg-inactive-bg text-white" onClick={onClose}>
                                    Annuler
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmModal;
