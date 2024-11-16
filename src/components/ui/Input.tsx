import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      {...rest}
      className="w-full bg-transparent border-b-1 p-2 mt-2 outline-none caret-primaryButton text-titleColor placeholder:text-subtitleColor shadow-gray-600 shadow-sm rounded-md focus:ring-2 focus:ring-primaryShadowButton"
    />
  );
};

export default Input;
