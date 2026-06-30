"use client";

import Link from "next/link";


const printingServices = [

  "🖨️ Colour Printing",

  "⚫ Black & White Printing",

  "📄 Document Printing",

  "📷 Passport Size Photo",

  "🪪 Aadhaar Card Print",

  "🗳️ Voter ID Print",

  "📑 Photocopy",

  "🔍 Scanning",

  "📚 Spiral Binding",

  "🛡️ Document Lamination"

];




export default function PrintingPage(){


return(


<main className="min-h-screen bg-black text-white py-24">


<div className="max-w-6xl mx-auto px-5">



<Link

href="/services"

className="inline-block border border-cyan-500 px-5 py-2 rounded-xl"

>

← Back To Services

</Link>





<h1 className="text-5xl font-bold text-center text-cyan-400 mt-10">

Printing Services

</h1>





<p className="text-gray-400 text-center mt-4">

Professional Printing Solutions by Dhruv Digital & Stationary

</p>







<div className="grid md:grid-cols-3 gap-6 mt-12">



{

printingServices.map((service)=>(


<div

key={service}

className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 transition"

>



<h2 className="text-xl font-bold text-cyan-400">

{service}

</h2>




<p className="text-gray-400 text-sm mt-3">

Fast and reliable printing service available at DDS

</p>





<a

href={`https://wa.me/919485665412?text=I want ${service} service`}

target="_blank"

rel="noopener noreferrer"

className="inline-block mt-5 bg-green-600 px-5 py-2 rounded-xl"

>

Enquiry

</a>



</div>


))


}



</div>





</div>


</main>


)


}