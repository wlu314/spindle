import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterOne from "../layout/footers/FooterOne";
import Header from "../layout/headers/header";
import LoginArea from "./LoginArea";

const Login = () => {
  return (
    <>
      <Header  />
      <main>
        <Breadcrumb top_title="Login To Spindle" title="Login" />
        <LoginArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Login;
