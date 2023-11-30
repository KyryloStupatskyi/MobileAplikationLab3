import { $host } from "./instance"

export const fetchProducts = async () => {
  const { data } = await $host.get("/products")
  return data
}

export const deleteProducts = async (id) => {
  await $host.delete(`/products/${id}`)
}

export const createProduct = async (product, price) => {
  const { data } = await $host.post('/products', { product, price })
  return data
}

export const updateProduct = async (id, product, price) => {
  await $host.put(`/products/${id}`, { product, price })
}