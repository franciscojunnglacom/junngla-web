"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const platforms = [
  {
    key: "lups",
    logo: "/logos/lups.png",
    url: "https://admin.lups.cl",
    color: "border-lups-orange/30 hover:border-lups-orange",
    btnColor: "bg-lups-orange hover:bg-lups-orange/90",
  },
  {
    key: "flux",
    logo: "/logos/flux.jpg",
    url: "https://app.goflux.io/login/",
    color: "border-flux-cyan/30 hover:border-flux-cyan",
    btnColor: "bg-flux-navy hover:bg-flux-navy/90",
  },
  {
    key: "lenndos",
    logo: "/logos/lenndos.png",
    url: "#",
    color: "border-lenndos-cyan/30 hover:border-lenndos-cyan",
    btnColor: "bg-lenndos-cyan hover:bg-lenndos-cyan/90",
    comingSoon: true,
  },
  {
    key: "tokeni",
    logo: "/logos/tokeni.jpg",
    url: "#",
    color: "border-tokeni-orange/30 hover:border-tokeni-orange",
    btnColor: "bg-tokeni-orange hover:bg-tokeni-orange/90",
    comingSoon: true,
  },
];

export default function AccesoPage() {
  const t = useTranslations("Access");

  return (
    <section className="min-h-[80vh] flex items-center py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t("title")}</h1>
          <p className="mt-3 text-lg text-gray-500">{t("subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {platforms.map((p) => (
            <div key={p.key} className={`bg-white rounded-2xl border-2 ${p.color} p-8 transition-all hover:shadow-xl`}>
              <div className="h-12 flex items-center mb-6">
                <Image src={p.logo} alt={t(`${p.key}Name`)} width={140} height={44} className="h-10 w-auto object-contain rounded" />
              </div>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">{t(`${p.key}Desc`)}</p>
              {p.comingSoon ? (
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-100 text-sm font-medium text-gray-400">
                  {t("comingSoon")}
                </span>
              ) : (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg ${p.btnColor} text-sm font-semibold text-white transition-all`}
                >
                  {t("login")} <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
