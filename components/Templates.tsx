"use client";

import Link from "next/link";


const categories=[

{
name:"Resume",
link:"/templates/resume"
},

{
name:"Certificate",
link:"/templates/certificate"
},

{
name:"Assignment",
link:"/templates/assignment"
},

{
name:"Front Page",
link:"/templates/front-page"
},

{
name:"Business",
link:"/templates/business"
},

{
name:"Invitation",
link:"/templates/invitation"
}


];



export default function Templates(){


return(


<section

id="templates"

className="py-20 bg-black text-white"

>


<div className="max-w-6xl mx-auto px-5">



<h2 className="text-4xl text-cyan-400 font-bold text-center">

Design Templates

</h2>



<p className="text-gray-400 text-center mt-3">

Choose category and explore designs

</p>







<div className="grid md:grid-cols-3 gap-6 mt-10">



{

categories.map((item)=>(


<Link

href={item.link}

key={item.name}

className="bg-gray-900 border border-cyan-500/20 rounded-2xl p-8 hover:scale-105 transition"

>


<h3 className="text-xl text-cyan-400 font-bold">

{item.name}

</h3>



<p className="text-gray-400 mt-3">

View Templates →

</p>



</Link>



))


}



</div>



</div>


</section>


)


}