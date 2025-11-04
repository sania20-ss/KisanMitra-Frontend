import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaShoppingCart,
  FaTruck,
  FaShieldAlt,
  FaComments,
  FaCreditCard,
  FaMapMarkerAlt,
  FaUsers,
  FaChartLine,
  FaMedal
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const roles = [
  {
    icon: FaLeaf,
    title: "For Farmers",
    description:
      "List your crops, connect with buyers, and get fair prices. Access AI-powered advisory for better yields.",
    link: "/farmer",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: FaShoppingCart,
    title: "For Buyers",
    description:
      "Browse quality crops, place orders directly, and track deliveries in real-time with transparent pricing.",
    link: "/buyer",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: FaTruck,
    title: "For Drivers",
    description:
      "Join our logistics network, accept delivery requests, and earn fair compensation for your services.",
    link: "/driver",
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  }
];

const features = [
  { icon: FaShieldAlt, title: "Secure Payments", description: "Multiple payment options with bank-grade security" },
  { icon: FaMapMarkerAlt, title: "Real-time Tracking", description: "Track your orders live on interactive maps" },
  { icon: FaComments, title: "AI Advisory", description: "Get instant answers to farming queries" },
  { icon: FaCreditCard, title: "Multiple Payment Methods", description: "UPI, Cards, Net Banking, Wallets & COD" },
  { icon: FaUsers, title: "Direct Connection", description: "Connect directly with farmers, buyers, and drivers" },
  { icon: FaMedal, title: "Quality Assured", description: "Verified users and quality-checked produce" }
];

const stats = [
  { icon: FaLeaf, label: "Happy Farmers", value: "10,000+" },
  { icon: FaShoppingCart, label: "Active Buyers", value: "5,000+" },
  { icon: FaTruck, label: "Deliveries Completed", value: "50,000+" },
  { icon: FaChartLine, label: "Satisfaction Rate", value: "98%" }
];

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bg-color text-text-color">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary leading-tight">
            Empowering Indian Agriculture
          </h1>
          <p className="text-xl text-muted-text">{`हर किसान का सच्चा दोस्त - Every Farmer's True Friend`}</p>
          <p className="text-lg text-muted-text max-w-2xl mx-auto">
            Connect farmers, buyers, and logistics seamlessly. Fair prices, transparent trade, and AI-powered guidance for modern agriculture.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link to="/signup">
              <button className="bg-primary hover:bg-primary-hover text-white text-lg px-8 py-3 rounded-lg shadow transition">
                Get Started Free
              </button>
            </Link>
            <Link to="/about">
              <button className="border-2 border-primary text-primary hover:bg-primary-hover hover:text-white text-lg px-8 py-3 rounded-lg transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Role</h2>
          <p className="text-muted-text mb-12 text-lg">
            Join as a farmer, buyer, or driver to start your journey
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map(({ icon: Icon, title, description, link, color, bgColor }, index) => (
              <div
                key={index}
                className="p-8 bg-white border border-border-color rounded-2xl hover:shadow-lg hover:border-primary transition duration-300"
              >
                <div className={`${bgColor} ${color} w-16 h-16 mx-auto mb-6 rounded-lg flex items-center justify-center`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-muted-text mb-6">{description}</p>
                <Link to={link}>
                  <button className="w-full border-2 border-primary text-primary hover:bg-primary-hover hover:text-white py-2 rounded-lg transition">
                    Learn More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ icon: Icon, label, value }, index) => (
            <div key={index}>
              <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold mb-2">{value}</div>
              <div className="text-muted-text">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-text mb-12 text-lg">
            Everything you need for modern agricultural trade
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, description }, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-border-color rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-text">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-primary text-white rounded-2xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Agricultural Business?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of farmers, buyers, and drivers already using KisanMitra
            </p>
            <Link to="/signup">
              <button className="bg-white text-primary hover:bg-primary-hover hover:text-white px-8 py-3 text-lg rounded-lg transition">
                Start Your Journey Today
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Landing;
