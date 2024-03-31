import Logo from '../ui/Logo/Logo';

import logo from '../../assets/images/footer-logo.png';

import { socialMediaIcons } from '../../utils/constants/socialMediaIcons';
import { paymentIcons } from '../../utils/constants/paymentIcons';
import Container from '../ui/Container/Container';

const Footer = () => {
  return (
    <footer className="pt-16 pb-5 bg-primary text-primary-light">
      <Container>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 sm:justify-items-center">
          <div className="w-full max-w-64">
            <Logo logo={logo} />
            <p className="mt-7 leading-m">
              Мультибрендовый магазин одежды, обуви и аксессуаров для мужчин.
            </p>
          </div>
          <div className="flex flex-col gap-5 w-full max-w-64">
            <h6 className="uppercase text-white tracking-s">Адреса магазинов</h6>
            <a
              className="hover-link inline-block py-2 lg:py-0"
              target="_blank"
              href="https://yandex.ru/maps/"
            >
              Новосибирск, Серебренниковская, 31
            </a>
            <a
              className="hover-link inline-block py-2 lg:py-0"
              target="_blank"
              href="https://yandex.ru/maps/"
            >
              Новосибирск, Мичурина, 10
            </a>
          </div>
          <div className="flex flex-col w-full gap-5 max-w-64">
            <h6 className="uppercase text-white tracking-s">Наши контакты</h6>
            <a className="hover-link inline-block py-2 lg:py-0" href="tel:+74955445775">
              +7 (495) 544-57-75
            </a>
            <a className="hover-link inline-block py-2 lg:py-0" href="tel:+78007752830">
              +7 (800) 775-28-30
            </a>
          </div>
          <div className="w-full max-w-64">
            <h6 className="uppercase text-white tracking-s mb-3 lg:mb-5">Социальные сети</h6>
            <ul className="flex flex-wrap gap-2 lg:gap-5 text-2xl">
              {socialMediaIcons.map(({ Icon, link }) => (
                <li key={link}>
                  <a className="hover-link inline-block py-2 lg:py-0" target="_blank" href={link}>
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center pt-5 mt-10  border-t border-white-light">
          <ul className="flex flex-wrap justify-center gap-5 mb-5">
            {paymentIcons.map(({ src, alt }) => (
              <li key={src}>
                <img src={src} alt={alt} />
              </li>
            ))}
          </ul>
          <p>Male Fashion ©2024 | Все права защищены</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
