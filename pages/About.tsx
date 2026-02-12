
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="fade-in py-20 bg-[#fdfbf7]">
      <div className="container mx-auto px-6 max-w-4xl">
        <header className="mb-20 text-center">
          <h2 className="font-serif-classic text-4xl md:text-5xl text-carmesim mb-4 tracking-tight">Quem Somos</h2>
          <div className="h-px w-32 bg-gold mx-auto mb-10"></div>
        </header>

        {/* Content Blocks */}
        <article className="space-y-24">
          
          <section>
            <h3 className="font-serif-classic text-xl text-gold mb-6 uppercase tracking-widest border-b border-gold/20 pb-2">Nossa Missão</h3>
            <p className="text-gray-700 leading-loose font-light text-lg">
              Atuar como vanguarda global na implementação de práticas de Justiça Restaurativa, promovendo a resolução de conflitos por meio da empatia, da reparação e do diálogo consciente, assegurando que o sistema jurídico cumpra seu papel de pacificação social sem abdicar da humanidade.
            </p>
          </section>

          <section>
            <h3 className="font-serif-classic text-xl text-gold mb-8 uppercase tracking-widest border-b border-gold/20 pb-2">Nossos Pilares</h3>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center md:text-left">
                <h4 className="font-serif-classic text-carmesim mb-4 text-sm tracking-widest">VERDADE</h4>
                <p className="text-sm text-gray-500 leading-relaxed">O reconhecimento pleno dos fatos como base indispensável para qualquer processo de cura ou reparação.</p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-serif-classic text-carmesim mb-4 text-sm tracking-widest">RESTAURAÇÃO</h4>
                <p className="text-sm text-gray-500 leading-relaxed">O foco na recomposição dos laços sociais e na compensação dos danos sofridos por todas as partes envolvidas.</p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-serif-classic text-carmesim mb-4 text-sm tracking-widest">DIGNIDADE</h4>
                <p className="text-sm text-gray-500 leading-relaxed">A preservação da integridade humana do ofensor e da vítima, afastando a violência como método de justiça.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="font-serif-classic text-xl text-gold mb-6 uppercase tracking-widest border-b border-gold/20 pb-2">O Que Fazemos na Prática</h3>
            <p className="text-gray-700 leading-loose font-light text-lg">
              Implementamos círculos restaurativos em ambientes de alta tensão, assessoramos cortes internacionais na transição para modelos híbridos de justiça e formamos facilitadores capazes de mediar situações onde a justiça retributiva tradicional mostrou-se insuficiente. Nossas intervenções são pautadas pelo rigor metodológico e pela serenidade institucional.
            </p>
          </section>

          <section className="bg-white p-12 border border-gray-100 shadow-sm relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <span className="font-serif-classic text-8xl text-carmesim italic">98%</span>
            </div>
            <h3 className="font-serif-classic text-xl text-gold mb-6 uppercase tracking-widest">Resultados Comprovados</h3>
            <ul className="space-y-6 text-gray-600">
              <li className="flex gap-4 items-baseline">
                <span className="text-gold">I.</span>
                <span>Redução de 65% na taxa de reincidência em distritos atendidos por nossos programas.</span>
              </li>
              <li className="flex gap-4 items-baseline">
                <span className="text-gold">II.</span>
                <span>Índice de satisfação das vítimas superior a 90%, focado no sentimento de reparação e voz.</span>
              </li>
              <li className="flex gap-4 items-baseline">
                <span className="text-gold">III.</span>
                <span>Diminuição drástica no tempo de resolução de litígios complexos.</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-serif-classic text-xl text-gold mb-10 uppercase tracking-widest border-b border-gold/20 pb-2">Perguntas Frequentes</h3>
            <div className="space-y-10">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">A justiça restaurativa substitui a lei?</h4>
                <p className="text-gray-500 font-light text-sm">Não. Ela complementa e humaniza a aplicação da lei, oferecendo caminhos onde a frieza processual costuma falhar.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Quem pode solicitar a intervenção do Instituto?</h4>
                <p className="text-gray-500 font-light text-sm">Governos, organismos internacionais e instituições do poder judiciário que buscam alternativas sustentáveis ao sistema carcerário tradicional.</p>
              </div>
            </div>
          </section>

          <section className="py-20 text-center border-t border-gold/20">
            <h3 className="font-serif-classic text-xl text-gold mb-8 uppercase tracking-widest">Uma Reflexão</h3>
            <blockquote className="font-editorial text-3xl italic text-carmesim leading-snug px-4">
              “Se o propósito da justiça é o equilíbrio, como pode ela ser alcançada através da geração de mais peso sobre as feridas abertas?”
            </blockquote>
          </section>

        </article>
      </div>
    </div>
  );
};
