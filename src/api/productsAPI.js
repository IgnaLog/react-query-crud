import axios from "axios";

const productsAPI = axios.create({
  baseURL: "http://localhost:3000/products",
});

export const getProducts = async () => {
  const res = await productsAPI.get("/");
  return res.data;
};

export const createProduct = async (product) =>
  await productsAPI.post("/", product);

export const deleteProduct = async (id) => await productsAPI.delete(`/${id}`);

export const updateProduct = async (product) =>
  await productsAPI.put(`/${product.id}`, product);
