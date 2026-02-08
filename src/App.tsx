
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, BookOpen, Award, 
  MessageSquare, Phone, Mail, MapPin, 
  ChevronRight, Play, CheckCircle2, 
  Zap, Building2, HelpCircle,
  Clock, Activity, Microscope, ShieldCheck,
  Search, Filter, SlidersHorizontal,
  Cpu, Users, Calendar, Ticket, Video
} from 'lucide-react';
import { Logo, COLORS } from './constants';
import type { Course, Event } from './types';

// --- HELPER: Scroll to top on route change ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- COMPONENTES REUTILIZÁVEIS ---
const SectionTitle = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-8 space-y-4">
    <h2 className={`text-3xl md:text-5xl font-extrabold ${light ? 'text-white' : 'text-[#003366]'}`}>{title}</h2>
    {subtitle && <p className={`text-lg max-w-2xl ${light ? 'text-slate-300' : 'text-slate-600'}`}>{subtitle}</p>}
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Cursos', path: '/cursos' },
    { name: 'Eventos', path: '/eventos' },
    { name: 'Unidades', path: '/unidades' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={() => setIsOpen(false)}><Logo className="h-10 md:h-12" /></Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm uppercase tracking-wider font-bold transition-all duration-300 relative group ${
                  isActive(link.path) ? 'text-[#009B9E]' : 'text-slate-600 hover:text-[#003366]'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#009B9E] transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <Link to="/cursos" className="bg-[#003366] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#002244] transition-all glow-hover">
              Matricular-se
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8 pt-24 space-y-6">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-black border-b border-slate-100 pb-4 ${
                isActive(link.path) ? 'text-[#009B9E]' : 'text-slate-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/cursos" onClick={() => setIsOpen(false)} className="w-full bg-[#003366] text-white py-5 rounded-2xl font-bold text-xl text-center">
            Inscrição Online
          </Link>
        </div>
      </div>
    </nav>
  );
};

// --- PÁGINAS ---

const HomePage = () => (
  <main className="pt-20">
    <section className="py-20 md:py-32 bg-white overflow-hidden relative">
      <div className="absolute top-20 right-0 w-1/3 h-full bg-[#003366]/5 rounded-l-[10rem] -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#76BC21]/10 text-[#76BC21] font-bold text-sm uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#76BC21] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#76BC21]"></span>
              </span>
              Inscrições Abertas 2025
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1] tracking-tighter">
              O Futuro da <span className="text-[#003366]">Eletromedicina</span> está Aqui.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
              Transformamos conhecimento em precisão clínica. A APE é o maior centro de formação técnica biomédica de Angola.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cursos" className="bg-[#003366] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#002244] shadow-xl shadow-blue-900/20 transition-all flex items-center justify-center gap-3">
                Explorar Cursos <ChevronRight size={22} />
              </Link>
              <Link to="/unidades" className="bg-white text-[#003366] px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all border-2 border-slate-100 text-center flex items-center justify-center gap-2">
                <MapPin size={22} /> Nossas Unidades
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-6 grayscale opacity-50">
               <div className="text-sm font-black uppercase tracking-widest text-slate-400">Certificado Por</div>
               <div className="text-xl font-black italic tracking-tighter text-slate-700">INEFOP</div>
               <div className="text-xl font-black italic tracking-tighter text-slate-700">MINSA</div>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="absolute -inset-4 bg-[#76BC21]/20 rounded-[4rem] blur-3xl"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white group">
               <img src="https://images.unsplash.com/photo-1579165466541-74e21777447e?auto=format&fit=crop&q=80&w=1200" alt="Medicina" className="w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur p-6 rounded-3xl shadow-2xl">
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-[#003366] text-white rounded-2xl"><Award size={24} /></div>
                     <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none">Pioneirismo</p>
                        <p className="text-lg font-black text-slate-900 leading-tight">+2.000 Especialistas Formados</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Quick Feature Grid */}
    <section className="py-24 bg-slate-50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: <Cpu />, title: 'Laboratórios Reais', desc: 'Pratique em equipamentos hospitalares autênticos, não apenas simuladores.' },
               { icon: <Microscope />, title: 'Ensino Prático', desc: 'Metodologia 80% prática focada na realidade dos hospitais de Luanda.' },
               { icon: <ShieldCheck />, title: 'Carreira Garantida', desc: 'Nossos alunos são os mais requisitados por clínicas e centros de hemodiálise.' }
             ].map((f, i) => (
               <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-[#009B9E]/10 rounded-2xl flex items-center justify-center text-[#009B9E] mb-6">{f.icon}</div>
                  <h4 className="text-xl font-black text-slate-900 mb-2 tracking-tight">{f.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
               </div>
             ))}
          </div>
       </div>
    </section>
  </main>
);

