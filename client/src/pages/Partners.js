import Navbar from "../components/Navbar";
import List from "../components/List";

const Partners = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col h-screen w-screen pl-64">
                <div>
                    <h1 className="justify-self-auto align-self-auto">Partenaires</h1>
                </div>
                <div className="w-full align-self-center justify-self-center">
                    <List />
                </div>
            </div>
        </>
    );
};

export default Partners;
