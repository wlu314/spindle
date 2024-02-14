import DeployForm from "./DeployForm";


const Deploy = () => {
    return (
        <>
            <section className="contact-form-area gray-bg pt-115 pb-120">
            <div className="container">
               <div className="form-wrapper">
                  <div className="row">
                     <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                        <div className="section-title text-center mb-70">
                           <h2>API Information</h2>
                           <p>Tell us about your MongoDB by providing the following information. We will use this information to create a new set of APIs for your MongoDB.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="contact-form">
                    <DeployForm /> 
                  </div>
               </div>
            </div>
         </section>
        </>
    );
};

export default Deploy;