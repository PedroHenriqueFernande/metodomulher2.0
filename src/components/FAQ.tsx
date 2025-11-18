import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gold-shine/20 rounded-xl overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#252525] hover:border-gold-shine/40 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <span className="text-[#F7F4EE] font-semibold text-lg pr-4">{question}</span>
        <ChevronDown
          className={`w-6 h-6 text-gold flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-[#F7F4EE]/80 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: 'Em quanto tempo começo a sentir diferença?',
      answer: 'Nos primeiros 7 dias você já estará irreconhecível. O método foi desenhado para gerar resultados progressivos e definitivos.',
    },
    {
      question: 'Preciso entender de neurociência?',
      answer: 'Não, todo o conteúdo foi traduzido de forma simples e prática. Você só precisa seguir os exercícios guiados.',
    },
    {
      question: 'Quanto tempo por dia preciso?',
      answer: 'Entre 5 e 10 minutos. O método foi criado para caber na sua rotina, não para complicá-la.',
    },
    {
      question: 'Como recebo o acesso?',
      answer: 'Imediatamente aps a compra, você recebe o acesso completo por e-mail e pode começar na mesma hora.',
    },
    {
      question: 'Funciona para ansiedade?',
      answer: 'Sim, a ansiedade é um dos padrões que o método ajuda a reprogramar, temporarialmente estarei disponibilizando o guia completo para se livrar da ansiedade (OFERTA LIMITADA).',
    },
    {
      question: 'A compra é segura?',
      answer: 'Totalmente. A compra é processada por uma plataforma segura e você tem garantia de 30 dias.',
    },
    {
      question: 'E se eu não gostar?',
      answer: 'Você tem 30 dias de garantia incondicional. Devolvemos 100% do valor.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-[#0A0A0A] to-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-[#F7F4EE] text-center mb-12">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
