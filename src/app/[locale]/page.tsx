import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Quote } from "lucide-react";
import Image from "next/image";

const products = [
  { slug: "tokeni", logo: "/logos/tokeni.jpg", textColor: "text-tokeni-orange", border: "border-tokeni-orange/20" },
  { slug: "lups", logo: "/logos/lups.png", textColor: "text-lups-orange", border: "border-lups-orange/20" },
  { slug: "flux", logo: "/logos/flux.jpg", textColor: "text-flux-cyan", border: "border-flux-cyan/20" },
  { slug: "lenndos", logo: "/logos/lenndos.png", textColor: "text-lenndos-cyan", border: "border-lenndos-cyan/20" },
];

const clients = [
  "RedBanc", "Cencosud", "Consorcio", "Libercoop", "Coopeuch",
  "Dental First", "Flexipay", "Aiya", "Dune", "Tukan", "GoShop",
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations("Home");
  const p = useTranslations("Products");
  const tokeni = useTranslations("Tokeni");
  const lups = useTranslations("Lups");
  const flux = useTranslations("Flux");
  const lenndos = useTranslations("LenndOS");

  const productTranslations: Record<string, { name: string; tagline: string; description: string }> = {
    tokeni: { name: tokeni("name"), tagline: tokeni("tagline"), description: tokeni("heroDescription") },
    lups: { name: lups("name"), tagline: lups("tagline"), description: lups("heroDescription") },
    flux: { name: flux("name"), tagline: flux("tagline"), description: flux("heroDescription") },
    lenndos: { name: lenndos("name"), tagline: lenndos("tagline"), description: lenndos("heroDescription") },
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(123,79,158,0.3),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(0,212,255,0.15),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              {t("heroTitle")}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              {t("heroSubtitle")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-lg bg-junngla-purple px-6 py-3 text-base font-semibold text-white hover:bg-junngla-purple/90 transition-all hover:scale-[1.02]"
              >
                {t("heroCta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/productos"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-all"
              >
                {t("heroCtaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-brand-muted border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
            {t("trustedBy")}
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {clients.map((name) => (
              <span key={name} className="text-sm font-semibold text-gray-300 whitespace-nowrap">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("productsTitle")}</h2>
            <p className="mt-4 text-lg text-gray-500">{t("productsSubtitle")}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((prod) => {
              const pt = productTranslations[prod.slug];
              return (
                <Link
                  key={prod.slug}
                  href={`/${prod.slug}` as "/tokeni" | "/lups" | "/flux" | "/lenndos"}
                  className={`group relative rounded-2xl border ${prod.border} bg-white p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <Image src={prod.logo} alt={pt.name} width={120} height={40} className="h-8 w-auto rounded object-contain" />
                  <h3 className="mt-4 text-xl font-bold text-gray-900">{pt.name}</h3>
                  <p className={`text-sm font-medium ${prod.textColor} mt-1`}>{pt.tagline}</p>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-2">{pt.description}</p>
                  <span className={`mt-4 inline-flex items-center gap-1 text-sm font-medium ${prod.textColor} group-hover:gap-2 transition-all`}>
                    {p("learnMore")} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-20 md:py-28 bg-brand-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("ecosystemTitle")}</h2>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">{t("ecosystemSubtitle")}</p>
            </div>
            <div className="relative">
              {/* Ecosystem visual with real logos */}
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Center - Tokeni */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-28 rounded-2xl bg-tokeni-orange flex items-center justify-center overflow-hidden">
                  <Image src="/logos/tokeni.jpg" alt="Tokeni" width={112} height={112} className="h-full w-full object-cover" />
                </div>
                {/* Orbiting products */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 h-16 w-28 rounded-xl bg-white border border-lups-orange/30 flex items-center justify-center p-2 shadow-sm">
                  <Image src="/logos/lups.png" alt="Lups" width={96} height={32} className="h-6 w-auto object-contain" />
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-16 w-28 rounded-xl bg-white border border-flux-cyan/30 flex items-center justify-center p-2 shadow-sm">
                  <Image src="/logos/flux.jpg" alt="Flux" width={96} height={32} className="h-6 w-auto object-contain" />
                </div>
                <div className="absolute top-1/2 right-2 -translate-y-1/2 h-16 w-28 rounded-xl bg-white border border-lenndos-cyan/30 flex items-center justify-center p-2 shadow-sm">
                  <Image src="/logos/lenndos.png" alt="LenndOS" width={96} height={32} className="h-6 w-auto object-contain" />
                </div>
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="200" y1="150" x2="200" y2="70" stroke="#F58220" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                  <line x1="200" y1="250" x2="200" y2="340" stroke="#00D4FF" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                  <line x1="250" y1="200" x2="340" y2="200" stroke="#4DC8E8" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-junngla-purple">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold">11+</div>
              <div className="mt-1 text-sm text-white/70">{t("statsClients")}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">2+</div>
              <div className="mt-1 text-sm text-white/70">{t("statsCountries")}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">99.9%</div>
              <div className="mt-1 text-sm text-white/70">{t("statsUptime")}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">M+</div>
              <div className="mt-1 text-sm text-white/70">{t("statsTransactions")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-10 w-10 text-junngla-purple/20 mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed">
            &ldquo;{t("testimonialQuote")}&rdquo;
          </blockquote>
          <div className="mt-6">
            <div className="font-semibold text-gray-900">{t("testimonialAuthor")}</div>
            <div className="text-sm text-gray-500">{t("testimonialRole")}</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">{t("ctaTitle")}</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">{t("ctaSubtitle")}</p>
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-junngla-purple px-8 py-4 text-lg font-semibold text-white hover:bg-junngla-purple/90 transition-all hover:scale-[1.02]"
          >
            {t("ctaButton")}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
