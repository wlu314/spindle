"use client"
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
// chose images
import chose_icon_1 from "../../../public/assets/img/chose/c01.png" ;
import chose_icon_2 from "../../../public/assets/img/chose/c02.png" ;
import chose_icon_3 from "../../../public/assets/img/chose/c03.png" ;
// chose data type
interface chose_data_type {
    id: number;
    active: string;
    sirial_no: string;
    icon: StaticImageData;
    title: string;
    info: string;
}
// chose data
const chose_data:chose_data_type[] = [
    {
        id: 1,
        active: "",
        sirial_no: "01",
        icon: chose_icon_1,
        title: "Data Hosting",
        info: "Use your own MongoDB and connect it to Spindle.",
    },
    {
        id: 2,
        active: "active",
        sirial_no: "02",
        icon: chose_icon_2,
        title: "AI Powered API Creation",
        info: "Let Spindle create your API for you, and host it on our servers.",
    },
    {
        id: 3,
        active: "",
        sirial_no: "03",
        icon: chose_icon_3,
        title: "User Interaction",
        info: "Let your users interact with your data through our API.",
    },
]
const ChoseAreaHomeOne = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const handleMouseEnter = (index: number) => {
      setActiveIndex(index);
    };

    return (
        <>
            <section className="chose-area pt-115 pb-90">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="section-title text-center mb-70">
                                <h2>Why Choose Us?</h2>
                                <p>We abstract the API creation and deployment process for you so you can focus on whats important: your data. Leverage our model to sell an API to users so they can access your company's data.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row chose-row wow fadeInUp animated" data-wow-delay="0.3s">
                        {chose_data.map((item, i) => 
                            <div key={i} className="col-xl-4 col-lg-4">
                                <div className={`chose-box text-center ${activeIndex === i ? 'active' : ''} mb-30`} onMouseEnter={() => handleMouseEnter(i)}>
                                    <Image src={item.icon} alt="theme-pure" />
                                    <div className="chose-content">
                                        <span>{item.sirial_no}</span>
                                        <h3>{item.title}</h3>
                                        <p>{item.info}</p>
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

export default ChoseAreaHomeOne;