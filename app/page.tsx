"use client";
import ScreenWrapper from "@/components/screen-wrapper";
import AppColor from "@/theme/app-colors";

export default function Home() {
  const { TextColor } = AppColor();
  return (
    <ScreenWrapper>
      <div>
        <h1 style={{ color: TextColor.black }}>here is text</h1>
      </div>
    </ScreenWrapper>
  );
}
