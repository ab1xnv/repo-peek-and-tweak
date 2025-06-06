
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface TransitionProps {
  children: React.ReactNode;
}

const AuthTransition: React.FC<TransitionProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  const [isSignUp, setIsSignUp] = useState(location.pathname === "/signup");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("fadeOut");
      
      // Check if we're going to sign up or sign in
      const goingToSignUp = location.pathname === "/signup";
      setIsSignUp(goingToSignUp);
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransitionStage("fadeIn");
      setDisplayLocation(location);
    }
  };

  return (
    <div 
      className={`transition-all duration-500 ${transitionStage === "fadeOut" ? "opacity-0" : "opacity-100"}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="h-screen flex overflow-hidden relative">
        {/* Left panel with sliding animation */}
        <div 
          className={`w-[45%] absolute left-0 top-0 h-full transition-all duration-1000 ease-in-out transform ${
            isSignUp ? "translate-x-full" : "translate-x-0"
          } bg-gradient-to-br from-slate-800 to-slate-600 z-10`}
        />
        
        {/* Right panel that moves with the sliding effect */}
        <div 
          className={`w-[55%] absolute right-0 top-0 h-full transition-all duration-1000 ease-in-out transform ${
            isSignUp ? "translate-x-0" : "translate-x-0"
          }`}
        />
      </div>
      <div className="absolute inset-0 z-20">
        {children}
      </div>
    </div>
  );
};

export default AuthTransition;
