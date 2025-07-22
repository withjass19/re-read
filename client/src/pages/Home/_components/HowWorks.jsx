import React from 'react'

const HowWorks = () => {
  return (
    <div className="w-full bg-white flex justify-center items-center lg:py-32 md:py-24 px-4">
      <div className="w-full md:w-4/5 max-w-7xl grid md:grid-cols-2 gap-8 md:p-0 py-10 px-16">
        
        {/* Left Section: Heading */}
        <div className="text-center md:text-start flex flex-col gap-4 justify-center">
          <p className="text-gray-700 text-lg sm:text-xl lg:text-2xl font-basefont font-medium">
            How it works
          </p>
          <p className="font-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            Old books lying useless? Sell them on ReRead and let someone else enjoy them!
          </p>
        </div>

        {/* Right Section: Steps */}
        <div className="flex flex-col gap-6">
          {/* Step 01 */}
          <div className="flex items-start p-4 gap-4 border-t-2 border-b-2 border-gray-300">
            <p className="font-basefont font-black text-3xl sm:text-4xl text-red-600 min-w-[2.5rem]">01</p>
            <div className="flex flex-col gap-2">
              <p className="font-primary text-lg sm:text-xl md:text-2xl">Search Book</p>
              <p className="font-basefont text-sm sm:text-base text-gray-700">
                Find any book you’re looking for through our easy search system.
              </p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="flex items-start p-4 gap-4 border-b-2 border-gray-300">
            <p className="font-basefont font-black text-3xl sm:text-4xl text-yellow-500 min-w-[2.5rem]">02</p>
            <div className="flex flex-col gap-2">
              <p className="font-primary text-lg sm:text-xl md:text-2xl">Contact with buyer</p>
              <p className="font-basefont text-sm sm:text-base text-gray-700">
                Chat or call the seller directly and ask any questions you have.
              </p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="flex items-start p-4 gap-4 border-b-2 border-gray-300">
            <p className="font-basefont font-black text-3xl sm:text-4xl text-sky-400 min-w-[2.5rem]">03</p>
            <div className="flex flex-col gap-2">
              <p className="font-primary text-lg sm:text-xl md:text-2xl">Reserve book and pay</p>
              <p className="font-basefont text-sm sm:text-base text-gray-700">
                Reserve your book securely and pay when you're ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowWorks
