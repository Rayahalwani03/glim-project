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
        "Breaking down the stigma and embracing holistic well-being.",
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

  return (
    <div>
      <div className="grid grid-cols-3 gap-y-2 gap-x-5">
        {cards.map((card) => (
          <div
            key={card.id}
            className=" w-60 rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <img
              className="w-full h-40 object-cover"
              src={card.image}
              alt={card.title}
            />
            <div className="p-4">
              <p className="text-sm font-semibold text-red-500 uppercase">
                {card.category}
              </p>
              <h2 className="text-lg font-bold text-gray-800 mt-1">
                {card.title}
              </h2>
              <p className="text-gray-600 text-sm mt-1">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
