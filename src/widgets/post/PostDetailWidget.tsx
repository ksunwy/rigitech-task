import { useParams } from "react-router-dom";
import PostCommentsWidget from "../comment/PostCommentsWidget";
import useFetchPost from "../../entities/post/model/useFetchPost";
import Loading from "../../shared/ui/Loading";


const PostDetailWidget = () => {
    const { postId } = useParams<{ postId: string }>();
    const { post, loading, error } = useFetchPost(Number(postId));

    if (loading) return <Loading />;
    if (error) return <p className="text-red-400">Ошибка: {error}</p>;

    if (!post) return <p>Пост не найден</p>;

    return (
        <div className="flex flex-col gap-5 max-w-3xl">
            <h1 className="text-3xl font-bold text-blue-800">{post.title}</h1>
            <p>{post.body}</p>
            <PostCommentsWidget postId={Number(postId)} />
        </div>
    );
};

export default PostDetailWidget;
