import type { Metadata } from "next";
import { Geist, Geist_Mono, El_Messiri } from "next/font/google";
import "./globals.css";

import {
  ClerkProvider,
} from '@clerk/nextjs'
import Navbar from "@/components/LandingPage/Navbar";
import SmoothScroll from "@/components/LenisComponent/SmoothScroll";
import TanStackProvider from "./TanStackProvider";
import { ReduxProvider } from "@/redux/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const elMessiri = El_Messiri({
  variable: "--font-el-messiri",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI recipe generator",
  description: "Listens for voice prompts and generated the recipe for user.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanStackProvider>
      <ClerkProvider appearance={{
        variables: {
          colorPrimary: 'var(--primary)',
          colorBackground: 'var(--chart-5)',
          colorText: 'black',
          colorInputBackground: 'white'

        }
      }}>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${elMessiri.variable} antialiased dark`}
          >
            <Navbar />
            <SmoothScroll>
              <ReduxProvider>
                <main>
                  {children}
                </main>
              </ReduxProvider>
            </SmoothScroll>
          </body>
        </html>
      </ClerkProvider>
    </TanStackProvider>
  );
}
