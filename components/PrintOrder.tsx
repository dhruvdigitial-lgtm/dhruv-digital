"use client";

import { useState } from "react";
import { Upload, Send } from "lucide-react";


export default function PrintOrder(){


const [file,setFile] = useState<File | null>(null);

const [name,setName] = useState("");

const [mobile,setMobile] = useState("");

const [service,setService] = useState("");

const [message,setMessage] = useState("");

const [loading,setLoading] = useState(false);






const handleSubmit = async (e:React.FormEvent)=>{


e.preventDefault();


try{


setLoading(true);



const formData = new FormData();



formData.append(
"type",
"Print Order"
);



formData.append(
"name",
name
);



formData.append(
"mobile",
mobile
);



formData.append(

"message",

`
Service:
${service}

Message:
${message}

`

);





if(file){

formData.append(

"file",

file

);

}







const res = await fetch("/api/submit",{

method:"POST",

body:formData

});





const result = await res.json();





if(result.success){


alert("Print Order Submitted Successfully");



setName("");

setMobile("");

setService("");

setMessage("");

setFile(null);



}

else{


alert(
result.message || "Something went wrong"
);


}




}

catch(error){


console.log(error);


alert("Server error. Please try again");


}


finally{


setLoading(false);


}



};









return(


<div className="py-20 bg-black text-white">


<div className="max-w-5xl mx-auto px-5">



<div className="text-center mb-12">


<h2 className="text-4xl font-bold text-cyan-400">

Print Order

</h2>



<p className="text-gray-400 mt-3">

Upload your documents and place your printing order easily

</p>


</div>








<form

onSubmit={handleSubmit}

className="grid gap-6 bg-white/5 border border-cyan-500/20 p-8 rounded-2xl"

>




<input

type="text"

placeholder="Your Name"

value={name}

onChange={(e)=>setName(e.target.value)}

className="p-4 rounded-xl bg-black border border-gray-700"

required

/>





<input

type="tel"

placeholder="Mobile Number"

value={mobile}

onChange={(e)=>setMobile(e.target.value)}

className="p-4 rounded-xl bg-black border border-gray-700"

required

/>







<select

value={service}

onChange={(e)=>setService(e.target.value)}

className="p-4 rounded-xl bg-black border border-gray-700"

required

>



<option value="">

Select Service

</option>


<option>

Color Print

</option>


<option>

Black & White Print

</option>


<option>

Lamination

</option>


<option>

Scan

</option>


<option>

Resume Print

</option>


</select>








<label

className="flex items-center gap-3 p-4 rounded-xl border border-dashed border-cyan-500/40 cursor-pointer"

>



<Upload size={22}/>




{

file

?

file.name

:

"Upload Document"

}




<input

type="file"

className="hidden"


onChange={(e)=>{


if(e.target.files){

setFile(e.target.files[0]);

}


}}


/>


</label>








<textarea

placeholder="Message / Special Instruction"

rows={5}

value={message}

onChange={(e)=>setMessage(e.target.value)}

className="p-4 rounded-xl bg-black border border-gray-700"

/>









<button

type="submit"

disabled={loading}

className="flex items-center justify-center gap-2 bg-cyan-500 text-black font-bold py-4 rounded-xl disabled:opacity-50"

>



<Send size={20}/>


{

loading

?

"Submitting..."

:

"Submit Order"

}


</button>





</form>





</div>


</div>



)


}