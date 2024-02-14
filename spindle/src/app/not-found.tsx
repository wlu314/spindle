"use client"
import Link from "next/link";
import Header from "../../components/layout/headers/header"
import FooterOne from "../../components/layout/footers/FooterOne"
import Breadcrumb  from "../../components/common/breadcrumbs/breadcrumb"

const Error = () => {
    return (
        <>
             <Header  />
             <main>
                <Breadcrumb top_title="Error Page" title="Error" />
                 <div className="pt-95 pb-95 text-center">
                    <h3>404 page not found!</h3>
                    <Link href={"/"}>
                    <button className="btn error-btn">Go To Home</button>
                    </Link>
                 </div>               
             </main>
             <FooterOne />
        </>
    );
};

export default Error;