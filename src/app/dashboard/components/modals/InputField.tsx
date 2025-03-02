import { UseFormRegister } from "react-hook-form";
import { OrderPost } from "../../commande/page";

interface InputFieldProps {
  label: string;
  type?: string;
  register: UseFormRegister<OrderPost>;
  name: keyof OrderPost;
  defaultValue?: number | string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
}) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium">{label}</label>
      <input
        {...register(name, {
          setValueAs: (value) => (type === "number" ? Number(value) : value), 
        })}
        type={type}
        className="w-full p-2 border border-gray-300 rounded-md"
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default InputField;
