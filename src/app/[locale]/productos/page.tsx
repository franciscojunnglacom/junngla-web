import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const products = [
  { slug: "tokeni", key: "Tokeni", logo: "/logos/tokeni.jpg", color: "text-tokeni-orange", bg: "bg-tokeni-orange/5", border: "border-tokeni-orange/20" },
  { slug: "lups", key: "Lups", logo: "/logos/lups.png", color: "text-lups-orange", bg: "bg-lups-orange/5", border: "border-lups-orange/20" },
  { slug: "flux", key: "Flux", logo: "/logos/flux.jpg", color: "text-flux-cyan", bg: "bg-flux-cyan/5", border: "border-flux-cyan/20" },
  { slug: "lenndos", key: "LenndOS", logo: "/logos/lenndos.png", color: "text-lenndos-cyan", bg: "bg-lenndos-cyan/5", border: "border-lenndos-cyan/20" },
];

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProductsContent />;
}

function ProductsContent() {
  const t = useTranslations("Products");

  return (
    <>
      <section className="py-20 md:py-28 bg-brand-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t("title")}</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {products.map((prod, i) => (
            <ProductRow key={prod.slug} product={prod} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>
    </>
  );
}

function ProductRow({ product, reverse }: { product: typeof products[0]; reverse: boolean }) {
  const t = useTranslations(product.key);
  const p = useTranslations("Products");

  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>
      <div className={`flex-1 flex items-center justify-center ${product.bg} rounded-2xl p-12 min-h-[200px]`}>
        <Image src={product.logo} alt={t("name")} width={240} height={80} className="h-16 w-auto object-contain rounded-lg" />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-900">{t("name")}</h2>
        <p className={`text-sm font-medium ${product.color} mt-1`}>{t("tagline")}</p>
        <p className="mt-4 text-gray-500 leading-relaxed">{t("heroDescription")}</p>
        <Link
          href={`/${product.slug}` as "/tokeni" | "/lups" | "/flux" | "/lenndos"}
          className={`mt-6 inline-flex items-center gap-1 text-sm font-medium ${product.color} hover:gap-2 transition-all`}
        >
          {p("learnMore")} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
