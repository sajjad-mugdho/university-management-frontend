import { Row, Spin } from "antd";

const Loading = () => {
  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{
        height: "100vh",
      }}
    >
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Row>
  );
};

export default Loading;
