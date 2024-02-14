import Link from "next/link";
import Image from "next/image"; 
import services_data_type from "../../types/service-types";
// service images 
import service_img_1 from "../../../public/assets/img/icon/s01.png";
import service_img_2 from "../../../public/assets/img/icon/s02.png";
import service_img_3 from "../../../public/assets/img/icon/s03.png";
import service_img_4 from "../../../public/assets/img/icon/s04.png";
import service_img_5 from "../../../public/assets/img/icon/s05.png";
import service_img_6 from "../../../public/assets/img/icon/s06.png"; 
// service data 
 const services_data: services_data_type[] = [
    {
        id: 1,
        img: service_img_1,
        title: "Automated API Creation",
        sm_des: "Use our AI powered API creation tool to create APIs in minutes from your Mongo database schema.",
    },
    {
        id: 2,
        img: service_img_2,
        title: "Language Queries",
        sm_des: "Spend less time coding with our declarative language functionality, which lets you create APIs in seconds.",
    },
    {
        id: 3,
        img: service_img_3,
        title: "API Hosting",
        sm_des: "We host all of your API endpoints in one place, so you can focus on managing your data.",
    },
    {
        id: 4,
        img: service_img_4,
        title: "Create API Products",
        sm_des: "Create simple API products from your Mongo database, and share them with your team or the world.",
    },
    {
        id: 5,
        img: service_img_5,
        title: "Complex Reads",
        sm_des: "Make complex read API calls to your Mongo database with ease, and without writing a single line of code."
    },
    {
        id: 5,
        img: service_img_6,
        title: "Centralized Endpoints",
        sm_des: "Manage all of your API endpoints in one place, and share them with your team or the world.",
    },
    
 ]

 interface service_content_type {
    title: string;
    sub_title: string;
}
 const service_content: service_content_type = {
    title: "Our Services",
    sub_title: "Let us handle creation of external facing APIs for your Mongo database. We'll handle the hosting and maintenance, while you focus on what matters: data.",
 }
 const {title, sub_title} = service_content

 
const ServicesHomeOne = () => { 
    return (
        <>
            <section className="services-area pt-115 pb-95">
                <div className="container">
                    <div className="row align-items-center mb-40">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title mb-30">
                                <h2>{title}</h2>
                                <p>{sub_title}</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4">
                           
                        </div>
                    </div>
                    <div className="row">
                        {services_data.map((item, i) => 
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="services-box text-center mb-30 wow fadeInUp animated" data-wow-delay="0.3s">
                                    <div className="services-icon mb-35">
                                        <Image src={item.img} alt="theme-pure" />
                                    </div>
                                    <div className="services-content">
                                        <h3><Link href="/service-details">{item.title}</Link></h3>
                                        <p>{item.sm_des}</p>
                                        <a className="services-link" href="#"><i className="far fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>                        
                        )} 
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesHomeOne;