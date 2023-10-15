"use client";

import { Col, Row, Button } from "antd";
import loginImage from "../../assets/login-image.png";
import Image from "next/image";
import Form from "../components/form/Form";
import FromInput from "../components/form/FromInput/FromInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin, { isError, isLoading, isSuccess }] = useUserLoginMutation();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      if (res?.accessToken) {
        router.push("/profile");
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Row
        justify={"center"}
        align={"middle"}
        style={{
          minHeight: "100vh",
        }}
      >
        <Col sm={12} md={16} lg={10}>
          <Image src={loginImage} width={500} alt="login" />
        </Col>

        <Col sm={12} md={8} lg={8}>
          <h1
            style={{
              margin: "20px 0",
            }}
          >
            First Login Your Account
          </h1>
          <div>
            <Form submitHandler={onSubmit}>
              <div
                style={{
                  margin: "20px 0",
                }}
              >
                <FromInput name="id" type="text" size="large" label="User Id" />
              </div>
              <div>
                <FromInput
                  name="password"
                  type="password"
                  size="large"
                  label="User Password"
                />
              </div>
              <Button
                style={{
                  margin: "20px 0",
                }}
                type="primary"
                htmlType="submit"
              >
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
