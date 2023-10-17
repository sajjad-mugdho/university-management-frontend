import ActionBar from "@/app/components/ui/ActionBar";
import UMBreadCrumb from "@/app/components/ui/UMBreadcrumb";
import { Button } from "antd";
import Link from "next/link";
const ManageAdminPage = () => {
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />

      <ActionBar title="Admin List">
        <Link href="/super_admin/admin/create">
          <Button type="primary">Create Admin</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageAdminPage;
