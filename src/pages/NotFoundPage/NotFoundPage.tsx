import PageWrapper from '../../components/ui/PageWrapper/PageWrapper';
import Container from '../../components/ui/Container/Container';
import CustomButton from '../../components/ui/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Container>
        <div className="text-center py-36 flex flex-col gap-10 items-center">
          <h2 className="uppercase text-2xl tracking-m">Страница не найдена</h2>
          <p className="text-center">Мы не смогли найти страницу по вашей ссылке</p>
          <CustomButton maxWidth="384px" onClick={() => navigate('/catalog')}>
            Перейти в каталог
          </CustomButton>
        </div>
      </Container>
    </PageWrapper>
  );
};

export default NotFoundPage;
