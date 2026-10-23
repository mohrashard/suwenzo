"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getWhatsAppRedirectUrl } from "@/lib/site";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "How it works", href: "/how-it-works" },
    { name: "Features", href: "/features" },
    { name: "Who it's for", href: "/for" },
    { name: "FAQ", href: "/faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const whatsappUrl = getWhatsAppRedirectUrl("navbar", "demo");

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-3.5 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] sm:w-auto max-w-[880px]">
      {/* Floating Glass Capsule Navigation */}
      <nav
        className={`w-full bg-white/80 backdrop-blur-2xl border border-white/80 ring-1 ring-slate-200/70 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-4 sm:gap-7 transition-all duration-300 ${
          scrolled
            ? "shadow-[0_14px_38px_-8px_rgba(29,78,216,0.12),0_2px_6px_rgba(0,0,0,0.03)] bg-white/90"
            : "shadow-[0_8px_30px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)]"
        }`}
        aria-label="Main Navigation"
      >
        {/* Left: Brand Mark (Serves as Home link) */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/"
            aria-label="Suwenzo Home"
            className="inline-flex items-center gap-2.5 no-underline group"
          >
            <div className="w-8 h-8 rounded-[10px] p-[1.5px] bg-gradient-to-tr from-[#1D4ED8] via-[#3B82F6] to-[#93C5FD] shadow-[0_2px_8px_rgba(29,78,216,0.2)] shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full rounded-[8.5px] bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src="/swlogocopy.svg"
                  alt="Suwenzo"
                  width={32}
                  height={32}
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

        {/* Center: Precision Floating Dock Navigation (Exactly 4 links) */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1 rounded-full border border-slate-200/50 shrink-0">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-[13.5px] px-3.5 py-1.5 rounded-full transition-all duration-200 select-none whitespace-nowrap flex items-center justify-center leading-none outline-none focus:outline-none focus-visible:outline-none ring-0 ${
                  active
                    ? "bg-white text-[#1D4ED8] font-semibold shadow-xs border border-slate-200/60"
                    : "text-[#475569] hover:text-[#0B1B3A] hover:bg-white/60 font-medium border border-transparent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right: Tactile Action Button and Mobile Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={whatsappUrl}
            rel="nofollow noopener"
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

      {/* Mobile Expanded Dropdown (Exactly 4 links plus CTA) */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 w-full bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-[22px] p-4 shadow-[0_16px_40px_-6px_rgba(29,78,216,0.15)] flex flex-col gap-2">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-[14px] px-3.5 py-2.5 rounded-xl transition-colors flex items-center justify-between font-semibold ${
                  active
                    ? "bg-blue-50 text-[#1D4ED8]"
                    : "text-[#0B1B3A] hover:text-[#1D4ED8] hover:bg-slate-50"
                }`}
              >
                <span>{link.name}</span>
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                )}
              </Link>
            );
          })}
          <div className="pt-2 mt-1 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={whatsappUrl}
              rel="nofollow noopener"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#1D4ED8] text-white font-semibold py-2.5 rounded-xl text-[14px] shadow-xs"
            >
              Book a 20-minute demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
