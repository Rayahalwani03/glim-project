import PostCard from "../../cards/PostCard";

const Posts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default Posts;
