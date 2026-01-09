import React from "react";
import { Test } from "@/components/Test";
import { Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function Home() {
  return <Test />;
}
