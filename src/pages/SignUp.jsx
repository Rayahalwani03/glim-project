import { Link } from "react-router";
import Button from "../components/buttons/Button";
function SignUp() {


  function handleSubmit(){
    
  }
  return (
    <>
     
        {/* Left Section */}
        <div className="flex flex-col  w-full max-w-md mx-auto px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Become a Member
          </h1>
          <h3 className="text-lg text-gray-600 mb-8">
            Enter your details to access your account.
          </h3>

          <div className="space-y-6">
            <form onClick={handleSubmit}>
              {/* Name Input */}

              <div className="flex gap-3">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>
                </div>

                {/* Last Name Input */}
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                    <input
                      type="text"
                      id="last-name"
                      placeholder="Enter your last name"
                      className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>
              </div>

              {/* Confirm Password Input */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="Confirm your password"
                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>
              </div>

              {/* Sign Up Button */}
              <Button
                type="submit"
                className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
                label="Sign up"/>
            </form>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-500">Or</span>
            <p className="text-sm text-gray-600 mt-2">
              Have an account?{" "}
              <Link to="/sign-in" className="text-blue-500 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Right Section */}
        {/* <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: 'url("your-image-url.jpg")' }}
      >
        <img src="/Images/littlegirl.png" alt="A little girl painting" />
      </div> */}
  
    </>
  );
}

export default SignUp;
