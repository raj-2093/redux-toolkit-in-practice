import React from "react";

export default function ContentLayout({
  children,
  childrenWrapperStyle,
  childStyle,
}) {
  const childrenWrapperDefaultStyle = `${childrenWrapperStyle} flex flex-col items-center justify-center gap-4`;
  const childDefaultStyle = `${childStyle} w-screen`;
  console.log(`rj_ typeof(children) ${children}`);
  return (
    <div className={childrenWrapperDefaultStyle}>
      {children.map((child, index) => {
        return (
          <div className={`child ${childDefaultStyle}`} key={index}>
            {child}
          </div>
        );
      })}
    </div>
  );
}
