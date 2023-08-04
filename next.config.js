/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/about',
                permanent: false,
            },
        ]
    }, // temporary - remove once home page has been added
    images: {
        domains: ['images.unsplash.com'],
    },
}

module.exports = nextConfig
