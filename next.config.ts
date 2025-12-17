import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true
  // https://avatar.iran.liara.run/public/
  images :{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
        pathname: "/public/**"
      }
    ]
  }
  
};

export default nextConfig;
