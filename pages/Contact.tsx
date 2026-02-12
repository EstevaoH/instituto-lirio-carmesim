import React from "react";

export const Contact: React.FC = () => {
  return (
    <div className="fade-in py-24 bg-white flex-grow flex items-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-serif-classic text-4xl text-carmesim mb-8 tracking-tight">
              Contato
            </h2>
            <p className="text-gray-500 font-light mb-12 text-lg">
              Para consultas institucionais, parcerias internacionais ou
              solicitações de consultoria técnica, utilize nossos canais
              oficiais.
            </p>

            <div className="space-y-8">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">
                  Presença Global
                </span>
                <span className="font-serif-classic text-gray-800">
                  Escritórios regionais em 12 países
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">
                  Endereço Digital
                </span>
                <a
                  href="https://www.institutocarmesim.org"
                  className="font-serif-classic text-carmesim hover:underline transition-all"
                >
                  www.institutocarmesim.org
                </a>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">
                  Correspondência
                </span>
                <a
                  href="mailto:contato@institutocarmesim.org"
                  className="font-serif-classic text-gray-800"
                >
                  contato@institutocarmesim.org
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] border border-gold p-6">
              <div className="w-full h-full bg-[#fdfbf7] flex flex-col items-center justify-center text-center p-8 border border-gray-100">
                <div className="w-16 h-16 border border-gold rounded-full mb-8 flex items-center justify-center">
                  {/*<div className="w-8 h-8 border-b-2 border-r-2 border-gold rotate-45 mb-2 mr-2"></div>*/}
                  <img
                    src="logo.png"
                    alt="Instituto Lírio Carmesim Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-serif-classic text-sm tracking-widest text-carmesim mb-4">
                  INSTITUTO LÍRIO CARMESIM
                </h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-loose">
                  Autoridade Moral <br />
                  Credibilidade Institucional <br />
                  Serenidade Técnica
                </p>
                <div className="mt-8 h-px w-12 bg-gold"></div>
              </div>
            </div>

            {/* Subtle floating decoration */}
            <div className="absolute -bottom-10 -left-10 w-24 h-24 border border-carmesim/10 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 border border-gold/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
