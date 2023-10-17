import { Metadata } from "next";
import LoginPage from "../components/Login/Login";

export const metadata: Metadata = {
  title: "UMS | Login",
};

const Login = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;
