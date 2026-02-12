import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage }) => {
  const navItems = [
    { id: "home", label: "Início", href: "#home" },
    { id: "about", label: "Quem Somos", href: "#about" },
    { id: "contact", label: "Contato", href: "#contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-carmesim selection:text-white">
      {/* Header */}
      <header className="py-8 md:py-12 border-b border-gray-200 bg-[#720e0e] sticky top-0 z-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Minimalist Logo placeholder (Lily & Justice symbol) */}
            <div className="w-12 h-12 flex items-center justify-center border border-gold rounded-full">
              {/*<span className="text-gold font-serif-classic text-xl">LC</span>*/}
              <img
                src="/logo.png"
                alt="Instituto Lírio Carmesim"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="font-serif-classic text-xl md:text-2xl tracking-widest text-gold uppercase">
              Instituto Lírio Carmesim
            </h1>
          </div>

          <nav className="flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`text-xs md:text-sm uppercase tracking-widest transition-colors duration-300  hover:text-[#c5a059] hover:underline hover:underline-offset-8  ${
                  currentPage === item.id
                    ? "text-gold font-bold underline underline-offset-8"
                    : "text-gray-100"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="py-12 bg-carmesim text-[#fdfbf7]">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8 opacity-40">
            <div className="h-px bg-gold w-32 mx-auto mb-8"></div>
          </div>
          <p className="font-serif-classic text-sm tracking-[0.2em] mb-4">
            INSTITUTO LÍRIO CARMESIM DE JUSTIÇA RESTAURATIVA
          </p>
          <p className="text-xs tracking-wider opacity-60 uppercase">
            A justiça não precisa ferir para existir.
          </p>
          <div className="mt-8 text-[10px] tracking-widest opacity-40">
            © {new Date().getFullYear()} — TODOS OS DIREITOS RESERVADOS
          </div>
        </div>
      </footer>
    </div>
  );
};
