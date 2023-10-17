"use client";

import { Button, Result } from "antd";
import Link from "next/link";

const Error = () => (
  <Result
    status="warning"
    title="There are some problems with your operation."
    extra={
      <Link href="/">
        <Button type="primary" key="console">
          Home
        </Button>
      </Link>
    }
  />
);

export default Error;
