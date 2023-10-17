import UMBreadCrumb from "@/app/components/ui/UMBreadcrumb";

const ManageUsersPage = () => {
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
      <h1>User List</h1>
    </div>
  );
};

export default ManageUsersPage;
