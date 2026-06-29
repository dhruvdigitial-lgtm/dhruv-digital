import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import PrintOrder from "../components/PrintOrder";
import Resume from "../components/Resume";
import Government from "../components/Government";



export default function Home(){


return(


<main

className="min-h-screen bg-black text-white overflow-x-hidden"



>



<Navbar />





<section

id="home"

className="scroll-mt-24"

>


<Reveal>

<Hero />

</Reveal>


</section>






<section

id="about"

className="scroll-mt-24"

>


<Reveal>

<About />

</Reveal>


</section>






<section

id="services"

className="scroll-mt-24"

>


<Reveal>

<Services />

</Reveal>


</section>







<section

id="why"

className="scroll-mt-24"

>


<Reveal>

<WhyChooseUs />

</Reveal>


</section>








<section

id="reviews"

className="scroll-mt-24"

>


<Reveal>

<Reviews />

</Reveal>


</section>







{/* GOVERNMENT SERVICES */}

<section

id="government"

className="scroll-mt-24"

>


<Reveal>

<Government />

</Reveal>


</section>








{/* RESUME */}

<section

id="resume"

className="scroll-mt-24"

>


<Reveal>

<Resume />

</Reveal>


</section>








{/* PRINT ORDER */}

<section

id="print-order"

className="scroll-mt-24"

>


<PrintOrder />


</section>







<section

id="contact"

className="scroll-mt-24"

>


<Reveal>

<Contact />

</Reveal>


</section>







<Footer />



</main>


)

}