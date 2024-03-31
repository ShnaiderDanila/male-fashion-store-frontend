import PageWrapper from '../../components/ui/PageWrapper/PageWrapper';
import Container from '../../components/ui/Container/Container';
import ProfileForm from '../../components/ProfileForm/ProfileForm';

const ProfilePage = () => {
  return (
    <PageWrapper>
      <section className="pt-10 pb-36">
        <Container>
          <h2 className="text-center text-2xl mb-10 font-semibold">Личный кабинет</h2>
          <ProfileForm />
        </Container>
      </section>
    </PageWrapper>
  );
};

export default ProfilePage;
