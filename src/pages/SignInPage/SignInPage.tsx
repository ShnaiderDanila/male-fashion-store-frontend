import { FC } from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/ui/Container/Container';
import PageWrapper from '../../components/ui/PageWrapper/PageWrapper';
import SignInForm from '../../components/SignInForm/SignInForm';

const SignInPage: FC = () => {
  return (
    <PageWrapper>
      <section className="pt-8 pb-36">
        <Container>
          <h2 className="text-center text-2xl mb-5 font-semibold">
            Добро пожаловать в Male Fashion
          </h2>
          <p className="text-center mb-8">
            Впервые здесь?{' '}
            <Link to="/signup" className="underline py-3">
              Зарегистрироваться
            </Link>
          </p>
          <SignInForm />
        </Container>
      </section>
    </PageWrapper>
  );
};

export default SignInPage;
