 "use client"
import Image from "next/image";
import Slider from "react-slick";
import testimonial_data from "../../data/testimonial-data";
import React, { useRef } from "react";


// dots: false, 
const setting = {
    arrows: false, 
    infinite: true, 
    speed: 300, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    centerMode: true, 
    centerPadding: '0', 
   responsive: [ 
     { 
       breakpoint: 1200, 
       settings: { 
         slidesToShow: 2, 
         slidesToScroll:1, 
         infinite: true, 
         dots: false, 
         centerMode: false, 
       } 
     }, 
     { 
       breakpoint: 992, 
       settings: { 
         slidesToShow: 2, 
         slidesToScroll: 1, 
         arrows: false, 
         centerMode: false, 
       } 
     }, 
     { 
       breakpoint: 767, 
       settings: { 
         slidesToShow: 1, 
         slidesToScroll: 1, 
         arrows: false, 
       }
 
     }
 
   ]
}

interface testi_content_type {
  title: string;
  sm_des: string;
}
const testi_content: testi_content_type = {
  title: "Testimonials",
  sm_des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}


const {title, sm_des} = testi_content
const TestimonailHomeOne = ({style} : any) => {
    const sliderRef = useRef<Slider | null>(null);

    const handlePrevClick = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPrev();
      }
    };
  
    const handleNextClick = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };
    return (
        <> 
            <section className={`testimonail-area ${style ? "testimonail-area-server server-bg" : "grad-bg" } pt-115 pb-120`} >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title section-title-white mb-70">
                                <h2>{title}</h2>
                                <p>{sm_des}</p>
                            </div>
                        </div>
                    </div>
                       <div className="row activ-testimonai wow fadeInUp  slick-initialized slick-slider animated">
                            <button onClick={handlePrevClick} type="button" className="slick-prev slick-arrow">
                                <i className="fas fa-arrow-left"></i>
                            </button>
                            <button onClick={handleNextClick} type="button" className="slick-next slick-arrow">
                                <i className="fas fa-arrow-right"></i>
                            </button> 
                            <Slider {...setting} ref={sliderRef} data-wow-delay="0.3s">
                                {testimonial_data.map((item, i)   => 
                                    <div key={i} className="col-xl-12">
                                        <div className={`${style &&  "wraper_style" } testimonail-wraper mb-30`}>
                                            <div className="testimonail-titles">
                                                <div className="testimonail-icon">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <span>{item.title}</span>
                                            </div>
                                            <p>{item.sm_des} </p>
                                            <div className="testimonail-author">
                                                <div className="testimonail-img">
                                                    <Image src={item.avatar} alt="theme-pure" />
                                                </div>
                                                <h5>{item.name}</h5>
                                                <span>{item.job_title}</span>
                                            </div>
                                        </div>
                                    </div>                        
                                )}                     
                            </Slider> 
                       </div>


                </div>
            </section>
        </>
    );
};

export default TestimonailHomeOne;