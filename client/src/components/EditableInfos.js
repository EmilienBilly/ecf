import { useForm } from "react-hook-form";
import axios from "../api/axios";

const EditableInfos = ({ partner, setPartner, id, setEdit, edit }) => {
    const { handleSubmit, register } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.put(`/partners/${id}`, {
                name: data.name,
                email: data.email,
                active: data.active,
            });
            setEdit(!edit);
            setPartner(response.data.partner);
            console.log(response);
        } catch (err) {}
    };

    return (
        <>
            <div className="mb-4">
                <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
                    <input required className="w-full border-gray-200 rounded-lg shadow-sm" type="text" defaultValue={partner.partner_name} placeholder="Nom" {...register("name", { required: true })} />
                    <input className="w-full border-gray-200 rounded-lg shadow-sm" type="email" defaultValue={partner.user_email} placeholder="Email" {...register("email", { required: true })} />
                    <select className="w-full flex border-gray-200 rounded-lg shadow-sm" defaultValue={partner.partner_active} name="status" id="status-select" {...register("active")}>
                        <option value="true">Actif</option>
                        <option value="false">Inactif</option>
                    </select>
                    <button className="px-4 py-2 rounded bg-emerald-700 text-white" type="submit">
                        Modifier
                    </button>
                </form>
            </div>
        </>
    );
};

export default EditableInfos;
