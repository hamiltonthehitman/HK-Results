import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://hkresults.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Top 3 on Google Maps for South African Service Businesses | HK Results",
  description:
    "We put South African service businesses into Google's top 3 map spots in 90 days, or we keep working free until you get there. Get your free ranking map.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Top 3 on Google Maps in 90 days, or we work free until you are",
    description:
      "We put South African service businesses into Google's top 3 map spots and prove it on a street by street ranking map.",
    url: siteUrl,
    siteName: "HK Results",
    locale: "en_ZA",
    type: "website",
  },
};

// Only details the owner has approved. Address and phone are left out on purpose.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "HK Results",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Local SEO and Google Maps ranking for service businesses across South Africa, with a top 3 in 90 days guarantee.",
  email: "hamilton@hkresults.co.za",
  areaServed: { "@type": "Country", name: "South Africa" },
  knowsAbout: ["Local SEO", "Google Business Profile", "Google Maps ranking"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '986609477489401');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:"none"}}
            src="https://www.facebook.com/tr?id=986609477489401&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
