"use client"
import Link from 'next/link';  
import NavMenu from './nav-menu';
import { useEffect, useState } from 'react';
import Logo from "../../../public/assets/logos/logowhite.png";
import Image from 'next/image';
import {signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const HeaderOne = () => { 
    const { data: session } = useSession();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if(session){
            setIsLoggedIn(true);
        }
    }, [session]);

   

    async function handleSignOut() {
        await signOut();
        setIsLoggedIn(false);
        router.push("/login");

    }

    async function handleSignIn() {
        if(isLoggedIn){
            handleSignOut();
        } else {
            router.push("/login");
        }
    }
    

  
    return (
        <>
            <header>
            <div className={`header-area header-transparent header-space pt-45 pb-45`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-5 d-flex align-items-lg-center">
                            <div className="logo">
                                <Link href="/"> <Image src={Logo } alt="theme-pure" /> </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                            <div className="main-menu ">
                                <nav id="mobile-menu">
                                    <NavMenu />
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-7 d-flex flex-row-reverse align-items-center justify-content-xl-end">
                          
                          
                                               
                            <div  className="d-none d-md-block">
                                <a id="sign_out" className="btn btn-light" onClick={handleSignIn}><i className="far fa-key"></i> {isLoggedIn ? "Sign Out" : "Log In"}</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
        </>
    );
};

export default HeaderOne;