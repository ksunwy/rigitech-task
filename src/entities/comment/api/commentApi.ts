import { IComment } from '../types/commentTypes';

export const fetchCommentsByPostId = async (postId: number, page: number, limit: number): Promise<IComment[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments?_page=${page}&_limit=${limit}`
  );
  
  if (!response.ok) {
    throw new Error('Не удалось загрузить комментарии');
  }

  const data: IComment[] = await response.json();
  return data;
};
