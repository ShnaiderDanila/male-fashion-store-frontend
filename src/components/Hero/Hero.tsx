import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import Container from '../ui/Container/Container';

const Hero = () => {
  return (
    <section className="bg-[url('./src/assets/images/hero/hero-1.jpg')] bg-cover bg-no-repeat py-36 bg-[62%] sm:py-44 sm:bg-[60%] lg:bg-[55%] lg:py-64">
      <Container>
        <div className="sm:max-w-[45%] flex flex-col gap-7">
          <h6 className="uppercase text-red font-bold text-base lg:text-sm tracking-s">
            Весенняя коллекция
          </h6>
          <h1 className="hidden md:block font-bold text-5xl">Весна - Лето Коллекция 2024</h1>
          <p className="text-secondary hidden md:block">
            Специализированный интернет-магазин, продающий мужскую одежду, изготовленную с
            соблюдением этических норм и неизменным стремлением к исключительному качеству.
          </p>
          <Link
            to="/catalog"
            className="flex items-start gap-2 py-3.5 px-7 bg-black
                       text-sm text-white tracking-m font-bold uppercase max-w-48"
          >
            {'Перейти'}
            <FaArrowRightLong className="text-bold text-lg" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
