export default function Footer() {
    return (
      <footer className="w-full bg-white py-12 border-t max-w-8xl mx-auto ">
        <div className=" px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Mission Statement */}
            <div className="space-y-4 lg:px-10 ">
              <h2 className="text-blue-600 font-bold text-2xl">MORENT</h2>
              <p className="text-gray-600 text-sm">
                Our vision is to provide convenience and help increase your sales business.
              </p>
            </div>
  
            {/* About Column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">About</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 text-sm hover:text-blue-600">How it works</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-blue-600">Featured</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-blue-600">Partnership</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-blue-600">Business Relation</a></li>
              </ul>
            </div>
  
            {/* Community Column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Community</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 text-sm hover:text-blue-600">Events</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-blue-600">Podcast</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-blue-600">Invite a friend</a></li>
              </ul>
            </div>
  
            {/* Socials Column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Socials</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 text-sm hover:text-blue-600">Discord</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-blue-600">Instagram</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-blue-600">Twitter</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-blue-600">Facebook</a></li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t">
            <p className="text-gray-600 text-sm">©2022 MORENT. All rights reserved</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 text-sm hover:text-blue-600">Privacy & Policy</a>
              <a href="#" className="text-gray-600 text-sm hover:text-blue-600">Terms & Condition</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
