
import "./globals.css";
import { Work_Sans } from 'next/font/google'
import { Analytics } from "@/lib/analytics"; 

const WorkSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',

})



export const metadata = {
  title: "Pale W",
  description: "Pale w",
  openGraph: {
    title: "pale-w.vercel.app",
    description:
      "also known as DOGERAZ",
    url: "https://pale-w.vercel.app",
    siteName: "pale-w.vercel.app",
    
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="lenis ">
      <head>
    <meta name="cryptomus" content="1c714290" />
         <Analytics /> 
      </head>
      <body className={WorkSans.className} >{children}</body>
    </html>
  );
}
