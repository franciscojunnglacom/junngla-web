"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Quote, Cpu, Globe, Zap, Shield, DollarSign, Activity, Building2, Landmark, CreditCard, ShoppingBag } from "lucide-react";

const clients = ["Dental First", "Libercoop", "RedBanc", "Consorcio", "Cencosud", "Flexipay", "Aiya", "Dune", "Coopeuch"];

export default function TokeniPage() {
  const t = useTranslations("Tokeni");

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-brand-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,124,32,0.2),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(245,124,32,0.08),_transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full">
          <div className="max-w-3xl">
            <div className="mb-8">
              <Image src="/logos/tokeni.jpg" alt="Tokeni" width={180} height={56} className="h-14 w-auto rounded-lg" priority />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">{t("tagline")}</h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-2xl">{t("heroDescription")}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contacto" className="inline-flex items-center gap-2 rounded-xl bg-tokeni-orange px-7 py-3.5 text-base font-semibold text-white hover:bg-tokeni-orange/90 transition-all">
                {t("ctaButton")} <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { icon: Cpu, title: t("technologyTitle"), desc: t("technologyDesc") },
              { icon: Globe, title: t("integrationTitle"), desc: t("integrationDesc") },
              { icon: Zap, title: t("solutionTitle"), desc: t("solutionDesc") },
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="w-14 h-14 rounded-xl bg-tokeni-orange/10 flex items-center justify-center mb-5 group-hover:bg-tokeni-orange/20 transition-colors">
                  <item.icon className="w-7 h-7 text-tokeni-orange" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products within Tokeni */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("productsTitle")}</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">{t("productsSubtitle")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="inline-block px-3 py-1 rounded-full bg-tokeni-orange/10 text-tokeni-orange text-xs font-semibold mb-4">{t(`product${i}Tag`)}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(`product${i}Name`)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(`product${i}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("benefitsTitle")}</h2>
            <p className="mt-4 text-lg text-gray-500">{t("benefitsSubtitle")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-tokeni-orange/10 flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl font-bold text-tokeni-orange">{i}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(`benefit${i}Title`)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(`benefit${i}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t("valuePropsTitle")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, n: 1 },
              { icon: Activity, n: 2 },
              { icon: DollarSign, n: 3 },
              { icon: Zap, n: 4 },
            ].map(({ icon: Icon, n }) => (
              <div key={n} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Icon className="w-8 h-8 text-tokeni-orange mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t(`valueProp${n}Title`)}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{t(`valueProp${n}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study: RedPay */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tokeni-orange/10 text-tokeni-orange text-sm font-semibold">{t("caseStudyPartner")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">{t("caseStudyTitle")}</h2>
          <p className="text-lg text-gray-500 text-center max-w-3xl mx-auto mb-16">{t("caseStudyDesc")}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-xl border border-tokeni-orange/20 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-base font-bold text-gray-900 mb-2">{t(`caseStudyProduct${i}`)}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t(`caseStudyProduct${i}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Quote className="h-10 w-10 text-tokeni-orange/20 mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed italic">&ldquo;{t("testimonialQuote")}&rdquo;</blockquote>
          <div className="mt-6">
            <div className="font-semibold text-gray-900">{t("testimonialAuthor")}</div>
            <div className="text-sm text-gray-500">{t("testimonialRole")}</div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">{t("servicesTitle")}</h2>
            <p className="mt-4 text-gray-500">{t("servicesSubtitle")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, key: "service1" },
              { icon: Landmark, key: "service2" },
              { icon: CreditCard, key: "service3" },
              { icon: ShoppingBag, key: "service4" },
            ].map(({ icon: Icon, key }) => (
              <div key={key} className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 hover:border-tokeni-orange/30 transition-colors">
                <Icon className="w-6 h-6 text-tokeni-orange shrink-0" />
                <span className="text-sm font-medium text-gray-700">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">{t("clientsTitle")}</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 items-center">
            {clients.map((name) => (
              <span key={name} className="text-lg font-bold text-gray-300 grayscale opacity-50 hover:opacity-100 transition-opacity">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-tokeni-orange text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold">{t("ctaTitle")}</h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">{t("ctaSubtitle")}</p>
          <Link href="/contacto" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-tokeni-orange hover:bg-gray-100 transition-all">
            {t("ctaButton")} <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
