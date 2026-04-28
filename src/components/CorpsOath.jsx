import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBreathing } from '../context/BreathingContext';
import { Check, Sword, User, Mail, Phone, Ticket, AlertCircle } from 'lucide-react';

export function CorpsOath() {
  const { breathing, BREATHING_STYLES } = useBreathing();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    breathingStyle: '',
    ticketCount: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.breathingStyle) newErrors.breathingStyle = 'Choose your breathing style';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const breathingColor = breathing.color || '#a29bfe';

  return (
    <section className="relative min-h-screen w-full py-24 px-6 bg-gradient-to-b from-[#0c0c1a] via-[#0a0a12] to-[#0c0c1a] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, ${breathingColor}10, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* <p className="text-wisteria-light text-sm tracking-[0.5em] mb-4 uppercase">
            The Corps Oath
          </p> */}

          <h2 className="anime-title text-white mb-6">
            Take the Oath
          </h2>

          <p className="anime-subtitle text-gray-400 max-w-xl mx-auto">
            Swear your allegiance to the Demon Slayer Corps.
            Stand with us against the darkness.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="relative p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                border: `1px solid ${breathingColor}30`,
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <motion.div
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${breathingColor}, ${breathingColor}dd)`,
                  boxShadow: `0 0 30px ${breathingColor}60`,
                }}
              >
                <Sword size={24} className="text-white" />
              </motion.div>

              <div className="space-y-6 pt-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <User size={16} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-opacity-50 transition-all"
                    style={{ focusBorderColor: breathingColor }}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <motion.p
                      className="flex items-center gap-1 text-red-400 text-sm mt-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle size={14} />
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Mail size={16} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none transition-all"
                    style={{ borderColor: errors.email ? '#ef4444' : undefined }}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <motion.p
                      className="flex items-center gap-1 text-red-400 text-sm mt-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle size={14} />
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Phone size={16} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none transition-all"
                    style={{ borderColor: errors.phone ? '#ef4444' : undefined }}
                    placeholder="Enter your phone"
                  />
                  {errors.phone && (
                    <motion.p
                      className="flex items-center gap-1 text-red-400 text-sm mt-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle size={14} />
                      {errors.phone}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    Choose Your Breathing Style
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(BREATHING_STYLES)
                      .filter(([key]) => key !== 'none')
                      .map(([key, style]) => (
                        <motion.button
                          key={key}
                          type="button"
                          onClick={() => handleChange('breathingStyle', key)}
                          className="p-3 rounded-lg border text-sm font-medium transition-all"
                          style={{
                            background: formData.breathingStyle === key ? `${style.color}20` : 'rgba(255,255,255,0.05)',
                            borderColor: formData.breathingStyle === key ? style.color : 'rgba(255,255,255,0.1)',
                            color: formData.breathingStyle === key ? style.color : '#9ca3af',
                          }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {style.name}
                        </motion.button>
                      ))}
                  </div>
                  {errors.breathingStyle && (
                    <motion.p
                      className="flex items-center gap-1 text-red-400 text-sm mt-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle size={14} />
                      {errors.breathingStyle}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Ticket size={16} />
                    Number of Tickets
                  </label>
                  <div className="flex items-center gap-4">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <motion.button
                        key={num}
                        type="button"
                        onClick={() => handleChange('ticketCount', num)}
                        className="w-12 h-12 rounded-lg border font-bold transition-all"
                        style={{
                          background: formData.ticketCount === num ? `${breathingColor}30` : 'rgba(255,255,255,0.05)',
                          borderColor: formData.ticketCount === num ? breathingColor : 'rgba(255,255,255,0.1)',
                          color: formData.ticketCount === num ? breathingColor : '#9ca3af',
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {num}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-cinzel font-bold text-lg text-white relative overflow-hidden mt-8"
                  style={{
                    background: `linear-gradient(135deg, ${breathingColor}, ${breathingColor}dd)`,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div
                    className="absolute inset-1 rounded-lg"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    }}
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        Taking Oath...
                      </>
                    ) : (
                      <>
                        <Sword size={20} />
                        Take the Corps Oath
                      </>
                    )}
                  </span>
                </motion.button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              className="relative p-8 rounded-2xl text-center"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                border: `1px solid ${breathingColor}50`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <motion.div
                className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${breathingColor}, ${breathingColor}dd)`,
                  boxShadow: `0 0 60px ${breathingColor}80`,
                }}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', damping: 15 }}
              >
                <Check size={48} className="text-white" />
              </motion.div>

              <motion.h3
                className="text-3xl font-cinzel font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Welcome to the Corps
              </motion.h3>

              <motion.p
                className="text-gray-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Your oath has been recorded, {formData.name}.<br />
                A Kasugai crow will bring your confirmation soon.
              </motion.p>

              <motion.div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full"
                style={{
                  background: `${breathingColor}20`,
                  border: `1px solid ${breathingColor}40`,
                  color: breathingColor,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-sm">Ticket ID: SLAYER-{Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
              </motion.div>

              <motion.p
                className="text-xs text-gray-500 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Registration ID sent to {formData.email}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
