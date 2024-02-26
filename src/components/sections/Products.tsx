import Sort from '../ui/Sort';
import Sidebar from '../Sidebar';
import ProductList from '../ProductList';

const Products = () => {
  return (
    <section className="py-[100px]">
      <div className="container flex justify-between">
        <Sidebar />
        <div>
          <Sort />
          <ProductList />
        </div>
      </div>
    </section>
  );
};

export default Products;
