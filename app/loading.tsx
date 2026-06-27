export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-cyan-400">Loading Dhruv Digital...</p>
      </div>
    </div>
  );
}