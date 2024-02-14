import Image from "next/image";
import team_data from "../data/team-data";
import SocialLinks from "../common/social-links";


interface team_content_type {
    title: string;
    sm_des: string;
}
const team_content: team_content_type = {
    title: "Our Team",
    sm_des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}
const { title, sm_des} = team_content

const OurTeam = () => {
    return (
        <>
            <div className="our-team-area pt-110 pb-90">
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
                        {team_data.map((item, i) => 
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="our-team-wrapper mb-30 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="team-img position-relative">
                                        <Image src={item.avatar} alt="theme-pure" />
                                        <div className={`team-shape shape${item.id}`}>
                                            <Image src={item.shape} alt="theme-pure" />
                                        </div>
                                    </div>
                                    <div className="team-text">
                                        <h2>{item.name}</h2>
                                        <span>{item.job_title}</span>
                                        <p>{item.sm_info}</p>
                                        <div className="team-link">
                                            <SocialLinks />  
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        )} 
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurTeam;