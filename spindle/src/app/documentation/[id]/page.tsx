'use client'
import Docs from "../../../../components/docs";



const index = ({ params }: { params: { id: string }})  => {

    const id = params.id;
    
   

    
    return (
        <>
            <Docs id={id} />
        </>
    );
};

export default index;