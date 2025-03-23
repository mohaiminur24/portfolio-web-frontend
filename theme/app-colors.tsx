"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Colors from "./colors";

export default function AppColor() {
  const isDarkMode = useSelector((s: RootState) => s.theme.isDarkMode);
  const TextColor = {
    black: isDarkMode ? Colors.dark.black : Colors.light.black,
  };
  const Color={
    background: isDarkMode ? Colors.dark.background : Colors.light.background,
  }

  return { TextColor , Color};
}
