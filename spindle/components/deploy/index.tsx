import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterOne from "../layout/footers/FooterOne";
import Header from "../layout/headers/header";
import Deploy from "./Deploy";


const Index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb top_title="Deploy Your API" title="Deploy" />
                <Deploy  />
            </main>
            <FooterOne />
        </>
    );
};

export default Index;