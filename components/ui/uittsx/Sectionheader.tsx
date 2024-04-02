import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h1 className="pb-4 font-extrabold tracking-tight text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60 text-center">
      {children}
    </h1>
  );
}
