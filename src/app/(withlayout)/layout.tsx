"use client";
import { Col, Row, Button } from "antd";
import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/ui/Sidebar";

import Contents from "../components/ui/Contents";
import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLogedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!userLogedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router]);

  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
