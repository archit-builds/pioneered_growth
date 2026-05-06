"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-bg-secondary/90 backdrop-blur-md border-b border-border-subtle py-4"
            : "bg-transparent py-6",
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="z-50 relative flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="PioneeredGrowth"
              width={200}
              height={50}
              className="object-contain h-10 w-auto md:h-12 scale-[1.8] md:scale-[2.2] origin-left"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-text-secondary hover:text-blue-primary transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-4 rounded-full bg-blue-primary px-6 py-2.5 text-[14px] font-bold text-white transition-colors hover:bg-blue-deep"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 text-white p-2"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-bg-secondary/95 backdrop-blur-xl md:hidden pt-28 px-6 flex flex-col h-screen"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display text-white hover:text-orange-primary transition-colors border-b border-border-card pb-4"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 inline-block text-center rounded-lg bg-orange-primary px-6 py-4 text-lg font-bold text-white transition-colors hover:bg-orange-light"
              >
                Start a Project
              </Link>

              <div className="mt-auto mb-10 pt-10 flex flex-col gap-2 border-t border-border-card">
                <span className="font-mono text-[13px] text-text-muted">
                  GET IN TOUCH
                </span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white hover:text-blue-primary text-lg"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
