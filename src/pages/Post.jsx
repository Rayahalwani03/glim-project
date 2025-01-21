import PostTitle from "../components/sections/post-sections/PostTitle";
import SubscribeSection from "../components/sections/post-sections/SubscribeSection";
import PostContentSection from "../components/sections/post-sections/PostContentSection";


const Post = () => {
  return (
    <>
   

      <div className="mr-32 ml-36 mt-12 mb-12">
      <PostTitle/>
      <PostContentSection/>
      <SubscribeSection/>
    </div>
  
    </>
  );
};

export default Post;
