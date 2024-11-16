import { ChangeEvent, MouseEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import {
  categoriesList,
  formInputsList,
  productColors,
  productList,
} from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";
import { productValidator } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import { nanoid } from "nanoid";
import SelectCategory from "./components/ui/SelectCategory";
// import { TProductName } from "./types";

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
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProductObject);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObject);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(-1);

  // Modal States
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  // Error Message States
  const [errorMsg, setErrorMsg] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: "",
  });

  console.log(productToEdit);

  // Color and Category States for Add Modal
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(categoriesList[0]);

  // Color and Category States for Edit Modal
  const [editTempColor, setEditTempColor] = useState<string[]>([
    ...productToEdit.colors,
  ]);
  const [editSelectedCategory, setEditSelectedCategory] = useState(categoriesList[0]);

  // ------------ Functions ------------
  // Add Modal
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  // Edit Modal
  function openEditModal() {
    setIsOpenEditModal(true);
  }

  function closeEditModal() {
    setIsOpenEditModal(false);
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
    setErrorMsg({ ...errorMsg, [name]: "" });
  };

  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProductToEdit({ ...productToEdit, [name]: value });
    setErrorMsg({ ...errorMsg, [name]: "" });
  };

  const closeHandler = (): void => {
    setProduct(defaultProductObject);
    setTempColor([]);
    setIsOpen(false);
  };

  const submitHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    const updatedProduct = { ...product, colors: tempColor };

    const errors = productValidator(updatedProduct);

    const hasErrors =
      Object.values(errors).some((err) => err === "") &&
      Object.values(errors).every((err) => err === "");

    if (!hasErrors) {
      setErrorMsg({
        title: errors.title || "",
        description: errors.description || "",
        imageURL: errors.imageURL || "",
        price: errors.price || "",
        colors: errors.colors || "",
      });
      console.log(errors);
      return;
    }

    setProducts((prev) => [
      {
        ...product,
        id: nanoid(),
        colors: tempColor,
        category: selectedCategory,
      },
      ...prev,
    ]);
    closeHandler();
  };
  const submitEditHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    const updatedProduct = { ...productToEdit, colors: editTempColor };

    const errors = productValidator(updatedProduct);

    const hasErrors =
      Object.values(errors).some((err) => err === "") &&
      Object.values(errors).every((err) => err === "");

    if (!hasErrors) {
      setErrorMsg({
        title: errors.title || "",
        description: errors.description || "",
        imageURL: errors.imageURL || "",
        price: errors.price || "",
        colors: errors.colors || "",
      });
      console.log(errors);
      return;
    }

    const updatedProductsList = [...products];

    updatedProductsList.splice(productToEditIdx, 1, {
      ...productToEdit,
      colors: editTempColor,
      category: editSelectedCategory,
    });

    setProducts(updatedProductsList);

    setProductToEdit(defaultProductObject);
    closeEditModal();
  };

  const ColorOnClickHandler = (color: string) => {
    if (tempColor.includes(color)) {
      setTempColor((prev) => prev.filter((prevColor) => prevColor !== color));
    } else {
      setTempColor((prev) => [...prev, color]);
    }
    setErrorMsg({ ...errorMsg, colors: "" });
  };

  const EditColorOnClickHandler = (color: string) => {
    if (editTempColor.includes(color)) {
      setEditTempColor((prev) =>
        prev.filter((prevColor) => prevColor !== color)
      );
    } else {
      setEditTempColor((prev) => [...prev, color]);
    }

    setErrorMsg({ ...errorMsg, colors: "" });
  };

  // ------------ Rendering ------------
  const renderProductList = products.map((product, idx) => {
    return (
      <ProductCard
        key={product.id}
        product={product}
        setProductToEdit={setProductToEdit}
        openEditModal={() => {
          setProductToEditIdx(idx);
          setProductToEdit(product);
          setEditSelectedCategory(
            categoriesList.find((cat) => cat.name === product.category.name) ||
              categoriesList[0]
          );
          setEditTempColor([...product.colors]);
          openEditModal();
        }}
        idx={idx}
        setProductToEditIdx={setProductToEditIdx}
      />
    );
  });

  const renderFormInputList = formInputsList.map((input) => {
    return (
      <div key={input.id} className="relative rounded-md">
        <label htmlFor={input.id} className="sr-only">
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

  const renderProductColor = (colorHandler: (color:string) => void, selectedcolors: string[]) => {
    return productColors.map((color) => {
      return (
        <CircleColor
          key={color}
          color={color}
          onClick={() => {
            colorHandler(color);
          }}
          style={{
            opacity: selectedcolors.includes(color) ? ".3" : "1",
            scale: selectedcolors.includes(color) ? ".8" : "1",
            backgroundColor: color,
          }}
        />
      );
    });
  };

  // const renderEditFormInputListWithErrorMsg = (
  //   id: string,
  //   label: string,
  //   name: TProductName
  // ) => {
  //   return (
  //     <div className="relative rounded-md">
  //       <label
  //         htmlFor={id}
  //         className="text-black mt-3 block text-sm font-medium"
  //       >
  //         {label}
  //       </label>
  //       <Input
  //         type="text"
  //         name={name}
  //         id={id}
  //         placeholder={name}
  //         value={productToEdit[name]}
  //         onChange={onChangeEditHandler}
  //       />
  //       <ErrorMessage msg={errorMsg[name]} />
  //     </div>
  //   );
  // };

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

      {/* Add Product Modal */}
      <Modal isOpen={isOpen} close={close} title="Add a New Product">
        <div className="space-y-6">{renderFormInputList}</div>

        <SelectCategory
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />
        <div className="flex items-center space-x-2 my-4">
          {renderProductColor(ColorOnClickHandler, tempColor)}
        </div>
        <div>
          <ErrorMessage msg={errorMsg["colors"]} />
        </div>

        <div className="flex items-center space-x-1 flex-wrap justify-end my-4">
          {tempColor.map((color) => {
            return (
              <span
                key={color}
                className="rounded mb-2 "
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            );
          })}
        </div>
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

      {/* Edit Product Modal */}
      <Modal
        isOpen={isOpenEditModal}
        close={closeEditModal}
        title="Edit Product"
      >
        {formInputsList.map((input) => (
          <div key={input.id} className="relative rounded-md">
            <label htmlFor={input.id} className="text-black mt-3 block text-sm font-medium">
              {input.label}
            </label>
            <Input
              type="text"
              name={input.name}
              id={input.id}
              placeholder={input.label}
              value={productToEdit[input.name]}
              onChange={onChangeEditHandler}
            />
            <ErrorMessage msg={errorMsg[input.name]} />
          </div>
        ))}

        <SelectCategory
          selected={editSelectedCategory}
          setSelected={setEditSelectedCategory}
        />

        <div className="flex items-center space-x-2 my-4">
          {renderProductColor(EditColorOnClickHandler, editTempColor)}
        </div>
        <div>
          <ErrorMessage msg={errorMsg["colors"]} />
        </div>

        <div className="flex items-center space-x-1 flex-wrap justify-end my-4">
          {editTempColor.map((color) => {
            return (
              <span
                key={color}
                className="rounded mb-2 "
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            );
          })}
        </div>
        <div className="mt-8 flex gap-4">
          <Button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600"
            width="w-full"
            onClick={submitEditHandler}
          >
            Edit
          </Button>
          <Button
            type="button"
            className="bg-red-500 hover:bg-red-600"
            width="w-full"
            onClick={closeEditModal}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
