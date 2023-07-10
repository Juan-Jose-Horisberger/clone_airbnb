/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [ //We configure the domain of the images in next so that it is accepted
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com"
        ]
    }
}

module.exports = nextConfig
