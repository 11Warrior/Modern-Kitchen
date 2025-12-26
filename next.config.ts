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
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      }
    ]
  }
  
};

export default nextConfig;
