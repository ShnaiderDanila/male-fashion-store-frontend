import { savedProducts } from '../../assets/savedProducts.json';
import ProductList from '../Products/ProductsList/ProductList';
import Container from '../ui/Container/Container';

const Wishlist = () => {
  return (
    <section className="pt-10 pb-48">
      <Container>
        <h2 className="text-center text-2xl mb-10 font-semibold">Избранное</h2>
        <ProductList products={savedProducts} />
      </Container>
    </section>
  );
};

export default Wishlist;
