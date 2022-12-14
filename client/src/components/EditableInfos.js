import { useForm } from "react-hook-form";
import axios from "../api/axios";

const EditableInfos = ({ partner, setPartner, id, setEdit, edit }) => {
    const { handleSubmit, register } = useForm();
    console.log(partner);

    const onSubmit = async (data) => {
        console.log(data);
        try {
            await axios.put(`/partners/${id}`, {
                name: data.name,
                email: data.email,
                active: partner.partner_active,
            });
            const getPartners = await axios.get(`/partners/${id}`);
            setPartner(getPartners.data.partner);
            setEdit(!edit);
        } catch (err) {}
    };

    return (
        <>
            <div className="mb-4">
                <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
                    <input required className="w-full border-gray-200 rounded-lg shadow-sm" type="text" defaultValue={partner.partner_name} placeholder="Nom" {...register("name", { required: true })} />
                    <input className="w-full border-gray-200 rounded-lg shadow-sm" type="email" defaultValue={partner.user_email} placeholder="Email" {...register("email", { required: true })} />
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

export default EditableInfos;
