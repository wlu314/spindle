import Link from "next/link";


interface our_faq_content_type {
    title: string;
    sm_des: string;
    cate_title: string;
    categories: {
        title: string;
        items: string;
    }[];
    call_title: string;
    phone: string;
    faq_data: {
        id: number;
        title: string;
        sm_info: string;
    }[];
}


const our_faq_content: our_faq_content_type = {
    title: 'FAQ',
    sm_des: "Got any questions? We may have the answers you're looking for!",
    cate_title: "All Categories",
    categories: [
        {title: "What do we do?", items: "1"},
        {title: "Getting Started", items: "3"}
    ],
    call_title: "Make a call",
    phone: "+874(784) 65 57",
    faq_data: [
        {
            id: 1, 
            title: "What do I need to create my APIs?", 
            sm_info: "You'll need an API name, your MongoDB URI, a short description of your API, and a schema for your MongoDB database.",
        },
        {
            id: 2, 
            title: "Do I need any prior knowledge of MongoDB?", 
            sm_info: "Nope! Our platform is designed to be user-friendly and requires minimal knowledge of MongoDB.",
        },
        {
            id: 3, 
            title: "Is documentation made for me?", 
            sm_info: "We provide documentation for all of your APIs. We also provide a centralized endpoint for all API calls.",
        },
        {
            id: 4, 
            title: "Who Hosts the APIs?", 
            sm_info: "We do! We handle the hosting of your APIs, so you can focus on managing your data. We also provide phone and email support 24/7.",
        }
    ]

}
const {title, sm_des, cate_title, categories, call_title, phone, faq_data} = our_faq_content

const OurFaqArea = () => {
    return (
        <>
            <div className="our-faq-area pt-110 pb-90">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                            <div className="section-title text-center mb-70">
                            <h2>{title}</h2>
                            <p>{sm_des}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="widget-area">
                            
                            <div className="make-call mb-30">
                                <span className="text-light">{call_title}</span>
                                <h4 className="text-light">{phone}</h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="row">
                                {faq_data.map((faq_item, index) => 
                                    <div key={index} className="col-xl-6 col-lg-6">
                                        <div className="faq-single-box mb-30 wow fadeIn" data-wow-delay=".3s">
                                            <div className="faq-title">
                                                <span>0{faq_item.id}</span>
                                                <h4>{faq_item.title}</h4>
                                            </div>
                                            <p>{faq_item.sm_info}</p>
                                        </div>
                                    </div>
                                )} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurFaqArea;