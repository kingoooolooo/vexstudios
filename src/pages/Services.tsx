import React from "react";
import { Link } from "react-router-dom";
import { Fingerprint, Bot, BarChart, Code2, ShoppingCart, Cpu } from "lucide-react";

export default function Services() {
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
          <Link to="/studio" className="text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity">
            Studio
          </Link>
          <Link to="/services" className="text-xs uppercase tracking-[0.2em] text-[#6f8cff] font-semibold">
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
        <div className="max-w-3xl mb-24 work-fade-up" style={{ animationDelay: '400ms' }}>
          <h1 className="font-['Sora'] font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[0.95] mb-6">
            Our <span className="neb-outline">Services</span>
          </h1>
          <p className="text-[#b9c0e6] text-base md:text-lg max-w-2xl font-light leading-relaxed">
            We don't do generic templates. We build bespoke digital products, immersive 3D experiences, and intelligent automations designed to elevate your brand and optimize your operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 work-fade-up" style={{ animationDelay: '550ms' }}>
          
          {/* Service 1 */}
          <div className="notification">
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <Fingerprint className="noti-icon" size={32} strokeWidth={1.5} />
            <div className="notititle">Brand Identity</div>
            <div className="notibody">
              Forging digital DNA. We architect comprehensive brand strategies, from core naming and logo design to complete product packaging and startup kits.
            </div>
            <div className="noti-tags">
              {["Brand Strategy", "Logo Design", "Product Design", "Packaging"].map(tag => (
                <span key={tag} className="text-[9px] uppercase tracking-widest text-[#c2c8ee] bg-white/[0.03] px-2 py-1 rounded-full border border-white/10">{tag}</span>
              ))}
            </div>
          </div>

          {/* Service 2 */}
          <div className="notification">
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <Bot className="noti-icon" size={32} strokeWidth={1.5} />
            <div className="notititle">Marketing Automation</div>
            <div className="notibody">
              Intelligent marketing engines. We deploy automated workflows that transform manual follow-ups into deeply personalized, high-converting pipelines.
            </div>
            <div className="noti-tags">
              {["HubSpot", "Salesforce", "ActiveCampaign", "AI Chatbots"].map(tag => (
                <span key={tag} className="text-[9px] uppercase tracking-widest text-[#c2c8ee] bg-white/[0.03] px-2 py-1 rounded-full border border-white/10">{tag}</span>
              ))}
            </div>
          </div>

          {/* Service 3 */}
          <div className="notification">
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <BarChart className="noti-icon" size={32} strokeWidth={1.5} />
            <div className="notititle">Digital Marketing & SEO</div>
            <div className="notibody">
              Data-driven growth architecture. We don't guess—we mathematically optimize your digital footprint for maximum visibility and conversion rates.
            </div>
            <div className="noti-tags">
              {["Performance Marketing", "Technical SEO", "PPC", "CRO"].map(tag => (
                <span key={tag} className="text-[9px] uppercase tracking-widest text-[#c2c8ee] bg-white/[0.03] px-2 py-1 rounded-full border border-white/10">{tag}</span>
              ))}
            </div>
          </div>

          {/* Service 4 */}
          <div className="notification">
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <Code2 className="noti-icon" size={32} strokeWidth={1.5} />
            <div className="notititle">Website Development</div>
            <div className="notibody">
              Bespoke digital platforms. Moving beyond generic templates, we engineer custom React, Vue, and headless architectures optimized for absolute speed.
            </div>
            <div className="noti-tags">
              {["UI/UX Design", "React / Next.js", "API Integrations", "WebGL"].map(tag => (
                <span key={tag} className="text-[9px] uppercase tracking-widest text-[#c2c8ee] bg-white/[0.03] px-2 py-1 rounded-full border border-white/10">{tag}</span>
              ))}
            </div>
          </div>

          {/* Service 5 */}
          <div className="notification">
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <ShoppingCart className="noti-icon" size={32} strokeWidth={1.5} />
            <div className="notititle">Ecommerce Automation</div>
            <div className="notibody">
              Scaling revenue seamlessly. We optimize infrastructures with advanced workflow automations and custom sales integrations, turning your storefront into an autonomous machine.
            </div>
            <div className="noti-tags">
              {["Shopify Automation", "Magento", "Workflow AI", "Amazon Ads"].map(tag => (
                <span key={tag} className="text-[9px] uppercase tracking-widest text-[#c2c8ee] bg-white/[0.03] px-2 py-1 rounded-full border border-white/10">{tag}</span>
              ))}
            </div>
          </div>

          {/* Service 6 */}
          <div className="notification">
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <Cpu className="noti-icon" size={32} strokeWidth={1.5} />
            <div className="notititle">Custom Software Dev</div>
            <div className="notibody">
              Engineering the complex. From high-performance mobile apps to intricate SaaS platforms, we combine deep technical expertise with beautiful UI/UX logic.
            </div>
            <div className="noti-tags">
              {["iOS & Android", "SaaS Architecture", "Mobile UI/UX", "Backend Eng."].map(tag => (
                <span key={tag} className="text-[9px] uppercase tracking-widest text-[#c2c8ee] bg-white/[0.03] px-2 py-1 rounded-full border border-white/10">{tag}</span>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-32 text-center work-fade-up" style={{ animationDelay: '700ms' }}>
          <p className="text-[#aab2da] text-sm uppercase tracking-[0.2em] mb-6">Need a custom solution?</p>
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
      <footer className="relative z-10 border-t border-white/10 py-12 px-6 text-center text-xs tracking-widest text-[#aab2da] uppercase work-fade-up" style={{ animationDelay: '850ms' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>© {new Date().getFullYear()} VEXSTUDIOS. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/work" className="hover:text-white transition-colors">Work</Link>
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
