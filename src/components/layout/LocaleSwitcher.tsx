"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const next = locale === "es" ? "en" : "es";
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      onClick={toggle}
      className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors uppercase"
    >
      {locale === "es" ? "EN" : "ES"}
    </button>
  );
}
