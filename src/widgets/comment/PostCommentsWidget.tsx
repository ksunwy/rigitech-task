import { useState } from 'react';
import { useInfiniteComments } from '../../entities/comment/model/useComments';
import { Comment, PostCommentsWidgetProps } from '../../entities/comment/types/commentTypes';
import Loading from '../../shared/ui/Loading';
import CommentItem from '../../entities/comment/ui/CommentItem';

const PostCommentsWidget: React.FC<PostCommentsWidgetProps> = ({ postId }) => {
  const [showComments, setShowComments] = useState<boolean>(false);
  const { comments, loading, error } = useInfiniteComments(postId);

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  if (loading) return <Loading />;
  if (error) return <p className="text-red-400">Ошибка: {error}</p>;

  return (
    <div className="flex flex-col gap-5">
      <button disabled={comments.length === 0} onClick={toggleComments} className="action md-space next-icon" >
        {showComments ? 'Скрыть комментарии' : 'Показать комментарии'}
      </button>

      {showComments && (
        <div className="flex flex-col gap-5">
          {comments.length === 0 ? (
            <p>Комментариев нет</p>
          ) : (
            comments.map((comment: Comment, i) => (
                <CommentItem key={i} comment={comment} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default PostCommentsWidget;
