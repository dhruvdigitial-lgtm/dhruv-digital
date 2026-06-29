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



if(!mobile.trim()){

alert("Please enter mobile number");

return;

}



if(mobile.length !== 10){

alert("Please enter valid 10 digit mobile number");

return;

}



if(oldResume==="yes" && !oldFile){

alert("Please upload your old resume");

return;

}






const formData = new FormData();





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





Education Details:





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

Course Name: ${courseData.name}

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


${oldResume==="yes" ? "Uploaded" : "Create New"}



`

);







if(oldFile){


formData.append("file",oldFile);


}







const res = await fetch("/api/resume",{


method:"POST",


body:formData


});






const result = await res.json();





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

type="tel"

value={mobile}

maxLength={10}

onChange={(e)=>{

const value=e.target.value.replace(/\D/g,"");

setMobile(value);

}}

className="p-3 bg-black border rounded"

placeholder="Mobile Number (10 digits)"

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

</select>
<h3 className="text-xl text-cyan-400 font-bold mt-5">

Education Details

</h3>



<label>

<input

type="checkbox"

onChange={(e)=>setEducation({...education,ten:e.target.checked})}

/>

Class 10

</label>



{

education.ten &&


<div className="grid gap-3">


<input

placeholder="10th Board"

className="p-3 bg-black border rounded"

onChange={(e)=>setTen({...ten,board:e.target.value})}

/>



<input

placeholder="10th Percentage"

className="p-3 bg-black border rounded"

onChange={(e)=>setTen({...ten,percentage:e.target.value})}

/>



<input

placeholder="10th Completion Year"

className="p-3 bg-black border rounded"

onChange={(e)=>setTen({...ten,year:e.target.value})}

/>


</div>


}







<label>


<input

type="checkbox"

onChange={(e)=>setEducation({...education,twelve:e.target.checked})}

/>


Class 12


</label>






{

education.twelve &&


<div className="grid gap-3">


<input

placeholder="12th Board"

className="p-3 bg-black border rounded"

onChange={(e)=>setTwelve({...twelve,board:e.target.value})}

/>



<input

placeholder="12th Percentage"

className="p-3 bg-black border rounded"

onChange={(e)=>setTwelve({...twelve,percentage:e.target.value})}

/>



<input

placeholder="12th Completion Year"

className="p-3 bg-black border rounded"

onChange={(e)=>setTwelve({...twelve,year:e.target.value})}

/>



</div>


}







<label>


<input

type="checkbox"

onChange={(e)=>setEducation({...education,higher:e.target.checked})}

/>


Graduation / Other Qualification


</label>






{

education.higher &&


<div className="grid gap-3">


<input

placeholder="Degree / Course"

className="p-3 bg-black border rounded"

onChange={(e)=>setHigher({...higher,degree:e.target.value})}

/>



<input

placeholder="University"

className="p-3 bg-black border rounded"

onChange={(e)=>setHigher({...higher,university:e.target.value})}

/>



<input

placeholder="Percentage"

className="p-3 bg-black border rounded"

onChange={(e)=>setHigher({...higher,percentage:e.target.value})}

/>



<input

placeholder="Completion Year"

className="p-3 bg-black border rounded"

onChange={(e)=>setHigher({...higher,year:e.target.value})}

/>



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


<input

placeholder="Course Name"

className="p-3 bg-black border rounded"

onChange={(e)=>setCourseData({...courseData,name:e.target.value})}

/>



<input

placeholder="Institute Name"

className="p-3 bg-black border rounded"

onChange={(e)=>setCourseData({...courseData,institute:e.target.value})}

/>



<input

placeholder="Duration"

className="p-3 bg-black border rounded"

onChange={(e)=>setCourseData({...courseData,duration:e.target.value})}

/>



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


<label className="border border-dashed p-4 flex flex-col gap-3 cursor-pointer rounded-lg">


<div className="flex gap-3 items-center">


<Upload/>


<span>


{oldFile ? oldFile.name : "Upload Old Resume"}


</span>


</div>





<input


type="file"


accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"


className="block"


onChange={(e)=>setOldFile(e.target.files?.[0] || null)}


/>



</label>


}







<p className="text-gray-400 text-sm">


* Name and Mobile Number are required


</p>







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