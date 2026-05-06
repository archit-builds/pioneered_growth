import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8 bg-bg-secondary">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="font-display text-white">pioneered</span>
            <span className="font-display text-orange-primary">growth</span>
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-text-muted hover:text-white transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border-card gap-4">
          <p className="text-sm text-text-faint">
            &copy; {new Date().getFullYear()} PioneeeredGrowth. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-text-faint hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-text-faint hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
