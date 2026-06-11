"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/constants/business";
import { cn } from "@/utils/cn";
import { fadeUp } from "@/lib/motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-3 left-1/2 z-50 w-[calc(100%-24px)] max-w-7xl -translate-x-1/2 rounded-2xl transition-all duration-300",
        scrolled
          ? "bg-white/90 shadow-lg backdrop-blur-md top-2"
          : "bg-white/70 backdrop-blur-sm"
      )}
    >
      <nav className="mx-auto flex items-center justify-between px-5 py-3 md:px-8">
        <Link
          href="/"
          className="font-heading text-xl font-bold tracking-tight text-text md:text-2xl"
        >
          Archi&apos;s <span className="text-gold">Beauty Care</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200",
                pathname === link.href
                  ? "bg-primary text-text"
                  : "text-text/70 hover:bg-primary/50 hover:text-text"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917619621584"}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-lg bg-gold px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-gold/90 hover:shadow-lg"
          >
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-text"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-text"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-text"
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-primary/30 px-5 pb-4 md:hidden"
          >
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-primary text-text"
                      : "text-text/70 hover:bg-primary/50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917619621584"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-lg bg-gold px-5 py-3 text-center text-sm font-semibold text-white"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
