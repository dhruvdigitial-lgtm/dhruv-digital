"use client";

import Link from "next/link";


const templates = [

  {
    title:"📄 Resume Templates",
    desc:"Professional and modern resume designs",
    link:"/templates/resume"
  },


  {
    title:"🏆 Certificate Templates",
    desc:"School, course and custom certificate designs",
    link:"/templates/certificate"
  },


  {
    title:"📚 Assignment Templates",
    desc:"Assignment front pages and project designs",
    link:"/templates/assignment"
  },


  {
    title:"💼 Business Templates",
    desc:"Business cards, posters and branding designs",
    link:"/templates/business"
  },


  {
    title:"📑 Front Page Templates",
    desc:"Project and document front page designs",
    link:"/templates/front-page"
  },


  {
    title:"💌 Invitation Templates",
    desc:"Custom invitation card designs",
    link:"/templates/invitation"
  }


];







export default function TemplatesPage(){


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

Design Templates

</h1>







<p className="text-gray-400 text-center mt-4">

Choose your required design category from DDS templates

</p>









<div className="grid md:grid-cols-3 gap-6 mt-12">





{

templates.map((item)=>(



<Link

href={item.link}

key={item.title}

className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition"


>



<h2 className="text-xl font-bold text-cyan-400">

{item.title}

</h2>






<p className="text-gray-400 mt-3 text-sm">

{item.desc}

</p>





<p className="mt-5 text-green-400 font-semibold">

View Templates →

</p>





</Link>



))


}





</div>






</div>


</main>


)


}