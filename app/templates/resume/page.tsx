"use client";

import { useState } from "react";
import Link from "next/link";


const resumeTypes=[

"Professional Resume",
"Fresher Resume",
"Modern Resume",
"Creative Resume",
"Student Resume"

];



export default function ResumeTemplates(){


const [selected,setSelected]=useState("Professional Resume");



const templates=Array.from({length:20},(_,i)=>({

code:

`RES-${selected
.split(" ")
[0]
.toUpperCase()}-${String(i+1).padStart(3,"0")}`,

image:

`/templates/resume/${String(i+1).padStart(3,"0")}.png`

}));






return(


<main className="min-h-screen bg-black text-white">



<div className="flex flex-col md:flex-row">







<aside className="w-full md:w-72 bg-gray-950 border-r border-gray-800 p-6 min-h-screen">





<Link

href="/#templates"

className="inline-block border border-cyan-500 px-5 py-2 rounded-xl"

>

← Back

</Link>







<h2 className="text-xl font-bold text-cyan-400 mt-8 mb-5">

Resume Categories

</h2>








<div className="space-y-3">



{

resumeTypes.map((type)=>(


<button


key={type}


onClick={()=>setSelected(type)}


className={`w-full text-left p-4 rounded-xl transition

${selected===type

? "bg-cyan-500 text-black"

: "bg-gray-900"

}

`}


>


{type}


</button>


))


}




</div>





</aside>









<section className="flex-1 p-6 md:p-10">





<h1 className="text-4xl font-bold text-cyan-400">

{selected}

</h1>





<p className="text-gray-400 mt-3">

Choose your resume design template

</p>









<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">






{

templates.map((item)=>(


<div

key={item.code}

className="bg-gray-900 border border-gray-800 rounded-2xl p-4"

>







<div className="h-64 bg-white rounded-xl overflow-hidden relative">





<img

src={item.image}

alt={item.code}

className="w-full h-full object-cover"

/>






<div className="absolute inset-0 flex items-center justify-center">


<span className="rotate-[-25deg] text-gray-300 font-bold text-center opacity-70">


Dhruv Digital & Stationary


</span>


</div>





</div>









<h3 className="mt-4 text-cyan-400 font-bold">

{item.code}

</h3>






<a

href={`https://wa.me/919485665412?text=I want ${item.code}`}

target="_blank"

className="inline-block mt-4 bg-green-600 px-5 py-2 rounded-xl"

>

Order Now

</a>







</div>



))


}






</div>





</section>





</div>


</main>


)


}