import React from "react";
import Navbar from "../componnent/Navbar";
import { Outlet } from "react-router-dom";

export default function Applayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
