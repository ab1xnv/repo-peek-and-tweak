
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
      <div className="h-screen flex overflow-hidden">
        <div 
          className={`w-[45%] transition-all duration-700 ease-in-out transform ${
            isSignUp ? "translate-x-[122.22%]" : "translate-x-0"
          } bg-gradient-to-br from-slate-800 to-slate-600`}
        />
        <div className="w-[55%]" />
      </div>
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
};

export default AuthTransition;
