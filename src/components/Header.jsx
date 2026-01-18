// src/components/Header.jsx
export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
              R
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black leading-none text-slate-800 tracking-tighter">
                RODHON<span className="text-blue-600">SYSTEM</span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">
                Patrimonial
              </span>
            </div>
          </div>

          {/* Links Centrais (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#funcionalidades" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Funcionalidades</a>
            <a href="#sobre" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#planos" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Planos</a>
          </nav>

          {/* Botões de Ação */}
          <div className="flex items-center gap-3">
            <a 
              href="https://patrimonio.rodhonsystem.com.br/login" 
              className="text-sm font-bold text-slate-700 hover:text-blue-600 px-4 py-2 transition-colors"
            >
              Entrar
            </a>
            <button className="hidden sm:block bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-md active:scale-95">
              Começar Agora
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}