import CartForm from '../../components/Cart/CartForm/CartForm';
import CartItemList from '../../components/Cart/CartItemList/CartItemList';
import Container from '../../components/ui/Container/Container';
import PageWrapper from '../../components/ui/PageWrapper/PageWrapper';

const CartPage = () => {
  return (
    <PageWrapper>
      <section className="pt-10 pb-36 flex flex-col items-center justify-center lg:block">
        <Container>
          <h2 className="text-center text-2xl mb-10 font-semibold">Оформление заказа</h2>
          <div className="flex flex-col lg:flex-row justify-between gap-20">
            <CartForm />
            <CartItemList />
          </div>
        </Container>
      </section>
    </PageWrapper>
  );
};

export default CartPage;
