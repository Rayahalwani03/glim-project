
import ApplyButton from "../buttons/ApplyButton"

const BecomePublisherCardHp = () => {
  return (
    <div>
        <div className="flex flex-wrap bg-red-500 text-white pl-7 ">
      {/* Left Section */}
      <div className="flex flex-col justify-center p-8 w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Become a publisher and write for WR today</h2>
        <div className="mt-2">
        <ApplyButton/>

    </div> 

         </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2">
        <img
          src="hands.png" // Replace this with the actual image URL
          alt="Hands typing on a keyboard"
          className="w-full h-full object-cover"
        />
     
      </div>
    </div>
      
    </div>
  )
}

export default BecomePublisherCardHp
