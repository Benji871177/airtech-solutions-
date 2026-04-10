import { ShieldCheck, Users, Target, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const values = [
    { title: 'Quality First', icon: <ShieldCheck className="w-8 h-8" />, desc: 'We never compromise on the quality of our work or the parts we use.' },
    { title: 'Customer Centric', icon: <Users className="w-8 h-8" />, desc: 'Your comfort is our priority. We listen, advise, and deliver results.' },
    { title: 'Precision', icon: <Target className="w-8 h-8" />, desc: 'HVAC systems require precision. Our technicians are trained for accuracy.' },
    { title: 'Certified', icon: <Award className="w-8 h-8" />, desc: 'Fully licensed and insured professionals you can trust in your home.' },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            About Airtech Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 max-w-3xl mx-auto text-lg"
          >
            Leading the way in HVAC innovation and service excellence for over a decade.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                At Airtech Solutions Systems, our mission is simple: to provide the highest quality cooling and heating solutions that enhance the comfort and well-being of our clients. 
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We started as a small team of dedicated technicians and have grown into a full-service HVAC provider trusted by thousands of homeowners and businesses. Our success is built on a foundation of technical expertise, honest pricing, and an unwavering commitment to customer service.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5k+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Team" 
                  className="relative rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
