"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


const services = [

  {
    target:"printing",
    name:"🖨️ Print Services",
    type:"page"
  },

  {
    target:"resume",
    name:"📄 Resume Services",
    type:"scroll"
  },

  {
    target:"government",
    name:"🏛️ Government Services",
    type:"scroll"
  },

  {
    target:"forms",
    name:"💻 Online Form Filling",
    type:"page"
  },

  {
    target:"photo",
    name:"📷 Photo & Lamination",
    type:"page"
  },

  {
    target:"binding",
    name:"📚 Spiral Binding",
    type:"page"
  },

  {
    target:"stationery",
    name:"✏️ Stationery Items",
    type:"page"
  },

  {
    target:"design",
    name:"🎨 Design Templates",
    type:"page"
  },

  {
    target:"certificate",
    name:"🏆 Certificate Design",
    type:"page"
  },

  {
    target:"business",
    name:"💼 Business Designs",
    type:"page"
  }

];





export default function AllServices(){


const [search,setSearch] = useState("");

const router = useRouter();





const filtered = services.filter((service)=>

service.name

.toLowerCase()

.includes(search.toLowerCase())

);






const goToService = (service:any)=>{



if(service.type==="scroll"){



const element = document.getElementById(service.target);



if(element){


element.scrollIntoView({

behavior:"smooth",

block:"start"

});


}


return;


}





if(service.target==="printing"){


router.push("/services/printing");


}



else if(service.target==="design"){


router.push("/templates/resume");


}



else{


router.push(`/services/${service.target}`);


}



};







return(


<section

id="all-services"

className="py-20 bg-black text-white"

>



<div className="max-w-6xl mx-auto px-5">





<h2 className="text-4xl md:text-5xl text-cyan-400 font-bold text-center">

All Services

</h2>






<p className="text-gray-400 text-center mt-3">

Search and explore all DDS services

</p>








<input


value={search}


onChange={(e)=>setSearch(e.target.value)}


placeholder="🔍 Search service..."


className="mt-8 w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"


/>








<div className="grid md:grid-cols-3 gap-5 mt-8">





{

filtered.map((service)=>(



<div


key={service.target}


onClick={()=>goToService(service)}



className="cursor-pointer bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-cyan-400 hover:-translate-y-1 transition"


>



<h3 className="text-cyan-400 font-bold">

{service.name}

</h3>




<p className="text-gray-400 text-sm mt-2">

Click to view details

</p>





</div>



))


}



</div>





</div>



</section>



)


}