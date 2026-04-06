"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Banknote,
  Zap,
  Eye,
  Monitor,
  ArrowRight,
  TrendingUp,
  Clock,
  CreditCard,
  Check,
  ChevronRight,
  BarChart3,
  FileText,
  History,
  Layers,
} from "lucide-react";

export default function FluxPage() {
  const t = useTranslations("Flux");

  const valueProps = [
    { icon: Banknote, titleKey: "valueProp1Title", descKey: "valueProp1Desc" },
    { icon: Zap, titleKey: "valueProp2Title", descKey: "valueProp2Desc" },
    { icon: Eye, titleKey: "valueProp3Title", descKey: "valueProp3Desc" },
  ];

  const dashboardFeatures = [
    { icon: BarChart3, key: "dashboardFeature1" },
    { icon: FileText, key: "dashboardFeature2" },
    { icon: History, key: "dashboardFeature3" },
    { icon: Layers, key: "dashboardFeature4" },
  ];

  const steps = [
    { number: "01", titleKey: "howItWorksStep1Title", descKey: "howItWorksStep1Desc", icon: CreditCard },
    { number: "02", titleKey: "howItWorksStep2Title", descKey: "howItWorksStep2Desc", icon: Monitor },
    { number: "03", titleKey: "howItWorksStep3Title", descKey: "howItWorksStep3Desc", icon: Banknote },
  ];

  const creditStages = [
    { monthKey: "creditGrowthMonth1", amountKey: "creditGrowthAmount1" },
    { monthKey: "creditGrowthMonth2", amountKey: "creditGrowthAmount2" },
    { monthKey: "creditGrowthMonth3", amountKey: "creditGrowthAmount3" },
  ];

  const acquirers = [
    { nameKey: "acquirerTransbank", statusKey: "acquirerTransbankStatus", active: true },
    { nameKey: "acquirerGetnet", statusKey: "acquirerGetnetStatus", active: false },
    { nameKey: "acquirerCompraAqui", statusKey: "acquirerCompraAquiStatus", active: false },
    { nameKey: "acquirerBciPagos", statusKey: "acquirerBciPagosStatus", active: false },
    { nameKey: "acquirerKlap", statusKey: "acquirerKlapStatus", active: false },
  ];

  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#0a1628] via-[#1B3A5C] to-[#0d2a45]">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00D4FF]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00D4FF]/3 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Pilot badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-[#00D4FF] text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              {t("pilotBadge")}
            </span>

            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/logos/flux-white.png"
                alt="Flux"
                width={200}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </div>

            {/* Tagline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {t("tagline")}
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              {t("heroDescription")}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={t("registerUrl")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#00D4FF] text-[#0a1628] font-semibold text-lg hover:bg-[#00D4FF]/90 transition-all hover:shadow-lg hover:shadow-[#00D4FF]/25"
              >
                {t("ctaButton")}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={t("loginUrl")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-500 text-white font-semibold text-lg hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all"
              >
                {t("ctaLogin")}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ===== VALUE PROPOSITIONS ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, i) => {
              const Icon = prop.icon;
              return (
                <div
                  key={i}
                  className="group relative p-8 rounded-2xl border border-slate-200 hover:border-[#00D4FF]/30 transition-all hover:shadow-xl hover:shadow-[#00D4FF]/5"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-6 group-hover:bg-[#00D4FF]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[#00D4FF]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {t(prop.titleKey)}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t(prop.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== DASHBOARD PREVIEW ===== */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                {t("dashboardTitle")}
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                {t("dashboardDesc")}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {dashboardFeatures.map((feat, i) => {
                  const Icon = feat.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200">
                      <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#00D4FF]" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{t(feat.key)}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-[#1B3A5C] to-[#0a1628] p-6 shadow-2xl">
                {/* Top bar */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 flex-1 h-6 rounded-md bg-white/10" />
                </div>
                {/* Processor tabs */}
                <div className="flex gap-2 mb-6">
                  {["Transbank", "Getnet", "BCI Pagos", "Klap"].map((name, i) => (
                    <div
                      key={name}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium ${
                        i === 0
                          ? "bg-[#00D4FF] text-[#0a1628]"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {name}
                    </div>
                  ))}
                </div>
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Ventas totales", value: "$12.4M" },
                    { label: "Liquidaciones", value: "$8.2M" },
                    { label: "Adelantos", value: "$4.1M" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-xl p-4">
                      <p className="text-white/50 text-xs mb-1">{stat.label}</p>
                      <p className="text-white text-lg font-bold">{stat.value}</p>
                    </div>
                  ))}
                </div>
                {/* Chart mockup */}
                <div className="bg-white/5 rounded-xl p-4 h-32 flex items-end gap-1">
                  {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        background: `linear-gradient(to top, #00D4FF, #00D4FF80)`,
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-[#00D4FF]/10 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-4">
            {t("howItWorksTitle")}
          </h2>
          <p className="text-lg text-slate-500 text-center mb-16 max-w-2xl mx-auto">
            {t("howItWorksStep1Desc").split(".")[0]}.
          </p>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-[#00D4FF]/20 via-[#00D4FF]/40 to-[#00D4FF]/20" />

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-[#00D4FF]/10 to-[#00D4FF]/5 border-2 border-[#00D4FF]/20 mb-8 relative z-10">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0099cc] flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <span className="block text-sm font-bold text-[#00D4FF] mb-2 tracking-widest uppercase">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                    {t(step.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CREDIT GROWTH ===== */}
      <section className="py-24 bg-gradient-to-br from-[#0a1628] via-[#1B3A5C] to-[#0d2a45] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <TrendingUp className="w-12 h-12 text-[#00D4FF] mb-6" />
              <h2 className="text-4xl font-bold mb-6">
                {t("creditGrowthTitle")}
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                {t("creditGrowthDesc")}
              </p>
              <p className="text-sm text-slate-400 italic">
                {t("creditGrowthLabel")}
              </p>
            </div>

            {/* Growth visualization */}
            <div className="flex items-end gap-6 justify-center h-64">
              {creditStages.map((stage, i) => {
                const heights = [40, 65, 100];
                return (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <span className="text-2xl font-bold text-[#00D4FF]">
                      {t(stage.amountKey)}
                    </span>
                    <div
                      className="w-24 sm:w-32 rounded-t-xl transition-all"
                      style={{
                        height: `${heights[i]}%`,
                        background: `linear-gradient(to top, #00D4FF, ${
                          i === 2 ? "#00D4FF" : "#00D4FF80"
                        })`,
                        opacity: 0.3 + i * 0.35,
                      }}
                    />
                    <span className="text-sm text-slate-400 font-medium">
                      {t(stage.monthKey)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-4">
            {t("pricingTitle")}
          </h2>
          <div className="h-1 w-16 bg-[#00D4FF] rounded-full mx-auto mb-16" />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan Basico */}
            <div className="relative rounded-2xl border-2 border-[#00D4FF] bg-white p-8 shadow-xl shadow-[#00D4FF]/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-[#00D4FF] text-[#0a1628] text-xs font-bold rounded-full uppercase tracking-wider">
                  {t("pricingPlan1Promo")}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t("pricingPlan1Name")}</h3>
              <div className="mb-1">
                <span className="text-4xl font-bold text-slate-900">{t("pricingPlan1Price")}</span>
              </div>
              <p className="text-sm text-[#00D4FF] font-medium mb-6">{t("pricingPlan1Commission")}</p>
              <ul className="space-y-3 mb-8">
                {(["pricingPlan1Feature1", "pricingPlan1Feature2", "pricingPlan1Feature3"] as const).map((key) => (
                  <li key={key} className="flex items-center gap-2 text-slate-700">
                    <Check className="w-5 h-5 text-[#00D4FF] shrink-0" />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
              <a
                href={t("registerUrl")}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 rounded-xl bg-[#00D4FF] text-[#0a1628] font-semibold hover:bg-[#00D4FF]/90 transition-colors"
              >
                {t("pricingPlan1Cta")}
              </a>
            </div>

            {/* Plan Pro */}
            <div className="relative rounded-2xl border border-slate-200 bg-white p-8 opacity-75">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-slate-200 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">
                  {t("pricingPlan2Tag")}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t("pricingPlan2Name")}</h3>
              <div className="mb-1">
                <span className="text-4xl font-bold text-slate-900">{t("pricingPlan2Price")}</span>
              </div>
              <p className="text-sm text-slate-500 font-medium mb-6">{t("pricingPlan2Commission")}</p>
              <ul className="space-y-3 mb-8">
                {(["pricingPlan2Feature1", "pricingPlan2Feature2", "pricingPlan2Feature3"] as const).map((key) => (
                  <li key={key} className="flex items-center gap-2 text-slate-700">
                    <Check className="w-5 h-5 text-slate-400 shrink-0" />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
              <button
                disabled
                className="block w-full text-center py-3 rounded-xl bg-slate-100 text-slate-400 font-semibold cursor-not-allowed"
              >
                {t("pricingPlan2Cta")}
              </button>
            </div>

            {/* Plan Enterprise */}
            <div className="relative rounded-2xl border border-slate-200 bg-white p-8 opacity-75">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-slate-200 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">
                  {t("pricingPlan3Tag")}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t("pricingPlan3Name")}</h3>
              <div className="mb-1">
                <span className="text-4xl font-bold text-slate-900">{t("pricingPlan3Price")}</span>
              </div>
              <p className="text-sm text-slate-500 font-medium mb-6">{t("pricingPlan3Commission")}</p>
              <ul className="space-y-3 mb-8">
                {(["pricingPlan3Feature1", "pricingPlan3Feature2", "pricingPlan3Feature3"] as const).map((key) => (
                  <li key={key} className="flex items-center gap-2 text-slate-700">
                    <Check className="w-5 h-5 text-slate-400 shrink-0" />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
              <button
                disabled
                className="block w-full text-center py-3 rounded-xl bg-slate-100 text-slate-400 font-semibold cursor-not-allowed"
              >
                {t("pricingPlan3Cta")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPATIBLE ACQUIRERS ===== */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            {t("acquirersTitle")}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {acquirers.map((acq, i) => (
              <div
                key={i}
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl border ${
                  acq.active
                    ? "border-[#00D4FF]/30 bg-white shadow-md"
                    : "border-slate-200 bg-white/50"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    acq.active ? "bg-[#00D4FF]/10" : "bg-slate-100"
                  }`}
                >
                  <CreditCard
                    className={`w-6 h-6 ${
                      acq.active ? "text-[#00D4FF]" : "text-slate-400"
                    }`}
                  />
                </div>
                <span className="text-sm font-semibold text-slate-900 text-center">
                  {t(acq.nameKey)}
                </span>
                <span
                  className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                    acq.active
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {t(acq.statusKey)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISIT WEBSITE ===== */}
      <section className="py-12 bg-white text-center">
        <a href="https://www.goflux.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#00D4FF] font-semibold hover:underline text-lg">
          Visitar www.goflux.io <ChevronRight className="h-5 w-5" />
        </a>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 bg-gradient-to-br from-[#0a1628] via-[#1B3A5C] to-[#0d2a45] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00D4FF]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("ctaTitle")}
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            {t("ctaDesc")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={t("registerUrl")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#00D4FF] text-[#0a1628] font-semibold text-lg hover:bg-[#00D4FF]/90 transition-all hover:shadow-lg hover:shadow-[#00D4FF]/25"
            >
              {t("ctaButton")}
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href={t("loginUrl")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-500 text-white font-semibold text-lg hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all"
            >
              {t("ctaLogin")}
            </a>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400">
            <span>{t("ctaContact")}</span>
            <a
              href={`mailto:${t("ctaEmail")}`}
              className="text-[#00D4FF] hover:underline"
            >
              {t("ctaEmail")}
            </a>
            <a
              href={`tel:${t("ctaPhone").replace(/\s/g, "")}`}
              className="text-[#00D4FF] hover:underline"
            >
              {t("ctaPhone")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
