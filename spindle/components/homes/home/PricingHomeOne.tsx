import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import price_icon_1 from "../../../public/assets/img/icon/p-01.png";
import price_icon_2 from "../../../public/assets/img/icon/p-02.png";
import price_icon_3 from "../../../public/assets/img/icon/p-03.png";
// price data tyep
interface price_data_type {
    id: number;
    icon: StaticImageData;
    title: string;
    price: number;
    sm_des: string;
}
// price data 
const price_data: price_data_type[] = [
    {
        id: 1,
        icon: price_icon_1,
        title: "Cloud Hosting",
        price: 34,
        sm_des: "PioHosting offers hosting plans that are secure, reliable, and performing for just $580.58/year.",
    },
    {
        id: 2,
        icon: price_icon_2,
        title: "VPS Hosting",
        price: 45,
        sm_des: "PioHosting offers hosting plans that are secure, reliable, and performing for just $580.58/year.",
    },
    {
        id: 3,
        icon: price_icon_3,
        title: "Shared Hosting",
        price: 65,
        sm_des: "PioHosting offers hosting plans that are secure, reliable, and performing for just $580.58/year.",
    },
]

const PricingHomeOne = () => {
    return (
        <>
           <section className="pricing-area gray-bg pt-115 pb-120">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="section-title text-center mb-70">
                                <h2>Price & Plans</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {price_data.map((item, i)  =>
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="pricing-wrapper white-bg text-center mb-30 wow fadeInUp animated" data-wow-delay="0.3s">
                                    <div className="price-icon mb-15">
                                        <Image src={item.icon} alt="theme-pure" />
                                    </div>
                                    <div className="pricin-title mb-20">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="price-body">
                                        <h2><span>$</span> {item.price} <span className="month">/mo</span></h2>
                                        <p>{item.sm_des}</p>
                                    </div>
                                    <div className="price-link">
                                        <Link href="#" className="btn btn-soft-border">Purchase Now</Link>
                                    </div>
                                </div>
                            </div>                        
                        )} 
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="pricing-more-link text-center mt-50">
                                 <p><Link href="#">See plan details</Link> and pricing for more information</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default PricingHomeOne;