"use client";

import Link from "next/link";


const businessServices = [

  "💳 Visiting Card Design",

  "🏢 Business Logo Design",

  "📢 Banner Design",

  "🖼️ Poster Design",

  "📱 Social Media Post Design",

  "🛍️ Advertisement Design",

  "📄 Letterhead Design",

  "📋 Menu Card Design",

  "🎨 Custom Business Designs"

];





export default function BusinessPage(){


return(


<main className="min-h-screen bg-black text-white py-24">



<div className="max-w-6xl mx-auto px-5">





<Link

href="/"

className="inline-block border border-cyan-500 px-5 py-2 rounded-xl"

>

← Back Home

</Link>







<h1 className="text-5xl font-bold text-center text-cyan-400 mt-10">

Business Design Services

</h1>







<p className="text-gray-400 text-center mt-4">

Professional Branding and Business Design Solutions by DDS

</p>









<div className="grid md:grid-cols-3 gap-6 mt-12">





{

businessServices.map((service)=>(



<div


key={service}


className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition"


>



<h2 className="text-xl font-bold text-cyan-400">

{service}

</h2>






<p className="text-gray-400 text-sm mt-3">

Creative business solutions available at DDS

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