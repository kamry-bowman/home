/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  output: 'export',
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'dist',
};

export default nextConfig;
