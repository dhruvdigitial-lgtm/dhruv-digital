"use client";

import { useState } from "react";


const services = [

{
id:"printing",
name:"🖨️ Print Services"
},

{
id:"resume",
name:"📄 Resume Services"
},

{
id:"government",
name:"🏛️ Government Services"
},

{
id:"forms",
name:"💻 Online Form Filling"
},

{
id:"photo",
name:"📷 Photo & Lamination"
},

{
id:"binding",
name:"📚 Spiral Binding"
},

{
id:"stationery",
name:"✏️ Stationery Items"
},

{
id:"design",
name:"🎨 Design Templates"
},

{
id:"certificate",
name:"🏆 Certificate Design"
},

{
id:"business",
name:"💼 Business Designs"
}


];





export default function AllServices(){


const [search,setSearch]=useState("");



const filtered=services.filter((service)=>

service.name
.toLowerCase()
.includes(search.toLowerCase())

);




const goToService=(id:string)=>{


const element = document.getElementById(id);


if(element){

element.scrollIntoView({

behavior:"smooth",

block:"center"

});

}


};




return(


<section

id="all-services"

className="py-20 bg-black text-white"

>



<div className="max-w-6xl mx-auto px-5">



<h2 className="text-4xl text-cyan-400 font-bold text-center">

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

key={service.id}

onClick={()=>goToService(service.id)}

className="cursor-pointer bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-cyan-400 transition"

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