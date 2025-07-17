let userConfig = undefined
try {
  userConfig = await import('./v0-user-next-config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
