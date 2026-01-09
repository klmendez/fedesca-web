import type { NextConfig } from "next";
const repo = 'fedesca-web' // <-- el nombre exacto del repo en GitHub


const nextConfig: NextConfig = {
   output: 'export',             // genera HTML/CSS/JS estático
  basePath: `/${repo}`,         // para que /contacto sea /fedesca-web/contacto
  assetPrefix: `/${repo}/`,     // para que carguen bien CSS/JS/img
  images: { unoptimized: true }
};

export default nextConfig;
