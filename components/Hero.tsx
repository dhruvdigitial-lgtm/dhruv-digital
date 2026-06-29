"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white"
    >
      <div className="text-center px-4 py-20">

        <span className="inline-block rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-400">
          Welcome to Dhruv Digital
        </span>


        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">
          Dhruv Digital <br />
          <span className="text-cyan-400">& Stationery</span>
        </h1>


        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
          One Stop Solution for Printing, Online Services & Stationery
        </p>



        <div className="mt-10 flex flex-wrap justify-center gap-4">


          <button

          onClick={()=>{

            document
            .getElementById("print-order")
            ?.scrollIntoView({
              behavior:"smooth"
            })

          }}

          className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-600 hover:scale-105"

          >

            🖨️ Print Order

          </button>





          <button


          onClick={()=>{

            document
            .getElementById("resume")
            ?.scrollIntoView({
              behavior:"smooth"
            })

          }}


          className="rounded-xl border border-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-500 hover:scale-105"

          >

            📄 Resume Service

          </button>






          <a
            href="https://wa.me/919485665412"
            target="_blank"
            rel="noopener noreferrer"

            className="rounded-xl bg-green-600 px-8 py-4 font-semibold transition hover:bg-green-700 hover:scale-105"
          >

            💬 WhatsApp

          </a>


        </div>





        <div className="mt-14 mx-auto max-w-4xl rounded-2xl border border-gray-800 bg-gray-900/70 p-8 shadow-xl">


          <h2 className="text-2xl font-bold text-cyan-400">

            ⭐⭐⭐⭐⭐ Trusted Digital Service Center

          </h2>



          <p className="mt-3 text-gray-400">

            Fast, Secure & Affordable Digital Services for Everyone.

          </p>





          <div className="mt-8 grid grid-cols-1 gap-4 text-left md:grid-cols-2">


            <div className="rounded-xl bg-gray-800 p-4">

              ✅ Colour & Black & White Printing

            </div>



            <div className="rounded-xl bg-gray-800 p-4">

              ✅ Online Government Services

            </div>



            <div className="rounded-xl bg-gray-800 p-4">

              ✅ Professional Resume Design

            </div>



            <div className="rounded-xl bg-gray-800 p-4">

              ✅ Stationery & Lamination Services

            </div>


          </div>


        </div>


      </div>


    </section>
  );
}