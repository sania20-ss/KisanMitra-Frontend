import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaShoppingCart, FaTruck } from "react-icons/fa";
import Navbar from "../components/Navbar";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [authType, setAuthType] = useState("login");

  const roles = [
    { id: "farmer", label: "Farmer", icon: FaLeaf, description: "Sell your crops" },
    { id: "buyer", label: "Buyer", icon: FaShoppingCart, description: "Buy quality produce" },
    { id: "driver", label: "Driver", icon: FaTruck, description: "Deliver orders" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-app">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        {/* Card */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
          {/* Logo + Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FaLeaf className="text-primary text-3xl" />
              <span className="text-2xl font-bold text-default">KisanMitra</span>
            </div>
            <h1 className="text-2xl font-bold mb-2 text-default">
              {authType === "login" ? "Welcome Back" : "Create Your Account"}
            </h1>
            <p className="text-muted">
              {authType === "login"
                ? "Sign in to continue to your dashboard"
                : "Join thousands of farmers, buyers, and drivers"}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-6 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setAuthType("login")}
              className={`w-1/2 py-2 text-sm font-medium rounded-md transition-all ${
                authType === "login"
                  ? "bg-primary text-white"
                  : "text-muted hover:bg-gray-200"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setAuthType("signup")}
              className={`w-1/2 py-2 text-sm font-medium rounded-md transition-all ${
                authType === "signup"
                  ? "bg-primary text-white"
                  : "text-muted hover:bg-gray-200"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Login Form */}
          {authType === "login" && (
            <div className="space-y-4">
              <div>
                <label htmlFor="login-email" className="block text-sm font-medium text-default">
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  placeholder="your@email.com"
                  className="mt-1 w-full border border-default rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                />
              </div>
              <div>
                <label htmlFor="login-password" className="block text-sm font-medium text-default">
                  Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  className="mt-1 w-full border border-default rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                />
              </div>
              <button className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-2 rounded-lg transition">
                Sign In
              </button>
              <div className="text-center">
                <Link to="/forgot-password" className="text-sm text-muted hover:text-primary">
                  Forgot password?
                </Link>
              </div>
            </div>
          )}

          {/* Sign Up Form */}
          {authType === "signup" && (
            <div className="space-y-4">
              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium text-default mb-2">
                  Select Your Role
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {roles.map((role) => (
                    <button
                      key={role.id}
                      onClick={() => setSelectedRole(role.id)}
                      className={`p-4 border-2 rounded-lg flex flex-col items-center transition-all hover:border-primary ${
                        selectedRole === role.id
                          ? "border-primary bg-green-50"
                          : "border-default"
                      }`}
                    >
                      <role.icon className="text-primary text-xl mb-1" />
                      <span className="text-xs font-medium text-default">{role.label}</span>
                    </button>
                  ))}
                </div>
                {selectedRole && (
                  <p className="text-sm text-muted text-center mt-2">
                    {roles.find((r) => r.id === selectedRole)?.description}
                  </p>
                )}
              </div>

              {/* Input Fields */}
              {[
                { id: "signup-name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
                { id: "signup-email", label: "Email", type: "email", placeholder: "your@email.com" },
                { id: "signup-phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
                { id: "signup-password", label: "Password", type: "password", placeholder: "••••••••" },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-default">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="mt-1 w-full border border-default rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  />
                </div>
              ))}

              <button
                className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
                disabled={!selectedRole}
              >
                Create Account
              </button>

              <p className="text-xs text-center text-muted">
                By signing up, you agree to our{" "}
                <span className="text-primary hover:underline cursor-pointer">Terms of Service</span> and{" "}
                <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span>
              </p>
            </div>
          )}

          {/* Footer Switch */}
          <div className="text-center text-sm text-muted mt-6">
            {authType === "login" ? (
              <p>
                Don’t have an account?{" "}
                <button onClick={() => setAuthType("signup")} className="text-primary hover:underline">
                  Sign up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button onClick={() => setAuthType("login")} className="text-primary hover:underline">
                  Sign in
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
