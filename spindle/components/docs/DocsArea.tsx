

'use client'

import { useState, useEffect } from "react";
import mongoose from "mongoose";

interface doc_data_type {
    id: number;
    name: string;
    endpoint: string;
    description: string;
    params: Array<Object>;
    tags: Array<string>;
    endpoint_ref: {
        endpoint: string;
        description: string;
        tags: Array<string>;
        method: string;
    }

}[]

function toTitleCase(str: string): string{
    return str.replace(/\w\S*/g, function(txt: string): string {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}



const DocsArea = (props: { id: any; }) => {
    const [data, setData] = useState<doc_data_type[]>([]);
    const id = props.id;

    async function fetchData() {
    
        let response =await fetch(`http://localhost:3001/spindle/docs/${id}`,
         {
            method: 'GET'
        })

        let data = await response.json();

        if(!data.doc_endpoints) return;

        setData(data.doc_endpoints);
        

    }

    useEffect(() => {
        fetchData();
    }, []);


  
   

    return (
        <>
            <section className="privacy area gray-bg pb-65 py-4">
                <div className="container my-5">
                    {data?.map((item, i) => 
                        <div key={i} className="row">
                            <div className="col-xl-12">
                                <div className={`privacy-heading ${item.id === 1 && "mt-110"} mb-55`}>
                                    <h3>{toTitleCase(item.name)}</h3>
                                    <p>{item.description}</p>
                                    <p><b>Endpoint:</b> <a className="link-opacity-75">{item.endpoint_ref.endpoint}</a></p>
                                



                                    <p><b>Parameters</b></p>
                                    <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>

      
    </tr>
  </thead>
  <tbody>
        {item.params.map((param: any) =>
            <tr>
      <td>{param.name}</td>
      <td>{param.type}</td>
        <td>{param.description}</td>
    </tr>
        )}


      
  </tbody>
</table>
                                </div>
                            </div>
                        </div>                    
                    )} 
                </div>
            </section>
        </>
    );
};

export default DocsArea;