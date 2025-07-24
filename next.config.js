/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_SECRET:"Instacertify",
    NEXTAUTH_URL:"https://scchs.co.in/",
    next:{
      api_url:"https://scchs.co.in/api/v1/"
    },
    // "proxy": "https://admin.instacertify.com",
    server : {
		path:"https://admin.scchs.org/",
   		api:"https://admin.scchs.org/api/",
      	jwt_secret:"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"
    }
  },
  reactStrictMode: false,
  experimental: {
      scrollRestoration: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['admin.scchs.org','cdn11.bigcommerce.com'],
  }
}

module.exports = nextConfig