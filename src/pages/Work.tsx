import React, { useState } from "react";
import { Link } from "react-router-dom";

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  year: string;
}

export const genuineProjects: Project[] = [
  {
    id: "campus-connect",
    title: "CampusConnect",
    subtitle: "SAM Global University",
    category: "Website Development",
    description: "A private, student-only college communication and resource-sharing platform. Features real-time department chat, permanent notes repository, verified student access, and Yufi — an AI study assistant powered by Google Gemini.",
    tags: ["Next.js", "Google Gemini AI", "WebSockets", "Tailwind CSS"],
    image: import.meta.env.BASE_URL + "projects/campus_connect.png",
    liveUrl: "https://campus-connect-sam.vercel.app/",
    year: "2026"
  }
];

const categories = ["All", "Brand Identity", "Marketing Automation", "Digital Marketing & SEO", "Website Development", "Ecommerce Automation", "Custom Software Dev"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? genuineProjects
    : genuineProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#05060a] text-[#eef1ff] font-['Space_Grotesk',sans-serif] relative overflow-x-hidden">
      {/* Background Ambient Glow */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-60"
        style={{
          background: "radial-gradient(100% 120% at 50% 10%, #10122a 0%, #0a0b1a 50%, #05060a 100%)"
        }}
      />

      {/* Navigation */}
      <header className="relative z-10 flex items-center justify-between px-8 py-7 md:px-14 work-fade-up" style={{ animationDelay: '200ms' }}>
        <Link to="/" className="font-['Sora'] font-extrabold text-xl tracking-wider uppercase text-white hover:opacity-80 transition-opacity">
          VexStudios<span className="text-[#6f8cff]">®</span>
        </Link>
        
        <nav className="flex items-center gap-6 md:gap-8">
          <Link to="/work" className="text-xs uppercase tracking-[0.2em] text-[#6f8cff] font-semibold">
            Work
          </Link>
          <Link to="/studio" className="text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity">
            Studio
          </Link>
          <Link to="/services" className="text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity">
            Services
          </Link>
          <a 
            href="#contact" 
            className="text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event("open-contact-modal"));
            }}
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-24">
        {/* Header Title */}
        <div className="max-w-3xl mb-14 work-fade-up" style={{ animationDelay: '400ms' }}>
          <h1 className="font-['Sora'] font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[0.95] mb-6">
            Our Genuine <span className="neb-outline">Work</span>
          </h1>
          <p className="text-[#b9c0e6] text-base md:text-lg max-w-2xl font-light leading-relaxed">
            Live web applications and digital platforms engineered by VexStudios for real clients and users.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-3 mb-12 work-fade-up" style={{ animationDelay: '550ms' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all border ${
                activeCategory === cat
                  ? "bg-[#6f8cff] text-white border-[#6f8cff] shadow-[0_0_20px_rgba(111,140,255,0.4)]"
                  : "bg-white/5 text-[#aab2da] border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 work-fade-up" style={{ animationDelay: '700ms' }}>
          {filteredProjects.map((project) => (
            <div key={project.id} className="flex flex-col gap-6 group">
              {/* 3D Image Card */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-container select-none block aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10]"
              >
                <div className="canvas w-full h-full">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className={`tracker tr-${i + 1}`}></div>
                  ))}
                  
                  <div className="cyber-card">
                    <div className="card-content">
                      <div 
                        className="cyber-card-bg" 
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="cyber-overlay" />
                      <div className="card-glare"></div>
                      <div className="cyber-lines">
                        <span></span><span></span><span></span><span></span>
                      </div>
                      
                      <div className="cyber-prompt text-center flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <span className="text-white font-bold tracking-[0.2em] uppercase text-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Launch Site</span>
                        <span className="text-[10px] text-white/70 mt-2 tracking-[0.3em] font-light drop-shadow-md">↗</span>
                      </div>
                      
                      <div className="glowing-elements">
                        <div className="glow-1"></div>
                        <div className="glow-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Project Info (Outside Card) */}
              <div className="flex flex-col gap-4 px-2">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-['Sora'] font-bold text-2xl text-white group-hover:text-[#8aa0ff] transition-colors uppercase tracking-wide">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-sm text-[#6f8cff] font-medium tracking-wide mt-1.5">
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[#aab2da] text-xs font-['Sora'] tracking-[0.2em] uppercase block">{project.category}</span>
                    <span className="text-[10px] text-white/40 mt-1.5 font-normal tracking-[0.3em] block">{project.year}</span>
                  </div>
                </div>
                
                <p className="text-[#aab2da]/70 text-sm font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest text-[#6f8cff] bg-[#6f8cff]/10 px-3 py-1.5 rounded-full border border-[#6f8cff]/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Add Work Placeholder Card */}
          <div className="border border-dashed border-white/15 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-white/[0.02] hover:bg-white/[0.04] transition-colors min-h-[360px]">
            <div className="w-12 h-12 rounded-full bg-[#6f8cff]/10 border border-[#6f8cff]/30 flex items-center justify-center text-[#6f8cff] text-xl font-bold mb-4">
              +
            </div>
            <h4 className="font-['Sora'] font-semibold text-lg text-white mb-2">More Genuine Works Coming Soon</h4>
            <p className="text-[#8aa0ff]/70 text-xs max-w-xs leading-relaxed">
              Have another deployed project link to add? Send it over and we'll instantly feature it here!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 px-6 text-center text-xs tracking-widest text-[#aab2da] uppercase work-fade-up" style={{ animationDelay: '800ms' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>© {new Date().getFullYear()} VEXSTUDIOS. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/studio" className="hover:text-white transition-colors">Studio</Link>
            <a 
              href="#contact" 
              className="hover:text-white transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("open-contact-modal"));
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
