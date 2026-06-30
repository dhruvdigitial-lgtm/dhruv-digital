import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Mail
} from "lucide-react";




export default function Footer(){



return(


<footer className="bg-black border-t border-gray-800 text-white">





<div className="max-w-7xl mx-auto px-5 py-12">





<div className="grid md:grid-cols-4 gap-10">







<div>



<h2 className="text-2xl font-bold text-cyan-400">

Dhruv Digital & Stationary

</h2>





<p className="text-gray-400 mt-4 text-sm leading-6">


Your one stop solution for Printing,
Resume, Government Services, Digital Support
and Custom Designs.


</p>







<a


href="https://wa.me/919485665412"


target="_blank"


rel="noopener noreferrer"


className="inline-flex items-center gap-2 mt-5 bg-green-600 px-5 py-3 rounded-xl hover:bg-green-500 transition"


>



<MessageCircle size={18}/>


WhatsApp


</a>






</div>









<div>


<h3 className="text-lg font-bold text-cyan-400">

Quick Links

</h3>






<div className="space-y-3 mt-4 text-gray-400">





<Link

href="/"

className="block hover:text-cyan-400"

>

Home

</Link>






<Link

href="/services"

className="block hover:text-cyan-400"

>

All Services

</Link>






<Link

href="/templates"

className="block hover:text-cyan-400"

>

Templates

</Link>






<a

href="/#contact"

className="block hover:text-cyan-400"

>

Contact

</a>





</div>





</div>









<div>


<h3 className="text-lg font-bold text-cyan-400">

Popular Services

</h3>






<ul className="mt-4 space-y-3 text-gray-400">


<li>🖨️ Printing</li>

<li>📄 Resume Services</li>

<li>🏛️ Government Services</li>

<li>📚 Binding</li>

<li>🎨 Design Templates</li>


</ul>






</div>









<div>



<h3 className="text-lg font-bold text-cyan-400">

Contact

</h3>








<div className="mt-4 space-y-4 text-gray-400">





<div className="flex gap-3 items-center">


<Phone size={18}/>


<span>

9485665412

</span>


</div>







<div className="flex gap-3 items-center">


<Mail size={18}/>


<span>

Email Support

</span>


</div>







<p>

⏰ Mon - Sun Available

</p>





</div>







</div>







</div>









<div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">


© {new Date().getFullYear()} Dhruv Digital & Stationary. All Rights Reserved.


</div>







</div>





</footer>



)



}