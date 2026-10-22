"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Award, CheckCircle2, Loader2, X } from "lucide-react"
import { Card } from "@/components/ui/card"

const plans = [
  {
    title: "Plano Mensal",
    price: "200",
    period: "/mês",
    features: [
      "Treino personalizado",
      "Ajustes semanais",
      "Suporte via WhatsApp",
      "Avaliação mensal",
      "Dieta personalizada",
      "Prescrição de pedidos de exame bioquímicos",
      "Prescrição de suplementos e vitaminas",
    ],
    url: "https://app.primecoaching.com.br/checkout/plan/21482",
  },
  {
    title: "Plano Semestral",
    price: "700",
    period: "/6 meses",
    features: [
      "Tudo do plano mensal",
      "Economia de 42%",
      "Suporte prioritário",
      "Avaliações bimestrais",
      "Dieta personalizada",
      "Prescrição de pedidos de exame bioquímicos",
      "Prescrição de suplementos e vitaminas",
    ],
    url: "https://app.primecoaching.com.br/checkout/plan/21868",
  },
  {
    title: "Plano Anual",
    price: "1.000",
    period: "/ano",
    features: [
      "Tudo do plano mensal",
      "Economia de 58%",
      "Prioridade no atendimento",
      "Bônus exclusivos",
      "Avaliação física completa",
      "Dieta personalizada",
      "Prescrição de pedidos de exame bioquímicos",
      "Prescrição de suplementos e vitaminas",
    ],
    url: "https://app.primecoaching.com.br/checkout/plan/21869",
    highlight: true,
  },
]

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [checkoutUrl, setCheckoutUrl] = useState(plans[0].url)
  const [isIframeLoading, setIsIframeLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isPopupOpen])

  const openCheckout = (event: React.MouseEvent, url: string) => {
    event.preventDefault()
    setCheckoutUrl(url)
    setIsIframeLoading(true)
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
    setIsIframeLoading(true)
  }

  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 sm:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 sm:gap-16">
        <section id="planos" className="scroll-mt-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.price}
                className={`relative flex min-h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${
                  plan.highlight
                    ? "bg-gradient-to-br from-[#FF5C4D] to-[#FF5C4D]/80 shadow-2xl shadow-[#FF5C4D]/30"
                    : "border-2 border-dashed border-[#FF5C4D]/40 bg-zinc-950"
                }`}
              >
                <div className="flex flex-1 flex-col gap-6">
                  <div>
                    <h2 className="text-xl font-bold leading-tight sm:text-2xl">{plan.title}</h2>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-[#FF5C4D]"}`}>
                        R$ {plan.price}
                      </span>
                      <span className={plan.highlight ? "text-white/80" : "text-white/60"}>{plan.period}</span>
                    </div>
                  </div>

                  <ul className="flex flex-1 flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm sm:text-base">
                        <CheckCircle2 className={`mt-0.5 size-5 shrink-0 ${plan.highlight ? "text-white" : "text-[#FF5C4D]"}`} />
                        <span className={plan.highlight ? "text-white/90" : "text-white/80"}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={(event) => openCheckout(event, plan.url)}
                    className={`min-h-12 w-full rounded-full px-6 py-4 text-sm font-bold transition-all hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-[#FF5C4D]/40 sm:text-base ${
                      plan.highlight ? "bg-white text-[#FF5C4D] hover:bg-white/90" : "bg-[#FF5C4D] text-white hover:bg-[#FF5C4D]/90"
                    }`}
                  >
                    Começar agora
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-3xl" aria-label="Certificado">
          <Card className="flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-zinc-950 p-6 text-center sm:p-8">
            <div className="relative aspect-[4/3] w-full max-w-[300px] overflow-hidden rounded-lg border-2 border-white/10 shadow-2xl shadow-black/50">
              <img
                src="https://i.imgur.com/KtUfHWT.png"
                alt="Certificado Sociedade Brasileira de Personal"
                className="size-full object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center gap-2">
                <Award className="size-6 shrink-0 text-[#FF5C4D]" />
                <p className="text-lg font-bold text-white">Certificado pela Sociedade Brasileira de Personal</p>
              </div>
              <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                O Dr. Márcio Rodrigues é um profissional certificado, garantindo que seu acompanhamento segue os mais rigorosos padrões de qualidade e ciência do treinamento físico no Brasil.
              </p>
              <p className="text-sm font-semibold text-[#FF5C4D]">Treine com segurança, treine com quem tem credibilidade.</p>
            </div>
          </Card>
        </section>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md" onClick={closePopup}>
          <div className="relative h-[92vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button
              onClick={closePopup}
              className="absolute right-3 top-3 z-20 flex size-12 items-center justify-center rounded-full bg-black/80 text-white transition-transform hover:scale-105"
              aria-label="Fechar"
            >
              <X className="size-6" />
            </button>
            {isIframeLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-white">
                <Loader2 className="size-12 animate-spin text-[#FF5C4D]" />
              </div>
            )}
            <iframe
              src={checkoutUrl}
              title="Checkout"
              className="size-full border-0"
              onLoad={() => setIsIframeLoading(false)}
            />
          </div>
        </div>
      )}
    </main>
  )
}
