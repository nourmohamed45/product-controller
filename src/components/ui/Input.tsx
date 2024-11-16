import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      {...rest}
      className="w-full bg-transparent border-b-red-500 border-b-1 p-2 mt-2 outline-none caret-indigo-500 text-black placeholder:text-black shadow-black shadow-inner rounded-md focus:ring-2 focus:ring-indigo-400"
    />
  );
};

export default Input;
