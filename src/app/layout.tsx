import React from "react";
import Navbar from "./components/Navbar/navbar";
import SearchBar from "./components/SearchBar/searchbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Mentor | Entertainment web app",
  description: "Frontend Mentor | Entertainment web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          <SearchBar />
          {children}
        </main>
      </body>
    </html>
  );
}
