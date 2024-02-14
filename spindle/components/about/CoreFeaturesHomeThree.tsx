import Image, { StaticImageData } from "next/image";
import feature_icon_1 from "../../public/assets/img/icon/cf1.png";
import feature_icon_2 from "../../public/assets/img/icon/cf2.png";
import feature_icon_3 from "../../public/assets/img/icon/cf3.png";
import feature_icon_4 from "../../public/assets/img/icon/cf4.png";
import feature_icon_5 from "../../public/assets/img/icon/cf5.png"; 
import feature_icon_6 from "../../public/assets/img/icon/cf6.png"; 

interface core_features_data_3_type {
    id: number;
    icon: StaticImageData;
    title: string;
    features: string[];
}
const core_features_data_3:core_features_data_3_type[] = [
    {
        id: 1,
        icon: feature_icon_1,
        title: "Accessibility",
        features: [
            "User Friendly Interface",
            "Minimal Knowledge Required"
        ]
    },
    {
        id: 2,
        icon: feature_icon_2,
        title: "Increased Speed",
        features: [
            "Create Endpoints With Ease",
            "APIs Created At The Click Of A Button"
        ]
    },
    {
        id: 3,
        icon: feature_icon_3,
        title: "Natural Language Processing",
        features: [
            "No Prior MongoDB Knowledge Required",
            "English Is All You Need!",
            "Allows You To Do More With Less Code"
        ]
    },
    {
        id: 4,
        icon: feature_icon_4,
        title: "First Of Its Kind Solution",
        features: [
            "Centralized Endpoints",
            "Read API Calls Made Easy"
        ]
    },
    {
        id: 5,
        icon: feature_icon_5,
        title: "API Hosting",
        features: [
            "Focus On Managing Your Data",
            "We Handle The Rest"
        ]
    },
    {
        id: 6,
        icon: feature_icon_6,
        title: "Phone And Email Support",
        features: [
            "We're Always Here For You!",
            "24/7 Support Available"
        ]
    },
]


interface core_features_content_type {
    title: string;
    title_2: string;
    sm_des: string;
}
const core_features_content: core_features_content_type = {
    title: "Why Choose Us",
    title_2: "Core Features",
    sm_des: "Find What Makes Our Product Stand Out From The Rest!"
}
const {title, title_2, sm_des} = core_features_content

const CoreFeaturesHomeThree = ({style} : any) => {
    return (
        <>
            <section className="core-features-area pt-115 pb-50">
                <div className="container">
                    <div className="row align-items-center mb-40">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title mb-30">

                                <h2>{style ? title : title_2}</h2>
                                <p>{sm_des}</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4">
                            <div className="section-link text-left text-lg-right mb-30">
                                <a href="#" className="btn btn-soft-border">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {core_features_data_3.map((item, i) => 
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="services-box style_3 mb-60 wow fadeInUp p-3" data-wow-delay="0.3s">
                                    <div className="services-icon mb-35">
                                        <Image src={item.icon} alt="theme-pure" />
                                    </div>
                                    <div className="services-content service-content-three">
                                        <h4>{item.title}</h4>
                                        <ul>
                                            {item.features.map((feature, index ) => <li key={index}>{feature}</li>)} 
                                        </ul>
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

export default CoreFeaturesHomeThree;