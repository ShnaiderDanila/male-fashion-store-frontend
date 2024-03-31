import { FC } from 'react';
import { Link } from 'react-router-dom';

import PageWrapper from '../../components/ui/PageWrapper/PageWrapper';
import Container from '../../components/ui/Container/Container';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignUpPage: FC = () => {
  return (
    <PageWrapper>
      <section className="pt-8 pb-36">
        <Container>
          <h2 className="text-center text-2xl mb-5 font-semibold">
            Добро пожаловать в Male Fashion
          </h2>
          <p className="text-center mb-8">
            Уже есть аккаунт?{' '}
            <Link to="/signin" className="underline py-3">
              Войти
            </Link>
          </p>
          <SignUpForm />
        </Container>
      </section>
    </PageWrapper>
  );
};

export default SignUpPage;
