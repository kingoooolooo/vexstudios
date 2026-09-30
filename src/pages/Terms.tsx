import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  CreditCard, 
  RefreshCcw, 
  Lock, 
  Layers, 
  Globe, 
  Wrench, 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Award, 
  MessageSquare, 
  Scale, 
  ExternalLink 
} from "lucide-react";

export const policiesData = [
  {
    id: 1,
    title: "1. Payment Policy",
    icon: CreditCard,
    content: (
      <ul className="space-y-2 text-[#b9c0e6] text-sm leading-relaxed">
        <li>• <strong className="text-white">20% advance</strong> is required to begin the project.</li>
        <li>• The <strong className="text-white">remaining 80%</strong> is due once the entire work is completed and before final handover.</li>
        <li>• Work will not be delivered or made live until full payment is received.</li>
      </ul>
    )
  },
  {
    id: 2,
    title: "2. Refund Policy",
    icon: RefreshCcw,
    content: (
      <ul className="space-y-2 text-[#b9c0e6] text-sm leading-relaxed">
        <li>• If the client is dissatisfied at any stage <strong className="text-white">before project completion</strong>, we will refund the <strong className="text-white">full advance payment within 5 working days</strong>.</li>
        <li>• Once the project is completed and delivered, <strong className="text-white">no refund is applicable</strong>.</li>
      </ul>
    )
  },
  {
    id: 3,
    title: "3. Privacy & Data Security",
    icon: Lock,
    content: (
      <ul className="space-y-2 text-[#b9c0e6] text-sm leading-relaxed">
        <li>• All client data, documents, and business information are kept strictly confidential.</li>
        <li>• We will never share, sell, or disclose client information to any third party without written consent, except where required by law.</li>
      </ul>
    )
  },
  {
    id: 4,
    title: "4. Plans & Pricing",
    icon: Layers,
    content: (
      <div className="space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#b9c0e6] border border-white/10 rounded-xl overflow-hidden">
            <thead className="bg-white/5 text-white uppercase text-xs tracking-wider">
              <tr>
                <th className="py-3 px-4 border-b border-white/10 font-semibold">Plan</th>
                <th className="py-3 px-4 border-b border-white/10 font-semibold">Price</th>
                <th className="py-3 px-4 border-b border-white/10 font-semibold">Delivery Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 bg-black/20">
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3 px-4 font-medium text-white">Basic</td>
                <td className="py-3 px-4 text-[#6f8cff] font-semibold">₹2,000</td>
                <td className="py-3 px-4">7 days</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3 px-4 font-medium text-white">Premium</td>
                <td className="py-3 px-4 text-[#6f8cff] font-semibold">₹4,500</td>
                <td className="py-3 px-4">15-20 days</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3 px-4 font-medium text-white">Advanced</td>
                <td className="py-3 px-4 text-[#6f8cff] font-semibold">₹8,000</td>
                <td className="py-3 px-4">45 days</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#aab2da] italic">
          *(Delivery time starts after the advance payment and all required content are received.)*
        </p>
      </div>
    )
  },
  {
    id: 5,
    title: "5. Domain & Hosting",
    icon: Globe,
    content: (
      <ul className="space-y-2 text-[#b9c0e6] text-sm leading-relaxed">
        <li>• We can host your website on the internet.</li>
        <li>• <strong className="text-white">Domain registration</strong> (.in, .com, .online, etc.) is charged separately, at the actual cost of the domain.</li>
        <li>• We do not guarantee SEO results or search engine rankings. SEO services, if needed, are offered separately.</li>
      </ul>
    )
  },
  {
    id: 6,
    title: "6. Warranty & Support",
    icon: ShieldCheck,
    content: (
      <ul className="space-y-2 text-[#b9c0e6] text-sm leading-relaxed">
        <li>• Every project includes <strong className="text-white">6 months of free bug fixing</strong> from the date of delivery.</li>
        <li>• The warranty covers only errors in the originally delivered work.</li>
        <li>• New features, design changes, or additional pages are <strong className="text-white">paid services</strong>.</li>
      </ul>
    )
  },
  {
    id: 7,
    title: "7. Scope of Work",
    icon: FileText,
    content: (
      <ul className="space-y-2 text-[#b9c0e6] text-sm leading-relaxed">
        <li>• The project scope is decided and agreed upon before work begins.</li>
        <li>• Any request beyond the agreed scope is treated as a change request and may affect the price and timeline.</li>
      </ul>
    )
  },
  {
    id: 8,
    title: "8. Revision Policy",
    icon: RefreshCcw,
    content: (
      <ul className="space-y-2 text-[#b9c0e6] text-sm leading-relaxed">
        <li>• Each plan includes a limited number of revisions (suggested: <strong className="text-white">Basic: 2, Premium: 4, Advanced: 6</strong>).</li>
        <li>• Additional revisions beyond this limit are charged separately.</li>
      </ul>
    )
  },
  {
    id: 9,
    title: "9. Client Responsibilities",
    icon: CheckCircle,
    content: (
      <ul className="space-y-2 text-[#b9c0e6] text-sm leading-relaxed">
        <li>• The client must provide all required content (text, logo, images, etc.) on time.</li>
        <li>• Delays in feedback, approvals, or content will extend the delivery timeline by the same period.</li>
      </ul>
    )
  },
  {
    id: 10,
    title: "10. Timeline & Delays",
    icon: Clock,
    content: (
      <ul className="space-y-2 text-[#b9c0e6] text-sm leading-relaxed">
        <li>• We make every effort to deliver on time.</li>
        <li>• Delays caused by the client, or by factors outside our control (server outages, third-party services, etc.), are not counted against our delivery time.</li>
      </ul>
    )
  },
  {
    id: 11,
    title: "11. Cancellation Policy",
    icon: AlertCircle,
    content: (
      <ul className="space-y-2 text-[#b9c0e6] text-sm leading-relaxed">
        <li>• Projects can be cancelled before completion, and the refund policy in Section 2 applies.</li>
        <li>• If a client becomes unresponsive for <strong className="text-white">15+ days</strong>, the project may be paused or closed.</li>
      </ul>
    )
  },
  {
    id: 12,
    title: "12. Late Payment",
    icon: CreditCard,
    content: (
      <ul className="space-y-2 text-[#b9c0e6] text-sm leading-relaxed">
        <li>• The final payment must be made within <strong className="text-white">3 days</strong> of the completion notice.</li>
        <li>• Delayed payments may result in the website being taken offline or handover being withheld.</li>
      </ul>
    )
  },
  {
    id: 13,
    title: "13. Ownership & Intellectual Property",
    icon: Award,
    content: (
      <ul className="space-y-2 text-[#b9c0e6] text-sm leading-relaxed">
        <li>• Full ownership of the final website transfers to the client <strong className="text-white">after full payment</strong>.</li>
        <li>• Vex Studio retains ownership of any pre-existing tools, code libraries, or templates used.</li>
        <li>• The client is responsible for ensuring they have rights to all content they provide.</li>
      </ul>
    )
  },
  {
    id: 14,
    title: "14. Portfolio Rights",
    icon: Layers,
    content: (
      <ul className="space-y-2 text-[#b9c0e6] text-sm leading-relaxed">
        <li>• Vex Studio may display the completed project in its portfolio or marketing materials, unless the client requests otherwise in writing.</li>
      </ul>
    )
  },
  {
    id: 15,
    title: "15. Third-Party Services",
    icon: Wrench,
    content: (
      <ul className="space-y-2 text-[#b9c0e6] text-sm leading-relaxed">
        <li>• Paid tools or services (premium plugins, themes, payment gateways, SMS/email services, stock images, etc.) are billed to the client.</li>
        <li>• We are not responsible for downtime or changes by third-party providers.</li>
      </ul>
    )
  },
  {
    id: 16,
    title: "16. Post-Warranty Support",
    icon: ShieldCheck,
    content: (
      <ul className="space-y-2 text-[#b9c0e6] text-sm leading-relaxed">
        <li>• After the 6-month warranty, maintenance and support are available under a paid plan or hourly rate.</li>
      </ul>
    )
  },
  {
    id: 17,
    title: "17. Communication",
    icon: MessageSquare,
    content: (
      <ul className="space-y-2 text-[#b9c0e6] text-sm leading-relaxed">
        <li>• Official communication happens via WhatsApp, email, or phone at agreed times.</li>
        <li>• Official Email: <a href="mailto:vexstudios@outlook.in" className="text-[#6f8cff] underline hover:text-white transition-colors">vexstudios@outlook.in</a></li>
        <li>• We respond within <strong className="text-white">24 hours</strong> on working days.</li>
      </ul>
    )
  },
  {
    id: 18,
    title: "18. Dispute Resolution",
    icon: Scale,
    content: (
      <ul className="space-y-2 text-[#b9c0e6] text-sm leading-relaxed">
        <li>• Any dispute will first be resolved through mutual discussion.</li>
        <li>• If unresolved, it will be subject to the jurisdiction of the local applicable courts.</li>
      </ul>
    )
  }
];

