"use client";
import React, {useState} from "react";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";


const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    return(
        <>
        <nav className="py-4 mb-2 flex justify-end dark:text-white">
            <div>

              <div>   
                <h1 className = "text-lg"></h1>
                <ul className="flex items-center gap-8">
                 
                <li className="">
                    <Link href="/">
                     Home
                    </Link>
                  </li>
                  <li className="pr-8">
                    <Link href="/experiences">Experiences</Link>
                  </li>
                  {/* <li>
                    <BsFillMoonStarsFill 
                      onClick={()=> setDarkMode(!darkMode)} 
                      className="cursor-pointer"
                    />
                  </li> */}
                </ul>
              </div>
            </div>
            
          </nav>
        </>
    )
};

export default Navbar;