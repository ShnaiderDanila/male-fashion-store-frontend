import { socialMediaImages } from '../../utils/constants/socialMediaImages';
import Container from '../ui/Container/Container';

const Comments = () => {
  return (
    <section className="py-16 bg-[#f3f2ee] sm:py-24">
      <Container>
        <div className="gap-8 lg:flex lg:items-center">
          <ul className="w-full flex flex-wrap justify-center">
            {socialMediaImages.map((item) => (
              <li key={item} className="sm:w-[33.33%]">
                <img
                  className="w-full h-full object-cover object-center"
                  src={item}
                  alt="Фото из социальной сети"
                />
              </li>
            ))}
          </ul>
          <div className="pt-16 w-full lg:max-w-80 lg:pt-0">
            <h2 className="mb-7 text-2xl font-bold leading-[3rem] md:text-4xl">Отзывы о нас</h2>
            <p className="mb-16 text-secondary">
              Фото и отзывы по хештегу в социальных сетях. Здесь вы найдете мнения ценителей мужской
              моды.
            </p>
            <h3 className="text-red text-3xl font-bold">#Male_Fashion</h3>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Comments;
