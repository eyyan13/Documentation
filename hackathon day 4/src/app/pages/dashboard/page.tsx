import Link from "next/link";
import maps from "/public/Maps.png";
import Image from "next/image";
import bluemercedes from "/public/bluemercedes.png";
import chart from "/public/Chart.png";
import brownswift from "/public/brownswift.png";
import rollsroyce from "/public/rollsroyce.png";
import greyswift from "/public/greyswift.png";
import blackswift from "/public/blackswift.png";
import PickUpSection from "@/components/LocationComponent";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-white shadow-md flex flex-col p-6">
        <div className="text-xs text-gray-400 mb-8">M A I N M E N U</div>
        <nav className="space-y-4">
          <Link href="#" className="flex items-center space-x-2 rounded-lg p-3 text-white bg-blue-500">
            <span>Dashboard</span>
          </Link>
          {["Car Rent", "Insight", "Reimburse", "Inbox", "Calendar"].map((item, index) => (
            <Link key={index} href="#" className="flex items-center space-x-2 text-gray-700">
              <span className="mt-4">{item}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto space-y-4 flex flex-col gap-y-5">
          <span className="text-gray-400 text-xs">P R E F E R E N C E S</span>
          <span>Setting</span>
          <span>Help & Center</span>
          <div className="flex items-center space-x-2">
            <span>Dark Mode</span>
            <button className="bg-gray-200 p-2 rounded-full">🌙</button>
          </div>
          <button className="text-red-500">Log Out</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Section */}
          <div className="col-span-12 lg:col-span-7 bg-white p-6 rounded-lg">
            <div className="font-bold text-xl mb-4">Details Rental</div>
            {/* Map and Details */}
            <div className="flex flex-col">
              <Image src={maps} alt="map" className="w-full h-auto" />
              <div className="flex items-center space-x-4 mt-5">
                <Image src={bluemercedes} alt="Car" className="rounded-lg w-20 h-auto" />
                <div>
                  <h3 className="text-gray-800 lg:text-3xl text-xl font-bold">Nissan GT - R</h3>
                  <p className="text-sm text-gray-500">440+ Reviewer</p>
                </div>
              </div>
            </div>
            <PickUpSection />
            <PickUpSection />
            <hr />
            <div className="flex justify-between items-center mt-10">
              <div className="font-bold text-xl">Total Rental Price</div>
              <div className="font-bold lg:text-4xl text-xl">$80.00</div>
            </div>
            <p className="text-gray-500 text-sm lg:text-xl">
              Overall price and includes rental discount
            </p>
          </div>

          {/* Right Section */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            {/* Top 5 Car Rental Section */}
            <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
              <h2 className="text-lg font-bold text-gray-900">Top 5 Car Rental</h2>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                {/* Chart Image */}
                <div className="w-52 h-52 relative">
                  <Image src={chart} alt="Rental Car Chart" layout="responsive" className="rounded-full" />
                  <div className="absolute top-20 right-16">
                    <p className="text-2xl font-bold">72,030</p>
                    <p className="text-gray-500 text-sm">Rental Car</p>
                  </div>
                </div>
                {/* Car Categories */}
                <div className="space-y-3">
                  {[
                    { category: "Sport Car", count: "17,439" },
                    { category: "SUV", count: "9,478" },
                    { category: "Coupe", count: "18,197" },
                    { category: "Hatchback", count: "12,510" },
                    { category: "MPV", count: "14,406" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center space-x-10 text-sm text-gray-700"
                    >
                      <span className="border rounded-full w-3 h-3 bg-[#175D9C]"></span>
                      <span>{item.category}</span>
                      <span className="font-bold py-3">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Transactions Section */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Recent Transactions</h2>
                <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
                  View All
                </a>
              </div>
              <div className="mt-4 space-y-4">
                {[
                  { image: blackswift, name: "Nissan GT – R", category: "Sport Car", date: "20 July", price: "$80.00" },
                  { image: brownswift, name: "Koenigsegg", category: "Sport Car", date: "19 July", price: "$99.00" },
                  { image: rollsroyce, name: "Rolls – Royce", category: "Sport Car", date: "18 July", price: "$96.00" },
                  { image: greyswift, name: "CR – V", category: "SUV", date: "17 July", price: "$80.00" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-4">
                    <div className="flex items-center space-x-4">
                      {/* Car Image */}
                      <Image src={item.image} alt={item.name} width={60} height={40} className="rounded-lg" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.category}</p>
                      </div>
                    </div>
                    {/* Transaction Info */}
                    <div className="text-right">
                      <p className="text-sm text-gray-700">{item.date}</p>
                      <p className="text-sm font-medium text-gray-900">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
