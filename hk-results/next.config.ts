import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Next.js rejects Server Action requests whose Origin doesn't match
      // the Host it sees. Netlify serves this site on both the apex and
      // www custom domain plus its default *.netlify.app address, so all
      // of them need to be listed or form submissions get silently blocked
      // before actions.ts ever runs (no Make.com hit, no email sent).
      allowedOrigins: [
        "hkresults.co.za",
        "www.hkresults.co.za",
        "vocal-dasik-7adbaf.netlify.app",
      ],
    },
  },
};

export default nextConfig;
