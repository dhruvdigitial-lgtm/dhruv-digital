"use client";

import { useState } from "react";
import { Upload } from "lucide-react";


export default function Resume(){


const [oldResume,setOldResume] = useState("no");


const [education,setEducation]=useState({

ten:false,

twelve:false,

higher:false

});


const [course,setCourse]=useState(false);



const [name,setName]=useState("");

const [father,setFather]=useState("");

const [mobile,setMobile]=useState("");

const [email,setEmail]=useState("");

const [address,setAddress]=useState("");

const [gender,setGender]=useState("");

const [marital,setMarital]=useState("");

const [experience,setExperience]=useState("Fresher");

const [experienceDetails,setExperienceDetails]=useState("");

const [resumeType,setResumeType]=useState("Normal Resume");





const handleSubmit=async(e:React.FormEvent)=>{


e.preventDefault();



const data={


type:"Resume",


name:name,


mobile:mobile,


message:

`

Father Name:
${father}


Email:
${email}


Address:
${address}


Gender:
${gender}


Marital Status:
${marital}



Experience:
${experience}


Experience Details:
${experienceDetails}



Resume Type:
${resumeType}


`


};





const res=await fetch("/api/submit",{


method:"POST",


headers:{


"Content-Type":"application/json"


},


body:JSON.stringify(data)


});





const result=await res.json();



if(result.success){


alert("Resume Request Submitted Successfully");


}


else{


alert("Something went wrong");


}



};







return(


<section

id="resume"

className="py-20 bg-black text-white scroll-mt-24"


>


<div className="max-w-5xl mx-auto px-5">



<h2 className="text-4xl text-cyan-400 font-bold text-center">

Resume Service

</h2>



<p className="text-gray-400 text-center mt-3">

Create professional resumes with complete details

</p>






<form


onSubmit={handleSubmit}


className="mt-10 grid gap-5 bg-white/5 border border-cyan-500/20 p-8 rounded-2xl"


>




<h3 className="text-xl text-cyan-400 font-bold">

Personal Details

</h3>




<input

value={name}

onChange={(e)=>setName(e.target.value)}

className="p-3 bg-black border rounded"

placeholder="Full Name"

/>





<input

value={father}

onChange={(e)=>setFather(e.target.value)}

className="p-3 bg-black border rounded"

placeholder="Father's Name"

/>





<input

value={mobile}

onChange={(e)=>setMobile(e.target.value)}

className="p-3 bg-black border rounded"

placeholder="Mobile Number"

/>





<input

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="p-3 bg-black border rounded"

placeholder="Email"

/>





<input

value={address}

onChange={(e)=>setAddress(e.target.value)}

className="p-3 bg-black border rounded"

placeholder="Address"

/>






<select

value={gender}

onChange={(e)=>setGender(e.target.value)}

className="p-3 bg-black border rounded"

>


<option>Select Gender</option>

<option>Male</option>

<option>Female</option>

<option>Other</option>


</select>







<select

value={marital}

onChange={(e)=>setMarital(e.target.value)}

className="p-3 bg-black border rounded"

>


<option>Marital Status</option>

<option>Single</option>

<option>Married</option>

<option>Divorced</option>


</select>







<h3 className="text-xl text-cyan-400 font-bold mt-5">

Education Details

</h3>





<label>

<input

type="checkbox"

onChange={(e)=>setEducation({

...education,

ten:e.target.checked

})}


/>

Class 10

</label>





{

education.ten &&

<div className="grid gap-3">


<input className="p-3 bg-black border rounded" placeholder="10th Board"/>

<input className="p-3 bg-black border rounded" placeholder="10th Percentage"/>

<input className="p-3 bg-black border rounded" placeholder="10th Year"/>


</div>

}







<label>

<input

type="checkbox"

onChange={(e)=>setEducation({

...education,

twelve:e.target.checked

})}


/>

Class 12

</label>





{

education.twelve &&

<div className="grid gap-3">


<input className="p-3 bg-black border rounded" placeholder="12th Board"/>

<input className="p-3 bg-black border rounded" placeholder="12th Percentage"/>

<input className="p-3 bg-black border rounded" placeholder="12th Year"/>


</div>


}







<label>

<input

type="checkbox"

onChange={(e)=>setEducation({

...education,

higher:e.target.checked

})}


/>

Graduation / Other Qualification

</label>





{

education.higher &&

<div className="grid gap-3">


<input className="p-3 bg-black border rounded" placeholder="Degree / Course"/>

<input className="p-3 bg-black border rounded" placeholder="University"/>

<input className="p-3 bg-black border rounded" placeholder="Percentage"/>

<input className="p-3 bg-black border rounded" placeholder="Completion Year"/>


</div>


}








<h3 className="text-xl text-cyan-400 font-bold mt-5">

Additional Course

</h3>




<label>

<input

type="checkbox"

checked={course}

onChange={(e)=>setCourse(e.target.checked)}

/>

Computer Course / Certification

</label>





{

course &&

<div className="grid gap-3">


<input className="p-3 bg-black border rounded" placeholder="Course Name"/>

<input className="p-3 bg-black border rounded" placeholder="Institute Name"/>

<input className="p-3 bg-black border rounded" placeholder="Duration"/>


</div>

}








<h3 className="text-xl text-cyan-400 font-bold mt-5">

Experience

</h3>



<select

value={experience}

onChange={(e)=>setExperience(e.target.value)}

className="p-3 bg-black border rounded"

>


<option>Fresher</option>

<option>Experienced</option>


</select>





<textarea

value={experienceDetails}

onChange={(e)=>setExperienceDetails(e.target.value)}

className="p-3 bg-black border rounded"

placeholder="Experience Details"

/>








<h3 className="text-xl text-cyan-400 font-bold mt-5">

Resume Type

</h3>



<select

value={resumeType}

onChange={(e)=>setResumeType(e.target.value)}

className="p-3 bg-black border rounded"

>


<option>Normal Resume</option>

<option>Professional Resume</option>

<option>Special Design Resume</option>

<option>Job Specific Resume</option>


</select>







<h3 className="text-xl text-cyan-400 font-bold mt-5">

Old Resume

</h3>




<select

onChange={(e)=>setOldResume(e.target.value)}

className="p-3 bg-black border rounded"

>


<option value="no">

No, Create New Resume

</option>


<option value="yes">

Yes, I have old resume

</option>


</select>







{

oldResume==="yes" &&


<label className="border border-dashed p-4 flex gap-3">


<Upload/> Upload Old Resume


<input type="file" hidden/>


</label>


}







<button

type="submit"

className="bg-cyan-500 text-black font-bold py-3 rounded-xl mt-5"

>


Submit Resume Request


</button>





</form>


</div>


</section>


)

}