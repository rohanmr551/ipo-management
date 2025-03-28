import Container from "@/components/container";
import ReCaptchaComponent from "@/components/ReCaptcha";

import Image from "next/image"; 

const EmailInput = () => {
  return (
    <Container>
      <div className="flex flex-col  items-start justify-center min-sm: pt-20">
        
        <Image 
          src="/BluestockLogo.png" 
          alt="Bluestock Logo" 
          width={500} 
          height={800} 
          className="w-200 h-9 mb-10 flex flex-col justify-center" 
        />

        <label htmlFor="email" className="text-sm mb-2 font-sans font-semibold">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="password" className="text-sm mt-4 mb-2 font-sans font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="border border-gray-300 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
        /><ReCaptchaComponent />

    

      </div>
    </Container>
  );
};

export default EmailInput;
