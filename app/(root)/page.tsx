import ProductList from "@/components/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latesProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latesProducts} title='New Arrivals' limit={4} />
    </>
  )
}
export default HomePage
 