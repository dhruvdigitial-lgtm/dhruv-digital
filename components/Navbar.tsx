"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  Home,
  Printer,
  Landmark,
  FileText,
  Phone,
  Menu,
  X,
  MessageCircle,
  Palette,
  Search
} from "lucide-react";


export default function Navbar() {


  const [open, setOpen] = useState(false);



  const navItems = [

    {
      name: "Home",
      id: "home",
      icon: Home
    },

    {
      name: "Services",
      id: "services",
      icon: Printer
    },

    {
      name: "All Services",
      link: "/services",
      icon: Search
    },

    {
      name: "Templates",
      link: "/templates",
      icon: Palette
    },

    {
      name: "Government Services",
      id: "government",
      icon: Landmark
    },

    {
      name: "Resume",
      id: "resume",
      icon: FileText
    },

    {
      name: "Print Order",
      id: "print-order",
      icon: Printer
    },

    {
      name: "Contact",
      id: "contact",
      icon: Phone
    }

  ];





  const scrollTo = (id:string)=>{


    setOpen(false);



    setTimeout(()=>{


      const section = document.getElementById(id);



      if(section){


        const y =

        section.getBoundingClientRect().top +

        window.scrollY -

        90;



        window.scrollTo({

          top:y,

          behavior:"smooth"

        });


      }


    },100);


  };







  const handleClick = (item:any)=>{


    if(item.link){


      window.location.href = item.link;


    }

    else{


      scrollTo(item.id);


    }


  };







  return (


    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl">



      <div className="max-w-7xl mx-auto px-5">



        <div className="h-20 flex items-center justify-between">





          <Link

            href="/"

            className="flex items-center gap-3"

          >



            <div className="relative h-14 w-14 bg-white rounded-full overflow-hidden">


              <Image

                src="/logo.png"

                alt="DDS"

                fill

                sizes="56px"

                className="object-contain"

              />


            </div>





            <div className="hidden sm:block">


              <h2 className="text-white font-bold">

                Dhruv Digital & Stationary

              </h2>



              <p className="text-cyan-400 text-xs">

                Digital & Printing Solutions

              </p>



            </div>



          </Link>








          <nav className="hidden lg:flex gap-5">


            {

              navItems.map((item)=>{


                const Icon = item.icon;



                return(


                  <button


                    key={item.name}


                    onClick={()=>handleClick(item)}


                    className="text-gray-300 hover:text-cyan-400 flex items-center gap-2 text-sm"


                  >


                    <Icon size={17}/>


                    {item.name}


                  </button>


                )


              })

            }


          </nav>








          <a

            href="https://wa.me/919485665412"

            target="_blank"

            rel="noopener noreferrer"

            className="hidden md:flex items-center gap-2 bg-green-600 px-5 py-3 rounded-xl text-white"

          >


            <MessageCircle size={18}/>


            WhatsApp


          </a>









          <button

            className="lg:hidden text-white"

            onClick={()=>setOpen(!open)}

          >


            {

              open ? <X/> : <Menu/>

            }


          </button>





        </div>



      </div>








      {


        open && (


          <div className="lg:hidden bg-black p-5">


            {


              navItems.map((item)=>(


                <button


                  key={item.name}


                  onClick={()=>handleClick(item)}


                  className="block text-white p-3 w-full text-left"


                >


                  {item.name}


                </button>


              ))

            }


          </div>


        )


      }





    </header>


  );


}