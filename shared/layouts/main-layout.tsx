import React, { ReactNode } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

export default function MainLayout({ children }: any) {
  return (
    <div className="main-layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
