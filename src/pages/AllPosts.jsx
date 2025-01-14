import Header from "../components/sections/all-posts-sections/HeaderSection";
import Posts from "../components/sections/all-posts-sections/PostsSection";
import SearchBar from "../components/sections/all-posts-sections/SearchBarSection";

const AllPosts = () => {
  return (
    <div className="mr-32 ml-36 mt-12 mb-12">
      <Header />
      <SearchBar />
      <Posts />
    </div>
  );
};

export default AllPosts;
