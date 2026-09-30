import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, X, ExternalLink, ShieldCheck, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { policiesData } from "../pages/Terms";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-contact-modal", handleOpen);
    return () => window.removeEventListener("open-contact-modal", handleOpen);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setIsPoliciesOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setErrorMessage("");
      setAgreedToTerms(false);
      setFormState({name: "", email: "", service: "", message: ""});
    }, 300); // Reset after fade out
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      setErrorMessage("Please agree to the Terms & Policies before submitting.");
      return;
    }
    setIsSubmitting(true);
    setErrorMessage("");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "85e49922-3242-4658-8b24-92c0628f02c9",
          name: formState.name,
          email: formState.email,
          service: formState.service,
          message: formState.message,
          subject: `New Project Inquiry from ${formState.name} - VexStudios`,
          from_name: "VexStudios Website"
        })
      });

      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.message || "Failed to transmit message. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please try again or email us directly at vexstudios@outlook.in");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-[#05060a]/80 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div className={`relative z-10 w-full transition-all duration-300 flex items-center justify-center ${
        isPoliciesOpen ? "max-w-[700px]" : "max-w-[420px]"
      }`}>
        <button 
          onClick={handleClose}
          className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors bg-black/20 p-2 rounded-full hover:bg-white/10"
        >
          <X size={20} />
        </button>

        {isPoliciesOpen ? (
          /* Terms & Policies Viewer inside Contact Modal */
          <div className="contact-form w-full flex flex-col p-6 sm:p-8 max-h-[85vh] text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2 text-white font-['Sora'] font-bold text-lg uppercase tracking-wide">
                <ShieldCheck size={20} className="text-[#6f8cff]" />
                <span>Terms &amp; Policies</span>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  to="/terms"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[11px] text-[#6f8cff] hover:text-white transition-colors bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                  title="Open full page in new tab"
                >
                  <span>Full Page</span>
                  <ExternalLink size={12} />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsPoliciesOpen(false)}
                  className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto space-y-5 pr-2 max-h-[55vh] custom-scrollbar text-xs">
              <p className="text-[#b9c0e6] leading-relaxed">
                Please review our official terms, payment policies, and project requirements before submitting your request.
              </p>
              {policiesData.map((policy) => {
                const Icon = policy.icon;
                return (
                  <div key={policy.id} className="bg-black/30 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-2.5 mb-2.5 text-white font-semibold">
                      <Icon size={16} className="text-[#6f8cff]" />
                      <span>{policy.title}</span>
                    </div>
                    {policy.content}
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setIsPoliciesOpen(false)}
                className="flex items-center gap-1.5 text-xs text-[#aab2da] hover:text-white transition-colors"
              >
                <ArrowLeft size={14} /> Back to Project Form
              </button>
              <button
                type="button"
                onClick={() => {
                  setAgreedToTerms(true);
                  setIsPoliciesOpen(false);
                }}
                className="px-6 py-2.5 rounded-full bg-[#6f8cff] text-white font-['Sora'] font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all"
              >
                I Understand &amp; Agree
              </button>
            </div>
          </div>
        ) : isSuccess ? (
          <div className="contact-form flex flex-col items-center justify-center text-center py-12 min-h-[400px]">
             <section className="contact-bg-stars">
              <span className="contact-star"></span>
              <span className="contact-star"></span>
              <span className="contact-star"></span>
              <span className="contact-star"></span>
            </section>
            
            <div className="w-20 h-20 bg-[#6f8cff]/10 rounded-full flex items-center justify-center mb-6 border border-[#6f8cff]/30">
              <CheckCircle2 className="text-[#6f8cff]" size={40} />
            </div>
            <h3 className="font-['Sora'] text-2xl font-bold uppercase tracking-tight text-white mb-4">Transmission Sent</h3>
            <p className="text-[#aab2da] text-sm font-light leading-relaxed max-w-xs mb-8">
              Your details are in our system. A project architect will be in touch shortly via <span className="text-[#6f8cff]">vexstudios@outlook.in</span>.
            </p>
            <button 
              onClick={handleClose}
              className="px-8 py-3 rounded-full text-xs uppercase tracking-widest bg-white/5 border border-white/10 hover:border-[#6f8cff] transition-all text-white"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-title"><span>start your</span></div>
            <div className="contact-title-2"><span>PROJECT</span></div>
            
            <section className="contact-bg-stars">
              <span className="contact-star"></span>
              <span className="contact-star"></span>
              <span className="contact-star"></span>
              <span className="contact-star"></span>
            </section>

            <div className="contact-input-container">
              <input 
                placeholder="Name" 
                type="text" 
                className="contact-input"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact-input-container">
              <input 
                placeholder="Email Address" 
                type="email" 
                className="contact-input"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="contact-input-container">
              <select 
                name="service"
                required
                value={formState.service}
                onChange={handleChange}
                className="contact-input appearance-none text-white/70"
              >
                <option value="" disabled className="text-black">Select a service...</option>
                <option value="Brand Identity" className="text-black">Brand Identity</option>
                <option value="Marketing Automation" className="text-black">Marketing Automation</option>
                <option value="Digital Marketing & SEO" className="text-black">Digital Marketing & SEO</option>
                <option value="Website Development" className="text-black">Website Development</option>
                <option value="Ecommerce Automation" className="text-black">Ecommerce Automation</option>
                <option value="Custom Software Dev" className="text-black">Custom Software Dev</option>
                <option value="Other" className="text-black">Other / Unsure</option>
              </select>
            </div>

            <div className="contact-input-container">
              <textarea 
                placeholder="Project Details..."
                name="message"
                required
                value={formState.message}
                onChange={handleChange}
                rows={3}
                className="contact-input resize-none"
              />
            </div>

            {/* Terms & Policies Checkbox Before Form Submission */}
            <div className="flex items-center justify-center gap-2.5 my-3.5 px-2 select-none">
              <input
                type="checkbox"
                id="agree-terms-checkbox"
                required
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-4 h-4 rounded cursor-pointer accent-[#6f8cff] bg-black/40 border border-white/20 transition-all focus:ring-1 focus:ring-[#6f8cff]"
              />
              <label htmlFor="agree-terms-checkbox" className="text-[11px] text-[#aab2da]/85 cursor-pointer leading-tight">
                I agree to the{" "}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPoliciesOpen(true);
                  }}
                  className="text-[#6f8cff] underline hover:text-white transition-colors cursor-pointer font-medium"
                >
                  Terms &amp; Policies
                </button>
              </label>
            </div>

            {errorMessage && (
              <div className="text-[12px] text-rose-300 bg-rose-500/10 border border-rose-500/25 rounded-xl p-3 my-2 text-center leading-relaxed">
                {errorMessage}
              </div>
            )}

            <button className="contact-submit" type="submit" disabled={isSubmitting}>
              <span className="sign-text flex items-center justify-center gap-2">
                {isSubmitting ? "Transmitting..." : "Send Message"}
                {!isSubmitting && <Send size={14} />}
              </span>
            </button>

          </form>
        )}
      </div>
    </div>
  );
}
