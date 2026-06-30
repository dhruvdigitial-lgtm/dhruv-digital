"use client";

import Link from "next/link";


export default function Hero(){



const scrollTo=(id:string)=>{


document

.getElementById(id)

?.scrollIntoView({

behavior:"smooth",

block:"start"

});


};






return(



<section

id="home"

className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white"

>



<div className="text-center px-5 py-24">







<span className="inline-block rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-semibold text-cyan-400">

Welcome to Dhruv Digital & Stationary

</span>








<h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">


Dhruv Digital


<br/>


<span className="text-cyan-400">

& Stationary

</span>


</h1>







<p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">


One Stop Solution for Printing, Resume, Government Services,
Custom Designs & Digital Assistance


</p>









<div className="mt-10 flex flex-wrap justify-center gap-4">






<button


onClick={()=>scrollTo("print-order")}


className="rounded-xl bg-cyan-500 text-black px-8 py-4 font-bold hover:scale-105 transition"

>


🖨️ Print Order


</button>









<button


onClick={()=>scrollTo("resume")}


className="rounded-xl border border-cyan-500 px-8 py-4 font-bold hover:bg-cyan-500 hover:text-black transition"


>


📄 Resume Service


</button>









<Link


href="/templates"


className="rounded-xl border border-purple-500 px-8 py-4 font-bold hover:bg-purple-500 transition"


>


🎨 Design Templates


</Link>









<Link


href="/services"


className="rounded-xl border border-yellow-500 px-8 py-4 font-bold hover:bg-yellow-500 hover:text-black transition"


>


🔍 All Services


</Link>









<a


href="https://wa.me/919485665412"


target="_blank"


rel="noopener noreferrer"


className="rounded-xl bg-green-600 px-8 py-4 font-bold hover:bg-green-700 transition"


>


💬 WhatsApp


</a>







</div>









<div className="mt-16 mx-auto max-w-5xl rounded-2xl border border-gray-800 bg-gray-900/70 p-8">






<h2 className="text-2xl font-bold text-cyan-400">


⭐⭐⭐⭐⭐ Trusted Digital Service Center


</h2>







<p className="mt-3 text-gray-400">


Fast, Secure & Affordable Services for Students,
Businesses and Everyone.


</p>







<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">





<div className="rounded-xl bg-gray-800 p-5 hover:border hover:border-cyan-400 transition">

🖨️ Printing & Photocopy

</div>





<div className="rounded-xl bg-gray-800 p-5 hover:border hover:border-cyan-400 transition">

📄 Resume & Document Designing

</div>





<div className="rounded-xl bg-gray-800 p-5 hover:border hover:border-cyan-400 transition">

🏛️ Government Services

</div>





<div className="rounded-xl bg-gray-800 p-5 hover:border hover:border-cyan-400 transition">

📚 Binding & Stationery

</div>





<div className="rounded-xl bg-gray-800 p-5 hover:border hover:border-cyan-400 transition">

🎓 Assignment & Certificate

</div>





<div className="rounded-xl bg-gray-800 p-5 hover:border hover:border-cyan-400 transition">

🎨 Custom Designs

</div>







</div>








</div>







</div>



</section>



)


}