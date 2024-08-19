"use client";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/Bhumika.jpg"
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Bhumika Koirala Portfolio</title>
      </Head>

      {/* <main className=" bg-white px-10  dark:bg-gray-900 md:px-20 lg:px-40 "> */}
        <section className="min-h-screen">
          
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium"> Bhumika Koirala</h2>
            <h3 className="text-2xl py-2">Software Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-700">
              Recent graduate looking for opportunities to grow.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://www.linkedin.com/in/bhumikakoirala/" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/bhumika0" target="_blank">
              <AiFillGithub />
            </a>
            
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover" alt="My picture"/>
          </div>
        </section>

      {/* </main> */}
    </div>
  );
}
