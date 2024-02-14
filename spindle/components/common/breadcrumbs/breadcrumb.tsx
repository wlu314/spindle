import Link from "next/link";
import React from "react";

type breadcrumb_type = {
    top_title: string,
    title: string

}
const Breadcrumb = ({top_title= "Contact Us", title= "About"} : breadcrumb_type) => {
  return (
    <>
      <section
        className="breadcrumb-area"
        style={{backgroundImage: `url(/assets/img/bg/contractbg.jpg)`}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb-text text-center">
                <h1>{top_title}</h1>

                <ul className="breadcrumb-menu">
                  <li>
                    <Link href="/">Home</Link>
                  </li>

                  <li>
                    <span>{title}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
