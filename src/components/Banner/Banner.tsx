import { Link } from 'react-router-dom';

import { banners } from '../../utils/constants/banners';
import Container from '../ui/Container/Container';

const Banner = () => {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <ul className="flex flex-col items-center gap-10 lg:block">
          <li className="group max-w-80 md:max-w-96 lg:max-w-[440px] lg:relative lg:ml-[60%]">
            <Link to="/catalog">
              <img
                className="w-full object-cover object-center lg:max-w-96 lg:h-96"
                src={banners.clothes.image}
                alt={banners.clothes.title}
              />
              <div className="pt-5 w-full lg:pt-0 lg:absolute lg:top-1/3 lg:-left-[55%] lg:max-w-[300px]">
                <h2 className="text-2xl font-bold leading-[3rem] md:text-4xl mb-3.5">
                  {banners.clothes.title}
                </h2>
                <p className="inline-block uppercase tracking-m font-bold text-sm">
                  Купить
                  <span className="h-0.5 block bg-black my-0.5 w-full transition-all duration-300 group-hover:w-2/6 group-hover:bg-red"></span>
                </p>
              </div>
            </Link>
          </li>
          <div className="flex flex-col gap-10 lg:justify-between lg:flex-row ">
            <li className="group max-w-80 md:max-w-96 lg:max-w-[440px] lg:relative lg:-mt-20">
              <Link to="/catalog">
                <img
                  className="w-full object-cover object-center lg:h-96"
                  src={banners.accessories.image}
                  alt={banners.accessories.title}
                />
                <div className="pt-5 lg:absolute lg:mt-0">
                  <h2 className="text-2xl font-bold leading-[3rem] md:text-4xl mb-3.5">
                    {banners.accessories.title}
                  </h2>
                  <p className="inline-block uppercase tracking-m font-bold text-sm">
                    Купить
                    <span className="h-0.5 block bg-black my-0.5 w-full transition-all duration-300 group-hover:w-2/6 group-hover:bg-red"></span>
                  </p>
                </div>
              </Link>
            </li>
            <li className="group max-w-80 md:max-w-96 lg:max-w-[440px] lg:relative lg:mt-24">
              <Link to="/catalog">
                <img
                  className="w-full object-cover object-center lg:w-96 lg:h-96"
                  src={banners.shoes.image}
                  alt={banners.shoes.title}
                />
                <div className="pt-5 lg:absolute lg:top-1/3 lg:-left-[45%] lg:pt-0 lg:max-w-[300px]">
                  <h2 className="text-2xl font-bold leading-[3rem] md:text-4xl mb-3.5">
                    {banners.shoes.title}
                  </h2>
                  <p className="inline-block uppercase tracking-m font-bold text-sm">
                    Купить
                    <span className="h-0.5 block bg-black my-0.5 w-full transition-all duration-300 group-hover:w-2/6 group-hover:bg-red"></span>
                  </p>
                </div>
              </Link>
            </li>
          </div>
        </ul>
      </Container>
    </section>
  );
};

export default Banner;
