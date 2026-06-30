"use client";

import Link from "next/link";
import { useState } from "react";


const serviceCategories = [


{
title:"🖨️ Printing Services",

link:"/services/printing",

services:[

"Black & White Printing",
"Colour Printing",
"Photo Printing",
"Document Printing",
"Photocopy",
"Lamination",
"Spiral Binding"

]

},




{
title:"📄 Document & Designing Services",

link:"/resume",

services:[

"Resume Designing",
"Assignment Printing",
"Project File Designing",
"Front Page Designing",
"Acknowledgement Designing",
"Certificate Designing"

]

},





{
title:"🏛️ Government Services",

link:"/government",

services:[

"Aadhaar Assistance",
"PAN Card Services",
"Voter ID Services",
"Learning Licence Services",
"Driving Licence Services",
"Income Certificate",
"Caste Certificate",
"Saral Portal Services"

]

},






{
title:"🎨 Design Templates",

link:"/templates",

services:[

"Resume Templates",
"Certificate Templates",
"Assignment Templates",
"Visiting Card Design",
"Poster Design",
"Banner Design"

]

},






{
title:"✏️ Stationery Services",

link:"/",

services:[

"Pens",
"Notebooks",
"Files",
"Registers",
"Project Covers",
"Office Stationery"

]

},






{
title:"💻 Online Digital Services",

link:"/",

services:[

"Online Form Filling",
"Document Upload",
"Application Assistance",
"Status Checking"

]

}


];









export default function ServicesPage(){



const [search,setSearch]=useState("");





return(


<main className="min-h-screen bg-black text-white py-10">



<div className="max-w-7xl mx-auto px-5">



<Link

href="/"

className="inline-block border border-cyan-500 px-5 py-2 rounded-xl"

>

← Back Home

</Link>






<h1 className="text-5xl font-bold text-center text-cyan-400 mt-10">

All Services

</h1>





<p className="text-center text-gray-400 mt-3">

Dhruv Digital & Stationary complete service list

</p>







<input

placeholder="🔍 Search service..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="mt-10 w-full bg-gray-900 border border-gray-700 rounded-xl px-6 py-4 outline-none focus:border-cyan-400"

/>









<div className="mt-12 space-y-12">





{

serviceCategories.map((category)=>(



<div key={category.title}>


<h2 className="text-2xl text-cyan-400 font-bold mb-5">

{category.title}

</h2>







<div className="grid md:grid-cols-3 gap-5">



{

category.services

.filter((service)=>

service.toLowerCase().includes(search.toLowerCase())

)

.map((service)=>(



<div

key={service}

className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition"

>



<h3 className="text-lg font-semibold">

{service}

</h3>



<p className="text-gray-400 text-sm mt-2">

Available at DDS

</p>





<Link

href={category.link}

className="inline-block mt-4 bg-cyan-500 text-black px-4 py-2 rounded-xl text-sm font-bold"

>

View Service

</Link>





</div>



))


}



</div>



</div>



))


}





</div>



</div>



</main>


)


}