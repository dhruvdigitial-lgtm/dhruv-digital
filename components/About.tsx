"use client";

export default function About() {


const scrollToContact = ()=>{


document

.getElementById("contact")

?.scrollIntoView({

behavior:"smooth"

});


};




return(


<section

id="about"

className="bg-black text-white py-24 px-6"

>


<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">





<div>


<p className="text-cyan-400 font-semibold uppercase tracking-widest">

About DDS

</p>






<h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">


Your Trusted


<span className="text-cyan-400">

 Digital Service Partner

</span>


</h2>








<p className="text-gray-400 mt-6 leading-8">


Dhruv Digital & Stationary (DDS) is a complete digital service center
providing printing, resume designing, government service assistance,
online form filling, stationery and custom design solutions.


</p>







<p className="text-gray-400 mt-4 leading-8">


Our aim is to provide fast, affordable and reliable services with
better customer support and quality work at one place.


</p>








<button


onClick={scrollToContact}


className="mt-8 bg-cyan-400 text-black font-bold px-8 py-3 rounded-full hover:bg-cyan-300 transition"


>


Contact Us


</button>





</div>









<div className="grid grid-cols-2 gap-5">







<div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-cyan-400 transition">


<h3 className="text-4xl font-bold text-cyan-400">

1000+

</h3>


<p className="text-gray-400 mt-2">

Happy Customers

</p>


</div>









<div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-cyan-400 transition">


<h3 className="text-4xl font-bold text-cyan-400">

50+

</h3>


<p className="text-gray-400 mt-2">

Digital Services

</p>


</div>









<div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-cyan-400 transition">


<h3 className="text-4xl font-bold text-cyan-400">

10+

</h3>


<p className="text-gray-400 mt-2">

Service Categories

</p>


</div>









<div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-cyan-400 transition">


<h3 className="text-4xl font-bold text-cyan-400">

24/7

</h3>


<p className="text-gray-400 mt-2">

Customer Support

</p>


</div>









</div>







</div>


</section>


);


}