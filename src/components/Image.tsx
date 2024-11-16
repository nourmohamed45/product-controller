/**
 * Image component
 * @param imageURL - The URL of the image
 * @param alt - The alt text for the image
 * @param className - Optional class names for styling
 * @returns JSX.Element - An image element
 */
interface IProps {
  imageURL: string;
  alt: string;
  className?: string;
}

const Image = ({ imageURL, alt, className }: IProps) => {
  return <img src={imageURL} alt={alt} className={className} />;
};

export default Image;

