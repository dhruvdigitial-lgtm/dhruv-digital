export default function Services() {


const services = [


{
title:"🖨️ Print Services",
desc:"Black & White Printing, Colour Printing, Document Printing and Custom Print Solutions."
},


{
title:"📄 Resume Services",
desc:"Professional Resume Designing with different formats and customization options."
},


{
title:"🏛️ Government Services",
desc:"PAN Card, Aadhaar Assistance, Voter ID, LL/DL and other online government services."
},


{
title:"💻 Online Form Filling",
desc:"Online applications, registrations and document upload assistance."
},


{
title:"📷 Photo & Lamination",
desc:"Passport Photo, Document Photo, Lamination and Colour Print services."
},


{
title:"📚 Spiral Binding",
desc:"Assignment, Project File, Notes and Document Spiral Binding services."
},


{
title:"✏️ Stationery Items",
desc:"Pens, Notebooks, Files, Registers, Covers and other daily stationery items."
},


{
title:"🎨 Design Templates",
desc:"Resume, Certificate, Assignment, Visiting Card, Poster and Custom Designs."
},


{
title:"🏆 Certificate Design",
desc:"Custom Certificate, Acknowledgement and Project Document Designing."
},


{
title:"💼 Business Designs",
desc:"Visiting Cards, Posters, Banners and Promotional Designs."
}


];






return (


<section

id="services"

className="bg-gray-950 py-20 px-6"

>


<div className="max-w-7xl mx-auto">



<h2 className="text-4xl font-bold text-center text-cyan-400">

Our Services

</h2>




<p className="text-center text-gray-400 mt-4">

Fast • Affordable • Reliable

</p>







<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">



{

services.map((service,index)=>(


<div


key={index}


className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"


>


<h3 className="text-lg font-semibold text-cyan-400">

{service.title}

</h3>



<p className="text-gray-400 text-sm mt-3">

{service.desc}

</p>



</div>


))


}



</div>



</div>


</section>


);


}