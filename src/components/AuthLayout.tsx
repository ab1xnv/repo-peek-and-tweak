
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  // Handle path change and trigger animation
  useEffect(() => {
    if (location.pathname !== currentPath) {
      setIsAnimating(true);
      
      // Check which path we're going to
      const goingToSignUp = location.pathname === "/signup";
      setIsSignUp(goingToSignUp);
      
      // Wait for animation to complete before updating the path
      setTimeout(() => {
        setCurrentPath(location.pathname);
        setIsAnimating(false);
      }, 700); // This should match the CSS transition duration
    }
  }, [location.pathname, currentPath]);

  return (
    <div className="h-screen overflow-hidden">
      <div className={`flex h-full w-[200%] transition-transform duration-700 ease-in-out ${isAnimating ? (isSignUp ? 'transform -translate-x-1/2' : 'transform translate-x-0') : isSignUp ? 'transform -translate-x-1/2' : 'transform translate-x-0'}`}>
        <div className="flex-shrink-0 w-1/2 h-full">
          {/* This will display the sign in page */}
          {(currentPath === "/signin" || isAnimating) && (
            <div className="w-full h-full" onClick={() => !isAnimating && navigate("/signin")}>
              {children}
            </div>
          )}
        </div>
        <div className="flex-shrink-0 w-1/2 h-full">
          {/* This will display the sign up page */}
          {(currentPath === "/signup" || isAnimating) && (
            <div className="w-full h-full" onClick={() => !isAnimating && navigate("/signup")}>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
