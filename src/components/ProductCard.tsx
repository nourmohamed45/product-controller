import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  idx: number;
  setProductToEditIdx: (idx: number) => void;
}

const ProductCard = ({ product, setProductToEdit, openEditModal, idx, setProductToEditIdx }: IProps) => {
  const renderProductColor = () => {
    return product.colors.map((color) => {
      return <CircleColor key={color} color={color} />;
    });
  };

  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setProductToEditIdx(idx);
  };

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col ">
      <Image
        imageURL={product.imageURL}
        alt={product.title}
        className="rounded-md mb-2 max-w-[296px] min-h-[296px] max-h-[296px] object-cover"
      />
      <h3 className="font-bold mb-2 text-[20px] text-[#111827]">
        {product.title}
      </h3>
      <p className="min-h-[72px]">{txtSlicer(product.description, 100)}</p>

      <div className="flex items-center space-x-2 my-4">
        {renderProductColor()}
      </div>

      <div className="flex items-center justify-between">
        <span>${product.price}</span>
        <Image
          imageURL={product.category.imageURL}
          alt={product.category.name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
      <div className="flex justify-between space-x-2 mt-4 flex-grow items-end ">
        <Button
          type="button"
          className="bg-indigo-500"
          onClick={() => onEdit()}
          width="w-full"
        >
          Edit
        </Button>
        <Button type="button" className="bg-red-500" width="w-full">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
