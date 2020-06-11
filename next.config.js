//const path = require("path"); Can remove
const withPlugins = require('next-compose-plugins');
const nextCSS = require('@zeit/next-css');
const nextOffline = require('next-offline')
const nextOptimizedImages = require('next-optimized-images')
const bundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})


//Used for fix Amplify Analytics with NextJS basically it removes a call to $window which breaks on the server
global.navigator = () => null;

// next.js configuration
const nextConfig = {
    //target: 'serverless',
};

//https://github.com/hashicorp/next-mdx-enhanced/issues/18 - Config Setup and RFC Link
//https://github.com/chris-on-code/nextjs-tailwind-purgecss
module.exports = withPlugins([
    [nextConfig],
    [nextCSS],
    [nextOptimizedImages, {
        optimizeImagesInDev: true,
    }],
    [nextOffline],
    [bundleAnalyzer],
], nextConfig);