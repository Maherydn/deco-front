import { UseFormRegister } from "react-hook-form";
import { OrderPost } from "../../commande/page";

interface TextAreaFieldProps {
  label: string;
  register: UseFormRegister<OrderPost>;
  name: keyof OrderPost;
  defaultValue?: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  register,
  name,
  defaultValue,
}) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium">{label}</label>
      <textarea
        {...register(name)}
        className="w-full p-2 border border-gray-300 rounded-md"
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default TextAreaField;
