import { useForm } from "react-hook-form";
import { useEffect } from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import { OrderPost } from "../../commande/page";
import RadioField from "./RadioField";
import api from "@/app/api/api";
import { useRefresh } from "../../commande/hooks/RefreshContext";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: OrderPost | undefined;
}

const OrderModal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  const { register, handleSubmit, reset, setValue } = useForm<OrderPost>({
    defaultValues: data,
  });

  const { triggerRefresh } = useRefresh();

  useEffect(() => {
    if (data) {
      const formattedDate = data.deliveryAt
        ? new Date(data.deliveryAt).toISOString().split("T")[0]
        : "";

      setValue("deliveryAt", formattedDate);
    }
  }, [data, setValue]);

  const onSubmit = async (data: OrderPost) => {
    try {
      const correctedData = { ...data, product: Number(data.product) };

      if (data?.id != 0) {
        await api.patch(`/api/orders/update/${data?.id}`, correctedData, {
          headers: { "Content-Type": "application/json" },
        });
        alert("Commande mise à jour !");
        triggerRefresh();
      } else {
        await api.post(`/api/orders/new`, correctedData, {
          headers: { "Content-Type": "application/json" },
        });
        alert("Commande envoyée !");
        triggerRefresh();
      }

      reset();
      onClose();
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
    }
    // console.log(correctedData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20 w-full h-full">
      <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/4 w-3/4 h-4/5 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          Nouvelle Commande
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <RadioField
            label="Choisissez un produit"
            register={register}
            name="product"
            options={[
              { id: 1, name: "Cake" },
              { id: 2, name: "Chocolate" },
            ]}
            defaultValue={data?.product.id}
          />

          <InputField
            label="Prix"
            register={register}
            name="price"
            defaultValue={data?.price}
            type="number"
          />

          <InputField
            label="Client"
            register={register}
            name="customer"
            defaultValue={data?.customer}
          />

          <InputField
            label="Date de livraison"
            type="date"
            register={register}
            name="deliveryAt"
            defaultValue={
              data?.deliveryAt
                ? new Date(data.deliveryAt).toISOString().split("T")[0]
                : ""
            }
          />

          <TextAreaField
            label="Description"
            register={register}
            name="description"
            defaultValue={data?.description}
          />

          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Envoyer
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Fermer
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
