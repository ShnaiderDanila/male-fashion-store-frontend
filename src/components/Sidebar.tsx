import Categories from './ui/Categories';

const Sidebar = () => {
  return (
    <aside className="mt-[87px] pr-[20px] flex flex-col gap-[25px]">
      <Categories />
      <Categories />
      <Categories />
    </aside>
  );
};

export default Sidebar;
