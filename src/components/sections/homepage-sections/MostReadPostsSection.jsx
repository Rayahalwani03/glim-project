
import MostReadCard from "../../cards/MostReadCard";
function MostReadPostsSection() {

  const posts = [
    { title: 'How Women Are Safeguarding Cultural Heritage', category: 'Art' },
    { title: 'Rising From Adversity: Stories of Women Rebuilding Companies', category: 'Tech' },
    { title: 'Breaking Barriers: Girls Leading the Way in Higher Education', category: 'Education' }
  ];
  

  return (
    <div className="mt-6">
      <h1  className="text-4xl font-bold">Most Read Posts</h1>
      <section className="  mt-12 mb-12 ">
      <MostReadCard />
      <MostReadCard />
      <MostReadCard />
    </section>
      
    </div>
  )
}

export default MostReadPostsSection
