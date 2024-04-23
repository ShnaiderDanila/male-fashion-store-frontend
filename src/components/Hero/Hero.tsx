import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import Container from '../ui/Container/Container';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useCallback, useEffect, useState } from 'react';

import hero1 from '../../assets/images/hero/hero-1.jpg';
import hero2 from '../../assets/images/hero/hero-2.jpg';

const Hero = () => {
  const slides = [
    {
      image: hero1,
      subTitle: 'Весенняя коллекция',
      text: 'Специализированный интернет-магазин, продающий мужскую одежду, изготовленную с соблюдением этических норм и неизменным стремлением к исключительному качеству.',
    },
    {
      image: hero2,
      subTitle: 'Летняя коллекция',
      text: 'Откройте новые горизонты с нашей коллекцией. Идеальные силуэты и элегантный дизайн - все, что вам нужно для уверенного образа на каждый день.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <>
      <section
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        className={`bg-cover bg-no-repeat py-52 bg-[65%] sm:py-44 sm:bg-[62%] lg:bg-[55%] 
        lg:py-64 px-16 duration-500 relative`}
      >
        <Container>
          <div className="sm:max-w-[45%] flex-col items-start gap-7 hidden sm:flex">
            <h2 className="uppercase text-red font-bold text-base lg:text-sm tracking-s duration-500">
              {slides[currentIndex].subTitle}
            </h2>
            <h1 className="hidden sm:block font-bold text-3xl lg:text-5xl duration-500">
              Весна - Лето Коллекция 2024
            </h1>
            <p className="text-secondary hidden lg:block transition-all duration-500">
              {slides[currentIndex].text}
            </p>
            <Link
              to="/catalog"
              className="items-start gap-2 py-3.5 sm:px-7 bg-black
              text-sm text-white tracking-m font-bold uppercase max-w-48 hidden sm:flex transition-all duration-200 hover:opacity-80"
            >
              {'Перейти'}
              <FaArrowRightLong className="text-bold text-lg" />
            </Link>
          </div>
        </Container>
        <button
          onClick={prevSlide}
          className="text-4xl lg:hover:opacity-70 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 hidden min-[375px]:block"
        >
          <IoIosArrowBack className="text-primary" />
        </button>
        <button
          onClick={nextSlide}
          className="text-4xl lg:hover:opacity-70 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 hidden min-[375px]:block"
        >
          <IoIosArrowForward className="text-primary" />
        </button>
        <div className="absolute bottom-10 right-0 left-0 ">
          <div className="items-center justify-center gap-2 flex">
            {slides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`transition-all w-3 h-3  border rounded-full cursor-pointer ${slideIndex === currentIndex ? 'bg-primary' : 'bg-white'}`}
              />
            ))}
          </div>
        </div>
      </section>
      <Container>
        <div className="sm:max-w-[45%] flex flex-col items-start gap-4 mt-5 sm:hidden">
          <h2 className="uppercase text-red font-bold text-base lg:text-sm tracking-s mx-auto">
            {slides[currentIndex].subTitle}
          </h2>
          <h1 className="block font-bold text-2xl mx-auto text-center">
            Весна - Лето Коллекция 2024
          </h1>
          <Link
            to="/catalog"
            className="flex items-start gap-2 py-3.5 px-7 bg-black
                     text-sm text-white tracking-m font-bold uppercase max-w-48 text-center mx-auto"
          >
            {'Перейти'}
            <FaArrowRightLong className="text-bold text-lg" />
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Hero;
