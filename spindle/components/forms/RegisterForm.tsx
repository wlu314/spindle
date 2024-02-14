
"use client"

import Link from "next/link";
import { use, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");



  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else {
      setPass(e.target.value);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ name, password: pass }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      const status =await signIn("credentials", {
        name: name,
        password: pass,
        callbackUrl: `/`,
      });

      if(status?.error){
    }
    else{
        const router = useRouter();
      router.push("/")
     
    }

      
    } else {
    }

  }



  return (
    <>
      <form  onSubmit={e => handleSubmit(e)}>
        <label htmlFor="name">
          Username <span>**</span>
        </label>
        <input onChange={e=>inputHandler(e)} id="name" type="text" placeholder="Enter Username..." />
  
        <label htmlFor="pass">
          Password <span>**</span>
        </label>
        <input onChange={e=>inputHandler(e)}  id="pass" type="password" placeholder="Enter password..." />
        <div className="mt-10"></div>
        <button className="btn btn-2 w-100" type="submit">Register Now</button>
        <div className="or-divide">
          <span>or</span>
        </div>
        <Link href={"/login"}>
            <button className="btn btn-2 w-100">login Now</button>
        </Link>

      </form>
    </>
  );
};

export default RegisterForm;
