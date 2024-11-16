import { nanoid } from "nanoid";
import { ICategory, IFormInput, IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: nanoid(),
    title: "BMW M4 Coupe",
    description:
      "The BMW M4 Coupe is a high-performance variant of the BMW 4 Series. It features a powerful 3.0-liter inline-6 engine that produces 425 horsepower and 406 lb-ft of torque.",
    imageURL: "../../public/product-image/bmw-logo.webp",
    price: "69150",
    colors: ["#FFC107", "#8B9467", "#373737", "#0032A0"], // Added BMW blue
    category: {
      name: "Cars",
      imageURL: "../../public/product-image/bmw-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "Honda CBR500R",
    description:
      "The Honda CBR500R is a sporty motorcycle that features a powerful 500cc engine that produces 47 horsepower and 42 lb-ft of torque.",
    imageURL: "../../public/product-image/honda-logo.webp",
    price: "6799",
    colors: ["#ED1C24", "#1A202C", "#454545"], // Retained original colors as they suit Honda's sporty aesthetic
    category: {
      name: "Motocycles",
      imageURL: "../../public/product-image/honda-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "Dell XPS 13",
    description:
      "The Dell XPS 13 is a high-performance laptop that features a powerful Intel Core i7 processor, 16GB of RAM, and a 512GB solid-state drive.",
    imageURL: "../../public/product-image/dell-logo.webp",
    price: "1649.99",
    colors: ["#1A202C", "#B1B1B1"], // Clean, minimal colors for a sleek laptop design
    category: {
      name: "Laptops",
      imageURL: "../../public/product-image/dell-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "Nike Air Force 1 Low",
    description:
      "The Nike Air Force 1 Low is a classic low-top sneaker that features a durable leather upper and a comfortable Air Force 1 sole.",
    imageURL: "../../public/product-image/nike-logo.webp",
    price: "80",
    colors: ["#1A202C", "#FF0000", "#00FF00"],
    category: {
      name: "Shoes",
      imageURL: "../../public/product-image/nike-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "Apple Watch Series 7",
    description:
      "The Apple Watch Series 7 is a smartwatch that features a powerful A15 Bionic chip, 32GB of storage, and a range of fitness tracking features.",
    imageURL: "../../public/product-image/apple-watch-logo.webp",
    price: "399",
    colors: ["#1A202C", "#B0B0B0"], // Simplified and sleek colors for a minimalist Apple design
    category: {
      name: "Watches",
      imageURL: "../../public/product-image/apple-watch-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "Samsung Galaxy S22 Ultra",
    description:
      "The Samsung Galaxy S22 Ultra is a high-performance smartphone that features a powerful Exynos 2100 processor, 12GB of RAM, and a 6.8-inch Dynamic AMOLED display.",
    imageURL: "../../public/product-image/samsung-logo.webp",
    price: "1399.99",
    colors: ["#1A202C", "#B1B1B1", "#9C27B0"], // Added a rich purple to reflect Samsung's premium design
    category: {
      name: "Mobiles",
      imageURL: "../../public/product-image/samsung-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "Canon EOS R5",
    description:
      "The Canon EOS R5 is a high-performance mirrorless camera that features a 45MP full-frame sensor, 12fps continuous shooting, and 8K video recording.",
    imageURL: "../../public/product-image/canon-logo.webp",
    price: "3999",
    colors: ["#1A202C", "#D32F2F", "#B1B1B1"], 
    category: {
      name: "Cameras",
      imageURL: "../../public/product-image/canon-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "Sony WH-1000XM4",
    description:
      "The Sony WH-1000XM4 is a premium wireless headphone that features advanced noise-cancellation technology, up to 30 hours of battery life, and a sleek design.",
    imageURL: "../../public/product-image/sony-logo.webp",
    price: "349.99",
    colors: ["#1A202C", "#B1B1B1", "#FF9800"], // Added a vibrant orange for an energetic touch
    category: {
      name: "Headphones",
      imageURL: "../../public/product-image/sony-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "Microsoft Xbox Series X",
    description:
      "The Microsoft Xbox Series X is a high-performance gaming console that features a powerful AMD Zen 2 processor, 16GB of GDDR6 memory, and a custom AMD Radeon RDNA 2 GPU.",
    imageURL: "../../public/product-image/microsoft-logo.webp",
    price: "499.99",
    colors: ["#1A202C", "#B1B1B1", "#00FF00"], // Added Xbox green to represent the gaming console's brand color
    category: {
      name: "Gaming",
      imageURL: "../../public/product-image/microsoft-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "Apple iPhone 13 Pro Max",
    description:
      "The Apple iPhone 13 Pro Max is a high-performance smartphone that features a 6.7-inch Super Retina XDR display, a powerful A15 Bionic processor, and a quad-camera setup with a telephoto lens and a ultra-wide-angle lens.",
    imageURL: "../../public/product-image/apple-logo.webp",
    price: "1099.99",
    colors: ["#1A202C", "#B0B0B0", "#007AFF"], // Added Apple blue for a signature look
    category: {
      name: "Mobiles",
      imageURL: "../../public/product-image/apple-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "DJI FPV Drone",
    description:
      "The DJI FPV Drone is a high-performance drone that features a 4K camera, a powerful 4S LiPo battery, and a range of advanced flight modes.",
    imageURL: "../../public/product-image/dji-logo.webp",
    price: "1299.99",
    colors: ["#1A202C", "#00ACC1"], // Added cyan to reflect DJI's advanced tech and sky imagery
    category: {
      name: "Drones",
      imageURL: "../../public/product-image/dji-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "Sony Bravia XR55A90J",
    description:
      "The Sony Bravia XR55A90J is a high-performance 4K OLED TV that features a 55-inch screen, a powerful X1 processor, and a range of advanced features like HDR and Dolby Vision.",
    imageURL: "../../public/product-image/sony-tv-logo.webp",
    price: "1999.99",
    colors: ["#1A202C", "#B1B1B1", "#FF0000"], 
    category: {
      name: "Televisions",
      imageURL: "../../public/product-image/sony-tv-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "Garmin Forerunner 945",
    description:
      "The Garmin Forerunner 945 is a high-performance fitness tracker that features a 1.2-inch AMOLED display, a powerful processor, and a range of advanced features like GPS and GLONASS.",
    imageURL: "../../public/product-image/garmin-logo.webp",
    price: "649.99",
    colors: ["#1A202C", "#1E88E5", "#B0B0B0"], // Added Garmin blue to represent its outdoor and fitness focus
    category: {
      name: "Fitness Tracker",
      imageURL: "../../public/product-image/garmin-logo.webp",
    },
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "number",
  },
];

export const productColors: string[] = [
  "#FFC107",
  "#8B9467",
  "#373737",
  "#F44336",
  "#FF9800",
  "#FFEB3B",
  "#0032A0",
  "#9C27B0",
  "#66D9EF",
  "#E91E63",
  "#2196F3",
  "#4CAF50",
];


export const categoriesList: ICategory[] = [
  {
    id: nanoid(),
    name: "Cars",
    imageURL: "../../public/product-image/bmw-logo.webp",
  },
  {
    id: nanoid(),
    name: "Motocycles",
    imageURL: "../../public/product-image/honda-logo.webp",
  },
  {
    id: nanoid(),
    name: "Laptops",
    imageURL: "../../public/product-image/dell-logo.webp",
  },
  {
    id: nanoid(),
    name: "Shoes",
    imageURL: "../../public/product-image/nike-logo.webp",
  },
  {
    id: nanoid(),
    name: "Watches",
    imageURL: "../../public/product-image/apple-watch-logo.webp",
  },
  {
    id: nanoid(),
    name: "Mobiles",
    imageURL: "../../public/product-image/samsung-logo.webp",
  },
  {
    id: nanoid(),
    name: "Cameras",
    imageURL: "../../public/product-image/canon-logo.webp",
  },
  {
    id: nanoid(),
    name: "Headphones",
    imageURL: "../../public/product-image/sony-logo.webp",
  },
  {
    id: nanoid(),
    name: "Gaming",
    imageURL: "../../public/product-image/microsoft-logo.webp",
  },
  {
    id: nanoid(),
    name: "Drones",
    imageURL: "../../public/product-image/dji-logo.webp",
  },
  {
    id: nanoid(),
    name: "Televisions",
    imageURL: "../../public/product-image/sony-tv-logo.webp",
  },
  {
    id: nanoid(),
    name: "Fitness Tracker",
    imageURL: "../../public/product-image/garmin-logo.webp",
  },
];