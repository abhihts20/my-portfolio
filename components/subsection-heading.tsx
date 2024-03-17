import React from "react";

type SubSectionHeadingProps = {
  children: React.ReactNode;
};

export default function SubSectionHeading({ children }: SubSectionHeadingProps) {
  return (
    <h2 className="text-4xl font-medium capitalize mb-14 text-center">
      {children}
    </h2>
  );
}
