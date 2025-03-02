import { UseFormRegister } from "react-hook-form";
import { OrderPost } from "../../commande/page";

interface RadioFieldProps {
  label: string;
  register: UseFormRegister<OrderPost>;
  name: keyof OrderPost;
  options: { id: number; name: string }[];
  defaultValue?: number;
}

const RadioField: React.FC<RadioFieldProps> = ({
  label,
  register,
  name,
  options,
  defaultValue,
}) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium">{label}</label>
      <div className="space-y-2">
        {options.map((item) => (
          <label key={item.id} className="flex items-center space-x-2">
            <input
              {...register(name)}
              type="radio"
              value={item.id} 
              defaultChecked={defaultValue === item.id}
              className="rounded border-gray-300"
            />
            <span>{item.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioField;
