 

interface accordion_data_type {
    id: number;
    question: string;
    answer: JSX.Element;
    accordion_id: string;
    collapsed: string;
    aria_expanded: boolean;
    show: string;
}
 const accordion_data: accordion_data_type[] = [
        {
            id: 1,
            question: "How do I use Spindle?",
            answer: <>Drop in your MongoDB schema and give a description for which endpoints you want. </>,    
            accordion_id: "One",
            collapsed: "", 
            aria_expanded: true, 
            show: "show"
        },
        {
            id: 2,
            question: "What is the best way to use Spindle?",
            answer: <>Detailed schemas and detailed user queries will help Spindle create specific APIs.</>,    
            accordion_id: "Two",
            collapsed: "collapsed", 
            aria_expanded: false, 
            show: ""
        },
        {
            id: 3,
            question: "How do I connect my MongoDB?",
            answer: <>Add your MongoURI and we will securely parse and store it.</>,    
            accordion_id: "Three",
            collapsed: "collapsed", 
            aria_expanded: false, 
            show: ""
        },  
 ]

const FAQHomeOne = () => {
    return (
        <>
            <section className="faq-area grad-bg pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="faq-img mb-30">
                                <img className="bounce-animate" src="/assets/img/bg/illustration.png" alt="theme-pure" />
                            </div>
                        </div>
                        <div className="col-xl-6 ">
                            <div className="faq-wrapper mb-30">
                                <div className="section-title section-title-white mb-70">
                                    <span>FAQ</span>
                                    <h3>Get Every Single Answer
                                    From Here.</h3>
                                </div>
                                <div className="faq-box">
                                    <div className="accordion" id="accordionExample">
                                    {accordion_data.map((item) => (
                                        <div key={item.id} className="accordion-items">
                                            <h2 className="accordion-header" id={`heading${item.accordion_id}`}>
                                                <button
                                                className={`accordion-button ${item.collapsed}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${item.accordion_id}`}
                                                aria-expanded={item.aria_expanded}
                                                aria-controls={`collapse${item.accordion_id}`}>
                                                {item.question}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${item.accordion_id}`}
                                                className={`accordion-collapse collapse ${item.show}`}
                                                aria-labelledby={`heading${item.accordion_id}`}
                                                data-bs-parent="#accordionExample" >
                                                <div className="accordion-content faq_content">
                                                    <p>{item.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))} 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQHomeOne;