import { useForm } from "react-hook-form";
import axios from "../api/axios";

const EditInfoStructure = ({ structure, setStructure, setEdit, edit }) => {
    const { handleSubmit, register } = useForm();
    console.log(structure);

    const onSubmit = async (data) => {
        console.log(data);
        try {
            await axios.put(`/structures/${structure.id}`, {
                name: data.name,
                address: data.address,
                email: data.email,
                active: structure.struct_active,
            });
            const getStructure = await axios.get(`/structures/${structure.id}`);
            setStructure(getStructure.data.structure);
            setEdit(!edit);
        } catch (err) {}
    };

    return (
        <>
            <div className="mb-4">
                <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
                    <input required className="w-full border-gray-200 rounded-lg shadow-sm" type="text" defaultValue={structure.struct_name} placeholder="Nom" {...register("name", { required: true })} />
                    <input className="w-full border-gray-200 rounded-lg shadow-sm" type="email" defaultValue={structure.user_email} placeholder="Email" {...register("email", { required: true })} />
                    <input className="w-full border-gray-200 rounded-lg shadow-sm" type="text" defaultValue={structure.struct_address} placeholder="Adresse postale" {...register("address", { required: true })} />
                    <div className="flex gap-2">
                        <button className="w-full py-1 rounded-md bg-button-bg text-white" type="submit">
                            Modifier
                        </button>
                        <button
                            className="w-full py-1 rounded-md bg-button-bg text-white"
                            onClick={() => {
                                setEdit(false);
                            }}>
                            Annuler
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditInfoStructure;
