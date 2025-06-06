
import React from "react";
import { AuthContent } from "./AuthPages";
import AuthTransition from "../components/AuthTransition";

const SignIn = () => {
  return (
    <AuthTransition>
      <AuthContent />
    </AuthTransition>
  );
};

export default SignIn;
