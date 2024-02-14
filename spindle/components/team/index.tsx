import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterOne from "../layout/footers/FooterOne";
import Header from "../layout/headers/header";
import APIArea from "./APIArea";

const MyAPIs = () => {
    return (
        <>
            <Header/>
            <main>
                <Breadcrumb top_title="My APIs"  title="My APIs"  />
                <APIArea />
            </main>
            <FooterOne />
        </>
    );
};

export default MyAPIs;