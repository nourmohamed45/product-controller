/**
 * Button component
 * @param children - ReactNode, children of the button
 * @param className - string, className of the button
 * @param type - "button" | "submit" | "reset", type of the button
 * @param width - "w-full" | "w-fit", width of the button
 * @param rest - ButtonHTMLAttributes<HTMLButtonElement>, other props
 * @returns ReactNode
 */
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

