"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";


export default function Contact(){



const [form,setForm]=useState({

name:"",
email:"",
message:""

});







const handleChange=(

e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};








const handleSubmit=(e:React.FormEvent)=>{


e.preventDefault();



if(!form.name || !form.message){

alert("Please fill name and message");

return;

}





const text = `

Name: ${form.name}


Email: ${form.email}


Message:

${form.message}

`;





window.open(

`https://wa.me/919485665412?text=${encodeURIComponent(text)}`,

"_blank"

);






setForm({

name:"",

email:"",

message:""

});


};









return(



<section

id="contact"

className="py-24 bg-gray-950 text-white"

>



<div className="max-w-6xl mx-auto px-5">






<h2 className="text-4xl md:text-5xl font-bold text-center text-cyan-400">

Contact Us

</h2>






<p className="text-center text-gray-400 mt-4">

Get in touch with Dhruv Digital & Stationary

</p>









<div className="grid md:grid-cols-2 gap-8 mt-12">







<div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">






<h3 className="text-2xl font-bold text-cyan-400">

Visit Us

</h3>







<div className="space-y-5 mt-8">






<div className="flex gap-4 items-center">

<Phone className="text-cyan-400"/>

<p>

Call / WhatsApp: 9485665412

</p>

</div>








<div className="flex gap-4 items-center">

<Mail className="text-cyan-400"/>

<p>

Email Support Available

</p>

</div>








<div className="flex gap-4 items-center">

<Clock className="text-cyan-400"/>

<p>

Mon - Sun Available

</p>

</div>








<div className="flex gap-4 items-center">

<MapPin className="text-cyan-400"/>

<p>

Digital & Printing Services

</p>

</div>








<div className="flex gap-4 items-center">

<MessageCircle className="text-green-500"/>

<p>

Fast WhatsApp Response

</p>

</div>







</div>








<a

href="https://wa.me/919485665412"

target="_blank"

rel="noopener noreferrer"

className="inline-block mt-8 bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl font-bold transition"

>

Chat on WhatsApp

</a>







</div>









<form


onSubmit={handleSubmit}


className="bg-gray-900 p-8 rounded-2xl border border-gray-800 space-y-5"


>






<input


name="name"


value={form.name}


onChange={handleChange}


placeholder="Your Name"


className="w-full p-4 bg-black border border-gray-700 rounded-xl"


required


/>








<input


type="email"


name="email"


value={form.email}


onChange={handleChange}


placeholder="Email"


className="w-full p-4 bg-black border border-gray-700 rounded-xl"


/>








<textarea


name="message"


value={form.message}


onChange={handleChange}


placeholder="Your Message"


rows={5}


className="w-full p-4 bg-black border border-gray-700 rounded-xl"


required


/>










<button


type="submit"


className="w-full bg-cyan-500 text-black font-bold py-4 rounded-xl hover:bg-cyan-400 transition"


>


Send Enquiry


</button>









</form>









</div>







</div>



</section>



)


}