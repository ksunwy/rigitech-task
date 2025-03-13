import { useEffect, useState, useCallback } from "react";
import { fetchPosts } from "../api/postApi";
import { Post, UseInfinitePostsReturn } from "../types/postTypes";
import { throttle } from "lodash";

export const useInfinitePosts = (limit: number = 10): UseInfinitePostsReturn => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [start, setStart] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true); 

  const loadMorePosts = async (): Promise<void> => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newPosts: Post[] = await fetchPosts(start, limit);
      if (newPosts.length === 0) {
        setHasMore(false); 
      } else {
        setPosts((prev: Post[]) => [...prev, ...newPosts]); 
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
        loadMorePosts();
      }
    }, 500), 
    [loading, hasMore]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    loadMorePosts(); 
  }, []);

  return { posts, loading, error, hasMore };
};
