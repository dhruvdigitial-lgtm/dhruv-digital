"use client";

export default function Hero() {


const scrollTo=(id:string)=>{


document

.getElementById(id)

?.scrollIntoView({

behavior:"smooth"

});


};






return (


<section

id="home"

className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white"

>


<div className="text-center px-4 py-20">






<span className="inline-block rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-400">


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


className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-600 hover:scale-105"


>


🖨️ Print Order


</button>









<button


onClick={()=>scrollTo("resume")}


className="rounded-xl border border-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-500 hover:scale-105"


>


📄 Resume Service


</button>









<button


onClick={()=>scrollTo("templates")}


className="rounded-xl border border-purple-500 px-8 py-4 font-semibold transition hover:bg-purple-500 hover:scale-105"


>


🎨 Design Templates


</button>









<a


href="/services"


className="rounded-xl border border-yellow-500 px-8 py-4 font-semibold transition hover:bg-yellow-500 hover:scale-105"


>


🔍 All Services


</a>









<a


href="https://wa.me/919485665412"


target="_blank"


rel="noopener noreferrer"


className="rounded-xl bg-green-600 px-8 py-4 font-semibold transition hover:bg-green-700 hover:scale-105"


>


💬 WhatsApp


</a>







</div>









<div className="mt-14 mx-auto max-w-5xl rounded-2xl border border-gray-800 bg-gray-900/70 p-8 shadow-xl">








<h2 className="text-2xl font-bold text-cyan-400">


⭐⭐⭐⭐⭐ Trusted Digital Service Center


</h2>










<p className="mt-3 text-gray-400">


Fast, Secure & Affordable Services for Students,
Businesses and Everyone.


</p>










<div className="mt-8 grid grid-cols-1 gap-4 text-left md:grid-cols-3">








<div className="rounded-xl bg-gray-800 p-4">

🖨️ Printing & Photocopy

</div>









<div className="rounded-xl bg-gray-800 p-4">

📄 Resume & Document Designing

</div>









<div className="rounded-xl bg-gray-800 p-4">

🏛️ Government Services

</div>









<div className="rounded-xl bg-gray-800 p-4">

📚 Spiral Binding & Stationery

</div>









<div className="rounded-xl bg-gray-800 p-4">

🎓 Assignment & Certificate Design

</div>









<div className="rounded-xl bg-gray-800 p-4">

🎨 Custom Templates & Designs

</div>








</div>








</div>








</div>


</section>


);


}