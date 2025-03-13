import { useState, useEffect, useCallback } from "react";
import { fetchCommentsByPostId } from "../api/commentApi";
import { Comment, UseInfiniteCommentsReturn } from "../types/commentTypes";
import { throttle } from "lodash";

export const useInfiniteComments = (postId: number, limit: number = 10): UseInfiniteCommentsReturn => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [start, setStart] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadMoreComments = async (): Promise<void> => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newComments: Comment[] = await fetchCommentsByPostId(postId, start, limit);
      if (newComments.length === 0) {
        setHasMore(false); 
      } else {
        setComments((prev: Comment[]) => [...prev, ...newComments]); 
        setStart((prev: number) => prev + limit); 
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = useCallback(
    throttle((): void => {
      if (loading || !hasMore) return;

      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        loadMoreComments();
      }
    }, 500),
    [loading, hasMore]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (hasMore) {
      loadMoreComments(); 
    }
  }, [postId, hasMore]);

  return { comments, loading, error, hasMore };
};
