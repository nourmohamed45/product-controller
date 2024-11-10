import { InputHTMLAttributes } from "react";
import { IFormInput } from "../../interfaces";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  input: IFormInput;
}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      {...rest}
      className="w-full bg-transparent border-b-slate-500 border-b-1 p-2 mt-2 outline-none caret-white text-slate-100 placeholder:text-slate-300 rounded-md focus:ring-1 focus:ring-indigo-400"
    />
  );
};

export default Input;
