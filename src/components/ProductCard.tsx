
import { IProduct } from "../interfaces";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({product}: IProps) => {
  return (
    <div className="border rounded-md p-2 flex flex-col">
      <Image imageURL={product.imageURL} alt="BMW Car" className="rounded-md mb-2" />
      <h3>{product.title}</h3>
      <p>
        {product.description}
      </p>
      <div className="flex items-center space-x-2 my-4">
        <span className="w-5 h-5 rounded-full bg-[#3B3F54] cursor-pointer" />
        <span className="w-5 h-5 rounded-full bg-[#474A57] cursor-pointer" />
        <span className="w-5 h-5 rounded-full bg-[#5C6066] cursor-pointer" />
      </div>

      <div className="flex items-center justify-between">
        <span>${product.price}</span>
        <Image
          imageURL={product.imageURL}
          alt="BMW Car"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-4">
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
