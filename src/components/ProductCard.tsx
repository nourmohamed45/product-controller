import { IProduct } from "../interfaces";
import { numberWithCommas, txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  idx: number;
  setProductToEditIdx: (idx: number) => void;
  openDeleteConfirmModal: () => void;
}

const ProductCard = ({
  product,
  setProductToEdit,
  openEditModal,
  idx,
  setProductToEditIdx,
  openDeleteConfirmModal,
}: IProps) => {
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
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0  rounded-md p-2 flex flex-col bg-prodModalBg">
      <Image
        imageURL={product.imageURL}
        alt={product.title}
        className="rounded-md mb-2 max-w-[296px] min-h-[296px] max-h-[296px] object-cover"
      />
      <h3 className="font-bold mb-2 text-[20px] text-titleColor">
        {product.title}
      </h3>
      <p className="min-h-[72px] text-subtitleColor">{txtSlicer(product.description, 100)}</p>

      <div className="flex items-center space-x-2 my-4 ">
        {renderProductColor()}
      </div>

      <div className="flex items-center justify-between">
        <span className="font-bold text-[#818cf8] text-[20px] ">${numberWithCommas(product.price)}</span>
        <Image
          imageURL={product.category.imageURL}
          alt={product.category.name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
      <div className="flex justify-between space-x-2 mt-4 flex-grow items-end ">
        <Button
          type="button"
          className="bg-primaryButton"
          onClick={() => onEdit()}
          width="w-full"
        >
          Edit
        </Button>
        <Button
          onClick={openDeleteConfirmModal}
          type="button"
          className="bg-secondaryButton"
          width="w-full"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
