"use client";

import { useState } from "react";
import Link from "next/link";


const invitationTypes=[

"Birthday Invitation",
"Wedding Invitation",
"Event Invitation"

];



export default function InvitationTemplates(){


const [selected,setSelected]=useState("Birthday Invitation");



const templates=Array.from({length:20},(_,i)=>({

code:`INV-${String(i+1).padStart(3,"0")}`

}));




return(


<main className="min-h-screen bg-black text-white">


<div className="p-6 max-w-7xl mx-auto">


<Link

href="/#templates"

className="border border-cyan-500 px-5 py-2 rounded-xl"

>

← Back

</Link>





<h1 className="text-4xl text-cyan-400 font-bold mt-8">

{selected}

</h1>



<div className="grid md:grid-cols-4 gap-6 mt-10">


{

templates.map((item)=>(


<div

key={item.code}

className="bg-gray-900 rounded-xl p-4 border border-gray-800"

>


<div className="h-64 bg-white rounded-xl flex items-center justify-center">


<span className="rotate-[-25deg] text-gray-300 font-bold">

Dhruv Digital & Stationary

</span>


</div>



<h3 className="mt-4 text-cyan-400">

{item.code}

</h3>



<a

href={`https://wa.me/919485665412?text=I want ${item.code}`}

target="_blank"

className="inline-block mt-3 bg-green-600 px-5 py-2 rounded-xl"

>

Order

</a>



</div>


))


}



</div>


</div>


</main>


)


}