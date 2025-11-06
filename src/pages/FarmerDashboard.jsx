import { FaLeaf, FaPlus, FaBoxOpen, FaChartLine, FaDollarSign, FaEnvelope, FaBell, FaCog } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const statsData = [
  { label: "Active Listings", value: "12", icon: FaBoxOpen, color: "bg-blue-100 text-blue-600" },
  { label: "Total Revenue", value: "₹1,24,500", icon: FaDollarSign, color: "bg-green-100 text-green-600" },
  { label: "Pending Orders", value: "5", icon: FaChartLine, color: "bg-yellow-100 text-yellow-600" },
  { label: "Messages", value: "8", icon: FaEnvelope, color: "bg-purple-100 text-purple-600" },
];

const recentListingsData = [
  { crop: "Wheat", quantity: "500 kg", price: "₹25/kg", status: "Active" },
  { crop: "Rice", quantity: "1000 kg", price: "₹35/kg", status: "Active" },
  { crop: "Cotton", quantity: "200 kg", price: "₹80/kg", status: "Sold" },
];

const quickActionsData = [
  { label: "AI Advisory Chat", icon: FaEnvelope },
  { label: "View Orders", icon: FaBoxOpen },
  { label: "Market Prices", icon: FaChartLine },
  { label: "Profile Settings", icon: FaCog },
];

// ✅ Fixed Reusable Button Component
const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// ✅ Fixed Reusable Card Component
const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white shadow rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
};

const FarmerDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Farmer Dashboard</h1>
            <p className="text-gray-500">Welcome back! Manage your crops and orders.</p>
          </div>

          <div className="flex gap-2">
            <Button>
              <FaBell className="mr-2" /> Notifications
            </Button>
            <Button>
              <FaCog className="mr-2" /> Settings
            </Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              <FaPlus className="mr-2" /> Add New Crop
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, idx) => (
            <Card key={idx} className="flex items-center justify-between p-6 hover:shadow-lg transition">
              <div>
                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Listings */}
          <Card className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recent Listings</h2>
              <Button>View All</Button>
            </div>
            <div className="space-y-4">
              {recentListingsData.map((listing, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FaLeaf className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">{listing.crop}</p>
                      <p className="text-sm text-gray-500">{listing.quantity}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{listing.price}</p>
                    <p
                      className={`text-sm ${
                        listing.status === "Active" ? "text-green-600" : "text-gray-400"
                      }`}
                    >
                      {listing.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card>
            <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
            <div className="space-y-3">
              {quickActionsData.map((action, idx) => (
                <Button key={idx} className="w-full justify-start border-gray-300">
                  <action.icon className="mr-2" />
                  {action.label}
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FarmerDashboard;
