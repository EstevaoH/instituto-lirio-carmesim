export function Home() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden border-b border-gold/20">
        {/* Background Engraving Simulation */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10 flex justify-end">
          <img
            src="https://picsum.photos/seed/justice/1200/1200"
            className="h-full object-cover engraving-filter"
            alt="Simbolismo da Justiça"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="mb-6 h-px w-24 bg-gold"></div>
            <h2 className="text-5xl md:text-7xl font-serif-classic text-carmesim leading-tight mb-6">
              Instituto <br /> Lírio Carmesim
            </h2>
            <p className="text-xl md:text-2xl font-editorial italic text-gray-700 mb-8 border-l-2 border-gold pl-6 py-2">
              “A justiça não precisa ferir para existir.”
            </p>
            <div className="mt-12">
              <a
                href="#about"
                className="inline-block border border-carmesim text-carmesim px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-[#720e0e] hover:text-white transition-all duration-500"
              >
                Conhecer a Abordagem
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="border border-gold p-4 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-carmesim"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-carmesim"></div>
              <img
                // src="https://picsum.photos/seed/statue/600/800"
                src="/01.jpg"
                alt="Estatua da Justiça"
                className="w-full h-[500px] object-cover engraving-filter"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="font-serif-classic text-2xl mb-12 tracking-widest text-carmesim">
            UMA NOVA ABORDAGEM
          </h3>
          <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed mb-8 text-justify md:text-center px-4">
            O Instituto Lírio Carmesim convida o visitante a transcender a visão
            tradicional da justiça meramente punitiva. Propomos um paradigma
            onde a restauração do tecido social e a dignidade humana são os
            pilares centrais. Através de processos dialógicos e responsabilidade
            compartilhada, buscamos curar o que o conflito fragmentou.
          </p>
          <div className="flex justify-center mt-12">
            <div className="w-1 h-20 bg-gradient-to-b from-gold to-transparent"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
