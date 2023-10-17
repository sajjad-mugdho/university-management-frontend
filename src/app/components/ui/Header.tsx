import { Dropdown, Layout, Row, MenuProps, Button, Space, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { removeUserInfo } from "@/services/auth.service";

import { useRouter } from "next/navigation";
import { authKey } from "@/app/constants/storageKey";

const { Header: AntHeader } = Layout;

const Header = () => {
  const router = useRouter();
  const logout = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logout} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];
  return (
    <AntHeader
      style={{
        background: "darkgray",
      }}
    >
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
