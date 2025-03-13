import React from 'react';
import { PostListWidget } from '../widgets/post/PostListWidget';

const PostList: React.FC = () => {
  return (
    <section className="container flex flex-col gap-7">
      <h1 className="text-3xl font-bold text-blue-800">Список постов</h1>
      <PostListWidget />
    </section>
  );
};

export default PostList;
