import React from "react";
import trustpilot from "../../../images/trustpilot.svg"
import google from "../../../images/google.png"

const TrustBy = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <p>Excellent 4.8 out 5</p>
        <img
          src={trustpilot}
          alt="trustpilot"
          width={75}
          height={75}
        />
      </div>
      <div className="flex items-center gap-2">
        <p>Excellent 4.8 out 5</p>
        <img src={google} alt="google" width={15} height={15} />
        <span>Google</span>
      </div>
    </div>
  );
};

export default TrustBy;
