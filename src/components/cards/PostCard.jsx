const PostCard = () => {
  const cards = [
    {
      id: 1,
      category: "Health",
      title: "How Women Are Shaping Modern Health and Wellness",
      description:
        "The universe how far away concept of the number one Cambrian explosion",
      image: "https://via.placeholder.com/400x300", // Replace with your image URL
    },
    {
      id: 2,
      category: "Health",
      title: "Empowering Fitness Trends for Women",
      description:
        "Exploring how innovative techniques are reshaping fitness culture.",
      image: "https://via.placeholder.com/400x300", // Replace with your image URL
    },
    {
      id: 3,
      category: "Health",
      title: "The Role of Mental Wellness in Women's Health",
      description:
        "Breaking down the stigistic well-being.Breakieing.Breaking down the stigma and embracing holistic well-being.Breaking down the stigma and embracing holistic well-being.",
      image: "https://via.placeholder.com/400x300", // Replace with your image URL
    },
    {
      id: 4,
      category: "Health",
      title: "Nutrition Insights for a Healthier Lifestyle",
      description: "Discover how nutrition plays a pivotal role in wellness.",
      image: "https://via.placeholder.com/400x300", // Replace with your image URL
    },
    {
      id: 5,
      category: "Health",
      title: "Innovative Practices in Women's Yoga",
      description: "From tradition to modern adaptations in yoga practices.",
      image: "https://via.placeholder.com/400x300", // Replace with your image URL
    },
    {
      id: 6,
      category: "Health",
      title: "How Community Shapes Women’s Health",
      description:
        "Understanding the impact of community support on well-being.",
      image: "https://via.placeholder.com/400x300", // Replace with your image URL
    },
  ];

  const getFirstWords = (description, numberOfWords) => {
    const words = description.split(" ");
    return (
      words.slice(0, numberOfWords).join(" ") +
      (words.length > numberOfWords ? "..." : "")
    );
  };

  return (
    <>
      <a href="/post">
        <div
          className="relative"
          style={{
            height: "390px",
            width: "312px",
            overflow: "hidden",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src="/Images/pexels-olly-866023.png"
            alt="Music"
            className="w-full h-40 object-cover rounded-t-lg"
          />

          <div className="p-4">
            <h1 className="text-indigo-600 mt-2 mb-2 uppercase text-xs font-semibold">
              music
            </h1>
            <h4 className="mt-2 mb-2 text-gray-950 text-lg sm:text-xl">
              Breaking Records and Stereotypes in Music
            </h4>

            <div >

            <p className="text-gray-600 text-sm sm:text-base break-words overflow-hidden">
              {getFirstWords(cards[2].description, 10)}
            </p>
            </div>

            <a
              href="/post"
              className="text-indigo-600 text-xs mt-2 mb-2 inline-block"
            >
              Read More <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </a>
    </>
  );
};

export default PostCard;
