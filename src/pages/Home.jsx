import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  // Substitua pelo seu número real (ex: 5511999999999)
  const whatsappNumber = "55XXXXXXXXXXX"; 
  const message = encodeURIComponent("Olá Rodrigo, vi o site da Rodhon System e gostaria de uma demonstração!");

  // ID do seu vídeo: 6F_kDtiXhbw
  const videoId = "6F_kDtiXhbw";

  return (
    <div className="min-h-screen bg-[#FDFDFD] selection:bg-blue-100 selection:text-blue-700 font-sans">
      <Header />
      
      <main>
        {/* 1. HERO SECTION */}
        <section className="relative pt-48 pb-32 px-6 overflow-hidden">
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
              <a href={`https://wa.me/${whatsappNumber}?text=${message}`} className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200 active:scale-95 text-center">
                Solicitar Demonstração
              </a>
              <a href="#solucoes" className="w-full sm:w-auto bg-white border border-slate-200 text-slate-600 px-10 py-5 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95 text-center">
                Nossos Módulos
              </a>
            </div>
          </div>
        </section>

        {/* 2. LOGO CLOUD */}
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

        {/* 3. VÍDEO DE DEMONSTRAÇÃO (YouTube) */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">O sistema em ação</h2>
              <p className="text-slate-500 font-medium italic">Tecnologia robusta com interface simplificada.</p>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative rounded-[2rem] bg-slate-900 p-2 shadow-2xl border border-slate-200 overflow-hidden">
                <div className="aspect-video rounded-[1.5rem] overflow-hidden bg-black">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0`}
                    title="Demonstração Rodhon System"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SOLUTIONS GRID */}
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
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tighter text-blue-600">Patrimônio Pro</h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">
                Rastreabilidade total via **QR Code**. Controle movimentações, manutenções e depreciação contábil em uma interface intuitiva de nível industrial.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Inventário Realtime', 'QR Tracking', 'Fiscally Ready'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-xs font-bold border border-slate-100">{tag}</span>
                ))}
              </div>
              <button className="flex items-center gap-2 font-bold text-blue-600 group-hover:gap-4 transition-all uppercase text-xs tracking-widest">
                Ver Documentação <span className="text-xl">→</span>
              </button>
            </div>

            {/* Módulo Saúde */}
            <div className="group relative bg-white border border-slate-100 p-12 rounded-[3rem] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100px] -z-10 group-hover:bg-emerald-500 transition-colors duration-500" />
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-8 shadow-xl shadow-emerald-100">
                🏥
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tighter text-emerald-600">Saúde Connect</h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">
                Gestão de prontuários para enfermarias escolares. Segurança de dados e agilidade no atendimento de primeiros socorros e controle medicamentoso.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Prontuário Digital', 'Alertas de Alergia', 'Logs Seguros'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-xs font-bold border border-slate-100">{tag}</span>
                ))}
              </div>
              <button className="flex items-center gap-2 font-bold text-emerald-600 group-hover:gap-4 transition-all uppercase text-xs tracking-widest">
                Saiba Mais <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* 5. CTA FINAL */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-3xl">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
                Sua organização merece <br/>
                sistemas de elite.
              </h2>
              <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                Seja no controle de ativos ou no cuidado com alunos, a Rodhon System automatiza sua gestão.
              </p>
              <a href={`https://wa.me/${whatsappNumber}?text=${message}`} className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-blue-900/40 transition-all hover:-translate-y-1">
                Iniciar Projeto Agora
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group flex items-center"
      >
        <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-xl shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <p className="text-slate-700 font-bold text-sm">Falar com o Rodrigo 👋</p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
          <div className="relative bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.875 1.215 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}