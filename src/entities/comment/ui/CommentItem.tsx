import { CommentProps } from '../types/commentTypes'; 

const CommentItem = ({ comment }: CommentProps) => {
  return (
    <div className="flex flex-col gap-2 space border-1 border-solid border-blue-800 rounded">
      <h3 className="font-semibold text-lg">{comment.name}</h3>
      <p className="text-sm text-gray-600">{comment.body}</p>
    </div>
  );
};

export default CommentItem;
