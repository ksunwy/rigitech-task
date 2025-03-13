export interface Comment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}

export interface PostCommentsWidgetProps {
  postId: number;
}

export interface UseInfiniteCommentsReturn {
    comments: Comment[];
    loading: boolean;
    error: string | null;
    hasMore: boolean;
}

export interface CommentProps {
  comment: Comment;
};
