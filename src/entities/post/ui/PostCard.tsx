import { Link } from "react-router-dom";
import { PostCardProps } from "../types/postTypes";

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="rounded-lg h-[200px] flex flex-col justify-between gap-2 border-1 border-solid border-blue-800 space min-h-fit">
      <Link to={`/post/${post.id}`}>
        <h2 className="text-xl font-semibold text-blue-950">{post.title}</h2>
      </Link>
      <Link to={`/post/${post.id}`} className="action md-space next-icon" >
        Узнать больше
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L6 6L1 11" stroke="#193CB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
};

export default PostCard;
