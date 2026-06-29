import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Order from "@/models/Order";

import nodemailer from "nodemailer";

import cloudinary from "@/lib/cloudinary";




export async function POST(req:Request){


try{


const formData = await req.formData();



const file = formData.get("file") as File;



const type = formData.get("type");

const name = formData.get("name");

const mobile = formData.get("mobile");

const message = formData.get("message");



let fileUrl="";





if(file){



const bytes = await file.arrayBuffer();


const buffer = Buffer.from(bytes);





const uploadResult = await new Promise((resolve,reject)=>{


cloudinary.uploader.upload_stream(

{


folder:"dds-resumes"

},


(error,result)=>{


if(error){

reject(error);

}

else{

resolve(result);

}


}


).end(buffer);



});




fileUrl = (uploadResult as any).secure_url;



}








await connectDB();





await Order.create({


type,

name,

mobile,

message,

fileUrl


});







console.log("RESUME SAVED");







const transporter = nodemailer.createTransport({


service:"gmail",


auth:{


user:process.env.EMAIL_USER,


pass:process.env.EMAIL_PASS


}


});







await transporter.sendMail({


from:process.env.EMAIL_USER,


to:process.env.EMAIL_USER,


subject:"New DDS Resume Request",



text:

`

New Resume Request Received


-----------------------------

Name:

${name}



Mobile:

${mobile}



Details:


${message}



Old Resume:

${fileUrl || "No File"}



Time:

${new Date().toLocaleString()}


-----------------------------

`

});






console.log("RESUME EMAIL SENT");






return NextResponse.json({

success:true

});





}



catch(error){


console.log("RESUME API ERROR:",error);



return NextResponse.json({

success:false

});



}



}