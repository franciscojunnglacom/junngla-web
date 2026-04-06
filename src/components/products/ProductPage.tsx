import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type ProductPageProps = {
  productKey: string;
  logo: string;
  logoWhite?: string;
  color: string;
  textColor: string;
  bgLight: string;
  borderColor: string;
  gradientFrom: string;
  otherProducts: { slug: string; name: string; logo: string }[];
};

export function ProductPage({
  productKey,
  logo,
  logoWhite,
  color,
  textColor,
  bgLight,
  borderColor,
  gradientFrom,
  otherProducts,
}: ProductPageProps) {
  const t = useTranslations(productKey);
  const p = useTranslations("Products");

  const features = [1, 2, 3, 4, 5, 6].map((i) => ({
    title: t(`feature${i}Title`),
    desc: t(`feature${i}Desc`),
  }));

  const useCases = [1, 2, 3].map((i) => ({
    title: t(`useCase${i}Title`),
    desc: t(`useCase${i}Desc`),
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_${gradientFrom},_transparent_50%)]`} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 h-16 flex items-center">
              <Image
                src={logoWhite || logo}
                alt={t("name")}
                width={200}
                height={64}
                className="h-14 w-auto object-contain rounded-lg"
              />
            </div>
            <p className={`text-xl font-medium ${textColor}`}>{t("tagline")}</p>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">{t("description")}</p>
            <Link
              href="/contacto"
              className={`mt-8 inline-flex items-center gap-2 rounded-lg ${color} px-6 py-3 text-base font-semibold text-white hover:opacity-90 transition-all hover:scale-[1.02]`}
            >
              {p("ctaButton")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">{p("featuresTitle")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className={`rounded-xl border ${borderColor} p-6 hover:shadow-lg transition-shadow`}>
                <div className={`h-10 w-10 rounded-lg ${bgLight} flex items-center justify-center mb-4`}>
                  <span className={`text-lg font-bold ${textColor}`}>{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-28 bg-brand-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">{p("useCasesTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900">{uc.title}</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works With */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{p("worksWithTitle")}</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-12">{p("worksWithDesc")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {otherProducts.map((op) => (
              <Link
                key={op.slug}
                href={`/${op.slug}` as "/tokeni" | "/lups" | "/flux" | "/lenndos"}
                className="inline-flex items-center gap-3 rounded-xl border border-gray-200 px-5 py-3 hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <Image src={op.logo} alt={op.name} width={80} height={28} className="h-6 w-auto object-contain rounded" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 md:py-28 ${color} text-white`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">{p("ctaTitle")}</h2>
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-100 transition-all hover:scale-[1.02]"
          >
            {p("ctaButton")} <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
