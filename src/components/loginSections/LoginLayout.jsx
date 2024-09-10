import React from "react";
import LoginForm from "./LoginForm";
import bg from "../../assets/images/bg.png";

function LoginLayout() {
  return (
    <div className="relative h-screen w-full overflow-x-hidden ">
      {/* Background Image and Gradient */}
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(1, 0, 2, 0) 0%, #1E0A31 84.82%), url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "rotate(-0.71deg)",
          filter: "blur(10px)",
        }}
        className="absolute top-0 left-0 w-full h-full bg-no-repeat"
      ></div>

      {/* Overlay to add transparency */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Centered LoginForm */}
      <div className="container mx-auto flex items-center justify-center h-full w-full">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginLayout;
