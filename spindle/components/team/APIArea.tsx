'use client'
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface api_data_type {
    _id: string;
    image: string;
    name: string;
    description: string;
 

}[]


const APIArea = () => {
    const { data: session } = useSession();
    const [apis, setApis] = useState<api_data_type[]>([]);

    const[api_got, setApiGot] = useState(false);

    useEffect(() => {
          if(!session) return;
     const name = session.user?.name;
     if(name && !api_got)
        getApis(name);

     
   
    });

    async function getApis(name: string) {
        let my_apis = await fetch(`http://localhost:3001/spindle/${name}`, {
            method: 'GET'
        
        });
        let data = await my_apis.json();
        setApis(data);
        console.log(data);
        setApiGot(true);
    }

   

    return (
        <>
            <div className="our-team-area pt-110 pb-90">
                <div className="container">
                    <div className="row">
                    {apis.map((item, i)  => 
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                               <a href={"/documentation/"+item._id} className="stretched-link"></a>
                            <div className="our-team-wrapper mb-30 wow fadeInUp" data-wow-delay=".9s">
                            <div className="team-img position-relative">
                                                                    <img src={item.image} alt="" />

                                <div className={`team-shape shape${item._id}`}>
                                </div>
                            </div>
                            <div className="team-text">
                                <h2>{item.name}</h2>
                                <span>Official API Documentation</span>
                                <p>{item.description}</p>
                                <div className="team-link">
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

export default APIArea;