import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle py-8">
      <div className="container mx-auto px-4 md:px-8 bg-bg-secondary">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="PioneeredGrowth"
              width={200}
              height={50}
              className="object-contain h-10 w-auto scale-[1.8] origin-center"
              unoptimized
            />
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
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-border-card gap-4">
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
