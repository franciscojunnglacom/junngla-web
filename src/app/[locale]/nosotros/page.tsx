import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { MapPin, Users, Code2, Globe, ArrowRight } from "lucide-react";

export default async function NosotrosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <NosotrosContent />;
}

function NosotrosContent() {
  const t = useTranslations("About");

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-brand-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t("title")}</h1>
            <p className="mt-4 text-xl text-gray-500">{t("subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed">{t("story")}</p>
              <p className="mt-6 text-2xl font-bold text-junngla-purple italic">&ldquo;{t("mission")}&rdquo;</p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-brand-muted rounded-xl p-6 text-center">
                <Globe className="h-8 w-8 text-junngla-purple mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">2+</div>
                <div className="text-sm text-gray-500">{t("statsCountries")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 md:py-28 bg-brand-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t("title")}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <MapPin className="h-6 w-6 text-junngla-purple mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">{t("santiagoCl")}</h3>
              <p className="mt-1 text-sm text-gray-500">{t("santiagoAddr")}</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <MapPin className="h-6 w-6 text-junngla-purple mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">{t("orlandoUs")}</h3>
              <p className="mt-1 text-sm text-gray-500">{t("orlandoAddr")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-dark text-white text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">¿Quieres ser parte del equipo?</h2>
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-junngla-purple px-8 py-4 text-lg font-semibold text-white hover:bg-junngla-purple/90 transition-all hover:scale-[1.02]"
          >
            Conversemos <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
