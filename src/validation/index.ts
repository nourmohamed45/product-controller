/**
 * Validates a product object to ensure that each required field meets specified
 * criteria such as length, format, and type.
 *
 * @param product - An object containing product details, including:
 *    - title: A string representing the product's title (required, 10-80 characters).
 *    - description: A string providing details about the product (required, 20-500 characters).
 *    - price: A string representing the product's price, which should be a valid numeric value.
 *    - imageURL: A string containing the URL of the product's image (required, valid URL format).
 *
 * @returns An object containing error messages for each field if validation fails, 
 *          otherwise returns an empty object if all fields are valid.
 * 
 * @example
 * // Example of a product object that would pass validation:
 * const product = {
 *   title: "Sample Product",
 *   description: "This is a sample description for the product.",
 *   price: "25.99",
 *   imageURL: "https://example.com/image.jpg"
 * };
 * const errors = productValidator(product);
 * // errors will be an empty object if the product is valid.
 *
 * Validation Details:
 * - title: Must be a non-empty string between 10 and 80 characters.
 * - description: Must be a non-empty string between 20 and 500 characters.
 * - price: Must be a non-empty string representing a valid number.
 * - imageURL: Must be a non-empty string containing a valid URL (ftp, http, or https).
 */
export const productValidator = (product: {
  title: string;
  description: string;
  price: string;
  imageURL: string;
}): {[key: string]: string} => {
  const errors: {
    title: string;
    description: string;
    price: string;
    imageURL: string;
  } = {
    title: "",
    description: "",
    price: "",
    imageURL: "",
  };

  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Product title must be between 10 and 80 characters";
  }

  if (
    !product.description.trim() ||
    product.description.length < 20 ||
    product.description.length > 500
  ) {
    errors.description =
      "Product description must be between 20 and 500 characters";
  }

  if (!product.imageURL.trim() || !validUrl) {
    errors.imageURL = "Please enter a valid URL";
  }

  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "Product price must be a number";
  }

  return errors;
};
