export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">
          
          {/* Brand Name */}
          <h2 className="text-white text-2xl font-bold">
            Dhruv Digital & Stationary
          </h2>

          {/* Tagline */}
          <p className="mt-2 text-sm text-gray-400">
            Modern digital & printing solutions for your business needs
          </p>

          {/* Quick Links */}
          <div className="flex justify-center gap-6 mt-5 text-sm">
            <a href="#home" className="hover:text-cyan-400">Home</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#services" className="hover:text-cyan-400">Services</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>

          {/* Copyright */}
          <p className="mt-6 text-xs text-gray-600">
            © {new Date().getFullYear()} Dhruv Digital & Stationary. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}