"use client";

import { useState } from "react";


export default function Government(){


const [open,setOpen]=useState<number | null>(null);



const services=[


{
title:"Aadhaar Services",
docs:"Aadhaar Card, Registered Mobile Number and required verification may be needed. Some Aadhaar services depend on government rules and availability."
},



{
title:"PAN Card Services",
docs:"Aadhaar Card, Mobile Number, Email ID, Passport Size Photo, Signature and Date of Birth proof may be required."
},



{
title:"Voter ID Card Services",
docs:"Aadhaar Card, Address Proof, Date of Birth proof, Passport Size Photo and Mobile Number may be required."
},



{
title:"Learning Licence (LL) Services",
docs:"Aadhaar Card, Address Proof, Date of Birth proof, Photo, Signature, Mobile Number and Medical Certificate (if required) may be needed."
},



{
title:"Driving Licence (DL) Services",
docs:"Aadhaar Card, Existing Licence details (if applicable), Address Proof, Photo, Signature, Medical Certificate (if required) and other licence related details may be needed."
},



{
title:"Birth Certificate Services",
docs:"Birth proof/Hospital record (if available), Parents Aadhaar Card, Address Proof, Birth details and supporting documents may be required."
},



{
title:"Income Certificate Services",
docs:"Aadhaar Card, Address Proof, Income related documents, Family details and other supporting documents may be required."
},



{
title:"Caste Certificate Services",
docs:"Aadhaar Card, Address Proof, Caste related documents/proof and other supporting documents may be required."
},



{
title:"Saral Portal Services",
docs:"Online application filling, government forms, certificate related assistance, status checking and document upload assistance."
},



{
title:"Other Online Government Services",
docs:"Various online government applications and form filling services are available according to service requirements."
}



];




return(


<section

id="government"

className="py-20 bg-gray-950 text-white scroll-mt-24"

>


<div className="max-w-5xl mx-auto px-5">



<h2 className="text-4xl text-cyan-400 font-bold text-center">

Government Services

</h2>




<p className="text-gray-400 text-center mt-3">

Haryana & Other States Online Form Filling and Government Service Assistance

</p>







<div className="mt-8 space-y-4">


{

services.map((service,index)=>(



<div

key={index}

className="bg-white/5 border border-cyan-500/20 rounded-2xl p-5"

>





<div

onClick={()=>setOpen(open===index ? null : index)}

className="flex justify-between cursor-pointer"

>


<h3 className="text-lg font-bold text-cyan-400">

✓ {service.title}

</h3>



<span>

{open===index ? "-" : "+"}

</span>



</div>








{

open===index &&


<p className="text-gray-300 mt-4 text-sm">

Required Documents:

<br/>

{service.docs}

</p>


}



</div>



))



}




</div>








<p className="text-gray-400 text-sm mt-8">


Note: Required documents may vary according to state, service type and government department rules. Some services may require OTP verification, original documents, personal verification or approval.


</p>





</div>


</section>


)


}