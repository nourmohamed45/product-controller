/**
 * Component that renders a single product card
 * This component is used in the renderProductList component in the RenderComponents.tsx file
 * @param {IProps} props - The props of the component
 * @returns {React.ReactElement} The JSX element of the component
 */
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
  /**
   * Render the list of colors of the product
   * @returns {React.ReactElement[]} The list of colors
   */
  const renderProductColor = () => {
    return product.colors.map((color) => {
      return <CircleColor key={color} color={color} />;
    });
  };

  /**
   * Function that will be called when the edit button is clicked
   * It will set the product that will be edited and open the edit modal
   */
  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setProductToEditIdx(idx);
  };

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 rounded-md p-2 flex flex-col bg-prodModalBg">
      {/* Product Image */}
      <Image
        imageURL={product.imageURL}
        alt={product.title}
        className="rounded-md mb-2 max-w-[296px] min-h-[296px] max-h-[296px] object-cover"
      />

      {/* Product Title */}
      <h3 className="font-bold mb-2 text-[20px] text-titleColor">
        {product.title}
      </h3>

      {/* Product Description */}
      <p className="min-h-[72px] text-subtitleColor">
        {txtSlicer(product.description, 100)}
      </p>

      {/* Product Colors */}
      <div className="flex items-center space-x-2 my-4">
        {renderProductColor()}
      </div>

      {/* Price and Category */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-[#818cf8] text-[20px]">
          ${numberWithCommas(product.price)}
        </span>
        <div className="flex items-center space-x-2">
          <span className="font-bold text-[#818cf8] text-[14px]">
            {product.category.name}
          </span>
          <Image
            imageURL={product.category.imageURL}
            alt={product.category.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Edit and Delete Buttons */}
      <div className="flex justify-between space-x-2 mt-4 flex-grow items-end">
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
