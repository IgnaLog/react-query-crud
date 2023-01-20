import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../api/productsAPI";

const ProductForm = () => {
  const queryClient = useQueryClient();
  const addProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      console.log("added");
      queryClient.invalidateQueries("products"); // The cache is no longer valid, data has been updated. Compare with the new data by making a request to the server. We need to put a name to the query that extracts that data
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData);

    addProductMutation.mutate({
      ...product,
      inStock: true,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="description">Description</label>
      <input type="text" name="description" id="description" />

      <label htmlFor="price">Price</label>
      <input type="number" name="price" id="price" />

      <button>Add Product</button>
    </form>
  );
};

export default ProductForm;
