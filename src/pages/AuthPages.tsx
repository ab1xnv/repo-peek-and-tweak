
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const AuthContent = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [isForgotHovered, setIsForgotHovered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const isSignUp = location.pathname === "/signup";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Left panel with gradient background and clip-path effect */}
      <div className={`relative w-[45%] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 flex flex-col justify-center overflow-hidden transition-all duration-700 ease-in-out ${isSignUp ? 'order-last' : 'order-first'}`}>
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 opacity-10 w-96 h-96 bg-white rounded-full -mr-48 -mb-48 animate-pulse"></div>
        <div className="absolute top-20 left-20 opacity-10 w-64 h-64 bg-white rounded-full -ml-32 -mt-32 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-10 opacity-5 w-32 h-32 bg-orange-400 rounded-full animate-bounce"></div>
        
        {/* Clip-path overlay for slanted effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600" 
             style={{ clipPath: 'polygon(0 0, 85% 0, 70% 100%, 0% 100%)' }}>
        </div>
        
        {/* Content */}
        <div className="relative z-10 px-16">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-white mb-2 animate-fade-in">
              Your <span className="text-orange-400 animate-pulse">Trusted</span>
            </h1>
            <h1 className="text-5xl font-bold text-white mb-2 animate-fade-in delay-100">Cloud</h1>
            <h1 className="text-5xl font-bold text-white mb-2 animate-fade-in delay-200">Modernization</h1>
            <h1 className="text-5xl font-bold text-white mb-8 animate-fade-in delay-300">Partner</h1>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-scale-in delay-500"></div>
        </div>
      </div>

      {/* Right panel with form */}
      <div className="w-[55%] p-16 flex flex-col justify-center items-center bg-white relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
        
        <div className="w-full max-w-md relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-10 animate-fade-in">
            <div className="flex items-center gap-3 group">
              <div className="transform rotate-45 w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
              <span className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                axcess.io
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-scale-in delay-200">
            {isSignUp ? (
              <div className="space-y-4">
                {/* Name Field */}
                <div className="relative group">
                  <Input
                    type="text"
                    placeholder="Name"
                    className="pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:bg-white transition-all duration-300 hover:shadow-md"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-orange-400 transition-colors duration-300">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <Input
                    type="email"
                    placeholder="Email ID"
                    className="pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:bg-white transition-all duration-300 hover:shadow-md"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-orange-400 transition-colors duration-300">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                </div>

                {/* Mobile Field */}
                <div className="relative group">
                  <Input
                    type="tel"
                    placeholder="Mobile Number"
                    className="pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:bg-white transition-all duration-300 hover:shadow-md"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-orange-400 transition-colors duration-300">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                </div>
                
                {/* Organization ID Field */}
                <div className="relative group">
                  <Input
                    type="text"
                    placeholder="Organization ID"
                    className="pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:bg-white transition-all duration-300 hover:shadow-md"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-orange-400 transition-colors duration-300">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>

                {/* Password Field */}
                <div className="relative group">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="pl-12 pr-12 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:bg-white transition-all duration-300 hover:shadow-md"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-orange-400 transition-colors duration-300">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                {/* Confirm Password Field */}
                <div className="relative group">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="pl-12 pr-12 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:bg-white transition-all duration-300 hover:shadow-md"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-orange-400 transition-colors duration-300">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Username Field */}
                <div className="relative group">
                  <Input
                    type="text"
                    placeholder="Username"
                    className="pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:bg-white transition-all duration-300 hover:shadow-md"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-orange-400 transition-colors duration-300">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>

                {/* Password Field */}
                <div className="relative group">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="pl-12 pr-12 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:bg-white transition-all duration-300 hover:shadow-md"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-orange-400 transition-colors duration-300">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            )}

            {/* Forgot Password - Sign In Only */}
            {!isSignUp && (
              <div className="flex justify-end">
                <span 
                  className="text-sm text-gray-600 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                  onMouseEnter={() => setIsForgotHovered(true)}
                  onMouseLeave={() => setIsForgotHovered(false)}
                  style={{ color: isForgotHovered ? '#f97316' : '' }}
                >
                  Forgot Password?
                </span>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg font-semibold text-lg"
            >
              {isSignUp ? "SIGN UP" : "SIGN IN"}
            </Button>
          </form>

          {/* Toggle Link */}
          <div className="mt-8 text-center animate-fade-in delay-500">
            <p className="text-gray-600">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <Link
                to={isSignUp ? "/signin" : "/signup"}
                className="font-medium transition-colors duration-300 hover:text-black text-orange-500"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ color: isHovered ? '#000000' : '#f97316' }}
              >
                {isSignUp ? "Sign-In" : "SignUp"}
              </Link>
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 animate-fade-in delay-600">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-6 bg-white text-gray-500 font-medium">
                  {isSignUp ? "or Sign Up with" : "OR"}
                </span>
              </div>
            </div>
          </div>

          {/* Social Login */}
          <div className="mt-8 animate-fade-in delay-700">
            {!isSignUp && <p className="text-center text-gray-600 mb-6 font-medium">Sign in with</p>}
            <div className="flex justify-center space-x-6">
              {[
                { icon: "🔍", bg: "bg-red-50 hover:bg-red-100", name: "Google" },
                { icon: "📘", bg: "bg-blue-50 hover:bg-blue-100", name: "Facebook" },
                { icon: "❌", bg: "bg-gray-50 hover:bg-gray-100", name: "X" },
                { icon: "💼", bg: "bg-blue-50 hover:bg-blue-100", name: "LinkedIn" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${item.bg} w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                  title={`Sign in with ${item.name}`}
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
