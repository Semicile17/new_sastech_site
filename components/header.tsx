"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Solutions" },
    { href: "/wholesale", label: "Wholesale" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-[60] w-full backdrop-blur-lg">
      <BackgroundGradient className="absolute inset-0 opacity-20" />
      <div className="container relative flex h-16 items-center px-4 md:px-6 lg:px-8">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <motion.span 
            className="text-xl md:text-2xl font-bold text-sky-500"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            SAS Technologies
          </motion.span>
        </Link>

        <button className="md:hidden ml-auto" onClick={toggleMenu}>
          <motion.div
            initial={false}
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.div>
        </button>

        <nav className="hidden md:flex flex-1 items-center justify-end space-x-1">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "relative px-4 py-2 rounded-full transition-all duration-200",
                  pathname === item.href
                    ? "text-white bg-sky-500"
                    : "text-foreground/60 hover:text-foreground/80 hover:bg-sky-50"
                )}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.nav 
          className={cn(
            "absolute top-full left-0 right-0 bg-white/80 backdrop-blur-lg md:hidden p-4 space-y-4 border-b shadow-lg",
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          )}
          initial={false}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            y: isMenuOpen ? 0 : -8
          }}
          transition={{ duration: 0.2 }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block px-4 py-2 rounded-lg transition-colors",
                pathname === item.href
                  ? "text-gray-800 bg-gradient-to-r from-rose-200 to-blue-200"
                  : "text-foreground/60 hover:text-foreground/80 hover:bg-rose-50"
              )}
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>
      </div>
    </header>
  );
}