export default function Terms() {
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
      <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-12 pb-24">
        {/* Header Title */}
        <div className="mb-16 work-fade-up" style={{ animationDelay: '300ms' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6f8cff]/10 border border-[#6f8cff]/20 text-[#6f8cff] text-xs font-semibold tracking-widest uppercase mb-6">
            <ShieldCheck size={14} /> Official Guidelines &amp; Agreement
          </div>
          <h1 className="font-['Sora'] font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-[1] mb-6">
            Terms &amp; <span className="neb-outline">Policies</span>
          </h1>
          <p className="text-[#b9c0e6] text-base md:text-lg max-w-2xl font-light leading-relaxed">
            Transparent, fair, and designed for lasting collaboration. Please review our service policies, payment terms, and project guidelines.
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 work-fade-up" style={{ animationDelay: '450ms' }}>
          {policiesData.map((policy) => {
            const Icon = policy.icon;
            return (
              <div 
                key={policy.id} 
                className={`bg-[#0a0d1a]/70 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md hover:border-[#6f8cff]/40 transition-all ${
                  policy.id === 4 ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#6f8cff]/10 border border-[#6f8cff]/20 flex items-center justify-center text-[#6f8cff]">
                    <Icon size={20} />
                  </div>
                  <h2 className="font-['Sora'] font-bold text-lg text-white uppercase tracking-wide">
                    {policy.title}
                  </h2>
                </div>
                <div>
                  {policy.content}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-[#10132b] to-[#080a14] border border-[#6f8cff]/30 text-center work-fade-up" style={{ animationDelay: '600ms' }}>
          <h3 className="font-['Sora'] font-bold text-2xl text-white uppercase mb-3">Have questions regarding our terms?</h3>
          <p className="text-[#aab2da] text-sm max-w-xl mx-auto mb-6">
            We are committed to clear and open communication. Reach out directly to our team at{" "}
            <a href="mailto:vexstudios@outlook.in" className="text-[#6f8cff] underline hover:text-white transition-colors">
              vexstudios@outlook.in
            </a>
          </p>
          <button
            onClick={() => window.dispatchEvent(new Event("open-contact-modal"))}
            className="px-8 py-4 rounded-full bg-[#6f8cff] text-white font-['Sora'] font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Start a Project
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 px-6 text-center text-xs tracking-widest text-[#aab2da] uppercase work-fade-up" style={{ animationDelay: '700ms' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>© {new Date().getFullYear()} VEXSTUDIOS. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/work" className="hover:text-white transition-colors">Work</Link>
            <Link to="/studio" className="hover:text-white transition-colors">Studio</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
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
