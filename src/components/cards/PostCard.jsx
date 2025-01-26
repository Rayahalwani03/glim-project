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
        "Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      image: "https://via.placeholder.com/400x300", // Replace with your image URL
    },
    {
      id: 4,
      category: "Health",
      title: "Nutrition Insights for a Healthier Lifestyle",
      description: "Discover cys a pivotaer cys a pivotal rer cys a pivotal rer cys a pivotal rer cys a pivotal rer cys a pivotal rer cys a pivotal rl role in wellness.",
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

  // const getFirstWords = (description, numberOfWords) => {
  //   const words = description.split(" ");
  //   return (
  //     words.slice(0, numberOfWords).join(" ") +
  //     (words.length > numberOfWords ? "..." : "")
  //   );
  // };

  const getFirstLetters = (description, numberOfLetters) => {
    if (description.length <= numberOfLetters) {
      return description;
    }
    return description.slice(0, numberOfLetters) + "...";
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

          <div className="p-4 max-w-30">
            <h1 className="text-indigo-600 mt-2 mb-2 uppercase text-xs font-semibold">
              music
            </h1>
            <h4 className="mt-2 mb-2 text-gray-950 text-lg sm:text-xl">
              Breaking Records and Stereotypes in Music
            </h4>

            <div>
              <p className="text-gray-600 text-sm sm:text-base max-h-20  h-18 w-72  break-words overflow-hidden">
                {getFirstLetters(cards[3].description, 85)}
              </p>
            </div>


          </div>
       
              <a
                href="/post"
                className="text-indigo-600 text-xs  bottom-3 left-4 absolute inline-block "
              >
                Read More <span aria-hidden="true">&rarr;</span>
              </a>
           
        </div>
      </a>
    </>
  );
};

export default PostCard;
