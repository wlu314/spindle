"use client"

import Link from "next/link";
import {use, useState} from "react";
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react";
import { useEffect } from "react";



const LoginForm = () => {
  const router = useRouter()
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  const { data: session } = useSession();

  if(session){
    router.push("/")
  }


function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

   
    let status =await signIn("credentials", {
        name: name,
        password: password,
        callbackUrl: ``,
      redirect:false} )


    if(status?.error){
      setError(status.error)
    }
    else{
      router.push("/")
     
    }


  }



  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">
          Username <span>**</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter Username"
          onChange={e => inputHandler(e)}
        />
        <label htmlFor="pass">
          Password <span>**</span>
        </label>
        <input id="pass" type="password" placeholder="Enter password"
          onChange={e => inputHandler(e)}
         />

         <div className="text-danger my-4">{error}</div>
      
        <button className="btn btn-2 btn-black w-100" type="submit">Login Now</button>
        <div className="or-divide">
          <span>or</span>
        </div>
        <Link href={"/register"}>
            <button className="btn btn-2 w-100">Register Now</button>        
        </Link>
      </form>
    </>
  );
};

export default LoginForm;
