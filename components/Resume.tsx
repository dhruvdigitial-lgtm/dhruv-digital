"use client";

import { useState } from "react";
import { Upload } from "lucide-react";


export default function Resume(){


const [oldResume,setOldResume]=useState("no");


const [education,setEducation]=useState({

ten:false,
twelve:false,
higher:false

});


const [course,setCourse]=useState(false);


const [loading,setLoading]=useState(false);



const [name,setName]=useState("");
const [father,setFather]=useState("");
const [mobile,setMobile]=useState("");
const [email,setEmail]=useState("");
const [address,setAddress]=useState("");
const [gender,setGender]=useState("");
const [marital,setMarital]=useState("");



const [ten,setTen]=useState({

board:"",
percentage:"",
year:""

});


const [twelve,setTwelve]=useState({

board:"",
percentage:"",
year:""

});


const [higher,setHigher]=useState({

degree:"",
university:"",
percentage:"",
year:""

});



const [courseData,setCourseData]=useState({

name:"",
institute:"",
duration:""

});



const [experience,setExperience]=useState("Fresher");


const [experienceDetails,setExperienceDetails]=useState("");


const [resumeType,setResumeType]=useState("Normal Resume");


const [oldFile,setOldFile]=useState<File | null>(null);







const handleSubmit=async(e:React.FormEvent)=>{


e.preventDefault();



if(!name.trim()){

alert("Please enter your name");

return;

}



if(!mobile.trim() || mobile.length!==10){

alert("Please enter valid 10 digit mobile number");

return;

}




if(oldResume==="yes" && !oldFile){

alert("Please upload your old resume");

return;

}





try{


setLoading(true);





const formData=new FormData();



formData.append("type","Resume");


formData.append("name",name);


formData.append("mobile",mobile);






formData.append(

"message",

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



10th:

${education.ten ?

`
Board: ${ten.board}
Percentage: ${ten.percentage}
Year: ${ten.year}

`

:

"Not Added"

}



12th:

${education.twelve ?

`
Board: ${twelve.board}
Percentage: ${twelve.percentage}
Year: ${twelve.year}

`

:

"Not Added"

}



Graduation:

${education.higher ?

`
Degree: ${higher.degree}
University: ${higher.university}
Percentage: ${higher.percentage}
Year: ${higher.year}

`

:

"Not Added"

}



Course:

${course ?

`
Name: ${courseData.name}
Institute: ${courseData.institute}
Duration: ${courseData.duration}

`

:

"Not Added"

}




Experience:

${experience}



Experience Details:

${experienceDetails}



Resume Type:

${resumeType}



Old Resume:

${oldResume==="yes" ? "Uploaded":"Create New"}

`

);







if(oldFile){

formData.append("file",oldFile);

}







const res=await fetch("/api/resume",{

method:"POST",

body:formData

});






const result=await res.json();






if(result.success){


alert("Resume Request Submitted Successfully");



setName("");
setFather("");
setMobile("");
setEmail("");
setAddress("");
setGender("");
setMarital("");

setOldResume("no");

setOldFile(null);

setExperience("Fresher");

setExperienceDetails("");

setResumeType("Normal Resume");


}


else{


alert(result.message || "Something went wrong");


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





<input

value={name}

onChange={(e)=>setName(e.target.value)}

className="p-3 bg-black border rounded"

placeholder="Full Name"

required

/>





<input

value={father}

onChange={(e)=>setFather(e.target.value)}

className="p-3 bg-black border rounded"

placeholder="Father's Name"

/>






<input

type="tel"

value={mobile}

maxLength={10}

onChange={(e)=>setMobile(e.target.value.replace(/\D/g,""))}

className="p-3 bg-black border rounded"

placeholder="Mobile Number"

/>





<input

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="p-3 bg-black border rounded"

placeholder="Email"

/>






<textarea

value={address}

onChange={(e)=>setAddress(e.target.value)}

className="p-3 bg-black border rounded"

placeholder="Address"

/>






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






<select

value={oldResume}

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

<label className="border border-dashed p-4 rounded cursor-pointer flex gap-3 items-center">


<Upload/>


<span>

{oldFile ? oldFile.name : "Upload Old Resume"}

</span>


<input

type="file"

className="hidden"

onChange={(e)=>setOldFile(e.target.files?.[0] || null)}

accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"

/>


</label>

}








<button

type="submit"

disabled={loading}

className="bg-cyan-500 text-black font-bold py-3 rounded-xl disabled:opacity-50"

>


{

loading

?

"Submitting..."

:

"Submit Resume Request"

}



</button>






</form>


</div>


</section>


)


}