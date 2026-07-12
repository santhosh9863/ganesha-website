"use client";

import { usePathname } from "next/navigation";
import StandardNavbar from "@/components/StandardNavbar";
import HeroNavbar from "@/components/HeroNavbar";

export default function Navbar() {
  const pathname = usePathname();
  return pathname === "/" ? <HeroNavbar /> : <StandardNavbar />;
}