const AboutPage = () => (
  <main className="pt-32 pb-24 bg-slate-50 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Nossa Trajetória" subtitle="Construindo a base tecnológica da saúde angolana desde Luanda para o mundo." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-8 text-lg text-slate-600 leading-relaxed animate-in fade-in slide-in-from-left duration-700">
          <p>
            A **APE - Academia Profissional de Eletromedicina** surgiu como uma resposta audaciosa ao desafio da modernização hospitalar em Angola. Percebemos que tecnologia sem manutenção é um risco à vida.
          </p>
          <p>
            Nossa missão é formar o maior exército técnico de engenharia clínica da África Austral, garantindo que nenhum diagnóstico falhe por falta de precisão técnica.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-[#76BC21] transition-colors group">
              <div className="text-[#76BC21] mb-4 group-hover:scale-110 transition-transform"><Award size={40} /></div>
              <h4 className="font-black text-slate-900 mb-2">Excelência</h4>
              <p className="text-sm">Instrutores com certificação internacional nas maiores fabricantes (GE, Philips, Dräger).</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-[#009B9E] transition-colors group">
              <div className="text-[#009B9E] mb-4 group-hover:scale-110 transition-transform"><Zap size={40} /></div>
              <h4 className="font-black text-slate-900 mb-2">Compromisso</h4>
              <p className="text-sm">Foco total na segurança do paciente através da precisão dos equipamentos.</p>
            </div>
          </div>
        </div>
        <div className="sticky top-32 animate-in fade-in slide-in-from-right duration-700">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=1000" alt="Laboratório APE" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
               <div className="flex items-center gap-4 text-white">
                  <div className="text-5xl font-black italic">10+</div>
                  <div className="text-sm font-bold uppercase tracking-widest leading-none">Anos de Liderança em Angola</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

const CoursesPage = () => {
  const [activeTab, setActiveTab] = useState('Todas');
  const [activeCourse, setActiveCourse] = useState<string | null>(null);

  const categories = ['Todas', 'Formação Longa', 'Especialização UCI', 'Qualidade Técnica', 'Suporte Renal', 'Gestão'];

  const courses: Course[] = [
    {
      id: '1',
      title: 'Técnico de Manutenção Médica (Nível III)',
      category: 'Formação Longa',
      duration: '18 Meses',
      price: '450.000 Kz',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600',
      highlights: ['Eletrônica Médica', 'Monitorização Fisiológica', 'Gestão de Inventário'],
      description: 'Formação completa para quem quer ser o pilar técnico de um hospital moderno.',
    },
    {
      id: '2',
      title: 'Especialista em Ventiladores Pulmonares',
      category: 'Especialização UCI',
      duration: '40 Horas',
      price: '155.000 Kz',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=600',
      highlights: ['Marcas Dräger/GE', 'Circuitos Pneumáticos', 'Calibração Avançada'],
      description: 'Treinamento focado em equipamentos críticos de terapia intensiva.',
    },
    {
      id: '3',
      title: 'Metrologia e Calibração Médica ISO',
      category: 'Qualidade Técnica',
      duration: '60 Horas',
      price: '185.000 Kz',
      image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=600',
      highlights: ['Testes de Segurança Elétrica', 'Emissão de Certificados', 'Analisadores Fluke'],
      description: 'Aprenda a certificar a precisão dos aparelhos médicos seguindo normas internacionais.',
    },
    {
      id: '4',
      title: 'Hemodiálise e Tratamento de Água',
      category: 'Suporte Renal',
      duration: '50 Horas',
      price: '210.000 Kz',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=600',
      highlights: ['Osmose Reversa', 'Máquinas de Diálise', 'Desinfecção Clínica'],
      description: 'Curso essencial para técnicos em centros de nefrologia.',
    },
    {
      id: '5',
      title: 'Imagem Médica: Raio-X e Eco',
      category: 'Especialização UCI',
      duration: '80 Horas',
      price: '295.000 Kz',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
      highlights: ['Física da Imagem', 'Reparo de Transdutores', 'Proteção Radiológica'],
      description: 'Especialize-se na manutenção preventiva de sistemas de imagem.',
    },
    {
      id: '6',
      title: 'Gestão de Engenharia Clínica 4.0',
      category: 'Gestão',
      duration: '45 Horas',
      price: '110.000 Kz',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
      highlights: ['Software GMAO', 'Controle de Custos', 'Aquisição de Tecnologia'],
      description: 'Capacite-se para gerir parques tecnológicos hospitalares de grande porte.',
    }
  ];

  const filteredCourses = activeTab === 'Todas' ? courses : courses.filter(c => c.category === activeTab);

  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
           <SectionTitle title="Nossos Cursos" subtitle="Trilhas de especialização com foco prático e certificação INEFOP." />
           <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-2xl border border-slate-100">
              <Search size={20} className="text-slate-400 ml-2" />
              <input type="text" placeholder="Buscar especialidade..." className="bg-transparent outline-none text-sm font-medium p-2 w-full" />
           </div>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-6 mb-12 no-scrollbar gap-4">
           {categories.map(cat => (
             <button 
                key={cat} 
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all whitespace-nowrap shadow-sm border ${
                  activeTab === cat 
                    ? 'bg-[#003366] text-white border-[#003366] shadow-blue-900/20' 
                    : 'bg-white text-slate-500 border-slate-100 hover:border-[#009B9E] hover:text-[#009B9E]'
                }`}
             >
               {cat}
             </button>
           ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCourses.map(course => (
            <div key={course.id} className="group bg-white rounded-[3rem] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95 duration-500">
              <div className="h-64 relative overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6 bg-[#76BC21] text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">{course.category}</div>
                <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest">
                   <Clock size={16} /> {course.duration}
                </div>
              </div>
              <div className="p-10 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="text-3xl font-black text-[#003366]">{course.price}</div>
                  <div className="p-2 bg-[#009B9E]/10 rounded-xl text-[#009B9E]"><Zap size={20} /></div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-[#009B9E] transition-colors">{course.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{course.description}</p>
                
                <div className="pt-6 border-t border-slate-50 space-y-3">
                  {course.highlights.map(h => (
                    <div key={h} className="flex items-center gap-3 text-[11px] font-bold text-slate-600 uppercase tracking-tight">
                      <CheckCircle2 size={16} className="text-[#76BC21]" /> {h}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-3 pt-4">
                  <button 
                    onClick={() => setActiveCourse(activeCourse === course.id ? null : course.id)}
                    className="w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white transition-all shadow-lg shadow-blue-900/5"
                  >
                    {activeCourse === course.id ? 'Fechar Programa' : 'Ver Grade Curricular'}
                  </button>
                  <Link to="/faq" className="w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest bg-[#76BC21] text-white text-center hover:bg-[#65a31a] transition-all shadow-lg shadow-green-500/20">
                    Fazer Inscrição
                  </Link>
                </div>

                {activeCourse === course.id && (
                  <div className="mt-4 p-8 bg-slate-50 rounded-3xl animate-in slide-in-from-top duration-500 border border-slate-200">
                    <h5 className="font-black text-[10px] uppercase text-slate-400 tracking-widest mb-4">Conteúdo Detalhado</h5>
                    <ul className="space-y-3 text-xs text-slate-600 font-bold">
                      <li className="flex gap-2">• Módulo I: Fundamentos de Biomédica</li>
                      <li className="flex gap-2">• Módulo II: Segurança Elétrica Avançada</li>
                      <li className="flex gap-2">• Módulo III: Prática em Equipamentos de Vida</li>
                      <li className="flex gap-2">• Módulo IV: Calibração e Certificação</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState<'Todos' | 'Palestra' | 'Workshop' | 'Seminário'>('Todos');

  const events: Event[] = [
    {
      id: 'e1',
      title: 'Workshop: Calibração de Desfibriladores',
      date: '25 Out 2025',
      time: '09:00 - 16:00',
      category: 'Workshop',
      theme: 'Prática de Calibração com Analisadores Fluke',
      price: '35.000 Kz',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      location: 'Lab 03, Sede Talatona'
    },
    {
      id: 'e2',
      title: 'Palestra: Inteligência Artificial na Manutenção Médica',
      date: '12 Nov 2025',
      time: '18:30 - 20:30',
      category: 'Palestra',
      theme: 'O Futuro da Engenharia Clínica 4.0',
      price: 'Gratuito',
      image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=800',
      location: 'Auditório Central'
    },
    {
      id: 'e3',
      title: 'Seminário de Segurança Elétrica em Bloco Operatório',
      date: '05 Dez 2025',
      time: '08:00 - 13:00',
      category: 'Seminário',
      theme: 'Normas IEC 60601 e Práticas Hospitalares',
      price: '15.000 Kz',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
      location: 'Híbrido (Presencial/Online)'
    },
    {
      id: 'e4',
      title: 'Workshop Intensivo: Ventiladores Hamilton-C1',
      date: '20 Jan 2026',
      time: '09:00 - 17:00',
      category: 'Workshop',
      theme: 'Configuração e Troca de Sensores de Fluxo',
      price: '45.000 Kz',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800',
      location: 'Lab Especializado UCI'
    }
  ];

  const filteredEvents = activeTab === 'Todos' ? events : events.filter(e => e.category === activeTab);

  return (
    <main className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Próximos Eventos" 
          subtitle="Palestras, workshops e seminários de alto impacto para manter você atualizado com as tecnologias de saúde." 
        />

        {/* Category Selector */}
        <div className="flex gap-4 mb-12 overflow-x-auto no-scrollbar pb-2">
          {['Todos', 'Palestra', 'Workshop', 'Seminário'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat as any)}
              className={`px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border ${
                activeTab === cat 
                  ? 'bg-[#009B9E] text-white border-[#009B9E] shadow-xl shadow-teal-500/20' 
                  : 'bg-white text-slate-500 border-slate-200 hover:border-[#003366]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-[3rem] overflow-hidden border border-slate-100 flex flex-col md:flex-row shadow-sm hover:shadow-2xl transition-all duration-500 group">
              <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black text-[#003366] uppercase tracking-widest shadow-lg">
                  {event.category}
                </div>
              </div>
              <div className="md:w-3/5 p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[#76BC21] font-black text-xs uppercase tracking-[0.2em] mb-4">
                    <Calendar size={18} /> {event.date}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight mb-4 group-hover:text-[#009B9E] transition-colors">{event.title}</h3>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">Tema: <span className="text-slate-600">{event.theme}</span></p>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <Clock size={14} className="text-[#009B9E]" /> {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <MapPin size={14} className="text-[#009B9E]" /> {event.location}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="text-2xl font-black text-[#003366]">{event.price}</div>
                  <button className="bg-[#003366] text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#002244] transition-all flex items-center gap-2">
                    Garantir Vaga <Ticket size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Speaker Callout */}
        <div className="mt-24 p-12 bg-gradient-ape rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full"></div>
           <div className="space-y-4 max-w-xl relative z-10">
              <h4 className="text-3xl font-black">Quer palestrar na APE?</h4>
              <p className="text-slate-100 font-medium">Se você é um especialista em tecnologia biomédica ou engenharia clínica, junte-se ao nosso corpo de palestrantes e inspire a próxima geração.</p>
           </div>
           <button className="bg-white text-[#003366] px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all whitespace-nowrap shadow-xl relative z-10">
             Seja um Palestrante
           </button>
        </div>
      </div>
    </main>
  );
};

const UnitsPage = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<any>(null);

  useEffect(() => {
    if (mapRef.current && !leafletMap.current) {
      // @ts-ignore
      const L = window.L;
      if (L) {
        // Coordenadas aproximadas de Talatona, Luanda
        const talatona = [-8.918, 13.181];
        leafletMap.current = L.map('map').setView(talatona, 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(leafletMap.current);

        // Marcador Personalizado
        const marker = L.marker(talatona).addTo(leafletMap.current);
        marker.bindPopup(`
          <div style="font-family: Inter, sans-serif; padding: 10px;">
            <b style="color: #003366; font-size: 14px;">APE - Sede Talatona</b><br/>
            Edifício Diamond, Rua do MAT<br/>
            <span style="color: #76BC21; font-weight: bold;">Atendimento: 08:00 - 18:00</span>
          </div>
        `).openPopup();
      }
    }
  }, []);

  return (
    <main className="pt-32 pb-24 bg-slate-900 text-white min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#003366]/30 to-transparent -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle light title="Onde Estamos" subtitle="Nossa infraestrutura em Talatona, Luanda, é equipada com o que há de mais moderno na engenharia clínica." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 group hover:bg-white/10 transition-all shadow-2xl backdrop-blur-md">
               <div className="w-20 h-20 bg-[#76BC21]/20 rounded-3xl flex items-center justify-center text-[#76BC21] mb-8 group-hover:rotate-12 transition-transform duration-500"><MapPin size={40} /></div>
               <h4 className="text-3xl font-black mb-4 tracking-tighter">Campus Talatona</h4>
               <p className="text-slate-400 mb-8 leading-relaxed text-lg">Localizado no coração do polo tecnológico de Luanda, o Edifício Diamond oferece segurança e facilidade de acesso.</p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-3 border border-white/5">
                    <Building2 className="text-[#009B9E]" size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-300">5 Labs Técnicos</span>
                 </div>
                 <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-3 border border-white/5">
                    <Users className="text-[#009B9E]" size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Auditório 120 pax</span>
                 </div>
               </div>
               <div className="mt-10 pt-10 border-t border-white/10 space-y-4">
                  <div className="flex items-center gap-4 text-slate-400">
                     <Phone size={20} className="text-[#76BC21]" />
                     <span className="font-bold">+244 923 000 000</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-400">
                     <Mail size={20} className="text-[#76BC21]" />
                     <span className="font-bold">geral@ape.ao</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700">
             <div id="map" ref={mapRef} className="shadow-2xl border-4 border-white/10"></div>
             <div className="absolute top-6 right-6 z-10">
                <div className="bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3">
                   <div className="w-3 h-3 bg-[#76BC21] rounded-full animate-pulse"></div>
                   <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Unidade Aberta</span>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: 'EQUIPAMENTOS', value: '+300' },
             { label: 'LABORATÓRIOS', value: '05' },
             { label: 'ALUNOS ATIVOS', value: '+450' },
             { label: 'PROJETOS B2B', value: '24' }
           ].map((stat, i) => (
             <div key={i} className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <p className="text-4xl font-black text-white mb-2 italic tracking-tighter">{stat.value}</p>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.3em]">{stat.label}</p>
             </div>
           ))}
        </div>
      </div>
    </main>
  );
};

const FAQPage = () => {
  const faqs = [
    { q: "Quais os requisitos para se matricular?", a: "Para os cursos técnicos de longa duração, é necessário ter concluído o ensino médio. Para workshops e especializações curtas, é desejável ter conhecimentos básicos de eletricidade." },
    { q: "A academia ajuda na inserção no mercado?", a: "Sim. Temos o programa 'APE-Link', onde compartilhamos o perfil dos nossos melhores alunos com nossos parceiros hospitalares em Luanda." },
    { q: "Como funcionam os pagamentos?", a: "Trabalhamos com fatura pró-forma para empresas e pagamentos via Multicaixa/Express para particulares. Oferecemos parcelamentos sem juros." },
    { q: "O certificado é válido?", a: "Sim. Todos os certificados são homologados pelo INEFOP, válidos em todo o território nacional angolano." }
  ];

  return (
    <main className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Central de Ajuda" subtitle="Respostas rápidas para as dúvidas mais comuns dos nossos futuros especialistas." />
        <div className="space-y-6 mt-12 animate-in fade-in slide-in-from-bottom duration-700">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-slate-200 rounded-[2.5rem] bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
              <summary className="flex items-center justify-between p-10 cursor-pointer font-black text-slate-900 hover:bg-slate-50 transition-colors list-none">
                <span className="flex items-center gap-6"><HelpCircle size={30} className="text-[#009B9E]" /> <span className="text-xl tracking-tight">{faq.q}</span></span>
                <ChevronRight size={24} className="group-open:rotate-90 transition-transform text-[#76BC21]" />
              </summary>
              <div className="px-10 pb-10 text-slate-600">
                <p className="bg-slate-50 p-10 rounded-3xl border-l-[10px] border-[#009B9E] font-medium leading-relaxed text-lg italic tracking-tight">{faq.a}</p>
                <div className="mt-8 flex justify-end">
                   <button className="text-[#003366] font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform">Falar com Consultor <ChevronRight size={16} /></button>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
};

// --- COMPONENTE FOOTER ---
const Footer = () => (
  <footer className="bg-white border-t border-slate-100 py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
         <div className="md:col-span-2 space-y-8">
            <Link to="/"><Logo className="h-16" /></Link>
            <p className="max-w-sm text-slate-400 font-medium leading-relaxed">Referência em formação técnica de eletromedicina em Angola. Equipamos profissionais com precisão para salvar vidas.</p>
            <div className="flex gap-6">
               <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-[#003366] hover:bg-[#003366]/5 transition-all"><Activity size={20} /></div>
               <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-[#003366] hover:bg-[#003366]/5 transition-all"><ShieldCheck size={20} /></div>
               <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-[#003366] hover:bg-[#003366]/5 transition-all"><Award size={20} /></div>
            </div>
         </div>
         <div className="space-y-6">
            <h5 className="font-black text-xs uppercase text-slate-900 tracking-[0.3em]">Links Rápidos</h5>
            <ul className="space-y-4">
               <li><Link to="/sobre" className="text-sm font-bold text-slate-400 hover:text-[#003366] transition-colors">Sobre Nós</Link></li>
               <li><Link to="/cursos" className="text-sm font-bold text-slate-400 hover:text-[#003366] transition-colors">Grade Curricular</Link></li>
               <li><Link to="/eventos" className="text-sm font-bold text-slate-400 hover:text-[#003366] transition-colors">Próximos Eventos</Link></li>
               <li><Link to="/unidades" className="text-sm font-bold text-slate-400 hover:text-[#003366] transition-colors">Onde Estamos</Link></li>
            </ul>
         </div>
         <div className="space-y-6">
            <h5 className="font-black text-xs uppercase text-slate-900 tracking-[0.3em]">Newsletter</h5>
            <div className="relative group">
               <input type="text" placeholder="Seu melhor e-mail" className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-[#003366] transition-all" />
               <button className="absolute right-2 top-2 bottom-2 bg-[#003366] text-white px-4 rounded-xl hover:bg-[#002244] transition-all"><ChevronRight size={18} /></button>
            </div>
            <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest leading-none">Receba novidades sobre turmas 2025.</p>
         </div>
      </div>
      <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-[10px] font-black text-slate-400 tracking-[0.4em] uppercase leading-none">© 2025 APE ANGOLA • ACADEMIA PROFISSIONAL DE ELETROMEDICINA</p>
          <p className="text-[9px] text-slate-300 mt-2 uppercase tracking-[0.2em] font-bold">NIF: 5400012345 • TALATONA • LUANDA</p>
        </div>
        <div className="flex gap-8 items-center opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
           <div className="text-xl font-black tracking-tighter text-slate-900">INEFOP</div>
           <div className="text-xl font-black tracking-tighter text-slate-900">MINSA</div>
           <div className="text-xl font-black tracking-tighter text-slate-900">ENGENHARIA</div>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#003366] selection:text-white">
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/cursos" element={<CoursesPage />} />
        <Route path="/eventos" element={<EventsPage />} />
        <Route path="/unidades" element={<UnitsPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>

      <Footer />
      
      {/* WhatsApp Floating */}
      <a 
        href="https://wa.me/244923000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 bg-[#25D366] text-white p-5 rounded-[2.5rem] shadow-2xl hover:scale-110 active:scale-95 transition-all z-40 flex items-center gap-3 group ring-[10px] ring-white/5"
      >
        <div className="relative">
           <MessageSquare size={32} />
           <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20"></span>
           </span>
        </div>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 font-black text-sm uppercase tracking-widest whitespace-nowrap px-1">Matrículas Abertas</span>
      </a>
    </div>
  );
}
