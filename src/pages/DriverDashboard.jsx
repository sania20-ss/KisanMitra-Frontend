import React from "react";
import {
  FaTruck,
  FaMapMarkerAlt,
  FaDollarSign,
  FaBox,
  FaCompass,
  FaCheckCircle,
  FaClock,
  FaBell,
  FaCog,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ✅ Reusable Tailwind-based Button
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

// ✅ Reusable Tailwind-based Card
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow p-6 ${className}`}>{children}</div>
);

const DriverDashboard = () => {
  const stats = [
    { label: "Active Deliveries", value: "4", icon: FaBox, color: "text-blue-600" },
    { label: "Total Earnings", value: "₹45,800", icon: FaDollarSign, color: "text-green-600" },
    { label: "Completed Today", value: "6", icon: FaCheckCircle, color: "text-purple-600" },
    { label: "Pending Requests", value: "12", icon: FaClock, color: "text-orange-600" },
  ];

  const activeDeliveries = [
    {
      id: "ORD-1234",
      from: "Rajesh Farm, Punjab",
      to: "Delhi Warehouse",
      distance: "280 km",
      payment: "₹2,500",
      status: "In Progress",
    },
    {
      id: "ORD-1235",
      from: "Sita Farm, Haryana",
      to: "Chandigarh Market",
      distance: "120 km",
      payment: "₹1,200",
      status: "Picked Up",
    },
  ];

  const pendingRequests = [
    {
      id: "REQ-5678",
      from: "Amit Farm, Gujarat",
      to: "Mumbai Port",
      distance: "450 km",
      payment: "₹4,500",
    },
    {
      id: "REQ-5679",
      from: "Priya Farm, Maharashtra",
      to: "Pune Market",
      distance: "180 km",
      payment: "₹1,800",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Driver Dashboard</h1>
            <p className="text-gray-500">Manage your deliveries and track earnings.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <FaBell className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <FaCog className="h-5 w-5" />
            </Button>
            <Button>
              <FaCompass className="h-5 w-5" /> Start Navigation
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all animate-fade-in"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div
                  className={`p-3 rounded-lg bg-gray-100 ${stat.color}`}
                >
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Deliveries */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Active Deliveries</h2>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {activeDeliveries.map((delivery, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold">{delivery.id}</p>
                      <p className="text-sm text-green-600">{delivery.status}</p>
                    </div>
                    <p className="font-bold text-blue-600">{delivery.payment}</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <FaMapMarkerAlt className="h-4 w-4 text-gray-500 mt-0.5" />
                      <div>
                        <p className="text-gray-600">From: {delivery.from}</p>
                        <p className="text-gray-600">To: {delivery.to}</p>
                      </div>
                    </div>
                    <p className="text-gray-500">{delivery.distance}</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <FaMapMarkerAlt className="h-4 w-4" /> View Route
                    </Button>
                    <Button size="sm" className="flex-1">
                      <FaCheckCircle className="h-4 w-4" /> Complete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Pending Requests */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Pending Requests</h2>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {pendingRequests.map((request, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold">{request.id}</p>
                      <p className="text-sm text-gray-500">New Request</p>
                    </div>
                    <p className="font-bold text-blue-600">{request.payment}</p>
                  </div>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-start gap-2">
                      <FaMapMarkerAlt className="h-4 w-4 text-gray-500 mt-0.5" />
                      <div>
                        <p className="text-gray-600">From: {request.from}</p>
                        <p className="text-gray-600">To: {request.to}</p>
                      </div>
                    </div>
                    <p className="text-gray-500">{request.distance}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Decline
                    </Button>
                    <Button size="sm" className="flex-1">
                      Accept
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DriverDashboard;
