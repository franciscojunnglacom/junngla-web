"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, FileSearch, ShieldCheck, Briefcase, Bot, Code2, Palette, BarChart3, Scale, Building2, User, Users, Zap } from "lucide-react";

export default function LenndosPage() {
  const t = useTranslations("LenndOS");

  const features = [
    { icon: FileSearch, n: 1 },
    { icon: ShieldCheck, n: 2 },
    { icon: Briefcase, n: 3 },
    { icon: Bot, n: 4 },
    { icon: Code2, n: 5 },
    { icon: Palette, n: 6 },
    { icon: BarChart3, n: 7 },
    { icon: Scale, n: 8 },
  ];

  const segments = [
    { icon: Building2, n: 1 },
    { icon: User, n: 2 },
    { icon: Users, n: 3 },
    { icon: Zap, n: 4 },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-brand-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(77,200,232,0.2),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(92,224,160,0.1),_transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full">
          <div className="max-w-3xl">
            <div className="mb-8">
              <Image src="/logos/lenndos.png" alt="LenndOS" width={220} height={60} className="h-14 w-auto" priority />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">{t("tagline")}</h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-2xl">{t("heroDescription")}</p>
            <Link href="/contacto" className="mt-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-lenndos-blue via-lenndos-cyan to-lenndos-green px-7 py-3.5 text-base font-semibold text-white hover:opacity-90 transition-all">
              {t("ctaButton")} <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CaaS Explanation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("caasTitle")}</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t("caasDesc")}</p>
        </div>
      </section>

      {/* Credit Lifecycle */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("lifecycleTitle")}</h2>
            <p className="mt-4 text-lg text-gray-500">{t("lifecycleDesc")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-lenndos-blue to-lenndos-green flex items-center justify-center mb-4">
                  <span className="text-sm font-bold text-white">{n}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t(`lifecycle${n}`)}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t(`lifecycle${n}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">{t("featuresTitle")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, n }) => (
              <div key={n} className="p-6 rounded-xl border border-gray-200 hover:border-lenndos-cyan/30 hover:shadow-lg transition-all">
                <Icon className="w-6 h-6 text-lenndos-cyan mb-3" />
                <h3 className="text-base font-semibold text-gray-900 mb-1">{t(`feature${n}Title`)}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t(`feature${n}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">{t("segmentsTitle")}</h2>
            <p className="mt-4 text-lg text-gray-400">{t("segmentsDesc")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {segments.map(({ icon: Icon, n }) => (
              <div key={n} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Icon className="w-8 h-8 text-lenndos-cyan mb-4" />
                <h3 className="text-2xl font-bold mb-1">{t(`segment${n}`)}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{t(`segment${n}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="rounded-xl border border-lenndos-cyan/20 p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t(`useCase${n}Title`)}</h3>
                <p className="text-gray-500 leading-relaxed">{t(`useCase${n}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Website */}
      <section className="py-12 bg-gray-50 text-center">
        <a href="https://www.junngla.com/lenndos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lenndos-cyan font-semibold hover:underline text-lg">
          Visitar www.junngla.com/lenndos <ArrowRight className="h-5 w-5" />
        </a>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-lenndos-blue via-lenndos-cyan to-lenndos-green text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold">{t("ctaTitle")}</h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">{t("ctaDesc")}</p>
          <Link href="/contacto" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-100 transition-all">
            {t("ctaButton")} <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
