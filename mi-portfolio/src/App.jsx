import React from 'react';
import Aurora from './components/Aurora';
import GradientText from './components/GradientText';
import Dock from './components/Dock';
import LogoLoop from './components/LogoLoop';
import SpotlightCard from './components/SpotlightCard';
import ProfileCard from './components/ProfileCard';

import { Github, Linkedin, FileText, Mail, Code, Terminal, Cpu, Globe, PlayCircle, Music } from 'lucide-react';

function App() {
  
  const dockItems = [
    { icon: <Github size={22} />, label: 'GitHub', onClick: () => window.open('https://github.com/Pedro-Antonio-Tr', '_blank') },
    { icon: <Linkedin size={22} />, label: 'LinkedIn', onClick: () => window.open('https://linkedin.com/in/pedro-antonio-trujillo-felipe-2954062aa/', '_blank') },
    { icon: <Mail size={22} />, label: 'Contacto', onClick: () => window.location.href = 'mailto:Pedroantoniotrufe@gmail.es' },
    { icon: <FileText size={22} />, label: 'CV', onClick: () => window.open('/CV.pdf', '_blank') },
  ];

  const logos = [
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "SQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 flex flex-col">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Aurora colorStops={["#00d8ff", "#7cff67", "#00d8ff"]} speed={0.5} amplitude={1.0} />
      </div>

      <main className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-16 md:gap-24 py-14 md:py-20 pb-28 md:pb-40">
        
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center md:justify-items-start">
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-lg">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-cyan-300 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Disponible para trabajar
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight">
                Hola, soy <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                  Pedro Antonio
                </span>
              </h1>
              
              <p className="text-lg text-slate-400 leading-relaxed">
                Ingeniero Informático en formación. Transformo ideas complejas en experiencias web fluidas, especializándome en <span className="text-white font-semibold">Experiencias Interactivas</span> y <span className="text-white font-semibold">Desarrollo FullStack</span>.
              </p>
            </div>

            <div className="w-full flex justify-center md:justify-end">
              <ProfileCard
                name="Pedro A. Trujillo"
                title="Ingeniero en Informática"
                handle="Pedro_Ant_Trufe"
                status="Online"
                contactText="Contáctame"
                avatarUrl="/yo.png"
                iconUrl='/github.png'
                // grainUrl='/?.png' // Textura de ruido opcional
                innerGradient={"linear-gradient(145deg, rgba(6, 181, 212, 0.23) 0%, rgba(79, 179, 109, 0.4) 45%, rgba(198, 57, 254, 0.28) 100%)"}
                behindGlowEnabled={true}
                behindGlowColor={"rgba(0, 219, 117, 0.73) 66%"}
                behindGlowSize={"50%"}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false} // El rendimiento en móviles se ve afectado
                onContactClick={() => window.open('https://linkedin.com/in/pedro-antonio-trujillo-felipe-2954062aa/', '_blank') }
              />
            </div>

        </section>

        {/* --- STACK TECNOLÓGICO --- */}
        <section className="w-full flex flex-col items-center space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Tecnologías & Herramientas
          </h3>
           <div className="w-full h-28 relative rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden flex items-center">
             <LogoLoop 
                logos={logos} 
                direction="left" 
                speed={100} 
                logoHeight={40} 
                gap={60} 
                pauseOnHover={true} 
             />
          </div>
        </section>

        {/* --- SOBRE MÍ --- */}
        <section className="w-full grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl shadow-cyan-500/5 h-full">
            <div className="flex items-center gap-3 mb-4 text-cyan-300">
              <Cpu size={22} />
              <p className="text-sm font-semibold tracking-[0.1em] uppercase">Sobre mí</p>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
              Aprendo y me adapto rápido a entornos cambiantes, creando soluciones efectivas.
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Nacido en 2004 y originario de Calzada de Calatrava, Ciudad Real, actualmente curso el último año del Grado en Ingeniería Informática en la Universidad de Castilla-La Mancha (UCLM). Mi pasión por la tecnología y la programación me ha llevado a especializarme en el desarrollo FullStack, donde disfruto creando interfaces intuitivas y experiencias de usuario atractivas.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Me muevo con facilidad entre distintas herramientas, tenga experiencia con ellas o esté aprendiendo sobre la marcha. Me entusiasma enfrentarme a nuevos retos y colaborar en proyectos que me permitan crecer profesionalmente y aportar valor real.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-cyan-300 mb-2">Lo que aporto</p>
              <ul className="text-slate-200 text-sm space-y-2 list-disc list-inside">
                <li>Arquitectura clara y código mantenible.</li>
                <li>Diseños responsivos centrados en el usuario.</li>
                <li>Integración de APIs y despliegues cloud básicos.</li>
                <li>Manejo de servidores y bases de datos.</li>
                <li>Ideas innovadoras y enfoque en la mejora continua.</li>
                <li>Colaboración efectiva en equipos multidisciplinarios.</li>
                <li>Comunicación clara y habilidades interpersonales.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400 mb-2">Más información</p>
              <ul className="text-slate-200 text-sm space-y-2 list-disc list-inside">
                <li>Título en C1 en inglés por Cambridge</li>
                <li>Permiso de conducir B</li>
                <li>Finalizando el último curso de Ingeniería Informática.</li>
                <li>Realizando mi TFG: "Desarrollo de una aplicación de Realidad Virtual para la movilidad y Bienestar de pacientes de Hemodiálisis"</li>
                <li>Buscando oportunidades de prácticas profesionales.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full">
          <h2 className="text-3xl font-bold mb-10 text-white flex items-center justify-center md:justify-start gap-3">
            <Code className="text-cyan-400" /> Proyectos Destacados
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Proyecto 1 */}
            <SpotlightCard className="group border border-white/10 bg-zinc-900/80 p-8 rounded-3xl h-full flex flex-col hover:border-cyan-500/30 transition-colors text-left" spotlightColor="rgba(0, 216, 255, 0.15)">
              <div className="bg-cyan-900/20 p-3 rounded-xl w-fit mb-6"><Terminal className="text-cyan-400" size={28} /></div>
              <h3 className="text-2xl font-bold text-white mb-3">Blob Service</h3>
              <p className="text-slate-400 mb-6 flex-grow">Sistema de almacenamiento de blobs en un servidor remoto con control de usuarios sencillo, desarrollado para la asignatura de Aplicaciones Distribuidas en Internet.</p>
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300">Python</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300">Docker</span>
              </div>
              <a href="https://github.com/Pedro-Antonio-Tr/Blob-Service---ADI" className="inline-flex items-center text-cyan-400 font-medium text-sm group-hover:translate-x-1 transition-transform">Ver Repositorio →</a>
            </SpotlightCard>

            {/* Proyecto 2 */}
            <SpotlightCard className="group border border-white/10 bg-zinc-900/80 p-8 rounded-3xl h-full flex flex-col hover:border-purple-500/30 transition-colors text-left" spotlightColor="rgba(168, 85, 247, 0.15)">
              <div className="bg-purple-900/20 p-3 rounded-xl w-fit mb-6"><Globe className="text-purple-400" size={28} /></div>
              <h3 className="text-2xl font-bold text-white mb-3">Portfolio Interactivo</h3>
              <p className="text-slate-400 mb-6 flex-grow">Interfaz moderna con animaciones GPU-accelerated, efectos de iluminación y diseño responsivo.</p>
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300">Vite</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300">Tailwind</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300">React</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300">JavaScript</span>
              </div>
              <a href="https://github.com/Pedro-Antonio-TF/Pedro-Antonio-TF.github.io" className="inline-flex items-center text-purple-400 font-medium text-sm group-hover:translate-x-1 transition-transform">Ver Repositorio →</a>
            </SpotlightCard>

            {/* Proyecto 3 */}
            <SpotlightCard className="group border border-white/10 bg-zinc-900/80 p-8 rounded-3xl h-full flex flex-col hover:border-orange-500/30 transition-colors text-left" spotlightColor="rgba(247, 169, 85, 0.15)">
              <div className="bg-orange-900/20 p-3 rounded-xl w-fit mb-6"><PlayCircle className="text-orange-400" size={28} /></div>
              <h3 className="text-2xl font-bold text-white mb-3">Multimedia Player</h3>
              <p className="text-slate-400 mb-6 flex-grow">Aplicación desarrollada para la asignatura Multimedia, en el que crear, gestionar y visualizar playlists de archivos audiovisuales locales con la posibilidad de conversión a vídeo de la playlist.</p>
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300">C#</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300">.NET</span>
              </div>
              <a href="https://github.com/Pedro-Antonio-Tr/Laboratorio-Multimedia" className="inline-flex items-center text-orange-400 font-medium text-sm group-hover:translate-x-1 transition-transform">Ver Repositorio →</a>
            </SpotlightCard>

            {/* Proyecto 3 */}
            <SpotlightCard className="group border border-white/10 bg-zinc-900/80 p-8 rounded-3xl h-full flex flex-col hover:border-green-500/30 transition-colors text-left" spotlightColor="rgba(104, 247, 85, 0.31)">
              <div className="bg-green-900/20 p-3 rounded-xl w-fit mb-6"><Music className="text-green-400" size={28} /></div>
              <h3 className="text-2xl font-bold text-white mb-3">Gramola virtual</h3>
              <p className="text-slate-400 mb-6 flex-grow">Gramola virtual para reproducir música a través de la API de Spotify integrando un sistema de pagos experimental para la asignatura de Tecnologías y Sistemas Web.</p>
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300">Java</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300">Angular</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300">Spring Boot</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300">HTML</span>
              </div>
              <a href="" className="inline-flex items-center text-green-400 font-medium text-sm group-hover:translate-x-1 transition-transform">Repositorio aún no publicado</a>
            </SpotlightCard>
          </div>
        </section>

      </main>

      {/* --- DOCK FLOTANTE --- */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <Dock items={dockItems} panelHeight={68} baseItemSize={50} magnification={70} distance={100} />
      </div>

    </div>
  );
}

export default App;