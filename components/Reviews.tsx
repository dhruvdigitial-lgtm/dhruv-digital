export default function Reviews() {


const reviews = [


{
name:"Amit",
text:"DDS ne printing aur digital services bahut fast provide ki. Service quality achhi hai.",
rating:"⭐⭐⭐⭐⭐"
},


{
name:"Rahul",
text:"Resume designing aur online services ka experience bahut smooth raha.",
rating:"⭐⭐⭐⭐⭐"
},


{
name:"Priya",
text:"Professional work, clean design aur quick response. Highly recommended.",
rating:"⭐⭐⭐⭐⭐"
}


];






return(


<section

id="reviews"

className="py-24 bg-black text-white"

>



<div className="max-w-6xl mx-auto px-6">





<h2 className="text-4xl md:text-5xl font-bold text-center text-cyan-400">

Customer Reviews

</h2>







<p className="text-center text-gray-400 mt-4">

What people say about Dhruv Digital & Stationary

</p>









<div className="grid md:grid-cols-3 gap-6 mt-12">





{


reviews.map((review,index)=>(



<div


key={index}


className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 transition"


>







<div className="text-yellow-400 text-lg">

{review.rating}

</div>








<p className="text-gray-300 mt-4 leading-7">


"{review.text}"


</p>








<h4 className="mt-5 text-cyan-400 font-bold">


- {review.name}


</h4>







</div>



))


}





</div>







</div>



</section>


);


}