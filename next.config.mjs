/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'a0.muscache.com',
      'glvmmupiqwlmhicmggqp.supabase.co',
      'lh3.googleusercontent.com',
      'avatar.vercel.sh', 
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'usyqojdtswkhrkuzsboh.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;
