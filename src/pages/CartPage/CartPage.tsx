import Cart from '../../components/Cart/Cart';
import EmptyCart from '../../components/Cart/EmptyCart/EmptyCart';
import Container from '../../components/ui/Container/Container';
import PageWrapper from '../../components/ui/PageWrapper/PageWrapper';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';

const CartPage = () => {
  const cartProducts = useAppSelector((state: RootState) => state.cartReducer.products);

  return (
    <PageWrapper>
      <section className="pt-10 pb-36 flex flex-col items-center justify-center lg:block">
        <Container>
          <h2 className="text-center text-2xl mb-3 lg:mb-4 font-semibold">Корзина</h2>
          {cartProducts.length ? <Cart /> : <EmptyCart />}
        </Container>
      </section>
    </PageWrapper>
  );
};

export default CartPage;
