import React from "react";
import {
  FaShoppingCart,
  FaSearch,
  FaBox,
  FaMapMarkerAlt,
  FaCreditCard,
  FaBell,
  FaCog,
  FaFilter,
  FaStar,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ✅ Reusable Tailwind Button
const Button = ({ children, className = "", variant = "default", size = "md", ...props }) => {
  const base =
    "flex items-center justify-center gap-2 rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    icon: "p-2",
  };
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
    ghost: "text-gray-600 hover:bg-gray-100",
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// ✅ Reusable Tailwind Card
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow p-6 ${className}`}>{children}</div>
);

// ✅ Reusable Tailwind Input
const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

const BuyerDashboard = () => {
  const stats = [
    { label: "Active Orders", value: "8", icon: FaBox, color: "text-blue-600" },
    { label: "Total Spent", value: "₹85,420", icon: FaCreditCard, color: "text-green-600" },
    { label: "In Transit", value: "3", icon: FaMapMarkerAlt, color: "text-purple-600" },
    { label: "Saved Items", value: "15", icon: FaShoppingCart, color: "text-orange-600" },
  ];

  const availableCrops = [
    { name: "Fresh Wheat", farmer: "Rajesh Kumar", price: "₹25/kg", location: "Punjab", rating: "4.8" },
    { name: "Organic Rice", farmer: "Sita Devi", price: "₹45/kg", location: "Haryana", rating: "4.9" },
    { name: "Premium Cotton", farmer: "Amit Patel", price: "₹80/kg", location: "Gujarat", rating: "4.7" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Buyer Dashboard</h1>
            <p className="text-gray-500">Browse and purchase quality crops directly from farmers.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <FaBell className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <FaCog className="h-5 w-5" />
            </Button>
            <Button>
              <FaShoppingCart className="h-5 w-5" />
              View Cart
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-all animate-fade-in">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-100 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search for crops, farmers, or locations..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <FaFilter className="h-5 w-5" /> Filters
            </Button>
            <Button>
              <FaSearch className="h-5 w-5" /> Search
            </Button>
          </div>
        </Card>

        {/* Available Crops */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Available Crops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCrops.map((crop, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all animate-fade-in p-0">
                <div className="h-48 bg-gradient-to-r from-green-200 to-blue-200" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{crop.name}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-500">by {crop.farmer}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-blue-600">{crop.price}</p>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar /> <span className="text-sm text-gray-700">{crop.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <FaMapMarkerAlt className="h-4 w-4" />
                      {crop.location}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">View Details</Button>
                    <Button className="flex-1">
                      <FaShoppingCart className="h-4 w-4" /> Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BuyerDashboard;
