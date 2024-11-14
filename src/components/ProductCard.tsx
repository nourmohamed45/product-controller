import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const renderProductColor = () => {
    return product.colors.map((color) => {
      return <CircleColor key={color} color={color} />;
    });
  };
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col ">
      <Image
        imageURL={product.imageURL}
        alt="BMW Car"
        className="rounded-md mb-2"
      />
      <h3 className="font-bold mb-2 text-[20px] text-[#111827]">
        {product.title}
      </h3>
      <p className="">{txtSlicer(product.description, 100)}</p>

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
          onClick={() => console.log("clicked")}
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
