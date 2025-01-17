import SubscribeButton from "../buttons/SubscribeButton";


const SubscribeCard = () => {

    const category = "History";

  return (
   <>

<div className="flex flex-col items-center justify-center p-6 bg-pink-50 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Get {category} Posts</h2>
      <p className="text-gray-600 mb-6">Enter your email to get posts</p>
      <div className="flex w-full">
        <input
          id="subscribe-email"
          type="email"
          placeholder="Your Email"
          className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:ring-red-200"
        />

        <SubscribeButton/>

      </div>
    </div>
        
   
   </>


      
   
  )
}

export default SubscribeCard
