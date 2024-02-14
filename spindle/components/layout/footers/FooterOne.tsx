import Link from 'next/link';
import Image from 'next/image';
import footer_logo from "../../../public/assets/logos/logowhite.png";

interface footer_links_type {
    id: number;
    title: string;
    links: {
        title: string;
        link: string;
    }[];
}
// footer links data 
const footer_links: footer_links_type[] = [
    {
        id: 1,
        title: "Our Product",
        links: [
           { title: "Create", link: "#"},
           { title: "GitHub", link: "#"},
           { title: "APIs", link: "#"},
          
        ]
    }
]
// footer content type
interface footer_content_type {
    sub_title: string;
    title: string;
    price_title: string;
    price: string;
    info_us: string;
    address: string;
    mail: string;
    phone: string;
    website: string;
    footer_info: string;
}
// footer content here
const footer_content: footer_content_type ={
    sub_title: "Get an easy quote",
    title: "Sign Up For Web Hosting Today!",
    price_title: "Starting At Only",
    price: "2.75",
    info_us: "We abstract the API creation and deployment process for you so you can focus on whats important: your data. Leverage our model to sell an API to users so they can access your company's data.",
    address: "266 Ferst Dr NW, Atlanta, GA 30332",
    mail :"company@spindle.ai",
    phone: "1-404-539-0394",
    website: "www.spindle.ai",
    footer_info: "",    

}

const {sub_title, title, price_title, price, info_us, address, mail, phone, website, footer_info } = footer_content

const FooterOne = () => {
    return (
        <>
            <footer>
                <section className="footer-area pt-110 pb-90 bg-footer" style={{backgroundImage: `url(/assets/img/bg/footer-bg.jpg)`}}>
                    <div className="container">
                      
                        <div className="footer-border"></div>
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-4 col-lg-4 mb-30">
                                <div className="footer-bottom-area">
                                    <div className="widgets">
                                        <div className="footer-logo">
                                            <Image src={footer_logo} alt="theme-pure" />
                                        </div>
                                        <p>{info_us}</p>
                                        <ul className="adress">
                                            <li><i className="fa fa-map-marker-alt"></i> <span>{address}</span></li>
                                            <li><i className="fa fa-envelope"></i> <span>{mail}</span></li>
                                            <li><i className="fa fa-phone"></i> <span>{phone}</span></li>
                                            <li><i className="fa fa-globe"> </i> <span>{website}</span></li>
                                        </ul>
                                    </div>
                                </div>
                              
                            </div>
                            <div className="col-xl-8 col-lg-8">
                                <div className="footer-right-box pl-70">
                                    <div className="row">
                                        {footer_links.map((item, i) => 
                                            <div key={i} className="col-xl-4 col-lg-4 col-md-4">
                                                <div className="wigets mb-30">
                                                    <div className="widgets-titles">
                                                        <h4>{item.title}</h4>
                                                    </div>
                                                    <div className="wegets-body">
                                                        <ul>
                                                            {item.links.map((link , index ) => <li key={index}>
                                                                <Link href={link.link}>{link.title}</Link></li> 
                                                            )} 
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>                                        
                                        )} 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div className="footer-text">
                                            <p>{footer_info}</p>
                                        </div>
                                    </div>
                             
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </footer>
        </>
    );
};

export default FooterOne;