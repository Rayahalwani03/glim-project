function SignUp() {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="flex flex-col justify-center w-full max-w-md mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Become a Member
        </h1>
        <h3 className="text-lg text-gray-600 mb-8">
          Enter your details to access your account.
        </h3>

        <div className="space-y-6">
          <form>
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-2 block w-full px-3 py-2 border
             border-gray-300 
             rounded-md shadow-sm 
             focus:outline-none
              focus:ring-2
               focus:ring-blue-500"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, ""); // Removes non-letter characters and symbols
                }}
              />
            </div>

            {/*Last Name Input */}
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                placeholder="Enter your last name"
                className="mt-2 block w-full px-3 py-2 border
             border-gray-300 
             rounded-md shadow-sm 
             focus:outline-none
              focus:ring-2
               focus:ring-blue-500"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, ""); // Removes non-letter characters and symbols
                }}
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Input */}
            <div>
              <div className="flex justify-between items-center">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>

          {/* Login Button */}
          <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition">
            Sign up
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-500">Or</span>
          <p className="text-sm text-gray-600 mt-2">
            Have an account?{" "}
            <a href="/sign-in" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: 'url("your-image-url.jpg")' }}
      >
        <img src="/Images/littlegirl.png" alt="A little girl painting" />
      </div>
    </div>
  );
}

export default SignUp;
