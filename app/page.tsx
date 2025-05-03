"use client";

import { NavBarDemo } from "@/components/user/header";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <>
      <NavBarDemo />
      <div className="dark text-center rounded h-screen">
        <Spline scene="https://prod.spline.design/INvIisQNwWXraxlq/scene.splinecode" />
      </div>


    </>
  );
}
