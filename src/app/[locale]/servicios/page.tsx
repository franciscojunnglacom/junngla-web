import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FolderKanban, Code2, MapPin, ArrowRight } from "lucide-react";

const services = [
  { key: "pm", icon: FolderKanban },
  { key: "dev", icon: Code2 },
  { key: "field", icon: MapPin },
];

const steps = ["step1", "step2", "step3", "step4"] as const;

export default async function ServiciosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ServiciosContent />;
}

function ServiciosContent() {
  const t = useTranslations("Services");

  return (
    <>
      <section className="py-20 md:py-28 bg-brand-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t("title")}</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.key} className="rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-junngla-purple/10 flex items-center justify-center mb-4">
                  <s.icon className="h-6 w-6 text-junngla-purple" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t(s.key)}</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">{t(`${s.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">{t("processTitle")}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step} className="text-center">
                <div className="h-14 w-14 rounded-full bg-junngla-purple text-white flex items-center justify-center text-xl font-bold mx-auto">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{t(step)}</h3>
                <p className="mt-2 text-sm text-gray-500">{t(`${step}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-junngla-purple text-white text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">¿Tienes un proyecto en mente?</h2>
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-junngla-purple hover:bg-gray-100 transition-all hover:scale-[1.02]"
          >
            Conversemos <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
