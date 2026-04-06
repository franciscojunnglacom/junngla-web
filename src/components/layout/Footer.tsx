"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import Image from "next/image";

export function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (next: "es" | "en") => {
    router.replace(pathname, { locale: next });
  };

  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image src="/logos/junngla-white.png" alt="Junngla" width={120} height={40} className="h-8 w-auto" />
            </div>
            <p className="text-sm text-gray-400">{t("tagline")}</p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">{t("products")}</h3>
            <ul className="space-y-2">
              <li><Link href="/tokeni" className="text-sm text-gray-400 hover:text-white transition-colors">{nav("tokeni")}</Link></li>
              <li><Link href="/lups" className="text-sm text-gray-400 hover:text-white transition-colors">{nav("lups")}</Link></li>
              <li><Link href="/flux" className="text-sm text-gray-400 hover:text-white transition-colors">{nav("flux")}</Link></li>
              <li><Link href="/lenndos" className="text-sm text-gray-400 hover:text-white transition-colors">{nav("lenndos")}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">{t("company")}</h3>
            <ul className="space-y-2">
              <li><Link href="/nosotros" className="text-sm text-gray-400 hover:text-white transition-colors">{t("about")}</Link></li>
              <li><Link href="/servicios" className="text-sm text-gray-400 hover:text-white transition-colors">{t("services")}</Link></li>
              <li><Link href="/contacto" className="text-sm text-gray-400 hover:text-white transition-colors">{t("contact")}</Link></li>
              <li><Link href="/acceso" className="text-sm text-gray-400 hover:text-white transition-colors">{nav("access")}</Link></li>
            </ul>
          </div>

          {/* Contact + Language */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">{t("contact")}</h3>
            <ul className="space-y-2">
              <li><a href="mailto:conversemos@junngla.com" className="text-sm text-gray-400 hover:text-white transition-colors">conversemos@junngla.com</a></li>
              <li><a href="https://www.linkedin.com/company/junngla-spa/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
            </ul>

            {/* Language Switcher with flags */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">{t("language")}</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => switchLocale("es")}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all ${locale === "es" ? "bg-white/10 text-white" : "text-gray-500 hover:text-white hover:bg-white/5"}`}
                >
                  <span className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-white/10 text-xs">🇨🇱</span>
                  ES
                </button>
                <button
                  onClick={() => switchLocale("en")}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all ${locale === "en" ? "bg-white/10 text-white" : "text-gray-500 hover:text-white hover:bg-white/5"}`}
                >
                  <span className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-white/10 text-xs">🇺🇸</span>
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Junngla SPA. {t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}
