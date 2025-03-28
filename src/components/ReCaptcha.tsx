"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptchaComponent =()=>{
    const [verified, setVerified] = useState(false);

    const handleReCaptcha = (token: string | null) => {
        if(token){
            setVerified(true);
            console.log("recaptcha verified", token);
        }
}
return (
    <div className="mt-4">
      <ReCAPTCHA
        sitekey="6LcWUAIrAAAAAM5pASbPNyYt_BmwigKfuwZMKeNV" 
        onChange={handleReCaptcha}
      />
      {verified && <p className="text-green-600 mt-2">✔ Verified</p>}
    </div>
  );
};

export default ReCaptchaComponent;