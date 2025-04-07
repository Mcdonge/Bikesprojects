import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import SiteHeader from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Miami Bikes - Bike Rental Service",
  description: "Rent high-quality bicycles for your adventures around Moi University",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
        <Script
          strategy="lazyOnload"
          src="https://embed.tawk.to/YOUR_TAWKTO_WIDGET_ID/default"
        />
        <Script id="tawk-to-init">
          {`
            var Tawk_API = Tawk_API || {};
            var Tawk_LoadStart = new Date();
            (function() {
              var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/YOUR_TAWKTO_WIDGET_ID/default';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
            
            Tawk_API.onLoad = function() {
              Tawk_API.hideWidget();
              console.log('Tawk.to loaded successfully');
            };
            
            Tawk_API.onError = function(error) {
              console.error('Tawk.to error:', error);
            };
          `}
        </Script>
      </body>
    </html>
  )
}

import './globals.css'