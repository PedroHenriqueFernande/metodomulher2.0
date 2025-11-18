import CTAButton from './CTAButton';

const AboutJuliana = () => {
  const fullText = "Meu nome é Juliana, tenho 35 anosin e sinceramente, eu andava tão cansada. Por muito tempo, acreditei que a tristeza e o vazio era algo que nunca ia sumir de dentro de mim. Tinha medo de fazer planos, de nada sair da maneira certa. Até entender que era a minha mente tentando me proteger, mas na verdade, ela só estava me destruindo. Foi quando mergulhei na neurociência e estudando, descobri como reprogramar esses padrões através da neuroplasticidade. Dessa forma criei o método que transformou a minha vida e hoje já ajudou mais de 5.000 mulheres a retomarem o controle da própria mente. Você não precisa lutar contra si mesma. Só precisa aprender a reprogramar a sua mente. Venha comigo nessa jornada e acabe de maneira definitiva com tudo isso!";

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-[#F7F4EE] text-center mb-8">
          SIM, EU JÁ ME SABOTEI. MAS FOI DO CAOS QUE NASCEU O MEU RECOMEÇO.
        </h2>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#252525] p-8 md:p-12 rounded-3xl border border-gold-shine/20">
          <div className="flex justify-center mb-8">
            <img
              src="/Juliana.png"
              alt="Juliana"
              className="w-32 h-32 rounded-full object-cover object-center border-2 border-gold-shine/50"
            />
          </div>

          <div className="space-y-5 text-lg text-[#F7F4EE]/90 leading-relaxed text-center">
            <p>{fullText}</p>
          </div>

          
        </div>
        <div className="mt-12 text-center">
            <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default AboutJuliana;
