const PostTitle = () => {

  const info = {
    name:"Raya Halwani",
    category:"History",
    date:"2025-01-18"
  };
  return (
<>

<div>
<h1 className="font-bold text-4xl  mt-4 mb-2" >Shattering chains How women redefined the World</h1>
<div className="font-light  mb-4 text-gray-600"><span>{info.name} |</span> <span>{info.category} | </span> <span>{info.date }  </span><span></span></div>
</div>
</>
  );
};

export default PostTitle;
