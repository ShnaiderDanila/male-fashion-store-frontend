import Logo from '../ui/Logo';
import { IoMailOutline } from 'react-icons/io5';

import logo from '../../assets/images/footer-logo.png';

const Footer = () => {
  return (
    <footer className="pt-[70px] pb-[20px] bg-primary text-primary-light text-[15px]">
      <div className="container ">
        <div className="flex justify-between">
          <div className="pr-[15px] max-w-[263px]">
            <Logo logo={logo} />
            <p className="my-[30px] leading-[25px]">
              The customer is at the heart of our unique business model, which includes design.
            </p>
          </div>
          <div className="flex flex-col px-[15px] max-w-[165px] gap-5">
            <h6 className="uppercase text-white tracking-[2px]">Shopping</h6>
            <a href="#">Contact Us</a>
            <a href="#">Catalog</a>
          </div>
          <div className="pl-[15px] max-w-[263px]">
            <h6 className="uppercase text-white tracking-[2px] mb-[20px]">Newletter</h6>
            <p className="mb-[15px] leading-[25px]">
              Be the first to know about new arrivals, look books, sales & promos!
            </p>
            <form className="flex py-[15px] text-[15px] border-b-white border-b-2 justify-between items-center">
              <input
                className="outline-none bg-transparent flex-1 placeholder:text-primary-light"
                type="email"
                placeholder="Ваш email"
              ></input>
              <button className="px-[6px]" type="submit">
                <IoMailOutline className="bg-transparent text-[20px]" />
              </button>
            </form>
          </div>
        </div>
        <div className="text-center pt-5 mt-10  border-t-[1px] border-white-light">
          Copyright ©2024 All rights reserved | This template is made with
        </div>
      </div>
    </footer>
  );
};

export default Footer;
