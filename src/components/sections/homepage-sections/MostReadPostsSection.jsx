import MostReadCard from "../../cards/MostReadCard";

function MostReadPostsSection() {
  return (
    <>
      <section>
        <div className="">
          <h1 className="text-4xl font-bold">Most Read Posts</h1>
        </div>

        <div>
<MostReadCard/>
        </div>
      </section>
    </>
  );
}

export default MostReadPostsSection;
