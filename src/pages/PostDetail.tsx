import { useNavigate } from "react-router-dom";
import PostDetailWidget from "../widgets/post/PostDetailWidget";

const PostDetail = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/")
    };

    return (
        <section className="container flex flex-col gap-7">
            <button onClick={handleBackClick}  className="action md-space next-icon" >
                <svg className="transform scale-x-[-1]" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L1 11" stroke="#193CB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Назад
            </button>
            <PostDetailWidget />
        </section>
    )
}

export default PostDetail