"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const productLinks = [
  { href: "/tokeni" as const, key: "tokeni" },
  { href: "/lups" as const, key: "lups" },
  { href: "/flux" as const, key: "flux" },
  { href: "/lenndos" as const, key: "lenndos" },
];

export function Navbar() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logos/junngla.png" alt="Junngla" width={120} height={40} className="h-8 w-auto" priority />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {/* Products Dropdown - fixed gap issue with pt padding */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-4">
                {t("products")}
                <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 pt-0 w-56">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-2">
                    {productLinks.map((p) => (
                      <Link
                        key={p.key}
                        href={p.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setProductsOpen(false)}
                      >
                        <span className="text-sm font-medium text-gray-700">{t(p.key)}</span>
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <Link href="/productos" className="flex items-center px-3 py-2.5 rounded-lg hover:bg-gray-50 text-sm text-junngla-purple font-medium" onClick={() => setProductsOpen(false)}>
                        {t("products")} →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/servicios" className={`text-sm font-medium transition-colors ${pathname === "/servicios" ? "text-gray-900" : "text-gray-600 hover:text-gray-900"}`}>{t("services")}</Link>
            <Link href="/nosotros" className={`text-sm font-medium transition-colors ${pathname === "/nosotros" ? "text-gray-900" : "text-gray-600 hover:text-gray-900"}`}>{t("about")}</Link>
            <Link href="/contacto" className={`text-sm font-medium transition-colors ${pathname === "/contacto" ? "text-gray-900" : "text-gray-600 hover:text-gray-900"}`}>{t("contact")}</Link>
            <Link href="/acceso" className="inline-flex items-center justify-center rounded-lg bg-junngla-purple px-4 py-2 text-sm font-medium text-white hover:bg-junngla-purple/90 transition-colors">{t("access")}</Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4 space-y-2">
            {productLinks.map((p) => (
              <Link key={p.key} href={p.href} className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>{t(p.key)}</Link>
            ))}
            <div className="border-t border-gray-100 pt-2 mt-2 space-y-2">
              <Link href="/servicios" className="block px-3 py-2 text-sm text-gray-600" onClick={() => setMobileOpen(false)}>{t("services")}</Link>
              <Link href="/nosotros" className="block px-3 py-2 text-sm text-gray-600" onClick={() => setMobileOpen(false)}>{t("about")}</Link>
              <Link href="/contacto" className="block px-3 py-2 text-sm text-gray-600" onClick={() => setMobileOpen(false)}>{t("contact")}</Link>
              <Link href="/acceso" className="block px-3 py-2 text-sm text-gray-600" onClick={() => setMobileOpen(false)}>{t("access")}</Link>
            </div>
            <div className="pt-2 px-3">
              <Link href="/acceso" className="block text-center rounded-lg bg-junngla-purple px-4 py-2 text-sm font-medium text-white" onClick={() => setMobileOpen(false)}>{t("access")}</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
