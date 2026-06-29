import { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {


return [


{
url:"https://dhruvdigital.vercel.app",
lastModified:new Date(),
},



{
url:"https://dhruvdigital.vercel.app/services",
lastModified:new Date(),
},



{
url:"https://dhruvdigital.vercel.app/templates/resume",
lastModified:new Date(),
},



{
url:"https://dhruvdigital.vercel.app/templates/certificate",
lastModified:new Date(),
},



{
url:"https://dhruvdigital.vercel.app/templates/assignment",
lastModified:new Date(),
},



{
url:"https://dhruvdigital.vercel.app/templates/front-page",
lastModified:new Date(),
},



];


}