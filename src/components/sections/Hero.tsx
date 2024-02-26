import Button from '../ui/Button';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero bg-[url('./src/assets/images/hero-1.jpg')] bg-cover bg-center">
      <div className="container pt-[230px]">
        <div className="max-w-[41%] flex flex-col gap-[30px]">
          <h6 className="uppercase text-red font-bold text-sm tracking-[2px]">Зимняя коллекция</h6>
          <h2 className="title">Fall - Winter Collections 2030</h2>
          <p className="primary-text">
            A specialist label creating luxury essentials. Ethically crafted with an unwavering
            commitment to exceptional quality.
          </p>
          <Button text="shop now" />
          <ul className="flex gap-[32px] mt-[190px] text-secondary mb-7">
            <li>
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaPinterest />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
