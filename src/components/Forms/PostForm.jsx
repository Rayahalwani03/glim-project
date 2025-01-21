const PostForm = ({ closePostForm }) => {
  return (
    <div
      id="new-post-popup"
      tabIndex="-1"
      className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[999] h-full items-center justify-center popup flex"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow popup-body">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
            onClick={closePostForm} // Close the popup when clicked
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="#c6c7c7"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close popup</span>
          </button>
          <div className="p-5">
            <h3 className="text-2xl mb-4 font-medium">Publish New Post</h3>
            <p className="mb-4 text-sm font-normal text-gray-800">
              Fill in the details below to publish a new post.
            </p>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="post-title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  id="post-title"
                  name="title"
                  type="text"
                  required
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  placeholder="Enter post title"
                />
              </div>

              <div>
                <label
                  htmlFor="post-desc"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="post-desc"
                  name="description"
                  required
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  placeholder="Enter post description"
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="post-image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Image
                </label>
                <input
                  id="post-image"
                  name="image"
                  type="file"
                  accept="image/*"
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                />
              </div>

              <div className="flex items-center gap-4 mt-4">
                <button
                  type="submit"
                  className="group relative inline-block w-full rounded-lg border border-transparent bg-black py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
                >
                  Publish
                </button>
                <button
                  type="button"
                  className="group relative inline-block w-full rounded-lg border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1"
                  onClick={closePostForm} // Close the popup when clicked
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
