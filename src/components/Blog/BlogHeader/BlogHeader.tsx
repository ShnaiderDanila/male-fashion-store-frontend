import blogHeader from 'src/assets/images/blog/blog-header.jpg';

const BlogHeader = () => {
  return (
    <section
      style={{ backgroundImage: `url(${blogHeader})` }}
      className="flex justify-center items-center bg-cover bg-[70%] bg-no-repeat min-h-48 md:min-h-64 lg:min-h-72"
    >
      <h2 className="lg:text-6xl md:text-5xl text-4xl text-white font-bold">Наш Блог</h2>
    </section>
  );
};

export default BlogHeader;
