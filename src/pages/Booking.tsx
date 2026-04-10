import { Calendar, Clock, MapPin, User, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 text-center max-w-lg w-full"
        >
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Booking Received!</h2>
          <p className="text-slate-600 mb-10">
            Thank you for choosing Airtech Solutions. Our team will review your request and contact you within 2 hours to confirm your appointment.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary-dark transition-all"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Book Your Service</h1>
          <p className="text-slate-600">Complete the form below to schedule a technician visit.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center max-w-md mx-auto relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 z-0"></div>
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary z-0 transition-all duration-500"
              style={{ width: `${(step - 1) * 50}%` }}
            ></div>
            {[1, 2, 3].map((s) => (
              <div 
                key={s}
                className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 font-bold transition-all duration-500 ${
                  step >= s ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white text-slate-400 border-2 border-slate-200'
                }`}
              >
                {s}
              </div>
            ))}
          </div>
          <div className="flex justify-between max-w-md mx-auto mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span className={step >= 1 ? 'text-primary' : ''}>Service</span>
            <span className={step >= 2 ? 'text-primary' : ''}>Details</span>
            <span className={step >= 3 ? 'text-primary' : ''}>Confirm</span>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-primary" /> Select Service
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Minor Service', 'Major Service', 'Routine Maintenance', 'Aircon Installation', 'Gas Refilling', 'Leak Fixing', 'Fault Finding', 'Other'].map((service) => (
                      <label 
                        key={service}
                        className="relative flex items-center p-5 rounded-2xl border-2 border-slate-100 hover:border-primary/20 cursor-pointer transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5 group"
                      >
                        <input type="radio" name="service" className="hidden" defaultChecked={service === 'Minor Service'} />
                        <span className="font-bold text-slate-700 group-hover:text-primary transition-colors">{service}</span>
                        <div className="ml-auto w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-primary/30 transition-all">
                          <div className="w-3 h-3 rounded-full bg-primary opacity-0 transition-opacity"></div>
                        </div>
                      </label>
                    ))}
                  </div>
                  <div className="mt-12 flex justify-end">
                    <button 
                      type="button"
                      onClick={nextStep}
                      className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-primary" /> Appointment Details
                  </h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Date</label>
                        <input type="date" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Time</label>
                        <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none">
                          <option>Morning (8am - 12pm)</option>
                          <option>Afternoon (12pm - 4pm)</option>
                          <option>Evening (4pm - 8pm)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Service Address</label>
                      <div className="relative">
                        <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input type="text" className="w-full pl-14 pr-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none" placeholder="Street address, City, Zip Code" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Additional Notes</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-5 top-5 text-slate-400 w-5 h-5" />
                        <textarea rows={3} className="w-full pl-14 pr-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="Tell us more about the issue..."></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 flex justify-between">
                    <button 
                      type="button"
                      onClick={prevStep}
                      className="text-slate-500 font-bold hover:text-primary transition-colors"
                    >
                      Go Back
                    </button>
                    <button 
                      type="button"
                      onClick={nextStep}
                      className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <User className="w-6 h-6 text-primary" /> Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input type="text" className="w-full pl-14 pr-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none" placeholder="John Doe" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input type="tel" className="w-full pl-14 pr-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none" placeholder="+1 (234) 567-890" required />
                      </div>
                    </div>
                    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        By clicking "Confirm Booking", you agree to our terms of service and privacy policy. A technician will contact you shortly to confirm the appointment.
                      </p>
                    </div>
                  </div>
                  <div className="mt-12 flex justify-between">
                    <button 
                      type="button"
                      onClick={prevStep}
                      className="text-slate-500 font-bold hover:text-primary transition-colors"
                    >
                      Go Back
                    </button>
                    <button 
                      type="submit"
                      className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </div>
  );
}
