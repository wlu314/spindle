import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterOne from "../layout/footers/FooterOne";
import Header from "../layout/headers/header";
import DocsArea from "./DocsArea";


const Privacy = (props: { id: any; }) => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb top_title="Official Documentation" title="Docs" />
                <DocsArea id={props.id} />
            </main>
            <FooterOne />
        </>
    );
};

export default Privacy;