
import { nanoid } from "nanoid";
import { IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: nanoid(),
    title: "BMW M4 Coupe",
    description:
      "The BMW M4 Coupe is a high-performance variant of the BMW 4 Series. It features a powerful 3.0-liter inline-6 engine that produces 425 horsepower and 406 lb-ft of torque.",
    imageURL: "../../public/product-image/bmw-logo.webp",
    price: "69,150",
    colors: ["#FFC107", "#8B9467", "#373737", "#F7F7F7"],
    category: {
      name: "BMW",
      imageURL: "../../public/product-image/bmw-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "Honda CBR500R",
    description:
      "The Honda CBR500R is a sporty motorcycle that features a powerful 500cc engine that produces 47 horsepower and 42 lb-ft of torque.",
    imageURL: "../../public/product-image/honda-logo.webp",
    price: "6,799",
    colors: ["#ED1C24", "#1A202C", "#F7F7F7", "#454545"],
    category: {
      name: "Honda",
      imageURL: "../../public/product-image/honda-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "Dell XPS 13",
    description:
      "The Dell XPS 13 is a high-performance laptop that features a powerful Intel Core i7 processor, 16GB of RAM, and a 512GB solid-state drive.",
    imageURL: "../../public/product-image/dell-logo.webp",
    price: "1,649.99",
    colors: ["#454545", "#8B9467", "#FFFFFF", "#F7F7F7", "#1A202C"],
    category: {
      name: "Dell",
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
    colors: ["#1A202C", "#FFC107", "#8B9467", "#454545", "#F7F7F7"],
    category: {
      name: "Nike",
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
    colors: ["#454545", "#8B9467", "#1A202C", "#F7F7F7", "#FFFFFF"],
    category: {
      name: "Apple",
      imageURL: "../../public/product-image/apple-watch-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "Samsung Galaxy S22 Ultra",
    description:
      "The Samsung Galaxy S22 Ultra is a high-performance smartphone that features a powerful Exynos 2100 processor, 12GB of RAM, and a 6.8-inch Dynamic AMOLED display.",
    imageURL: "../../public/product-image/samsung-logo.webp",
    price: "1,399.99",
    colors: ["#1A202C", "#8B9467", "#FFFFFF", "#454545", "#F7F7F7"],
    category: {
      name: "Samsung",
      imageURL: "../../public/product-image/samsung-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "Canon EOS R5",
    description:
      "The Canon EOS R5 is a high-performance mirrorless camera that features a 45MP full-frame sensor, 12fps continuous shooting, and 8K video recording.",
    imageURL: "../../public/product-image/canon-logo.webp",
    price: "3,999",
    colors: ["#454545", "#8B9467", "#1A202C", "#F7F7F7", "#FFFFFF"],
    category: {
      name: "Canon",
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
    colors: ["#1A202C", "#8B9467", "#FFFFFF", "#454545", "#F7F7F7"],
    category: {
      name: "Sony",
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
    colors: ["#1A202C", "#8B9467", "#454545", "#F7F7F7", "#FFFFFF"],
    category: {
      name: "Microsoft",
      imageURL: "../../public/product-image/microsoft-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "Apple iPhone 13 Pro Max",
    description:
      "The Apple iPhone 13 Pro Max is a high-performance smartphone that features a 6.7-inch Super Retina XDR display, a powerful A15 Bionic processor, and a quad-camera setup with a telephoto lens and a ultra-wide-angle lens.",
    imageURL: "../../public/product-image/apple-logo.webp",
    price: "1,099.99",
    colors: ["#454545", "#8B9467", "#FFFFFF", "#1A202C", "#F7F7F7"],
    category: {
      name: "Apple",
      imageURL: "../../public/product-image/apple-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "DJI FPV Drone",
    description:
      "The DJI FPV Drone is a high-performance drone that features a 4K camera, a powerful 4S LiPo battery, and a range of advanced flight modes.",
    imageURL: "../../public/product-image/dji-logo.webp",
    price: "1,299.99",
    colors: ["#1A202C", "#8B9467", "#454545", "#F7F7F7", "#FFFFFF"],
    category: {
      name: "DJI",
      imageURL: "../../public/product-image/dji-logo.webp",
    },
  },
  {
    id: nanoid(),
    title: "Sony Bravia XR55A90J",
    description:
      "The Sony Bravia XR55A90J is a high-performance 4K OLED TV that features a 55-inch screen, a powerful X1 processor, and a range of advanced features like HDR and Dolby Vision.",
    imageURL: "../../public/product-image/sony-tv-logo.webp",
    price: "1,999.99",
    colors: ["#1A202C", "#8B9467", "#FFFFFF", "#454545", "#F7F7F7"],
    category: {
      name: "Sony",
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
    colors: ["#454545", "#8B9467", "#1A202C", "#F7F7F7", "#FFFFFF"],
    category: {
      name: "Garmin",
      imageURL: "../../public/product-image/garmin-logo.webp",
    },
  },
];