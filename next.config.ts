import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ["images.pexels.com"], // Добавляем Unsplash в список разрешенных доменов
    },
};

export default nextConfig;