import { TProductName } from "../types";

// Interface for Product with optional id and nested category details
export interface IProduct {
  id?: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  }
}

// Interface for Form Input for product details
export interface IFormInput {
  id: string;
  name: TProductName;
  label: string;
  type: string;
}

// Interface for Category with unique identifier and image URL
export interface ICategory {
  id: string;
  name: string;
  imageURL: string;
}
