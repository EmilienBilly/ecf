const ConfirmModal = () => {
    return (
        <>
            <div className="bg-half-transparent fixed inset-0 z-50">
                <div className="flex h-screen justify-center items-center">
                    <div className="flex flex-col w-80 lg:w-1/4 justify-center bg-white py-4 px-8 rounded-md">
                        <p className="text-center mb-4 font-semibold">Souhaitez vous confirmer cette action ?</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmModal;
