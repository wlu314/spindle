interface about_content_type {
    sub_title: string;
    title: string;
    title_2: string;
    sm_des: JSX.Element;
}

const about_content: about_content_type = {
    sub_title: "About Us",
    title: "Meet With Our Alive Cool Services.",
    title_2: "Meet With Our Alive Cool Services.",
    sm_des: <>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</>
}
const {sub_title, title, title_2, sm_des} = about_content
const AboutUsArea = () => {
    return (
        <>
            <div className="about-us-area pt-120 pb-90" style={{backgroundImage: `url(data:image/png;base64,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)`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="about-wrapper mb-30 wow fadeIn" data-wow-delay="0.3s">
                            <div className="section-header">
                                <span>{sub_title}</span>
                                <h2>{title}</h2>
                                <h4>{title_2}</h4>
                                <p>{sm_des}</p>
                                <div className="btn btn-2 mt-10">Get Started Now</div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUsArea;