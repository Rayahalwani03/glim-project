import DontaionsCard from "../components/cards/DontaionsCard";
import PostCard from "../components/cards/PostCard";
import TestCard from "../components/cards/TestCard";
import FQACard from "../components/cards/FQACard";

const Cards = () => {
  return (
    <>
      <div className="space-y-4">
        <PostCard />
        <DontaionsCard />
        <FQACard />
        <TestCard />
      </div>
    </>
  );
};

export default Cards;
