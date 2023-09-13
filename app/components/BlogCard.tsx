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
    <div className="shadow-[0px_20px_40px_0px_rgba(160,160,160,0.1)] w-[297px]">
      <img src={imageThumbnail} alt="oms 1" />
      <div className="px-3 pt-3 pb-[22px]">
        <p className="font-semibold text-primary-p-80 mb-2.5">{category}</p>
        <h3 className="font-semibold text-xl text-neutral-n-90 mb-2">
          {title}
        </h3>
        <p className="text-neutral-n-90 line-clamp-2">{paragraph}</p>
      </div>
    </div>
  );
};

export default BlogCard;
