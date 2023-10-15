"use client";
import UMBreadcrumb from "@/app/components/ui/UMBreadcrumb";
import { Layout } from "antd";
import Header from "./Header";
const { Content } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <Header />
      <UMBreadcrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;
