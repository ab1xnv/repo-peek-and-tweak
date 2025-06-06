
import React, { useState } from "react";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const AuthContent = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const isSignUp = location.pathname === "/signup";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="h-screen flex">
      {/* Left panel with blue gradient background - for Sign In */}
      <div className={`w-[45%] bg-gradient-to-br from-slate-800 to-slate-600 p-16 flex flex-col justify-center relative overflow-hidden transition-all duration-700 ease-in-out ${isSignUp ? 'order-last' : 'order-first'}`}>
        <div className="absolute bottom-0 right-0 opacity-10 w-96 h-96 bg-white rounded-full -mr-48 -mb-48"></div>
        <div className="absolute top-20 left-20 opacity-10 w-64 h-64 bg-white rounded-full -ml-32 -mt-32"></div>
        
        {!isSignUp && (
          <>
            <h1 className="text-5xl font-bold text-white mb-3">
              Your <span className="text-orange-400">Trusted</span>
            </h1>
            <h1 className="text-5xl font-bold text-white mb-3">Cloud</h1>
            <h1 className="text-5xl font-bold text-white mb-3">Modernization</h1>
            <h1 className="text-5xl font-bold text-white mb-8">Partner</h1>
            <div className="w-32 h-1 bg-orange-400"></div>
          </>
        )}
      </div>

      {/* Right panel with form */}
      <div className="w-[55%] p-16 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-2">
              <div className="transform rotate-45 w-10 h-10 bg-slate-800"></div>
              <span className="text-2xl font-bold">axcess.io</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp ? (
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Name"
                    className="pl-10 bg-gray-100 border-gray-200"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transform hover:scale-110 transition-all duration-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>

                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Email ID"
                    className="pl-10 bg-gray-100 border-gray-200"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transform hover:scale-110 transition-all duration-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                </div>

                <div className="relative">
                  <Input
                    type="tel"
                    placeholder="Mobile Number"
                    className="pl-10 bg-gray-100 border-gray-200"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transform hover:scale-110 transition-all duration-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                </div>
                
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Organization ID"
                    className="pl-10 bg-gray-100 border-gray-200"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transform hover:scale-110 transition-all duration-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>

                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Password"
                    className="pl-10 bg-gray-100 border-gray-200"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transform hover:scale-110 transition-all duration-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors duration-300">
                    <Eye className="h-5 w-5 transform hover:scale-110 transition-transform duration-300" />
                  </span>
                </div>

                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    className="pl-10 bg-gray-100 border-gray-200"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transform hover:scale-110 transition-all duration-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors duration-300">
                    <Eye className="h-5 w-5 transform hover:scale-110 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Username"
                    className="pl-10 bg-gray-100 border-gray-200"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transform hover:scale-110 transition-all duration-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>

                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Password"
                    className="pl-10 bg-gray-100 border-gray-200"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transform hover:scale-110 transition-all duration-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors duration-300">
                    <Eye className="h-5 w-5 transform hover:scale-110 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            )}

            {!isSignUp && (
              <div className="flex justify-end">
                <span className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
                  Forgot Password?
                </span>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition-all duration-300 transform hover:scale-[1.02]"
            >
              {isSignUp ? "SIGN UP" : "SIGN IN"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <Link
                to={isSignUp ? "/signin" : "/signup"}
                className={cn(
                  "font-medium transition-colors duration-300",
                  isHovered ? "text-black" : "text-orange-500"
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isSignUp ? "Sign-In" : "SignUp"}
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  {isSignUp ? "or Sign Up with" : "OR"}
                </span>
              </div>
            </div>

            <div className="mt-6">
              {!isSignUp && <p className="text-center text-gray-600 mb-4">Sign in with</p>}
              <div className="flex justify-center space-x-4">
                {[
                  { icon: "🔍", bg: "bg-gray-100" },
                  { icon: "📘", bg: "bg-blue-100" },
                  { icon: "❌", bg: "bg-gray-100" },
                  { icon: "💼", bg: "bg-amber-100" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${item.bg} w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-110`}
                  >
                    <span className="text-xl">{item.icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
