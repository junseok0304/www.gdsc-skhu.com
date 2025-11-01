const withTM = require('next-transpile-modules')(['three']);
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
const CompressionPlugin = require('compression-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    webpack(config, { isServer }) {
        if (!isServer) {
            config.plugins.push(
                new CompressionPlugin({
                    algorithm: 'gzip',
                    threshold: 8192,
                })
            );
        }
        return config;
    },
};

module.exports = withBundleAnalyzer(withTM(nextConfig));
