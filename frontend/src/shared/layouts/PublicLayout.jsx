import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../modules/public/components/Navbar";
import Footer from "../../modules/public/components/Footer";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}