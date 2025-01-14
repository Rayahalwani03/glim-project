

function MostReadPostsSection() {

  const posts = [
    { title: 'How Women Are Safeguarding Cultural Heritage', category: 'Art' },
    { title: 'Rising From Adversity: Stories of Women Rebuilding Companies', category: 'Tech' },
    { title: 'Breaking Barriers: Girls Leading the Way in Higher Education', category: 'Education' }
  ];
  

  return (
    <div>
      <section className="  mt-12 mb-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Most Read Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600">Category: {post.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default MostReadPostsSection
