import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LuCalendarSearch } from 'react-icons/lu';
import { TBlogPost } from '../../../types/entities/blog-post-entity';
import { formatCreationDate } from '../../../utils/functions/formatCreationDate';

interface BlogPostProps {
  post: TBlogPost;
}

const BlogPost: FC<BlogPostProps> = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}`} className="group">
      <li className="max-w-[360px] h-96 relative flex flex-col justify-center">
        <div>
          <img
            src={`${import.meta.env.VITE_REACT_API_URL}/${post.image}`}
            alt={post.title}
            className="w-full object-cover object-center"
          />
        </div>
        <div className="bg-white gap-3 -mt-10 max-w-[288px] mx-auto p-5 md:p-7 ">
          <span className="flex gap-2 items-center mb-3">
            <LuCalendarSearch />
            {formatCreationDate(post.createdAt)}
          </span>
          <h5 className="mb-3">{post.title}</h5>
          <span className="inline-block uppercase tracking-m font-bold text-sm group">
            Читать далее
            <span className="h-0.5 block bg-black my-0.5 w-full transition-all duration-300 group-hover:w-2/6 group-hover:bg-red"></span>
          </span>
        </div>
      </li>
    </Link>
  );
};

export default BlogPost;
