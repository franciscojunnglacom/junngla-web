"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowRight, AlertTriangle, RotateCcw, Bell, Check, Package, Repeat, Users, FileText, Palette, ShoppingBag, CreditCard, Bot, Plug, BarChart3, Truck } from "lucide-react";

export default function LupsPage() {
  const t = useTranslations("Lups");

  const services = [
    { icon: FileText, n: 1 },
    { icon: Repeat, n: 2 },
    { icon: Users, n: 3 },
    { icon: ShoppingBag, n: 4 },
  ];

  const features = [
    { icon: Palette, n: 1 },
    { icon: Package, n: 2 },
    { icon: Repeat, n: 3 },
    { icon: Users, n: 4 },
    { icon: CreditCard, n: 5 },
    { icon: Bot, n: 6 },
    { icon: Plug, n: 7 },
    { icon: BarChart3, n: 8 },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#1a0a00] via-[#3d1a00] to-[#1a0a00]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,130,32,0.25),_transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full">
          <div className="max-w-3xl">
            <div className="mb-8">
              <Image src="/logos/lups.png" alt="Lups" width={160} height={50} className="h-12 w-auto" priority />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">{t("tagline")}</h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-2xl">{t("heroDescription")}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={t("registerUrl")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-lups-orange px-7 py-3.5 text-base font-semibold text-white hover:bg-lups-orange/90 transition-all">
                {t("ctaButton")} <ArrowRight className="h-5 w-5" />
              </a>
              <a href={t("loginUrl")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-all">
                {t("ctaLogin")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">{t("servicesTitle")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(({ icon: Icon, n }) => (
              <div key={n} className="group p-6 rounded-2xl border border-gray-200 hover:border-lups-orange/30 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-lups-orange/10 flex items-center justify-center mb-4 group-hover:bg-lups-orange/20 transition-colors">
                  <Icon className="w-6 h-6 text-lups-orange" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t(`service${n}Title`)}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t(`service${n}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">{t("featuresTitle")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, n }) => (
              <div key={n} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <Icon className="w-6 h-6 text-lups-orange mb-3" />
                <h3 className="text-base font-semibold text-gray-900 mb-1">{t(`feature${n}Title`)}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t(`feature${n}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LupsDunning */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t("dunningTitle")}</h2>
          <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-16">{t("dunningDesc")}</p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((n) => (
              <div key={n} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-lups-orange">{t(`dunningStat${n}`)}</div>
                <div className="mt-2 text-sm text-gray-400">{t(`dunningStat${n}Label`)}</div>
              </div>
            ))}
          </div>

          {/* 3 Phases */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: AlertTriangle, n: 1 },
              { icon: RotateCcw, n: 2 },
              { icon: Bell, n: 3 },
            ].map(({ icon: Icon, n }) => (
              <div key={n} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Icon className="w-8 h-8 text-lups-orange mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t(`dunningPhase${n}`)}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{t(`dunningPhase${n}Desc`)}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-lups-orange font-medium">{t("dunningIncluded")}</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">{t("pricingTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[1, 2].map((n) => (
              <div key={n} className={`rounded-2xl p-8 border-2 ${n === 2 ? "border-lups-orange bg-lups-orange/5" : "border-gray-200"}`}>
                <h3 className="text-xl font-bold text-gray-900">{t(`pricingPlan${n}Name`)}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{t(`pricingPlan${n}Price`)}</span>
                  <span className="text-sm text-gray-500 ml-1">{t(`pricingPlan${n}Unit`)}</span>
                </div>
                <p className="mt-2 text-sm text-lups-orange font-medium">{t(`pricingPlan${n}Feature`)}</p>
                <p className="mt-3 text-sm text-gray-500">{t(`pricingPlan${n}Desc`)}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500" /> LupsDunning incluido
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">{t("pricingNote")}</p>
          <div className="mt-8 text-center">
            <a href={t("registerUrl")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-lups-orange px-8 py-4 text-lg font-semibold text-white hover:bg-lups-orange/90 transition-all">
              {t("pricingCta")} <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="rounded-xl border border-lups-orange/20 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-base font-bold text-gray-900 mb-2">{t(`useCase${n}Title`)}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t(`useCase${n}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Website */}
      <section className="py-12 bg-gray-50 text-center">
        <a href="https://www.lups.cl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lups-orange font-semibold hover:underline text-lg">
          Visitar www.lups.cl <ArrowRight className="h-5 w-5" />
        </a>
      </section>

      {/* CTA */}
      <section className="py-24 bg-lups-orange text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold">{t("ctaTitle")}</h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">{t("ctaDesc")}</p>
          <a href={t("registerUrl")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-lups-orange hover:bg-gray-100 transition-all">
            {t("ctaButton")} <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
