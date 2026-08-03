import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, X } from "lucide-react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-contact-modal", handleOpen);
    return () => window.removeEventListener("open-contact-modal", handleOpen);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setFormState({name: "", email: "", service: "", message: ""});
    }, 300); // Reset after fade out
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
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
      <div className="relative z-10 w-full max-w-[400px] flex items-center justify-center animate-in zoom-in-95 duration-300">
        <button 
          onClick={handleClose}
          className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors bg-black/20 p-2 rounded-full hover:bg-white/10"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
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
              Your details are in our system. A project architect will be in touch shortly.
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
