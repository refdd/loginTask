import React from "react";
import logoForm from "../../assets/images/form logo.png";
import Image from "next/image";
function FormLogo() {
  return (
    <div className="relative w-full h-[40px]">
      <Image
        alt={"form logo"}
        title={"from Logo"}
        src={logoForm}
        fill
        sizes="(max-width: 768px) 60vw, (max-width: 1200px) 50vw, 100vw"
        className="object-contain"
      />
    </div>
  );
}

export default FormLogo;
