import { Outlet } from "react-router-dom";
import Navbar from "../../modules/public/components/Navbar";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />   

    </>
  );
}