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
import DeleteModal from "./components/ui/DeleteModal";
import toast, { Toaster } from "react-hot-toast";

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
  const [isOpenDeleteConfirmModal, setIsOpenDeleteConfirmModal] =
    useState(false);

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
  const [editSelectedCategory, setEditSelectedCategory] = useState(
    categoriesList[0]
  );

  // ------------ Functions ------------
  // Add Modal
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    setErrorMsg({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: "",
    });
  }

  // Edit Modal
  function openEditModal() {
    setIsOpenEditModal(true);
  }

  function closeEditModal() {
    setIsOpenEditModal(false);
    setErrorMsg({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: "",
    });
  }

  // Delete Modal
  function openDeleteConfirmModal() {
    setIsOpenDeleteConfirmModal(true);
  }

  function closeDeleteConfirmModal() {
    setIsOpenDeleteConfirmModal(false);
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
    setErrorMsg({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: "",
    });
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
    toast("Product has been added", {
      icon: "✅",
      duration: 2000,
      style: { background: "#4f46e5", color: "white" },
    });
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
    toast("Product has been updated", {
      icon: "🚀",
      duration: 2000,
      style: { background: "#4f46e5", color: "white" },
    });
  };

  const DeleteOnClickHandler = (idx: number) => {
    setProducts((prev) => prev.filter((_, i) => i !== idx));
    closeDeleteConfirmModal();
    toast("Product has been deleted", {
      icon: "🗑️",
      duration: 2000,
      style: { background: "#4f46e5", color: "white" },
    });
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
        openDeleteConfirmModal={() => {
          setProductToEditIdx(idx);
          openDeleteConfirmModal();
        }}
        idx={idx}
        setProductToEditIdx={setProductToEditIdx}
      />
    );
  });

  const renderFormInputList = formInputsList.map((input) => {
    return (
      <div key={input.id} className="relative rounded-md">
        <label
          htmlFor={input.id}
          className="text-primaryShadowButton mt-3 block text-sm font-medium"
        >
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

  const renderProductColor = (
    colorHandler: (color: string) => void,
    selectedcolors: string[]
  ) => {
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

  return (
    <main className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-[30px] font-bold text-titleColor m-5 p-2">
          Products
        </h1>
        <Button
          type="button"
          onClick={open}
          className="rounded-md m-5 bg-primaryButton py-2 px-4 text-[18px] font-medium text-white focus:outline-none hover:bg-primaryBoldButton transition-all ease-in duration-100"
        >
          Add Product
        </Button>
      </div>
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
                className="rounded mb-2 text-black text-[14px] font-semibold py-1 px-2"
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
            className="bg-primaryButton hover:bg-primaryBoldButton"
            width="w-full"
            onClick={submitHandler}
          >
            Submit
          </Button>
          <Button
            type="button"
            className="bg-secondaryButton hover:bg-secondaryBoldButton"
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
            <label
              htmlFor={input.id}
              className="text-primaryShadowButton mt-3 block text-sm font-medium"
            >
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
                className="rounded mb-2 text-black text-[14px] font-bold py-1 px-2"
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
            className="bg-primaryButton hover:bg-primaryBoldButton"
            width="w-full"
            onClick={submitEditHandler}
          >
            Edit
          </Button>
          <Button
            type="button"
            className="bg-secondaryButton hover:bg-secondaryBoldButton"
            width="w-full"
            onClick={closeEditModal}
          >
            Cancel
          </Button>
        </div>
      </Modal>

      {/* Delete Confirm Modal */}
      <DeleteModal
        isOpenDeleteConfirmModal={isOpenDeleteConfirmModal}
        closeDeleteConfirmModal={closeDeleteConfirmModal}
        title={"Delete Confimation!"}
      >
        <div>
          <p className="text-subtitleColor font-medium">
            Are you sure you want to delete this product?
          </p>
        </div>
        <div className="mt-8 flex gap-4">
          <Button
            type="submit"
            className="bg-secondaryButton  hover:bg-secondaryBoldButton"
            width="w-full"
            onClick={() => DeleteOnClickHandler(productToEditIdx)}
          >
            Yes, Delete
          </Button>
          <Button
            type="button"
            className="bg-transparent text-primaryButton border-primaryShadowButton border-2 hover:bg-primaryShadowButton hover:text-white"
            width="w-full"
            onClick={closeDeleteConfirmModal}
          >
            Cancel
          </Button>
        </div>
      </DeleteModal>

      <Toaster />
    </main>
  );
};

export default App;
