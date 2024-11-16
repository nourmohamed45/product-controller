import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import ErrorMessage from "./components/ErrorMessage";
import SelectCategory from "./components/ui/SelectCategory";
import DeleteModal from "./components/ui/DeleteModal";
import { Toaster } from "react-hot-toast";
import AppLogic from "./utils/AppLogic";

import {
  renderProductList,
  renderFormInputList,
  renderProductColor,
  renderSelectedColors,
} from "./components/RenderComponents";

const App = () => {
  // ------------ App Logic ------------
  const {
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
  } = AppLogic();

  // ------------ Render Props------------
  const renderProps = {
    products,
    setProductToEdit,
    setProductToEditIdx,
    setEditSelectedCategory,
    setEditTempColor,
    openEditModal,
    openDeleteConfirmModal,
    product,
    onChangeHandler,
    errorMsg,
    ColorOnClickHandler,
    tempColor,
  };

  return (
    // Main Container
    <main className="container mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        {/* Header Title */}
        <h1 className="text-[30px] font-bold text-titleColor m-5 p-2">
          Products
        </h1>
        {/* Add Product Button */}
        <Button
          type="button"
          onClick={open}
          className="rounded-md m-5 bg-primaryButton py-2 px-4 text-[18px] font-medium text-white focus:outline-none hover:bg-primaryBoldButton transition-all ease-in duration-100"
        >
          Add Product
        </Button>
      </div>
      {/* Render Product List */}
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6 p-2 rounded-md ">
        {renderProductList(renderProps)}
      </div>

      {/* Add Product Modal */}
      <Modal isOpen={isOpen} close={close} title="Add a New Product">
        <div className="space-y-6">{renderFormInputList(renderProps)}</div>
        {/* Add Modal Category */}
        <SelectCategory
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />
        <div className="flex items-center flex-wrap space-x-2 my-4">
          {renderProductColor(ColorOnClickHandler, tempColor)}
        </div>
        {/* Add Modal Error Message */}
        <div>
          <ErrorMessage msg={errorMsg["colors"]} />
        </div>
        {/* Add Modal Selected Colors */}
        <div className="flex items-center space-x-1 flex-wrap justify-end my-4">
          {renderSelectedColors(tempColor)}
        </div>
        {/* Add Modal Buttons */}
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
        {/* Edit Modal Content */}
        <div className="space-y-6">
          {renderFormInputList({
            ...renderProps,
            product: productToEdit,
            onChangeHandler: onChangeEditHandler,
          })}
        </div>
        {/* Edit Modal Category */}
        <SelectCategory
          selected={editSelectedCategory}
          setSelected={setEditSelectedCategory}
        />
        {/* Edit Modal Colors */}
        <div className="flex items-center space-x-2 my-4">
          {renderProductColor(EditColorOnClickHandler, editTempColor)}
        </div>
        <div>
          <ErrorMessage msg={errorMsg["colors"]} />
        </div>
        {/* Edit Modal Selected Colors */}
        <div className="flex items-center space-x-1 flex-wrap justify-end my-4">
          {renderSelectedColors(editTempColor)}
        </div>
        {/* Edit Modal Buttons */}
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
        {/* Delete Modal Content */}
        <div>
          <p className="text-subtitleColor font-medium">
            Are you sure you want to delete this product?
          </p>
        </div>
        {/* Delete Modal Buttons */}
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
      {/* Toaster */}
      <Toaster />
    </main>
  );
};

export default App;
