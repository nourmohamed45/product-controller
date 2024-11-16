import { categoriesList, formInputsList, productColors } from "../data";
import CircleColor from "./CircleColor";
import ErrorMessage from "./ErrorMessage";
import ProductCard from "./ProductCard";
import Input from "./ui/Input";


interface RenderComponentsProps {
  products: any[];
  setProductToEdit: (product: any) => void;
  setProductToEditIdx: (idx: number) => void;
  setEditSelectedCategory: (category: any) => void;
  setEditTempColor: (colors: string[]) => void;
  openEditModal: () => void;
  openDeleteConfirmModal: () => void;
  product: any;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMsg: { [key: string]: string };
  ColorOnClickHandler: (color: string) => void;
  tempColor: string[];
}

export const renderProductList = ({
  products,
  setProductToEdit,
  setProductToEditIdx,
  setEditSelectedCategory,
  setEditTempColor,
  openEditModal,
  openDeleteConfirmModal,
}: RenderComponentsProps) => {
  return products.map((product, idx) => (
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
  ));
};

export const renderFormInputList = ({
  product,
  onChangeHandler,
  errorMsg,
}: RenderComponentsProps) => {
  return formInputsList.map((input) => (
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
  ));
};

export const renderProductColor = (
  colorHandler: (color: string) => void,
  selectedcolors: string[]
) => {
  return productColors.map((color) => (
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
  ));
};

export const renderSelectedColors = (colors: string[]) => {
  return colors.map((color) => (
    <span
      key={color}
      className="rounded mb-2 text-black text-[14px] font-semibold py-1 px-2"
      style={{ backgroundColor: color }}
    >
      {color}
    </span>
  ));
};