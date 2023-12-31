import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import { FaHelmetSafety } from "react-icons/fa6";
import { BiSolidMessageRounded } from "react-icons/bi"
import { HeaderMobile }  from "../../src/components/mobile/HeaderMobile";
import { CbusImageBtn } from "../../src/components/mobile/columbusImageBtn";

export default function Home() {
  let imageHeight = 400
  let imageWidth = 100
 

  if (typeof window !== "undefined") {
      imageWidth =  Math.round(window.innerWidth/2)
      imageHeight = window.innerHeight
      console.log(window.innerWidth, imageWidth)
    }
 // link to new page where you email chase 
 const handleScheduleBtn = ()=> { 
    console.log("link to schedule page")} 

  return (
    <>
      <Head>
        <title>Hoobler Inspections</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full bg-slate-50 justify-between">
        <HeaderMobile/> 
      </div>
        <main className="
            min-h-screen
            flex-col 
            justify-center 
            bg-no-repeat 
            bg-cover 
            bg-center  
            bg-[url('../../public/columbusImage.jpeg')]">

          <div className="flex p-5 justify-center w-full h-10 "></div>
          <div className="flex justify-center w-full text-4xl text-slate-50 font-sans ">
            Central Ohio Inspections
          </div>
          <div className="flex p-5 justify-center w-full h-10 "></div>
          <div className="flex p-5 justify-center w-full h-10 "></div>
          <div className="flex p-5 justify-center w-full h-10 "></div>
          <div className="flex p-5 justify-center w-full h-10 "></div>
          <div className="flex justify-center w-full h-40">
          </div> 
          <div className="flex justify-center w-full">
           <Link 
            href="/contact/contact"
            onClick={handleScheduleBtn}
            className="
            text-slate-50 font-sans p-2 
            border-blue-950 bg-blue-950 rounded-md border-2
            "> Schedule Now! </Link>
          </div> 
        </main>
    </>
  );
}
