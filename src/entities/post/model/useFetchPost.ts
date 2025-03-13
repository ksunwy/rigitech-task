import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const useFetchPost = (postId: number) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        if (!response.ok) {
          throw new Error("Не удалось загрузить пост");
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  return { post, loading, error };
};

export default useFetchPost;
