import { useEffect, useRef, useState } from 'react';
import { Brain, Check, Lock, MessageCircle, Shield, Sparkles, Volume2, VolumeX, X, ThumbsDown, Frown, Smile } from 'lucide-react';
import CTAButton from './components/CTAButton';
import Timer from './components/Timer';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import ProgressBar from './components/ProgressBar';
import AboutJuliana from './components/AboutJuliana';

function App() {
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => console.error('Autoplay was prevented:', error));
    }
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const { currentTime, duration } = videoRef.current;
      const pct = (currentTime / duration) * 100;
      setProgress(pct);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const whatYouGet = [
    {
      title: 'A Chave da Reprogramação Mental',
      desc: 'Exercícios neurocientíficos guiados para reestruturar respostas automáticas da sua mente.',
    },
    {
      title: 'Protocolos de Ação Rápida',
      desc: 'Técnicas para momentos de crise, ansiedade e travas internas.',
    },
    {
      title: 'Rituais Mentais Diários',
      desc: 'Práticas de 5 minutos que reprogramam padrões.',
    },
    {
      title: 'Áudios de Reprogramação',
      desc: 'Ferramentas para reduzir ruído mental e fortalecer foco.',
    },
    {
      title: 'Como recuperar sua Inteligência Emocional',
      desc: 'Aprenda a controlar suas emoções até mesmo nos momentos mais instáveis.',
    },
    {
      title: 'Mapa da Autossabotagem',
      desc: 'Identifique as raízes da sabotagem invisível.',
    },
    {
      title: 'Acesso à Área VIP de Membros',
      desc: 'Acesso à área exclusiva que apenas quem adquiriu o método tem acesso.',
    },
    {
      title: 'Acesso Completo',
      desc: 'Acesso vitalício com atualizações constantes.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a1a1a] to-black text-white overflow-x-hidden responsive-copy">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(240,213,140,0.1),transparent_50%)]" />

        <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-2">
          <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F7F4EE] mb-8 leading-[1.08] max-w-4xl mx-auto text-balance">
            Se você não dominar sua mente, ela <span className="text-wine-shine whitespace-normal break-words">domina você.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#F7F4EE]/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Se você sente que luta contra si mesma… é porque um padrão escondido está vencendo por você. Ele opera no silêncio, decide no seu lugar e te empurra para os mesmos ciclos que você tenta escapar. Você sente a trava, o aperto, a dúvida, mas nunca vê de onde isso vem. E enquanto esse padrão existir, ele vai continuar controlando seus passos…sem que você perceba que não está no comando.
          </p>
          <div className="mb-10 flex justify-center">
            <div className="relative max-w-xs w-full aspect-[9/16] bg-gold-shine p-1 rounded-3xl shadow-2xl">
              <div className="relative w-full h-full bg-black rounded-[22px] overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="/VSL.mp4"
                  autoPlay
                  loop
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                />
                <div className="absolute top-4 right-4">
                  <button onClick={toggleMute} className="text-white bg-black/50 rounded-full p-2">
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full opacity-65">
                  <ProgressBar progress={progress} />
                </div>
              </div>
            </div>
          </div>

          <CTAButton showSubtext={true} />
        </div>
      </section>

      {/* O CIRCUITO DA PROTEÇÃO INVERTIDA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
                    <h2 className="font-serif text-4xl md:text-5xl text-[#F7F4EE] mb-6">A culpa não é sua. É algo dentro de você te <span className="text-wine-shine">sabotando em silêncio.</span></h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-left mb-12">
            {[
              { title: 'Te travando', icon: ThumbsDown },
              { title: 'Te drenando', icon: ThumbsDown },
              { title: 'Te fazendo procrastinar', icon: ThumbsDown },
              { title: 'Te convencendo a desistir', icon: ThumbsDown },
              { title: 'Te jogando para Velhos Hábitos', icon: ThumbsDown },
            ].map((item, index) => (
              <div
                key={index}
                className="h-full bg-gradient-to-br from-[#1A1A1A] to-[#252525] p-5 rounded-2xl border border-gold-shine/20 flex items-start gap-3"
              >
                <item.icon className="w-6 h-6 text-gold flex-shrink-0" />
                <p className="text-[#F7F4EE]/90 leading-relaxed text-base md:text-lg">{item.title}</p>
              </div>
            ))}
          </div>

          <h3 className="font-serif text-3xl md:text-4xl text-[#F7F4EE] mb-4">
            PORQUE ESSE CIRCUITO EXISTE?
          </h3>
          <p className="text-lg md:text-xl text-[#F7F4EE]/80 mb-8 max-w-3xl mx-auto">
            Seu cérebro aprendeu, ao longo da vida, que certas emoções como frustração, cobrança, rejeição ou falha são perigosas.
            Para evitar que você “sofra de novo”, ele cria atalhos emocionais:
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-left mb-12">
            {[
              'desânimo repentino',
              'cansaço do nada',
              'falta de foco',
              'sensação de incapacidade',
              'pensamentos automáticos negativos',
            ].map((item, index) => (
              <div
                key={index}
                className="h-full bg-gradient-to-br from-[#1A1A1A] to-[#252525] p-5 rounded-2xl border border-gold-shine/20 flex items-start gap-3"
              >
                <Frown className="w-5 h-5 text-gold flex-shrink-0" />
                <p className="text-[#F7F4EE]/90 leading-relaxed text-base md:text-lg capitalize">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center space-y-6 text-lg md:text-xl text-[#F7F4EE]/85 max-w-4xl mx-auto">
            <p>
              Ele te protege do que já passou e te impede do que você quer construir. Faz isso do pior jeito possível: te paralisando, te drenando, te acovardando. Mas existe um jeito de corrigir isso, e a solução a neurociência chama de reconexão neural: quando você treina o cérebro a responder de outra forma, criando novos caminhos, novas respostas e um novo comportamento emocional. A Chave da Reprogramação Mental trabalha para te tirar desse ciclo, busca trazer de volta a sua reconexão neural:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Interrompe o circuito que te trava',
                'Ensina sua mente a te impulsionar',
                'Reprograma respostas automáticas',
                'Quebra ciclos emocionais repetitivos',
                'Traz clareza mental e te faz agir, não só pensar',
                'Você para de lutar contra si mesma',
              ].map((item, index) => (
                <div
                  key={index}
                  className="h-full bg-gradient-to-br from-[#1A1A1A] to-[#252525] p-5 rounded-2xl border border-gold-shine/20 flex items-start gap-3"
                >
                  <Smile className="w-6 h-6 text-gold flex-shrink-0" />
                  <p className="text-[#F7F4EE]/90 leading-relaxed text-base md:text-lg text-left">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-wine-shine font-semibold text-xl">
              Esse método não é apenas um método comum, é um método pensado para você acabar de vez com esse inimigo invisível que está acabando com sua vida aos poucos.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <CTAButton />
          </div>
        </div>
      </section>





      {/* SOBRE JULIANA */}
      <AboutJuliana />

      {/* A CHAVE PARA A REPROGRAMAÇÃO MENTAL */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-[#F7F4EE] mb-8">
            A CHAVE PARA A REPROGRAMAÇÃO MENTAL
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-[#F7F4EE]/90 leading-relaxed mb-12">
            <p>
              Você não está travada. É a sua mente te protegendo do jeito errado: ela te sabota, drena sua energia e te faz acreditar que nunca vai vencer. Isso não é fraqueza, entenda que não é culpa sua. É um padrão automático que age antes de você perceber. 
            </p>

            <p>
              A Chave Para Reprogramação Mental corrige exatamente esse circuito. Ela ensina sua mente a parar de te bloquear e começar a te impulsionar. Quando o circuito muda, o vazio some e a autossabotagem perde força.
            </p>
            <p>
              No final, só existe uma escolha: assumir o controle agora ou continuar sendo controlada pela própria mente.
            </p>
          </div>
          <CTAButton />
        </div>
      </section>

      {/* POR QUE ISSO FUNCIONA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Brain className="w-12 h-12 text-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-gold mb-8 tracking-wide">
            POR QUE NEUROCIÊNCIA É A SOLUÇÃO?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: Brain,
                title: 'Neuroplasticidade',
                text: 'O seu cérebro não é fixo. Ele se molda, se adapta, se reconstrói. Esse fenômeno chama-se neuroplasticidade.',
              },
              {
                icon: Sparkles,
                title: 'Trilhas Mentais',
                text: 'Cada pensamento que você repete cria uma trilha neural. Cada crença limitante que você alimenta se fortalece.',
              },
              {
                icon: Lock,
                title: 'Reprogramação',
                text: 'Mas o oposto também é verdade: você pode reprogramar essas trilhas, criar novos caminhos e ensinar o seu cérebro a acreditar em você novamente.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#252525] p-6 rounded-2xl border border-gold-shine/20 hover:border-gold-shine/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold-shine rounded-full flex items-center justify-center mb-4 text-black">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-[#F7F4EE] font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-[#F7F4EE]/90 leading-relaxed text-base md:text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ VAI RECEBER */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-[#F7F4EE] text-center mb-16">
            O QUE VEM NESSE MEGA PACOTE?
          </h2>
          <p className="text-center text-lg md:text-xl text-[#F7F4EE]/80 mb-10">
            Com esse método, além do produto principal, você levará +7 Bônus Exclusivos juntos:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatYouGet.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#252525] p-6 rounded-2xl border border-gold-shine/20 hover:border-gold-shine/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gold-shine rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-[#F7F4EE] font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-[#F7F4EE]/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA NA PRÁTICA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-[#F7F4EE] text-center mb-12">
            COMO FUNCIONA NA PRÁTICA?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'Duração', value: '21 dias de treinamento intensivo' },
              { label: 'Resultados', value: '4 a 7 dias' },
              { label: 'Tempo por dia', value: '5–10 minutos' },
              { label: 'Formato', value: 'Exercícios, áudios e passos guiados' },
              { label: 'Objetivo', value: 'Quebrar padrões de autossabotagem' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#252525] p-6 rounded-2xl border border-gold-shine/20"
              >
                <span className="text-gold font-semibold text-lg">{item.label}:</span>
                <p className="text-[#F7F4EE] text-xl mt-2">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-[#F7F4EE] text-center mb-12">
            O QUE ELAS ESTÃO DIZENDO
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#252525] rounded-2xl border border-solid border-gold flex items-center justify-center overflow-hidden">
              <img
                src="/1.PNG"
                alt="Depoimento 1"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#252525] rounded-2xl border border-solid border-gold flex items-center justify-center overflow-hidden">
              <img
                src="/2.PNG"
                alt="Depoimento 2"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#252525] rounded-2xl border border-solid border-gold flex items-center justify-center overflow-hidden">
              <img
                src="/3.PNG"
                alt="Depoimento 3"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRÉVIA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#F7F4EE] mb-12">
            UMA PRÉVIA DO QUE TE ESPERA
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { id: 1, src: '/prova 1.PNG.png', alt: 'Prova 1' },
              { id: 2, src: '/prova 2.png', alt: 'Prova 2' },
              { id: 3, src: '/prova 3.png', alt: 'Prova 3' },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#252525] rounded-2xl border border-gold-shine flex items-center justify-center overflow-hidden"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-[#F7F4EE] text-center mb-12">
            ESSE MÉTODO FOI FEITO PARA VOCÊ
          </h2>

          <div className="grid md:grid-cols-1 gap-8">
            <div className="space-y-4">

              {[
                'Sente que a própria mente atrapalha',
                'Vive repetindo os mesmos ciclos',
                'Você começa e trava no meio',
                'Busca clareza emocional e leveza',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <span className="text-[#F7F4EE] text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA/B?NUS/VALOR/FAQ/FOOTER (mantidos) */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10 animate-pulse-scale">
            <div className="text-center">
              <span className="inline-flex items-center justify-center bg-gold-shine text-black font-extrabold px-8 md:px-12 py-4 md:py-5 rounded-full text-2xl md:text-4xl uppercase tracking-[0.25em] drop-shadow-[0_0_25px_rgba(240,213,140,0.65)]">
                Promoção exclusiva da Black Friday
              </span>
            </div>
            <div className="p-1 rounded-3xl bg-gold-shine">
              <div className="bg-gradient-to-br from-[#0A0A0A] to-black p-8 md:p-12 pt-6 md:pt-8 rounded-[22px] relative overflow-visible">
                <div className="text-center mb-8">
                  <p className="text-[#F7F4EE]/90 text-base md:text-lg mt-0 max-w-2xl mx-auto leading-relaxed">
                    Hoje estou fazendo algo que nunca fiz: estou liberando gratuitamente um dos meus materiais mais poderosos. Ele nunca foi disponibilizado assim antes, e eu não sei quando (ou se) isso vai acontecer de novo. É uma chance única e só está disponível agora, durante essa promoção. Perder isso significa voltar para os mesmos ciclos... e você sabe disso.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#252525] p-8 rounded-2xl border border-gold-shine/30 mb-8">
                  <h3 className="text-gold text-2xl font-semibold mb-4">
                    O Fim da Ansiedade - Aprenda a Silenciar o Caos
                  </h3>
                  <p className="text-[#F7F4EE]/90 text-lg leading-relaxed">
                    Eu sei como a ansiedade te domina e rouba sua paz. Mas existe um interruptor dentro da sua mente, e este bônus te mostra como acioná-lo. Quando você ativa esse poder, o caos se silencia e o medo perde força.
                  </p>
                </div>

                <p className="text-[#F7F4EE] text-center text-xl md:text-2xl font-semibold leading-relaxed">
                  A única diferença entre quem muda e quem continua travada... é aproveitar oportunidades como essa. Vai mesmo deixar escapar essa chance?
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <CTAButton />
          </div>
        </div>
      </section>



      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-[#F7F4EE] text-center mb-12">
            Essa é a decisão que muda tudo.
          </h2>
          <div className="p-1 rounded-3xl mb-12 bg-gold-shine">
            <div className="bg-black p-8 md:p-12 rounded-[22px] text-center">
              <h3 className="font-serif text-3xl md:text-4xl text-[#F7F4EE] mb-6">
                Esta Oferta Expira Em:
              </h3>
              <Timer />
              <p className="text-[#F7F4EE]/80 text-lg mt-8">
                Acesso imediato. O resultado fala tão alto que não precisa de promessa.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#252525] p-8 md:p-12 rounded-3xl border border-gold-shine/20">
            <div className="space-y-4 mb-8">
              {[
                { item: 'A Chave da Reprogramação', value: 'R$99,90' },
                { item: 'Bônus - O Fim da Ansiedade', value: 'R$99,90' },
                { item: 'Protocolo de Ação Rápida', value: 'R$49,90' },
                { item: 'Rituais Mentais Diários', value: 'R$49,90' },
                { item: 'Como recuperar Sua Inteligência Emocional', value: 'R$49,90' },
                { item: 'Áudios de Reprogramação Mental', value: 'R$29,90' },
                { item: 'Mapa da Autossabotagem', value: 'R$19,90' },

              ].map((row, index) => (
                <div key={index} className="grid grid-cols-2 items-center text-lg">
                  <span className="text-[#F7F4EE]/80">{row.item}</span>
                  <span className="text-[#F7F4EE]/80 line-through justify-self-end">{row.value}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gold-shine/20 pt-6 mb-8">
              <div className="grid grid-cols-2 items-center text-xl mb-4">
                <span className="text-[#F7F4EE]">Valor real:</span>
                <span className="text-[#F7F4EE] line-through justify-self-end">R$398,30</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-gold text-3xl font-bold">HOJE:</span>
                  <div className="relative">
                    <span className="absolute -top-4 -right-4 bg-gold-shine text-black font-bold px-2 py-1 rounded-md text-xs animate-pulse">
                      89% OFF
                    </span>
                    <span className="text-gold text-4xl md:text-5xl font-bold">R$39,90</span>
                  </div>
                </div>
              </div>
            </div>

            <CTAButton />
          </div>
        </div>
      </section>





      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#252525] p-8 md:p-12 rounded-3xl border border-[#D8C28A]/20 text-center">
            <Shield className="w-20 h-20 text-gold mx-auto mb-6" />

            <h2 className="font-serif text-3xl md:text-4xl text-[#F7F4EE] mb-6">
              GARANTIA DE TRANSFORMAÇÃO 30 DIAS
            </h2>

            <p className="text-xl text-[#F7F4EE]/90 leading-relaxed">
              Se em 30 dias você não sentir clareza mental maior, redução das travas e melhora emocional, devolvemos 100% do valor, sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </section>

      <FAQ />

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#F7F4EE] mb-12">
            Está pronta para retomar o controle?
          </h2>

          <CTAButton className="mb-12" />

          <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            <div className="flex items-center gap-2 text-gold">
              <Shield className="w-6 h-6" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center gap-2 text-gold">
              <Check className="w-6 h-6" />
              <span>Acesso Imediato</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-transparent border-t border-gold-shine/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#F7F4EE]/60 text-sm mb-4">
            © 2025 A Chave da Reprogramação Mental. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 text-[#F7F4EE]/60 text-sm">
            <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
