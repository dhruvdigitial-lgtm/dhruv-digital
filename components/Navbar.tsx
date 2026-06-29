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
  MessageCircle
} from "lucide-react";


export default function Navbar(){


const [open,setOpen] = useState(false);



const navItems=[

{
name:"Home",
id:"home",
icon:Home
},

{
name:"Services",
id:"services",
icon:Printer
},

{
name:"Government Services",
id:"government",
icon:Landmark
},

{
name:"Resume",
id:"resume",
icon:FileText
},

{
name:"Print Order",
id:"print-order",
icon:Printer
},

{
name:"Contact",
id:"contact",
icon:Phone
}

];





const scrollTo=(id:string)=>{


const section = document.getElementById(id);



if(section){


const position =

section.getBoundingClientRect().top +

window.scrollY -

80;



window.scrollTo({

top:position,

behavior:"smooth"

});


}



setOpen(false);


};





return(


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







<nav className="hidden lg:flex gap-6">


{

navItems.map((item)=>{


const Icon=item.icon;



return(


<button


key={item.id}


onClick={()=>scrollTo(item.id)}


className="text-gray-300 hover:text-cyan-400 flex items-center gap-2"


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

open

?

<X/>

:

<Menu/>

}


</button>






</div>


</div>







{

open && (


<div className="lg:hidden bg-black p-5">


{

navItems.map((item)=>{


return(


<button


key={item.id}


onClick={()=>scrollTo(item.id)}


className="block text-white p-3 w-full text-left"


>


{item.name}


</button>


)


})


}


</div>


)

}



</header>


)


}