import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] selection:bg-blue-100 selection:text-blue-700 font-sans">
      <Header />
      
      <main>
        {/* HERO SECTION - Minimalista e Imponente */}
        <section className="relative pt-48 pb-32 px-6 overflow-hidden">
          {/* Elementos visuais de fundo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-[100px] opacity-50" />
          </div>

          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Tecnologia para Gestão Real</span>
            </div>
            
            <h1 className="text-6xl md:text-[5.5rem] font-extrabold text-slate-900 mb-8 tracking-tight leading-[0.95]">
              Sistemas que moldam o <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic font-serif">seu crescimento.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed">
              Da gestão de ativos hospitalares ao suporte de saúde escolar. A **Rodhon System** constrói infraestrutura digital para quem não tem tempo a perder com burocracia.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <button className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200 active:scale-95">
                Solicitar Demonstração
              </button>
              <button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-600 px-10 py-5 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95">
                Nossos Módulos
              </button>
            </div>
          </div>
        </section>

        {/* LOGO CLOUD - Passa credibilidade */}
        <section className="py-12 border-y border-slate-100 bg-white/50">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">
              Soluções aplicadas em
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-40 contrast-125">
              <span className="text-2xl font-bold">INDÚSTRIAS</span>
              <span className="text-2xl font-bold">COLÉGIOS</span>
              <span className="text-2xl font-bold">LOGÍSTICA</span>
              <span className="text-2xl font-bold">SAÚDE</span>
            </div>
          </div>
        </section>

        {/* SOLUTIONS GRID - Design de Cartão Premium */}
        <section id="solucoes" className="py-32 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-left">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-4">Ecosistema Rodhon</h2>
              <p className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Engenharia de software focada em <span className="text-slate-400 underline decoration-slate-200">resultados práticos.</span>
              </p>
            </div>
            <p className="text-slate-500 max-w-xs font-medium italic border-l-2 border-blue-600 pl-4">
              "Desenvolvemos o que o mercado precisa, não apenas o que é fácil de codificar."
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Módulo Patrimônio */}
            <div className="group relative bg-white border border-slate-100 p-12 rounded-[3rem] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 group-hover:bg-blue-600 transition-colors duration-500" />
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-8 shadow-xl shadow-blue-100">
                📦
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tighter">Patrimônio Pro</h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Rastreabilidade total via **QR Code**. Controle movimentações, manutenções e depreciação contábil em uma interface intuitiva de nível industrial.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Inventário Realtime', 'QR Tracking', 'Fiscally Ready'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-xs font-bold border border-slate-100">{tag}</span>
                ))}
              </div>
              <button className="flex items-center gap-2 font-bold text-blue-600 group-hover:gap-4 transition-all">
                Ver Documentação <span className="text-xl">→</span>
              </button>
            </div>

            {/* Módulo Saúde */}
            <div className="group relative bg-white border border-slate-100 p-12 rounded-[3rem] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100px] -z-10 group-hover:bg-emerald-500 transition-colors duration-500" />
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-8 shadow-xl shadow-emerald-100">
                🏥
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tighter">Saúde Connect</h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Gestão de prontuários para enfermarias escolares. Segurança de dados e agilidade no atendimento de primeiros socorros e controle medicamentoso.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Prontuário Digital', 'Alertas de Alergia', 'Logs Seguros'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-xs font-bold border border-slate-100">{tag}</span>
                ))}
              </div>
              <button className="flex items-center gap-2 font-bold text-emerald-600 group-hover:gap-4 transition-all">
                Saiba Mais <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* CTA FINAL - Dark & Bold */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-3xl">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                Sua empresa merece <br/>
                sistemas de elite.
              </h2>
              <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Não importa o tamanho do seu desafio, a Rodhon System tem a tecnologia para automatizar seu sucesso.
              </p>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-blue-900/40 transition-all hover:-translate-y-1">
                Iniciar Projeto Agora
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}