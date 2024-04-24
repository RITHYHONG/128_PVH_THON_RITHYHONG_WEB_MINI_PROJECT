/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['i.pinimg.com'],
    },env: {
        NEXT_APIURL: "http://110.74.194.123:8084",
      }
  };
  
  export default nextConfig;
  