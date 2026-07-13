"use client";

import { usePathname } from "next/navigation";
import HeroNavbar from "@/components/HeroNavbar";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname !== "/") return null;
  return <HeroNavbar />;
}
