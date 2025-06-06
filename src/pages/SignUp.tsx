
import React from "react";
import { AuthContent } from "./AuthPages";
import AuthTransition from "../components/AuthTransition";

const SignUp = () => {
  return (
    <AuthTransition>
      <AuthContent />
    </AuthTransition>
  );
};

export default SignUp;
