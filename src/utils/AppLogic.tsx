import { ChangeEvent, MouseEvent, useState } from "react";
import { IProduct } from "../interfaces";
import { categoriesList, productList } from "../data";
import { productValidator } from "../validation";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";



const AppLogic = () => {
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

  // console.log(productToEdit);

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
    
    console.log("submitHandler");
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

  return {
    product,
    products,
    productToEdit,
    setProductToEdit,
    productToEditIdx,
    setProductToEditIdx,
    editSelectedCategory,
    setEditSelectedCategory,
    editTempColor,
    setEditTempColor,
    openEditModal,
    openDeleteConfirmModal,
    onChangeHandler,
    errorMsg,
    isOpen,
    selectedCategory,
    setSelectedCategory,
    ColorOnClickHandler,
    tempColor,
    submitHandler,
    closeHandler,
    isOpenEditModal,
    closeEditModal,
    onChangeEditHandler,
    EditColorOnClickHandler,
    submitEditHandler,
    isOpenDeleteConfirmModal,
    closeDeleteConfirmModal,
    DeleteOnClickHandler,
    open,
    close,
  };
};

export default AppLogic;
