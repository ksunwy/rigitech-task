import { Post } from "../types/postTypes";

export const fetchPosts = async (start: number = 0, limit: number = 10): Promise<Post[]> => {
  const response: Response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_start=${start}`
  );

  if (!response.ok) {
    throw new Error(`Ошибка загрузки постов: ${response.status} ${response.statusText}`);
  }

  const data: Post[] = await response.json();
  return data;
};
