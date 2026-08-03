import React from "react";
import { Link } from "react-router-dom";
import { Lightbulb, Users } from "lucide-react";

export default function Studio() {
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
          <Link to="/work" className="text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity">
            Work
          </Link>
          <Link to="/studio" className="text-xs uppercase tracking-[0.2em] text-[#6f8cff] font-semibold">
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
        <div className="max-w-3xl mb-20 work-fade-up" style={{ animationDelay: '400ms' }}>
          <h1 className="font-['Sora'] font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[0.95] mb-6">
            Building digital <span className="neb-outline">worlds</span>
          </h1>
          <p className="text-[#b9c0e6] text-base md:text-lg max-w-2xl font-light leading-relaxed">
            VexStudios was born out of a desire to move beyond the generic web. We believe that digital platforms should be immersive, motion-driven experiences that feel truly alive. We blend high-end design with rigorous technical engineering.
          </p>
        </div>

        {/* Philosophy & Difference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 work-fade-up" style={{ animationDelay: '550ms' }}>
          
          <div className="notification">
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <Lightbulb className="noti-icon" size={32} strokeWidth={1.5} />
            <div className="notititle">Our Philosophy</div>
            <div className="notibody space-y-4">
              <p>
                We approach every build as a unique piece of architecture. We don't rely on templates or bloated frameworks. Instead, we write custom shaders, custom WebGL pipelines, and highly optimized frontend code to ensure that our projects are as performant as they are visually stunning.
              </p>
              <p>
                Performance and aesthetics shouldn't be mutually exclusive. By controlling the entire stack from concept to code, we deliver platforms that wow users instantly without sacrificing speed.
              </p>
            </div>
          </div>

          <div className="notification">
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <Users className="noti-icon" size={32} strokeWidth={1.5} />
            <div className="notititle">Culture & Vibe</div>
            <div className="notibody space-y-4">
              <p>
                We operate as a highly specialized, multi-disciplinary strike team. We're a remote-first crew of designers, engineers, and 3D artists who collaborate deeply on every detail. 
              </p>
              <p>
                We value direct communication, iterative prototyping, and obsessing over micro-interactions. If an animation feels slightly off, we rewrite the math. That's the VexStudios standard.
              </p>
            </div>
          </div>

        </div>

        {/* Process Strip */}
        <div className="mb-24 work-fade-up" style={{ animationDelay: '700ms' }}>
          <h2 className="font-['Sora'] font-bold text-3xl uppercase tracking-wide mb-10 border-b border-white/10 pb-6">
            The Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Discover", desc: "Deep diving into your brand architecture and strategic goals." },
              { step: "02", title: "Design", desc: "Crafting wireframes, UI layouts, and early 3D visual concepts." },
              { step: "03", title: "Build", desc: "Engineering the platform with custom physics and modern frameworks." },
              { step: "04", title: "Launch", desc: "Rigorous testing, optimization, and deploying to the world." },
              { step: "05", title: "Iterate", desc: "Post-launch refinement based on real user analytics." }
            ].map((s) => (
              <div key={s.step} className="group flex flex-col gap-3">
                <span className="text-[#6f8cff] font-['Sora'] font-bold text-xl">{s.step}</span>
                <h4 className="text-white font-bold uppercase tracking-wider">{s.title}</h4>
                <p className="text-[#aab2da]/70 text-xs leading-relaxed">{s.desc}</p>
                <div className="h-0.5 w-full bg-white/10 mt-2 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-[#6f8cff] w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities & Tech Stack */}
        <div className="mb-20 work-fade-up" style={{ animationDelay: '850ms' }}>
          <h2 className="font-['Sora'] font-bold text-3xl uppercase tracking-wide mb-10 border-b border-white/10 pb-6">
            Capabilities & Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "WebGL & Three.js",
              "Custom GLSL Shaders",
              "Next.js / React",
              "Tailwind CSS",
              "Motion & Interaction",
              "UI/UX Systems",
              "E-Commerce Architecture",
              "Performance Optimization"
            ].map((cap, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#6f8cff]/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#6f8cff]"></div>
                <span className="text-[#c2c8ee] text-xs font-semibold tracking-widest uppercase">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center work-fade-up" style={{ animationDelay: '1000ms' }}>
          <p className="text-[#aab2da] text-sm uppercase tracking-[0.2em] mb-6">Ready to build something extraordinary?</p>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event("open-contact-modal"));
            }}
            className="inline-block px-10 py-5 bg-[#6f8cff] text-white font-['Sora'] font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-[#05060a] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(111,140,255,0.4)]"
          >
            Start a Project
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 px-6 text-center text-xs tracking-widest text-[#aab2da] uppercase work-fade-up" style={{ animationDelay: '1100ms' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>© {new Date().getFullYear()} VEXSTUDIOS. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <Link to="/work" className="hover:text-white transition-colors">Work</Link>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
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
