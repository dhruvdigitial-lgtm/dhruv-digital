import type { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {


const baseUrl = "https://dhruvdigital.vercel.app";



const pages = [


"/",


"/services",


"/government",


"/resume",


"/contact",



// Service Pages

"/services/printing",

"/services/forms",

"/services/photo",

"/services/binding",

"/services/stationery",

"/services/design",

"/services/certificate",

"/services/business",



// Templates

"/templates",

"/templates/resume",

"/templates/certificate",

"/templates/assignment",

"/templates/business",

"/templates/front-page",

"/templates/invitation"



];





return pages.map((page)=>(


{

url:`${baseUrl}${page}`,

lastModified:new Date(),

}



));


}