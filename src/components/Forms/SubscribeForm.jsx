import { useState } from "react";

const SubscribeForm = () => {
  const category = "History";

  const [isSubscribeClicked, setSubscribeClicked] = useState(false);

  function handleSubscribeClicked() {
    setSubscribeClicked(true);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center p-6 bg-indigo-50 rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Get {category} Posts
        </h2>
        <p className="text-gray-600 mb-6">Enter your email to get posts</p>


        
        <div className="flex w-full">
          <input
            id="subscribe-email"
            type="email"
            required
            placeholder="Your Email"
            className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:ring-indigo-200 "
          />
          <div>
            <button
              id="subscribe-btn"
              className="px-6 py-3 bg-indigo-400 text-white font-light rounded-r-lg hover:bg-gray-400"
              onClick={handleSubscribeClicked}
              disabled={isSubscribeClicked}
            >
              Subscribe
            </button>
          </div>
        </div>
        {isSubscribeClicked && (
          <div>
            <h1 className="mt-3 text-gray-800">
              Hehe!! See you in your email inbox
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default SubscribeForm;
