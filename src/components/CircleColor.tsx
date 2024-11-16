/**
 * A component that renders a circle with a given color
 * @param {string} color - The color of the circle
 * @param {HTMLAttributes<HTMLSpanElement>} rest - Other props from the HTMLDivElement
 * @returns {JSX.Element} The component
 */
import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const CircleColor = ({color, ...rest}: IProps) => {
  return (
    <span className={`w-6 h-6 rounded-full border-2 border-gray-700 cursor-pointer`} style={{backgroundColor: color}} {...rest}/>
  )
}

export default CircleColor;
