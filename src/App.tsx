import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList } from "./data";
import Button from "./components/ui/Button";

const App = () => {
  // ------------ State ------------
  let [isOpen, setIsOpen] = useState(false);

  // ------------ Functions ------------
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // ------------ Rendering ------------
  const renderProductList = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });
  return (
    <main className="container mx-auto">
      <Button
        type="button"
        onClick={open}
        className="rounded-md m-5 bg-indigo-500 py-2 px-4 text-sm font-medium text-white focus:outline-none hover:bg-indigo-600 transition-all ease-in duration-100"
      >Add Product</Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6 p-2 rounded-md ">
        {renderProductList}
      </div>

      <Modal isOpen={isOpen} close={close} title="Add a New Product">
        <div className="mt-4 flex gap-4">
          <Button
            type="button"
            className="bg-indigo-500 hover:bg-indigo-600"
            width="w-full"
          >
            Submit
          </Button>
          <Button
            type="button"
            className="bg-red-500 hover:bg-red-600"
            width="w-full"
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
