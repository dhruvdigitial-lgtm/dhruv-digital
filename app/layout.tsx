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



title:
"Dhruv Digital & Stationary | Printing, Resume & Online Services",




description:
"Dhruv Digital & Stationary provides printing services, resume designing, government online services, spiral binding, stationery items, certificate design and digital solutions.",







keywords:[


"Dhruv Digital",


"Dhruv Digital and Stationary",


"Printing Services",


"Resume Design",


"Online Services",


"PAN Card Services",


"Voter ID Services",


"Spiral Binding",


"Stationery",


"Certificate Design"


],







verification: {


google:
"gNizGuw7mqRrrVnVC9M-08ERRpY1DuTaR5No4Fn5aQE",


},







openGraph:{



title:
"Dhruv Digital & Stationary",




description:
"One Stop Solution for Printing, Digital Services, Resume, Government Services & Custom Designs.",




type:"website",



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



}: Readonly<{

children: React.ReactNode;

}>) {



return (



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