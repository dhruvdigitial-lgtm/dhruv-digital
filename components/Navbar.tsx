"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  MessageCircle,
  Printer,
  FileText,
  Landmark,
  Home,
  Phone,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy (active section tracking)
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      let current = "home";

      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            current = navItems[index].href.replace("#", "");
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      href: "#home",
      icon: Home,
    },
    {
      name: "Services",
      href: "#services",
      icon: Printer,
    },
    {
      name: "Government Services",
      href: "#government",
      icon: Landmark,
    },
    {
      name: "Resume",
      href: "#resume",
      icon: FileText,
    },
    {
      name: "Print Order",
      href: "#print-order",
      icon: Printer,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: Phone,
    },
  ];
    return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-2xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-cyan-500/30 bg-white shadow-lg shadow-cyan-500/10 transition duration-300 group-hover:scale-105">

              <Image
                src="/logo.png"
                alt="Dhruv Digital Logo"
                fill
                sizes="56px"
                className="object-contain"
                priority
              />
            </div>

            <div className="hidden sm:block">
              <h2 className="text-xl font-bold text-white tracking-wide">
                Dhruv Digital & Stationary
              </h2>
              <p className="text-xs text-cyan-400">
                Digital & Printing Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative group flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:text-cyan-400 hover:scale-105 ${
                    active === item.href.replace("#", "")
                      ? "text-cyan-400"
                      : "text-gray-300"
                  }`}
                >
                  <Icon size={17} className="group-hover:scale-110 transition" />

                  {item.name}

                  {/* underline effect */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${
                      active === item.href.replace("#", "")
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* WhatsApp */}
            <a
              href="https://wa.me/919485665412"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-green-700 shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-cyan-400 transition hover:bg-cyan-500/20"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-cyan-500/20 bg-black/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-xl border border-transparent px-4 py-3 text-gray-300 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400 active:scale-95"
                  >
                    <Icon size={18} />
                    {item.name}
                  </a>
                );
              })}

              {/* WhatsApp Mobile */}
              <a
                href="https://wa.me/919485665412"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition duration-300 hover:bg-green-700"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
onClick={(e) => {
  e.preventDefault();
  document.querySelector(item.href)?.scrollIntoView({
    behavior: "smooth",
  });
}}