import { faker } from "@faker-js/faker";

const createFakeProduct = () => {
  return {
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    man: faker.commerce.productName(),
    img: faker.image.urlLoremFlickr({
      category: "technics",
      width: 239,
      height: 325,
    }),
    star: faker.number.int({ min: 1, max: 5 }),
    id: faker.string.uuid(),
  };
};

export const createFakeProducts = (length) => {
  const products = [];

  Array.from({ length: length }).forEach(() => {
    products.push(createFakeProduct());
  });

  return products;
};
