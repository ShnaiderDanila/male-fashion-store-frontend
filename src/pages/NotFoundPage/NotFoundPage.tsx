import PageWrapper from '../../components/ui/PageWrapper/PageWrapper';
import { Link } from 'react-router-dom';
import Container from '../../components/ui/Container/Container';

const NotFoundPage = () => {
  return (
    <PageWrapper>
      <Container>
        <div className="text-center py-36 flex flex-col gap-10 items-center">
          <h2 className="uppercase text-4xl">Страница не найдена</h2>
          <p className="text-center">Мы не смогли найти страницу по вашей ссылке.</p>
          <Link to="/catalog" className="bg-gray p-5">
            Перейти к каталогу
          </Link>
        </div>
      </Container>
    </PageWrapper>
  );
};

export default NotFoundPage;
