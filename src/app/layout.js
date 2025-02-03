"use client"

import { Source_Sans_3 } from "next/font/google";
import StyledComponentsRegistry from "@/app/registry";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceSans.className}`}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
} 
