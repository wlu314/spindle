"use client"
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { githubLight } from '@uiw/codemirror-theme-github';
import { useSession } from 'next-auth/react';
import { RotatingTriangles } from 'react-loader-spinner';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const DeployForm = () => {
 
    const [name, setName] = useState("");
    const [mongo_uri, setMongo_uri] = useState("");
    const [query, setQuery] = useState("");
    const [company_name, setCompany_name] = useState("");
    const [schema, setSchema] = useState("const mongoose = require('mongoose');\n\nconst SingerSchema = new mongoose.Schema({\n  singerId: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  singerName: {\n    type: String,\n    required: true\n  },\n  birthDate: {\n    type: Date\n  },\n  followers: {\n    type: Number,\n    default: 0\n  },\n  genres: [{\n    type: String\n  }],\n  albums: [{\n    albumId: {\n      type: String,\n      required: true\n    },\n    title: {\n      type: String,\n      required: true\n    },\n    releaseDate: {\n      type: Date,\n      required: true\n    },\n    noOfTracks: {\n      type: Number,\n      required: true\n    },\n    coverImage: {\n      type: String\n    }\n  }],\n  popularTracks: [{\n    trackId: {\n      type: String,\n      required: true\n    },\n    title: {\n      type: String,\n      required: true\n    },\n    duration: {\n      type: Number,\n      required: true\n    },\n    listens: {\n      type: Number,\n      default: 0\n    }\n  }],\n  profileImage: {\n    type: String\n  },\n  biography: {\n    type: String\n  }\n});\n\nmodule.exports = mongoose.model('Singer', SingerSchema);");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    const router = useRouter();



    const { data: session } = useSession();

    useEffect(() => {
        if(session){
            setCompany_name(session.user?.name || "")
        }
    }, [session])


    async function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
                console.log(e.target.value)

        if(e.target.name === "name"){
            setName(e.target.value)
        }
        if(e.target.name === "mongo_uri"){
            setMongo_uri(e.target.value)
        }
        if(e.target.name === "query"){
          
            setQuery(e.target.value)
        }
        if(!name || !mongo_uri || !query) {
          setError(true);
            setLoading(false);

  
        return;
      }
      else{
          setError(false);
      }
        
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      if(!name || !mongo_uri || !query || !schema || !company_name) {
          setError(true);
          setLoading(false);
        return;
      }

      setLoading(true);
      setError(false);
      try{

            let response = await fetch("http://localhost:3001/openai/generateAPI", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                schema: schema,
                name: name,
                company_name: company_name,
                mongo_uri: mongo_uri,
                query: query
            })
        })

      

        let status = response.status;
        if(status !== 200) {
            console.log("Error", status);
            setError(true);
            setLoading(false);

            return;
        }
        setError(false);
        setLoading(false);



        let data = await response.json();
        let id = data.id;

        router.push(`/documentation/${id}`)


      }
      catch(err){
          console.log(err);
          setError(true);
          setLoading(false);

      }
        
  
  }

  function handleSchemaChange(change: any) {
    console.log(change)
    setSchema(change);
  }

  return (
    <>
    <div className={loading? "loading-on":"loading-off"}>
    <RotatingTriangles
  visible={true}
  height="150"
  width="150"
  ariaLabel="rotating-triangles-loading"
  wrapperStyle={{}}
  wrapperClass="loader"

  />

        </div>

      <form id="contact-form"  onSubmit={(e)=>handleSubmit(e)}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-box user-icon mb-30">
              <input onChange={(e)=>handleInput(e)} id="name" type="text" name="name" placeholder="API Name" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-box database-icon mb-30">
              <input onChange={(e)=>handleInput(e)} type="text" name="mongo_uri" placeholder="Your Mongo URI" />
            </div>
          </div>

          <div className='col-lg-12 mt-1 mb-5'>
             <div className="form-box database-icon ">
              <input readOnly type="text" placeholder="My MongoDB Schema" />
            </div>
            <CodeMirror  theme={githubLight} value={schema} height="500px" extensions={[javascript({ jsx: true }),githubLight ]} onChange={(change)=>{handleSchemaChange(change)}}  />
          </div>


          
          <div className="col-lg-12">
            <div className="form-box message-icon mb-30">
              <input
                name="query"
                id="query"
                
                type="text"
                placeholder="Short Description of your API"
                onChange={(e)=>handleInput(e)}
              />
            </div>
                          {error && <p className="text-danger h5">Please fill all the fields correctly</p>}

            <div className="contact-btn text-center">
              
              <button className="btn btn-2 btn-icon ml-0" type="submit">
                Deploy
              </button>

            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default DeployForm;
