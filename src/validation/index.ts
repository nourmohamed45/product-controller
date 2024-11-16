type ErrorMsgType = {
  title: string;
  description: string;
  price: string;
  imageURL: string;
  colors: string;
};

interface ProductInput {
  title: string;
  description: string;
  price: string;
  imageURL: string;
  colors: string | string[];
}

/**
 * Validates a product object and returns validation error messages
 * @param {ProductInput} product - The product object to validate
 * @returns {ErrorMsgType} Object containing validation error messages
 *
 * @example
 * const product = {
 *   title: "Sample Product",
 *   description: "This is a sample product description",
 *   price: "99.99",
 *   imageURL: "https://example.com/image.jpg",
 *   colors: ["red", "blue"]
 * };
 * const errors = productValidator(product);
 *
 * @example
 * // Example with validation errors
 * const invalidProduct = {
 *   title: "Short",     // Too short, will trigger error
 *   description: "",    // Empty, will trigger error
 *   price: "abc",       // Not a number, will trigger error
 *   imageURL: "invalid-url", // Invalid URL, will trigger error
 *   colors: []          // Empty array, will trigger error
 * };
 * const errors = productValidator(invalidProduct);
 *
 * @remarks
 * Validation rules:
 * - Title: Must be 10-80 characters long
 * - Description: Must be 20-500 characters long
 * - ImageURL: Must be a valid URL starting with http://, https://, or ftp://
 * - Price: Must be a valid number
 * - Colors: If array, must contain at least one color
 */
export const productValidator = (product: ProductInput): ErrorMsgType => {
  const errors: ErrorMsgType = {
    title: "",
    description: "",
    price: "",
    imageURL: "",
    colors: "",
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

  if (Array.isArray(product.colors) && product.colors.length === 0) {
    errors.colors = "Please select at least one color";
  }

  return errors;
};
