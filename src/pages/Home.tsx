import { Link } from 'react-router-dom';
import { Wind, ShieldCheck, Clock, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const HERO_IMG = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000";

export default function Home() {
  const services = [
    { title: 'Minor Service', icon: <Clock className="w-6 h-6" />, desc: 'Quick check-up and basic maintenance for seasonal prep.' },
    { title: 'Major Service', icon: <ShieldCheck className="w-6 h-6" />, desc: 'Deep cleaning and comprehensive system overhaul.' },
    { title: 'Gas Refilling', icon: <Zap className="w-6 h-6" />, desc: 'Expert gas refilling to restore cooling efficiency.' },
    { title: 'Routine Maintenance', icon: <Wind className="w-6 h-6" />, desc: 'Scheduled visits to ensure year-round efficiency.' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMG} 
            alt="HVAC Technician" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-accent text-primary-dark font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Expert HVAC Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Stay Cool With <span className="text-accent">Airtech</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-100 mb-10 leading-relaxed">
              We provide professional air conditioning services, gas refilling, and maintenance for residential and commercial systems. Reliable, fast, and affordable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/booking" 
                className="bg-accent text-primary-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-dark transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                Book a Service <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Airtech?</h2>
            <p className="text-slate-600">We pride ourselves on technical excellence and customer satisfaction. Our team is equipped to handle any HVAC challenge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to fix your cooling system?</h2>
              <p className="text-primary-100 text-lg mb-8">
                Don't let a faulty AC ruin your day. Our technicians are ready to assist you 24/7 with emergency repairs and routine maintenance.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <li className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent" /> Certified Technicians
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent" /> 24/7 Emergency Service
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent" /> Affordable Pricing
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent" /> 100% Satisfaction
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Get a Free Quote</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="+1 (234) 567-890" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                    <option>Minor Service</option>
                    <option>Major Service</option>
                    <option>Routine Maintenance</option>
                    <option>Aircon Installation</option>
                    <option>Gas Refilling</option>
                    <option>Leak Fixing</option>
                    <option>Fault Finding</option>
                  </select>
                </div>
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg">
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
