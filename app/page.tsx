"use client";

import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "basic", message: "" });

  const services = [
    { name: "Basic Clean", price: "$35", features: ["Surface dirt removal", "Basic brush cleaning", "Odor treatment", "48hr turnaround"] },
    { name: "Deep Clean", price: "$65", features: ["Complete stain removal", "Color restoration", "Water & stain protection", "24hr turnaround"] },
    { name: "Premium Restore", price: "$95", features: ["Full restoration service", "Nap revival", "Premium protectant", "Same day service"] }
  ];

  const steps = [
    { num: "01", title: "Drop Off or Ship", desc: "Bring your suede shoes to our location or ship them using our prepaid label" },
    { num: "02", title: "Expert Assessment", desc: "Our specialists evaluate condition and determine optimal cleaning method" },
    { num: "03", title: "Professional Cleaning", desc: "We use specialized tools and eco-friendly solutions to restore your suede" },
    { num: "04", title: "Quality Check & Return", desc: "Final inspection and protection application before returning to you" }
  ];

  const testimonials = [
    { name: "Marcus Chen", text: "My vintage suede loafers looked destroyed. They brought them back to life perfectly!", rating: 5 },
    { name: "Priya Sharma", text: "Professional service and fair pricing. My desert boots have never looked better.", rating: 5 },
    { name: "David Okonkwo", text: "Fast turnaround and amazing results. They removed stains I thought were permanent.", rating: 5 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:sepifazeli@yahoo.com?subject=Suede Cleaning Booking - ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AService: ${formData.service}%0D%0AMessage: ${formData.message}`;
  };

  return (
    <main className="bg-[#1a3a2e] text-white">
      <nav className="fixed top-0 w-full bg-[#1a3a2e]/95 backdrop-blur-sm z-50 border-b border-[#4a7c59]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#f4d58d]">SuedeRevive</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#services" className="hover:text-[#8ee4af] transition">Services</a>
            <a href="#process" className="hover:text-[#8ee4af] transition">Process</a>
            <a href="#pricing" className="hover:text-[#8ee4af] transition">Pricing</a>
            <a href="#booking" className="hover:text-[#8ee4af] transition">Book Now</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d5a3d] to-[#1a3a2e]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-[#f4d58d] leading-tight">Premium Suede<br/>Shoe Restoration</h1>
            <p className="text-xl md:text-2xl mb-8 text-[#8ee4af] max-w-3xl mx-auto">Expert cleaning and restoration for your finest suede footwear. We bring life back to every pair.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#booking" className="bg-[#f4d58d] text-[#1a3a2e] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#f4d58d]/90 transition transform hover:scale-105">Book Cleaning</a>
              <a href="#pricing" className="border-2 border-[#8ee4af] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#8ee4af]/10 transition">View Pricing</a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-[#234a36]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#f4d58d]">Why Choose Our Service</h2>
          <p className="text-center text-[#8ee4af] mb-16 text-lg">Professional suede care with over 15 years of expertise</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Specialized Equipment", desc: "Professional-grade suede brushes, erasers, and cleaning solutions designed specifically for delicate suede materials" },
              { title: "Expert Technicians", desc: "Trained specialists who understand suede grain direction, nap restoration, and proper cleaning techniques" },
              { title: "Eco-Friendly Solutions", desc: "Safe, biodegradable cleaning products that protect your shoes and the environment without compromising results" }
            ].map((item, i) => (
              <div key={i} className="bg-[#1a3a2e] p-8 rounded-xl border border-[#4a7c59] hover:border-[#8ee4af] transition transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 text-[#f4d58d]">{item.title}</h3>
                <p className="text-[#8ee4af]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#f4d58d]">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-bold text-[#f4d58d]/20 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-3 text-[#8ee4af]">{step.title}</h3>
                <p className="text-white/80">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-[#234a36]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#f4d58d]">Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className={`bg-[#1a3a2e] p-8 rounded-xl border-2 ${i === 1 ? 'border-[#f4d58d] scale-105' : 'border-[#4a7c59]'} hover:border-[#8ee4af] transition`}>
                <h3 className="text-2xl font-bold mb-2 text-[#8ee4af]">{service.name}</h3>
                <div className="text-5xl font-bold mb-6 text-[#f4d58d]">{service.price}</div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-[#8ee4af] text-xl">✓</span>
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#booking" className="block w-full bg-[#f4d58d] text-[#1a3a2e] py-3 rounded-lg font-bold text-center hover:bg-[#f4d58d]/90 transition">Select Service</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#f4d58d]">Customer Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <div key={i} className="bg-[#234a36] p-8 rounded-xl border border-[#4a7c59]">
                <div className="flex gap-1 mb-4">
                  {[...Array(test.rating)].map((_, j) => (
                    <span key={j} className="text-[#f4d58d] text-xl">★</span>
                  ))}
                </div>
                <p className="text-white/90 mb-4 italic">"{test.text}"</p>
                <p className="font-bold text-[#8ee4af]">{test.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-6 bg-[#234a36]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#f4d58d]">Book Your Cleaning</h2>
          <p className="text-center text-[#8ee4af] mb-12 text-lg">Get a quote or schedule your appointment today</p>
          <form onSubmit={handleSubmit} className="bg-[#1a3a2e] p-8 rounded-xl border border-[#4a7c59]">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input type="text" placeholder="Your Name" required className="bg-[#234a36] border border-[#4a7c59] rounded-lg px-4 py-3 focus:border-[#8ee4af] focus:outline-none" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <input type="email" placeholder="Email Address" required className="bg-[#234a36] border border-[#4a7c59] rounded-lg px-4 py-3 focus:border-[#8ee4af] focus:outline-none" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input type="tel" placeholder="Phone Number" className="bg-[#234a36] border border-[#4a7c59] rounded-lg px-4 py-3 focus:border-[#8ee4af] focus:outline-none" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              <select className="bg-[#234a36] border border-[#4a7c59] rounded-lg px-4 py-3 focus:border-[#8ee4af] focus:outline-none" value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}>
                <option value="basic">Basic Clean - $35</option>
                <option value="deep">Deep Clean - $65</option>
                <option value="premium">Premium Restore - $95</option>
              </select>
            </div>
            <textarea placeholder="Tell us about your shoes and any specific concerns..." rows={4} className="w-full bg-[#234a36] border border-[#4a7c59] rounded-lg px-4 py-3 mb-6 focus:border-[#8ee4af] focus:outline-none" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
            <button type="submit" className="w-full bg-[#f4d58d] text-[#1a3a2e] py-4 rounded-lg font-bold text-lg hover:bg-[#f4d58d]/90 transition transform hover:scale-105">Send Booking Request</button>
            <p className="text-center text-[#8ee4af] mt-4 text-sm">Or email us directly: <a href="mailto:sepifazeli@yahoo.com" className="underline hover:text-[#f4d58d]">sepifazeli@yahoo.com</a></p>
          </form>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-[#4a7c59]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-3xl font-bold text-[#f4d58d] mb-4">SuedeRevive</div>
          <p className="text-[#8ee4af] mb-4">Professional Suede Shoe Cleaning & Restoration</p>
          <p className="text-white/60">Contact: <a href="mailto:sepifazeli@yahoo.com" className="text-[#8ee4af] hover:text-[#f4d58d] transition">sepifazeli@yahoo.com</a></p>
          <p className="text-white/40 mt-8 text-sm">© 2024 SuedeRevive. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}