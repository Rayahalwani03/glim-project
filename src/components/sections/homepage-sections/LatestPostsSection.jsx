import PostCard from "../../cards/PostCard";
function LatestPostsSection() {
  return (
    <>
      <section className="  ">
        <div>
          <div>
            <h1 className="text-4xl font-bold">Latest Posts</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-9">
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestPostsSection;
