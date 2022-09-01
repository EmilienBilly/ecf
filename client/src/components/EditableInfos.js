import { useForm } from "react-hook-form";

const EditableInfos = ({ partner }) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    return (
        <>
            <div>
                <form action="">
                    <input className="mb-4 p-2 bg-secondary-bg border rounded" type="text" defaultValue={partner.partner_name} placeholder="Nom" {...register("name", { required: true })} />
                    <input className="mb-4 p-2 bg-secondary-bg border rounded" type="text" defaultValue={partner.partner_email} placeholder="Email" {...register("email", { required: true })} />
                    <input className="mb-4 p-2 bg-secondary-bg border rounded" type="text" defaultValue={partner.partner_password} placeholder="Mot de passe" {...register("password", { required: true })} />
                    <select className="mb-4 p-2 bg-secondary-bg border rounded" name="status" id="status-select" {...register("active")}>
                        <option value="true">Actif</option>
                        <option value="false">Inactif</option>
                    </select>
                </form>
            </div>
        </>
    );
};

export default EditableInfos;
