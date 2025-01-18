export default function PickUpSection() {
    return (
      <div className="bg-white p-6 rounded-lg ">
        {/* Title */}
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
          <h3 className="text-lg font-semibold text-gray-900">Pick-Up</h3>
        </div>
        
        {/* Details */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          {/* Location */}
          <div>
            <label className="block  mb-1 font-bold text-black text-lg">Locations</label>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 font-medium ">Kota Semarang</span>
              <button className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Date */}
          <div>
            <label className="block font-bold text-black mb-1 text-lg">Date</label>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 font-medium">20 July 2022</span>
              <button className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Time */}
          <div>
            <label className="block font-bold text-black mb-1 text-lg">Time</label>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 font-medium">07.00</span>
              <button className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  