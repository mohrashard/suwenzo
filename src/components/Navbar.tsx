"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "How it works", href: "/#how-it-works", id: "how-it-works" },
    { name: "Features", href: "/#features", id: "features" },
    { name: "Who it's for", href: "/#who-and-why", id: "who-and-why" },
    { name: "FAQ", href: "/#faq", id: "faq" },
  ];

  useEffect(() => {
    const sectionIds = ["home", "how-it-works", "features", "who-and-why", "faq"];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // If near top of page -> always highlight Home
      if (scrollY < 120) {
        setActiveSection("home");
        return;
      }

      // Check if user is scrolled near bottom of page -> activate FAQ
      if (window.innerHeight + Math.round(scrollY) >= document.documentElement.scrollHeight - 60) {
        setActiveSection("faq");
        return;
      }

      const headerOffset = 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - headerOffset;
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      setActiveSection(id);
      if (id === "home") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (window.location.hash) {
          history.pushState(null, "", " ");
        }
      } else {
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          const headerOffset = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top, behavior: "smooth" });
          history.pushState(null, "", `#${id}`);
        }
      }
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const whatsappUrl =
    "https://wa.me/94719382296?text=Hi%2C%20I%20would%20like%20to%20book%20a%2020-minute%20demo%20for%20Suwenzo.";

  return (
    <header className="fixed top-3.5 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] sm:w-auto max-w-[880px]">
      {/* ================= HIGH-END FLOATING GLASS CAPSULE ================= */}
      <nav
        className={`w-full bg-white/80 backdrop-blur-2xl border border-white/80 ring-1 ring-slate-200/70 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-4 sm:gap-7 transition-all duration-300 ${
          scrolled
            ? "shadow-[0_14px_38px_-8px_rgba(29,78,216,0.12),0_2px_6px_rgba(0,0,0,0.03)] bg-white/90"
            : "shadow-[0_8px_30px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)]"
        }`}
        aria-label="Main Navigation"
      >
        {/* Left: Brand Mark */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("home");
            }}
            className="inline-flex items-center gap-2.5 no-underline group"
          >
            {/* Precision Gradient-Framed Brand Mark */}
            <div className="w-8 h-8 rounded-[10px] p-[1.5px] bg-gradient-to-tr from-[#1D4ED8] via-[#3B82F6] to-[#93C5FD] shadow-[0_2px_8px_rgba(29,78,216,0.2)] shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full rounded-[8.5px] bg-white flex items-center justify-center p-0.5 overflow-hidden">
                <Image
                  src="/logo-mark.png"
                  alt="Suwenzo"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
            <span className="text-[16px] sm:text-[17px] font-extrabold tracking-tight text-[#0B1B3A]">
              Suwenzo
            </span>
          </Link>
        </div>

        {/* Center: Precision Floating Dock Navigation (Strictly Single Line) */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1 rounded-full border border-slate-200/50 shrink-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.id)}
                className={`text-[13.5px] px-3.5 py-1.5 rounded-full transition-all duration-200 select-none whitespace-nowrap flex items-center justify-center leading-none outline-none focus:outline-none focus-visible:outline-none ring-0 ${
                  isActive
                    ? "bg-white text-[#1D4ED8] font-semibold shadow-xs border border-slate-200/60"
                    : "text-[#475569] hover:text-[#0B1B3A] hover:bg-white/60 font-medium border border-transparent"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right: Tactile Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Primary Demo Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1D4ED8] hover:bg-[#1e40af] text-white text-[13px] font-semibold px-4.5 py-2 rounded-full shadow-[0_2px_8px_rgba(29,78,216,0.25)] hover:shadow-[0_4px_14px_rgba(29,78,216,0.35)] transition-all duration-200 hover:scale-[1.02] whitespace-nowrap"
          >
            Book a Demo
          </a>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center focus:outline-hidden hover:bg-slate-200 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE EXPANDED DROPDOWN ================= */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 w-full bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-[22px] p-4 shadow-[0_16px_40px_-6px_rgba(29,78,216,0.15)] flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.id)}
                className={`text-[14px] px-3.5 py-2.5 rounded-xl transition-colors flex items-center justify-between font-semibold ${
                  isActive
                    ? "bg-blue-50 text-[#1D4ED8]"
                    : "text-[#0B1B3A] hover:text-[#1D4ED8] hover:bg-slate-50"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                )}
              </a>
            );
          })}
          <div className="pt-2 mt-1 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#1D4ED8] text-white font-semibold py-2.5 rounded-xl text-[14px] shadow-xs"
            >
              Book a 20-minute demo
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-slate-100 text-[#0B1B3A] font-semibold py-2.5 rounded-xl text-[14px]"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
