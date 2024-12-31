import React from "react";
import AddProduct from "../../components/admin/AddProduct";
import ContentLayout from "../../layout/ContentLayout";

export default function AdminDashboard() {
  return (
    <ContentLayout childrenWrapperStyle={"gap-6"}>
      <h2 className="text-3xl font-bold text-center">Admin Panel</h2>
      <div className="add-product flex justify-center items-center">
        <AddProduct />
      </div>
    </ContentLayout>
  );
}
