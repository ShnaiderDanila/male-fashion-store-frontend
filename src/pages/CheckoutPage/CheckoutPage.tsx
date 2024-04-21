import Container from '../../components/ui/Container/Container';
import PageWrapper from '../../components/ui/PageWrapper/PageWrapper';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';

const CheckoutPage = () => {
  return (
    <PageWrapper>
      <section className="pt-10 pb-36">
        <Container>
          <h2 className="text-center text-2xl font-semibold mb-2">Оформление заказа</h2>
          <Link
            to={'/cart'}
            className="flex text-center items-center gap-1 text-primary-light justify-center p-3 mb-5 text-xl max-w-fit mx-auto"
          >
            <IoIosArrowRoundBack />
            Вернуться в корзину
          </Link>
          <CheckoutForm />
        </Container>
      </section>
    </PageWrapper>
  );
};

export default CheckoutPage;
