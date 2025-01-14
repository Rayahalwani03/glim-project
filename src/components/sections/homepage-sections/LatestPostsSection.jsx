
import PostCard from "../../cards/PostCard"
function LatestPostsSection() {


  return (

<>

<div >
  <div className=" p-4">
  <h1 className="text-4xl font-bold" >Latest Posts</h1>
  </div>

      {/* Set a 3-column grid layout */}
      <PostCard/>
    </div>
</>


  )
}

export default LatestPostsSection
