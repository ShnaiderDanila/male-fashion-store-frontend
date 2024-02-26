import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <section className="py-10 bg-[#f3f2ee]">
      <div className="container">
        <h4 className="text-primary text-2xl mb-2 font-bold">Каталог</h4>
        <Link to="/">Главная</Link>
        <span className="mx-[9px]">&gt;</span>
        <span className="text-primary-light">Каталог</span>
      </div>
    </section>
  );
};

export default Breadcrumb;
