export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface UseInfinitePostsReturn {
    posts: Post[];
    loading: boolean;
    error: string | null;
    hasMore: boolean;
}

export interface PostCardProps {
    post: Post;
}
