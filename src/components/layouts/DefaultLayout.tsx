import React from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-8 max-w-6xl mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
}
