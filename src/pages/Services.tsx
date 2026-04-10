import { Wind, Zap, ShieldAlert, Search, Settings, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'aircon',
      title: 'Aircon Installation & Repair',
      icon: <Wind className="w-8 h-8" />,
      description: 'Professional installation of split units, window units, and central air systems. We also provide expert repair services for all major brands.',
      features: ['Residential & Commercial', 'Energy Efficient Solutions', 'New Unit Installation', 'Component Replacement'],
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'gas',
      title: 'Gas Refilling',
      icon: <Zap className="w-8 h-8" />,
      description: 'Is your AC not cooling like it used to? You might need a gas refill. We use high-quality refrigerants to restore your system performance.',
      features: ['R22 & R410A Refilling', 'Pressure Testing', 'System Vacuuming', 'Performance Optimization'],
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'leak',
      title: 'Leak Fixing',
      icon: <ShieldAlert className="w-8 h-8" />,
      description: 'Refrigerant leaks can damage your system and the environment. Our team uses advanced tools to find and seal leaks permanently.',
      features: ['Electronic Leak Detection', 'Nitrogen Pressure Testing', 'Pipe Repair & Welding', 'Sealant Application'],
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'fault',
      title: 'Fault Finding',
      icon: <Search className="w-8 h-8" />,
      description: 'System behaving strangely? We specialize in complex diagnostics to find the root cause of electrical or mechanical failures.',
      features: ['Electrical Diagnostics', 'Control Board Testing', 'Compressor Analysis', 'Sensor Calibration'],
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'minor-service',
      title: 'Minor Service',
      icon: <Settings className="w-8 h-8" />,
      description: 'Quick check-up and basic maintenance to keep your system running smoothly. Ideal for regular seasonal prep.',
      features: ['Filter Cleaning', 'Basic Inspection', 'Drain Line Flush', 'Performance Test'],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'major-service',
      title: 'Major Service',
      icon: <Settings className="w-8 h-8" />,
      description: 'Deep cleaning and comprehensive system overhaul. Recommended annually for maximum longevity and efficiency.',
      features: ['Chemical Coil Wash', 'Electrical Component Check', 'Gas Pressure Check', 'Full System Sanitization'],
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'maintenance',
      title: 'Routine Maintenance',
      icon: <Settings className="w-8 h-8" />,
      description: 'Prevent breakdowns with regular servicing. Our maintenance plans ensure your system runs efficiently all year round.',
      features: ['Scheduled Visits', 'Priority Support', 'Energy Audit', 'Detailed Health Reports'],
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Professional Services</h1>
          <p className="text-primary-100 max-w-2xl mx-auto text-lg">
            Comprehensive HVAC solutions tailored to your needs. From emergency repairs to scheduled maintenance, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-slate-700 font-medium">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                  >
                    Book this service <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] group-hover:bg-primary/10 transition-colors"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-accent rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6">Need a custom solution?</h2>
            <p className="text-primary-dark/80 text-lg max-w-2xl mx-auto mb-10 font-medium">
              We handle projects of all sizes. Contact us today for a personalized consultation and competitive quote.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-xl inline-block"
            >
              Contact Us Now
            </Link>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>
    </div>
  );
}
