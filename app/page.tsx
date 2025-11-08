"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle2,
  Trophy,
  Award,
  Target,
  Globe,
  Calendar,
  MessageCircle,
  X,
  MapPin, // Usando MapPin para o atendimento presencial
  Navigation,
  Clock,
  Loader2,
  Activity, // Substituído Swimmer por Activity
  Gavel, // Substituído Whistle por Gavel
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isPopupOpen, setIsPopupOpen] = useState(false) // State for Checkout Modal
  const [checkoutUrl, setCheckoutUrl] = useState("https://app.primecoaching.com.br/checkout/11285")
  const [isIframeLoading, setIsIframeLoading] = useState(true) // State for iframe loading
  const [isScrolled, setIsScrolled] = useState(false) // State for scroll visibility

  const testimonials = [
    {
      text: "Perdi 18kg em 5 meses e ganhei massa muscular ao mesmo tempo. O acompanhamento do Márcio é diferente de tudo que já tentei. Ele não só prescreve treino, ele entende seu corpo de verdade.",
      name: "Carlos Eduardo Silva",
      initials: "CE",
      role: "Empresário, 42 anos",
    },
    {
      text: "Depois de 3 filhos, achei que nunca mais teria meu corpo de volta. Em 6 meses com o Márcio, não só recuperei como estou melhor do que antes. A abordagem científica dele faz toda diferença.",
      name: "Juliana Mendes",
      initials: "JM",
      role: "Advogada, 38 anos",
    },
    {
      text: "Tentei academias, personal trainers, dietas malucas... nada funcionava. Com o Márcio, entendi que o problema não era falta de esforço, era falta de método. Resultado: -22kg e saúde em dia.",
      name: "Roberto Almeida",
      initials: "RA",
      role: "Médico, 51 anos",
    },
    {
      text: "Estava com problemas hormonais e ninguém conseguia me ajudar. O Márcio, com sua formação em farmácia e educação física, identificou o problema e criou um protocolo que mudou minha vida completamente.",
      name: "Fernanda Costa",
      initials: "FC",
      role: "Professora, 35 anos",
    },
    {
      text: "Nunca imaginei que um acompanhamento online pudesse gerar tanto resultado. O Márcio está sempre disponível, ajusta tudo conforme minha evolução. Já são 15kg a menos e muito mais disposição.",
      name: "João Santos",
      initials: "JS",
      role: "Engenheiro, 29 anos",
    },
    {
      text: "Márcio mudou meu corpo e minha mentalidade. Aprendi que transformação real não é sobre dietas restritivas, é sobre ciência aplicada e consistência. Melhor investimento que já fiz em mim mesmo.",
      name: "Rafael Martins",
      initials: "RM",
      role: "Arquiteto, 44 anos",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev: number) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    // Control body overflow when the checkout modal is open
    if (isPopupOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isPopupOpen]) // isLocationModalOpen removido

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev: number) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev: number) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const openCheckout = (e: React.MouseEvent, url?: string) => {
    e.preventDefault()
    setCheckoutUrl(url || "https://app.primecoaching.com.br/checkout/11285")
    setIsPopupOpen(true)
    setIsIframeLoading(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
    setIsIframeLoading(true)
  }

  // URL de destino robusta para rotas no Google Maps
  const mapsDestinationUrl = "https://www.google.com/maps/dir/?api=1&destination=Av.+Pref.+Alberto+Moura,+15671A,+Portal+da+Serra,+Sete+Lagoas,+MG,+35700-791,+Brazil"

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* BANNER REFACTOR: Absolute positioning for flush left logo, removed main padding */}
      <div className="bg-[#FF5C4D] text-white py-5 font-semibold text-xs sm:text-sm md:text-base sticky top-0 z-40 shadow-lg shadow-[#FF5C4D]/20 relative">
        
        {/* Logo Container (Absolute, flush left, FULL HEIGHT) */}
        <a
          href="#"
          // top-0 h-full ensures the white background covers the orange completely
          className="absolute left-0 top-0 h-full flex items-center bg-white px-3 z-10 transition-all duration-300 sm:shadow-md"
        >
          <Image
            src="/mr-logo-dark.png"
            alt="Márcio Rodrigues Farmacêutico Clínico"
            width={280}
            height={56}
            // Reduced height on mobile (h-10) and kept h-14 for sm: and up
            className="object-contain h-10 sm:h-14 w-auto"
            priority
          />
        </a>

        {/* Text Container (Ensuring text never overlaps the logo) */}
        <div className="max-w-7xl mx-auto flex items-center h-full">
          
          {/* Spacer for Logo on Mobile (w-56 = 224px) - Hidden on Desktop (sm:hidden) */}
          <div className="w-56 flex-shrink-0 sm:hidden" />

          {/* Text Content - Occupies remaining space, centered on mobile, centered on desktop */}
          {/* Added px-2 for subtle breathing room on mobile, and text-center for perfect centering */}
          <div className="flex-1 flex justify-center items-center px-2 sm:px-6 sm:text-center">
            <span className="hidden sm:inline">
              🔥 VAGAS LIMITADAS: Apenas 10 vagas disponíveis este mês para acompanhamento personalizado
            </span>
            {/* Text for mobile is now centered in the remaining space */}
            <span className="sm:hidden text-center">🔥 VAGAS LIMITADAS: 10 vagas este mês</span>
          </div>
        </div>
      </div>

      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/design-mode/Gemini_Generated_Image_ur7fnxur7fnxur7f.png"
            alt="Background"
            fill
            className="object-cover opacity-50 scale-105 animate-[zoom_20s_ease-in-out_infinite_alternate]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-[fadeIn_1s_ease-out]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-balance animate-[slideUp_0.8s_ease-out]">
              TRANSFORME SEU <span className="text-[#FF5C4D]">CORPO</span> COM CIÊNCIA, TÉCNICA E RESULTADOS REAIS
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed text-pretty animate-[slideUp_1s_ease-out]">
              Mais de 3 mil vidas transformadas através de um método científico comprovado. Chegou a sua vez de alcançar o
              corpo que você sempre quis.
            </p>
            <button
              onClick={(e) => openCheckout(e)}
              className="inline-flex items-center justify-center bg-[#FF5C4D] hover:bg-[#FF5C4D]/90 text-white font-bold px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-base sm:text-lg rounded-full mt-6 sm:mt-8 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#FF5C4D]/50 animate-[slideUp_1.2s_ease-out] focus:outline-none focus:ring-4 focus:ring-[#FF5C4D]/50 min-h-[48px]"
            >
              QUERO COMEÇAR AGORA <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              TREINAMENTO DE <span className="text-[#FF5C4D]">ELITE</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
              Método testado e aprovado por atletas de alto rendimento
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { src: "/training-pushup.png", label: "FORÇA" },
              { src: "/training-pullup.png", label: "FUNCIONAL" },
              { src: "/training-squat.png", label: "HIPERTROFIA" },
              { src: "/training-outdoor.png", label: "PERFORMANCE" },
              { src: "/training-flex.png", label: "DEFINIÇÃO" },
              { src: "/training-rowing.png", label: "RESISTÊNCIA" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={`Treinamento ${item.label}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:from-[#FF5C4D]/80 transition-all duration-500" />
                <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 text-white transform group-hover:scale-110 transition-transform duration-300">
                  <div className="font-bold text-xs sm:text-sm md:text-base">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
              CONHEÇA O <span className="text-[#FF5C4D]">TREINADOR</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <div className="relative px-4 sm:px-0">
              <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-[#FF5C4D]/20 hover:shadow-[#FF5C4D]/40 transition-shadow duration-500">
                <Image
                  src="/images/marcio-rodrigues-profile-v3.jpg" // Novo caminho da imagem
                  alt="Márcio Rodrigues"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-[#FF5C4D] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-[#FF5C4D]/50 animate-bounce">
                +20 ANOS DE EXPERIÊNCIA
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 px-4 sm:px-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Dr. Márcio Rodrigues</h3>
              <p className="text-[#FF5C4D] text-base sm:text-lg font-semibold">
                Farmacêutico Clínico • Especialista em Saúde, Performance e Longevidade
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed hover:text-white/90 transition-colors">
                Com mais de <strong className="text-[#FF5C4D]">20 anos de experiência</strong> na área de Educação Física e Ciências da Saúde, o Dr. Márcio Rodrigues construiu uma trajetória marcada pela união entre ciência, prática clínica e resultados reais.
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed hover:text-white/90 transition-colors">
                Profissional formado em Educação Física, Farmácia e Química, e graduando em Nutrição, unindo ciência e performance para transformar seu corpo com precisão.
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed hover:text-white/90 transition-colors">
                Ao longo de sua carreira, já acompanhou e transformou mais de <strong className="text-[#FF5C4D]">3 mil vidas</strong>, aplicando uma abordagem personalizada, científica e humanizada para promover saúde, performance e qualidade de vida.
              </p>
              {/* RQE Badge - UI/UX ENHANCEMENT */}
              <div className="pt-2">
                <span className="inline-block bg-zinc-800/50 border border-[#FF5C4D]/50 text-[#FF5C4D] px-3 py-1 rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-[#FF5C4D]/10 transition-all hover:scale-[1.02]">
                  📋 RQE 18049-10
                </span>
              </div>
            </div>
            
            {/* NOVO BLOCO DE CERTIFICAÇÃO PARA CONFIANÇA E SEGURANÇA */}
            <div className="md:col-span-2 pt-10">
                <div className="text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#FF5C4D]">COMPROMISSO COM A EXCELÊNCIA</h3>
                    <p className="text-white/70 mt-2 text-sm sm:text-base">Sua saúde e performance são garantidas por certificações de alto nível.</p>
                </div>
                {/* UI/UX REFACTOR: Aplicando estilo de card/modal destacado */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 p-8 bg-zinc-900 rounded-2xl border border-white/10 shadow-2xl shadow-black/70">
                    
                    {/* Imagem do Certificado */}
                    <div className="relative w-full max-w-[300px] aspect-[4/3] flex-shrink-0">
                        <img
                            src="https://i.imgur.com/KtUfHWT.png"
                            alt="Certificado Sociedade Brasileira de Personal"
                            className="object-contain rounded-lg shadow-2xl shadow-black/50 border-2 border-white/10 w-full h-full"
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    
                    {/* Copy de Confiança */}
                    <div className="text-center sm:text-left space-y-3">
                        <div className="flex items-center justify-center sm:justify-start gap-2">
                            <Award className="h-6 w-6 text-[#FF5C4D] flex-shrink-0" />
                            <p className="text-lg font-bold text-white">Certificado pela Sociedade Brasileira de Personal</p>
                        </div>
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                            O Dr. Márcio Rodrigues é um profissional certificado, garantindo que seu acompanhamento segue os mais rigorosos padrões de qualidade e ciência do treinamento físico no Brasil.
                        </p>
                        <p className="text-[#FF5C4D] font-semibold text-sm">
                            Treine com segurança, treine com quem tem credibilidade.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
              <span className="text-[#FF5C4D]">CONQUISTAS</span> QUE INSPIRAM
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {[
              { icon: Trophy, number: "15", label: "Anos de boxe" },
              { icon: Award, number: "3x", label: "Campeão Brasileiro" },
              { icon: Target, number: "4x", label: "Campeão Regional" },
              { icon: Globe, number: "2x", label: "Campeão Mundial" },
              { icon: Activity, number: "Atleta", label: "Natação" }, // Usando Activity
              { icon: Gavel, number: "Árbitro", label: "Atletismo" }, // Usando Gavel
              { icon: Gavel, number: "Árbitro", label: "Natação" }, // Usando Gavel
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-black border-[#FF5C4D]/20 p-4 sm:p-8 rounded-xl sm:rounded-2xl text-center hover:border-[#FF5C4D] hover:scale-105 hover:shadow-2xl hover:shadow-[#FF5C4D]/30 transition-all duration-500 cursor-pointer group"
              >
                <item.icon className="h-8 w-8 sm:h-12 sm:w-12 text-[#FF5C4D] mx-auto mb-2 sm:mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                <div className="text-xl sm:text-3xl font-bold text-[#FF5C4D] mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                  {item.number}
                </div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-wide">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
              ATENDIMENTO <span className="text-[#FF5C4D]">PERSONALIZADO</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Escolha o formato que melhor se adapta à sua rotina
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
            <Card className="bg-white text-black p-6 sm:p-10 rounded-xl sm:rounded-2xl border-0 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center text-2xl sm:text-3xl hover:rotate-12 transition-transform duration-300">
                  💻
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">CONSULTORIA ONLINE</h3>
                <p className="text-black/70 text-sm sm:text-lg leading-relaxed">
                  Acompanhamento remoto completo com ajustes semanais de treino, dieta e suplementação. Atendimento via
                  WhatsApp com resposta em até 24h.
                </p>
              </div>
            </Card>

            {/* CARD DE ATENDIMENTO PRESENCIAL COM LINK CORRIGIDO */}
            <Card 
              className="relative bg-[#FF5C4D] text-white p-6 sm:p-10 rounded-xl sm:rounded-2xl border-0 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF5C4D]/50 transition-all duration-500 cursor-pointer group"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center text-2xl sm:text-3xl hover:rotate-12 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-[#FF5C4D]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">ATENDIMENTO PRESENCIAL</h3>
                <p className="text-white/90 text-sm sm:text-lg leading-relaxed">
                  Sessões presenciais exclusivas no <span className="font-bold text-white">Spa Serra</span> (Sete Lagoas/MG). Avaliações físicas completas, ajustes imediatos e acompanhamento personalizado para maximizar cada treino.
                </p>
                
                {/* BOTÃO BOUNCING COM LINK CORRIGIDO */}
                <div className="pt-4">
                  <a
                    href={mapsDestinationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#FF5C4D] font-bold px-4 py-2 rounded-full text-xs sm:text-sm shadow-lg shadow-black/30 transition-all hover:scale-[1.05] animate-bounce"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MapPin className="h-4 w-4" />
                    VER ENDEREÇO (SPA SERRA)
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
              ESCOLHA SEU <span className="text-[#FF5C4D]">PLANO</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Invista na sua transformação com planos flexíveis e resultados garantidos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {[
              // 1. Acompanhamento Farmacoterapêutico (R$ 130)
              {
                icon: "💊",
                title: "Acompanhamento Farmacoterapêutico",
                price: "130",
                period: "/consulta",
                features: [
                  "Análise de medicamentos",
                  "Otimização do tratamento",
                  "Redução de riscos",
                  "Consulta individual",
                ],
                url: "https://pay.primecoaching.com.br/c/965ca19842900277ccbdca710821968b6d83b279",
                highlight: false,
              },
              // 2. Plano Mensal (R$ 200)
              {
                icon: "📅",
                title: "Plano Mensal",
                price: "200",
                period: "/mês",
                features: ["Treino personalizado", "Ajustes semanais", "Suporte via WhatsApp", "Avaliação mensal"],
                url: "https://app.primecoaching.com.br/checkout/plan/21482",
                highlight: false,
              },
              // 3. Plano Semestral (R$ 700)
              {
                icon: "📆",
                title: "Plano Semestral",
                price: "700",
                period: "/6 meses",
                features: ["Tudo do plano mensal", "Economia de 42%", "Suporte prioritário", "Avaliações bimestrais"],
                url: "https://app.primecoaching.com.br/checkout/plan/21868",
                highlight: false,
              },
              // 4. Plano Anual (R$ 1.000) - Maior preço absoluto, mas melhor custo-benefício (mantido como destaque)
              {
                icon: "🏆",
                title: "Plano Anual",
                price: "1.000",
                period: "/ano",
                features: [
                  "Tudo do plano mensal",
                  "Economia de 58%",
                  "Prioridade no atendimento",
                  "Bônus exclusivos",
                  "Avaliação física completa",
                ],
                url: "https://app.primecoaching.com.br/checkout/plan/21869",
                highlight: true,
                badge: "MAIS POPULAR",
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative flex flex-col h-full ${
                  plan.highlight
                    ? "bg-gradient-to-br from-[#FF5C4D] to-[#FF5C4D]/80 border-[#FF5C4D] scale-105 shadow-2xl shadow-[#FF5C4D]/50"
                    : "bg-black border-[#FF5C4D]/30"
                } p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer group`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#FF5C4D] px-4 py-1.5 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-6 flex-1 flex flex-col">
                  <div>
                    <div className="text-4xl sm:text-5xl mb-4">{plan.icon}</div>
                    <h3
                      className={`text-xl sm:text-2xl font-bold mb-3 ${plan.highlight ? "text-white" : "text-white"} text-balance leading-tight`}
                    >
                      {plan.title}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span
                        className={`text-3xl sm:text-4xl font-bold ${plan.highlight ? "text-white" : "text-[#FF5C4D]"}`}
                      >
                        R$ {plan.price}
                      </span>
                      <span className={`text-base sm:text-lg ${plan.highlight ? "text-white/80" : "text-white/60"}`}>
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`h-5 w-5 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-white" : "text-[#FF5C4D]"}`}
                        />
                        <span className={`text-sm sm:text-base ${plan.highlight ? "text-white/90" : "text-white/80"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={(e) => openCheckout(e, plan.url)}
                    className={`w-full ${
                      plan.highlight
                        ? "bg-white text-[#FF5C4D] hover:bg-white/90"
                        : "bg-[#FF5C4D] text-white hover:bg-[#FF5C4D]/90"
                    } font-bold px-6 py-4 rounded-full transition-all hover:scale-105 shadow-lg text-sm sm:text-base min-h-[48px] focus:outline-none focus:ring-4 focus:ring-white/50`}
                  >
                    Começar agora
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF5C4D] rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF5C4D] rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 bg-[#FF5C4D]/10 border border-[#FF5C4D]/30 rounded-full px-4 py-2 mb-4 sm:mb-6 hover:bg-[#FF5C4D]/20 transition-colors">
                <Calendar className="h-4 w-4 text-[#FF5C4D]" />
                <span className="text-[#FF5C4D] text-xs sm:text-sm font-semibold">AGENDE SUA CONSULTA</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2 text-balance">
                PRONTO PARA <span className="text-[#FF5C4D]">TRANSFORMAR</span> SEU CORPO?
              </h2>

              <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 px-4 text-pretty">
                Agende agora uma conversa gratuita pelo WhatsApp e descubra como o método científico pode revolucionar
                seus resultados em tempo recorde.
              </p>
            </div>

            <Card className="bg-gradient-to-br from-zinc-950 to-black border-[#FF5C4D]/30 p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl shadow-[#FF5C4D]/10 border-dashed border-2 hover:border-[#FF5C4D]/50 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { title: "Análise Personalizada", desc: "Avaliação completa do seu perfil e objetivos" },
                      { title: "Plano Estratégico", desc: "Protocolo personalizado baseado em ciência" },
                      { title: "Sem Compromisso", desc: "Tire suas dúvidas antes de decidir" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FF5C4D]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF5C4D]/40 group-hover:scale-110 transition-all duration-300">
                          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#FF5C4D]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-base sm:text-lg mb-1 text-lime-500">{item.title}</h3>
                          <p className="text-white/70 text-sm sm:text-base">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-black/50 border border-[#FF5C4D]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-[#FF5C4D]/40 hover:scale-105 transition-all duration-300">
                    <MessageCircle className="h-10 w-10 sm:h-12 sm:w-12 text-[#FF5C4D] mx-auto mb-3 sm:mb-4 animate-bounce" />
                    <h3 className="font-bold text-lg sm:text-xl mb-2">Atendimento Imediato</h3>
                    <p className="text-white/70 text-xs sm:text-sm mb-4">Resposta em até 1 hora no horário comercial</p>
                    <div className="text-white/60 text-xs sm:text-sm">Segunda a Sábado, 8h às 20h</div>
                  </div>

                  <a
                    href="https://api.whatsapp.com/message/2LAGIQXOWPUUJ1?autoload=1&app_absent=0&text=Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-full transition-all hover:scale-110 shadow-lg shadow-[#25D366]/20 text-sm sm:text-base"
                  >
                    <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                    FALAR COM MÁRCIO NO WHATSAPP
                  </a>

                  <p className="text-center text-white/50 text-xs sm:text-sm">
                    ⚡ Vagas limitadas • Resposta garantida
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                📍 ENCONTRE-NOS <span className="text-[#FF5C4D]">FACILMENTE</span>
              </h2>
              <p className="text-white/85 text-lg max-w-2xl mx-auto leading-relaxed">
                Nossa clínica está localizada em uma área de fácil acesso em Sete Lagoas, com estacionamento gratuito e
                toda a estrutura necessária para seu atendimento presencial. Venha nos conhecer!
              </p>
            </div>

            {/* Map Container */}
            <div className="relative mb-10">
              <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl shadow-[#FF5C4D]/20 hover:shadow-[#FF5C4D]/40 transition-all duration-500 hover:scale-[1.01] border-2 border-[#FF5C4D]/30">
                <iframe
                  src="https://www.google.com/maps?q=Av.+Pref.+Alberto+Moura,+15671A,+Portal+da+Serra,+Sete+Lagoas,+MG,+35700-791,+Brazil&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Farmácia do Shape"
                  className="grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Address Info and Button */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* Address Card */}
              <Card className="bg-zinc-950 border-[#FF5C4D]/30 p-8 rounded-2xl hover:border-[#FF5C4D] transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#FF5C4D]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-7 w-7 text-[#FF5C4D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-[#FF5C4D]">Endereço</h3>
                    <p className="text-white/90 text-base leading-relaxed">
                      Av. Pref. Alberto Moura, 15671A
                      <br />
                      Portal da Serra
                      <br />
                      Sete Lagoas - MG, 35700-791
                    </p>
                  </div>
                </div>
              </Card>

              {/* Hours Card */}
              <Card className="bg-zinc-950 border-[#FF5C4D]/30 p-8 rounded-2xl hover:border-[#FF5C4D] transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#FF5C4D]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-7 w-7 text-[#FF5C4D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-[#FF5C4D]">Horário</h3>
                    <p className="text-white/90 text-base leading-relaxed">
                      Seg - Sex: 8h às 20h
                      <br />
                      Sábado: 8h às 14h
                      <br />
                      <span className="text-white/60">Domingo: Fechado</span>
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Button com LINK CORRIGIDO */}
            <div className="text-center">
              <a
                href={mapsDestinationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#FF5C4D] hover:bg-[#FF5C4D]/90 text-white font-bold px-10 py-5 rounded-full transition-all hover:scale-105 shadow-lg shadow-[#FF5C4D]/30 hover:shadow-[#FF5C4D]/50 text-lg focus:outline-none focus:ring-4 focus:ring-white/50"
              >
                <Navigation className="h-6 w-6" />
                Ver rota no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-black">
        {/* Empty section, possibly for future content or spacing */}
      </section>

      {/* MODAL DE CHECKOUT (EXISTENTE) */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-[fadeIn_0.2s_ease-out]"
          onClick={closePopup}
        >
          <div
            className="relative w-full max-w-2xl h-[92vh] sm:h-[90vh] rounded-2xl sm:rounded-3xl bg-white shadow-2xl overflow-hidden animate-[scaleUp_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center transition-all hover:scale-110 hover:rotate-90 duration-300 shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-label="Fechar"
            >
              <X className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>

            {isIframeLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                <div className="text-center space-y-4 px-4">
                  <Loader2 className="h-12 w-12 sm:h-14 sm:w-14 text-[#FF5C4D] animate-spin mx-auto" />
                  <p className="text-gray-600 font-medium text-base sm:text-lg">Carregando checkout...</p>
                </div>
              </div>
            )}

            <iframe
              src={checkoutUrl}
              className="w-full h-full border-0 rounded-2xl sm:rounded-3xl"
              title="Checkout"
              allow="payment"
              onLoad={() => setIsIframeLoading(false)} // Set loading to false when iframe loads
            />
          </div>
        </div>
      )}
    </div>
  )
}