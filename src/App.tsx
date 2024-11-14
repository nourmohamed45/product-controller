import { ChangeEvent, MouseEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";
import { productValidator } from "./validation";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  // ------------ Variables ------------
  const defaultProductObject = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  // ------------ State ------------
  const [product, setProduct] = useState<IProduct>(defaultProductObject);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  console.log(errorMsg.title)

  // ------------ Functions ------------
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
    setErrorMsg({ ...errorMsg, [name]: "" });
  };

  const closeHandler = (): void => {
    setProduct(defaultProductObject);
    setIsOpen(false);
  };

  const submitHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const errors = productValidator(product);

    // console.log(errors);
    const hasErrors =
      Object.values(errors).some((err) => err === "") &&
      Object.values(errors).every((err) => err === "");
    console.log(hasErrors);
    if (!hasErrors) {
      setErrorMsg({
        title: errors.title || '',
        description: errors.description || '',
        imageURL: errors.imageURL || '',
        price: errors.price || '',
      });
      console.log(errors)
      return;
    }
    console.log("Sending Form Submit");
  };

  // ------------ Rendering ------------
  const renderProductList = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  const renderFormInputList = formInputsList.map((input) => {
    return (
      <div key={input.id} className="relative rounded-md">
        <label key={input.id} htmlFor={input.id} className="sr-only">
          {input.label}
        </label>
        <Input
          type="text"
          name={input.name}
          id={input.id}
          placeholder={input.label}
          value={product[input.name]}
          onChange={onChangeHandler}
        />
        <ErrorMessage msg={errorMsg[input.name]} />
      </div>
    );
  });

  return (
    <main className="container mx-auto">
      <Button
        type="button"
        onClick={open}
        className="rounded-md m-5 bg-indigo-500 py-2 px-4 text-sm font-medium text-white focus:outline-none hover:bg-indigo-600 transition-all ease-in duration-100"
      >
        Add Product
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6 p-2 rounded-md ">
        {renderProductList}
      </div>

      <Modal isOpen={isOpen} close={close} title="Add a New Product">
        <div className="space-y-6">{renderFormInputList}</div>
        <div className="mt-8 flex gap-4">
          <Button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600"
            width="w-full"
            onClick={submitHandler}
          >
            Submit
          </Button>
          <Button
            type="button"
            className="bg-red-500 hover:bg-red-600"
            width="w-full"
            onClick={closeHandler}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
