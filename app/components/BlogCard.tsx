import Link from "next/link";

interface BlogProps {
  imageThumbnail: string;
  category: string;
  title: string;
  paragraph: string;
}
const BlogCard = ({
  imageThumbnail,
  category,
  title,
  paragraph,
}: BlogProps) => {
  return (
    <div className="max-sm:px-4 sm:w-[297px]">
      <Link
        href={`/blog/${title}`}
        className="shadow-[0px_20px_40px_0px_rgba(160,160,160,0.1)] sm:w-[297px] w-full group "
      >
        <img
          className="group-hover:brightness-110 w-full object-cover rounded-t-lg "
          src={imageThumbnail}
          alt={imageThumbnail}
        />
        <div className="px-3 pt-3 pb-[22px] sm:w-[297px] w-full border border-transparent group-hover:border-[#EDEDED] rounded-b-lg">
          <p className="font-semibold text-primary-p-80 mb-2.5">{category}</p>
          <h3 className="group-hover:text-primary font-semibold text-xl text-neutral-n-90 mb-2 line-clamp-3">
            {title}
          </h3>
          <p className="text-neutral-n-90 line-clamp-2">{paragraph}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
