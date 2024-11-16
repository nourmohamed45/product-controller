/**
 * ErrorMessage component
 * This component will show an error message if the msg prop is not null or empty
 * @param {{ msg: string }} props - The props of the component
 * @returns {JSX.Element} The component
 */
interface IProps {
  msg: string;
}

const ErrorMessage = ({msg}: IProps) => {
  return (
    msg ? <span className="block text-rose-500 font-semibold text-sm">{msg}</span> : null
  )
}

export default ErrorMessage
