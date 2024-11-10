import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  type: "button" | "submit" | "reset";
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, type, width, ...rest }: IProps) => {
  return (
    <button
      type={type}
      className={`${className} text-white p-2 ${width} rounded-md font-bold`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
