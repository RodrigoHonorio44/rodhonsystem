// src/components/Footer.jsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Marca */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                R
              </div>
              <span className="font-black text-slate-800 tracking-tighter">RODHON SYSTEM</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Transformando a gestão de ativos com tecnologia inteligente e controle simplificado.
            </p>
          </div>

          {/* Coluna 2: Produto */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li><a href="#" className="hover:text-blue-600 transition">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">App Mobile</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Segurança</a></li>
            </ul>
          </div>

          {/* Coluna 3: Empresa */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li><a href="#" className="hover:text-blue-600 transition">Sobre nós</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Contato</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Suporte</a></li>
            </ul>
          </div>

          {/* Coluna 4: Subdomínio Rápido */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Acesso</h4>
            <a 
              href="https://patrimonio.rodhonsystem.com.br" 
              className="inline-block bg-white border border-slate-200 px-4 py-2 rounded-lg text-xs font-bold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Ir para Painel Administrativo →
            </a>
          </div>
        </div>

        {/* Linha Final */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 font-medium">
            © {currentYear} Rodhon System. CNPJ: 00.000.000/0001-00. Desenvolvido com precisão.
          </p>
          <div className="flex gap-6 text-xs text-slate-400 font-bold uppercase tracking-tighter">
            <a href="#" className="hover:text-slate-600">Termos</a>
            <a href="#" className="hover:text-slate-600">Privacidade</a>
            <a href="#" className="hover:text-slate-600">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}