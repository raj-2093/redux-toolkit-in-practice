import React from "react";
import ContentLayout from "../layout/ContentLayout";

export default function Home() {
  return (
    <ContentLayout>
      <h1 className="text-3xl text-center text-white font-bold">
        <span className="bg-rose-400 p-2 rounded-lg inline-block">
          Home Page
        </span>
      </h1>

      <div className="desc text-center">No purpose. Its just a page</div>
    </ContentLayout>
  );
}
