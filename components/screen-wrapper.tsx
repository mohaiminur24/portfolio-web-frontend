"use client";

import AppColor from "@/theme/app-colors";

interface props {
  children: React.ReactNode;
  styles?: React.CSSProperties;
}

export default function ScreenWrapper({ children, styles }: props) {
  const { Color } = AppColor();
  return (
    <div
      className="min-h-screen h-full"
      style={{ backgroundColor: Color.background, ...styles }}
    >
      {children}
    </div>
  );
}
