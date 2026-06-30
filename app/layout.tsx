import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({

variable:"--font-geist-sans",

subsets:["latin"],

});



const geistMono = Geist_Mono({

variable:"--font-geist-mono",

subsets:["latin"],

});








export const metadata: Metadata = {


metadataBase: new URL(
"https://dhruvdigital.vercel.app"
),




title:
"Dhruv Digital & Stationary | Printing & Digital Services",






description:

"Dhruv Digital & Stationary provides printing, resume designing, government online services, form filling, stationery, binding and custom design solutions.",






keywords:[


"Dhruv Digital & Stationary",

"Printing Services",

"Resume Designing",

"Online Form Filling",

"Government Services",

"PAN Card",

"Voter ID",

"Spiral Binding",

"Certificate Design",

"Stationery"

],







verification:{


google:
"jHMGD-I2L972WB0IkzamJ8_DsBxfnd-9jBoZLrXg9hU"


},







openGraph:{


title:

"Dhruv Digital & Stationary",



description:

"One Stop Solution for Printing, Resume, Government Services & Digital Solutions.",



url:"https://dhruvdigital.vercel.app",



siteName:"Dhruv Digital & Stationary",



images:[

{

url:"/logo.png",

width:512,

height:512,

alt:"Dhruv Digital & Stationary"

}

],



type:"website"



},







icons:{


icon:"/logo.png"


}





};









export const viewport: Viewport = {


themeColor:"#06b6d4"


};









export default function RootLayout({


children,


}:Readonly<{

children:React.ReactNode;

}>) {



return(



<html


lang="en"


data-scroll-behavior="smooth"


className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}


>



<body className="min-h-full flex flex-col">



{children}



</body>



</html>



);



}