"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { MapPin, Mail, ArrowRight } from "lucide-react";

export default function ContactoPage() {
  const t = useTranslations("Contact");
  const about = useTranslations("About");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t("title")}</h1>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
                  <p className="text-lg font-medium text-green-800">{t("success")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t("name")}</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-junngla-purple focus:ring-1 focus:ring-junngla-purple outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t("email")}</label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-junngla-purple focus:ring-1 focus:ring-junngla-purple outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t("company")}</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-junngla-purple focus:ring-1 focus:ring-junngla-purple outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t("product")}</label>
                    <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-junngla-purple focus:ring-1 focus:ring-junngla-purple outline-none">
                      <option value="">{t("productPlaceholder")}</option>
                      <option value="tokeni">Tokeni</option>
                      <option value="lups">Lups</option>
                      <option value="flux">Flux</option>
                      <option value="lenndos">LenndOS</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t("message")}</label>
                    <textarea
                      rows={4}
                      placeholder={t("messagePlaceholder")}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-junngla-purple focus:ring-1 focus:ring-junngla-purple outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-junngla-purple px-6 py-3 text-sm font-semibold text-white hover:bg-junngla-purple/90 transition-all disabled:opacity-60"
                  >
                    {sending ? t("sending") : t("submit")}
                    {!sending && <ArrowRight className="h-4 w-4" />}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <Mail className="h-6 w-6 text-junngla-purple mb-2" />
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">{t("emailLabel")}</h3>
                <a href="mailto:conversemos@junngla.com" className="text-sm text-junngla-purple hover:underline">{t("emailValue")}</a>
              </div>

              <div>
                <MapPin className="h-6 w-6 text-junngla-purple mb-2" />
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">{t("offices")}</h3>
                <div className="mt-3 space-y-3">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{about("santiagoCl")}</div>
                    <div className="text-sm text-gray-500">{about("santiagoAddr")}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{about("orlandoUs")}</div>
                    <div className="text-sm text-gray-500">{about("orlandoAddr")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
