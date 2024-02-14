import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/img/logo/logo.png";
import SocialLinks from "../../common/social-links";


const SlideBar = ({sidebarOppen, setSidebarOppen}: any) => {
    return (
        <>
            <div className={`extra-info ${sidebarOppen && "info-open"}`}>
                <div className="close-icon">
                    <button onClick={() => setSidebarOppen(false)}>
                    <i className="far fa-window-close"></i>
                    </button>
                </div>
                <div className="logo-side mb-30">
                    <Link href="/">
                        <Image src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="side-info mb-30">
                    <div className="contact-list mb-30">
                    <h4>Office Address</h4>
                    <p>123/A, Miranda City Likaoli
                        Prikano, Dope
                    </p>
                    </div>
                    <div className="contact-list mb-30">
                    <h4>Phone Number</h4>
                    <p>+0989 7876 9865 9</p>
                    <p>+(090) 8765 86543 85</p>
                    </div>
                    <div className="contact-list mb-30">
                    <h4>Email Address</h4>
                    <p>info@example.com</p>
                    <p>example.mail@hum.com</p>
                    </div>
                </div>
                <div className="instagram">
                    <a href="#">
                    <img src="assets/img/blog/ins1.jpg" alt="theme-pure" />
                    </a>
                    <a href="#">
                    <img src="assets/img/blog/ins2.jpg" alt="theme-pure" />
                    </a>
                    <a href="#">
                    <img src="assets/img/blog/ins3.jpg" alt="theme-pure" />
                    </a>
                    <a href="#">
                    <img src="assets/img/blog/ins4.jpg" alt="theme-pure" />
                    </a>
                    <a href="#">
                    <img src="assets/img/blog/ins5.jpg" alt="theme-pure" />
                    </a>
                    <a href="#">
                    <img src="assets/img/blog/ins1.jpg" alt="theme-pure" />
                    </a>
                </div>
                <div className="social-icon-right mt-20">
                    <SocialLinks /> 
                </div>
          </div>
        </>
    );
};

export default SlideBar;