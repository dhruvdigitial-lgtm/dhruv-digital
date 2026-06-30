import Link from "next/link";


export default function NotFound() {

  return (

    <main className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-6xl font-bold text-cyan-400">
          404
        </h1>


        <h2 className="text-3xl font-bold mt-5">
          Page Not Found
        </h2>


        <p className="text-gray-400 mt-4">
          This page does not exist.
        </p>


        <Link

          href="/"

          className="inline-block mt-8 bg-cyan-500 text-black px-6 py-3 rounded-xl font-bold"

        >

          Go Home

        </Link>


      </div>

    </main>

  );

}