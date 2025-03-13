import { useInfinitePosts } from "../../entities/post/model/useFetchPosts";
import PostCard from "../../entities/post/ui/PostCard";
import Loading from "../../shared/ui/Loading";
import { Post } from "../../entities/post/types/postTypes";

export const PostListWidget: React.FC = () => {
    const { posts, loading, error, hasMore } = useInfinitePosts(10);

    if (error) return <p className="text-red-400">Ошибка: {error}</p>;

    return (
        <div className="flex flex-col gap-5">
            <div className="grid lg:grid-cols-3 gap-5 grid-cols-1">
                {posts.map((post: Post, i) => (
                    <PostCard key={i} post={post} />
                ))}
            </div>

            <div className="flex flex-col gap-4">
                {loading && <Loading />}
                {!hasMore && !loading && <p className="text-center text-blue-800">Все посты загружены</p>}
            </div>
        </div>
    );
};
