import Banner from '../../components/Banner/Banner';
import Hero from '../../components/Hero/Hero';
import PageWrapper from '../../components/ui/PageWrapper/PageWrapper';
import Reviews from '../../components/Reviews/Reviews';

const HomePage = () => {
  return (
    <PageWrapper>
      <Hero />
      <Banner />
      <Reviews />
    </PageWrapper>
  );
};

export default HomePage;
