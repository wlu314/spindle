"use client"
import "../../styles/index.css"; 
import { useEffect } from "react";
import ScrollToTop from "../../components/hooks/scroll-to-top";
import { animationCreate } from "../../components/utils/utils";
import { SessionProvider } from "next-auth/react";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({
  children,
}:{ children: React.ReactNode }) 
{
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  
  return (
    <html lang="en">
      <head>
        <title>Spindle - Automated APIs</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700|Rubik:400,500,700"
          rel="stylesheet" />
      </head> 
      <body>
        <SessionProvider>
        {children}
        </SessionProvider>
        <ScrollToTop />
        </body>
    </html>
  )
}
