import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  FaCheckCircle,
  FaHospital,
  FaAward,
  FaUsers,
  FaHeartbeat,
  FaStar,
  FaArrowRight,
} from 'react-icons/fa';
import { Link } from 'react-scroll';

/* ── Animated number counter ───────────────────────────── */
function Counter({ from = 0, to, suffix = '', duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(from, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, from, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

/* ── Floating accent blob ──────────────────────────────── */
function Blob({ className }) {
  return (
    <motion.div
      animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
    />
  );
}

export default function About() {
  const features = [
    '0 से 18 साल तक के बच्चों का इलाज',
    '15 दिन तक पूर्जा मान्य',
    'सभी प्रकार के टीकाकरण की सुविधा',
    '24 घंटे एम्बुलेंस सेवा',
    'आधुनिक NICU और PICU',
    'अनुभवी विशेषज्ञ डॉक्टर',
  ];

  const stats = [
    { icon: <FaHospital />, label: 'Modern Facility', value: 100, suffix: '%', color: 'from-sky-500 to-blue-600' },
    { icon: <FaUsers />, label: 'Happy Patients', value: 10, suffix: 'K+', color: 'from-emerald-500 to-teal-600' },
    { icon: <FaAward />, label: 'Years of Care', value: 15, suffix: '+', color: 'from-amber-500 to-orange-600' },
    { icon: <FaHeartbeat />, label: 'Emergency', value: 24, suffix: '/7', color: 'from-rose-500 to-red-600' },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background accents */}
      <Blob className="w-72 h-72 bg-primary-200/40 -top-10 -left-10" />
      <Blob className="w-96 h-96 bg-accent-500/20 bottom-0 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.06),transparent_50%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 bg-white px-4 py-2 rounded-full shadow-sm ring-1 ring-primary-100">
            <FaStar className="text-amber-500" /> ABOUT US
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Image side ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Rotated gradient frame behind */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-[2.5rem] rotate-3 blur-sm" />
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-500/10 to-accent-500/10 rounded-[2.5rem] -rotate-3" />

            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5"
            >
              <img
                src="/images/hospital-16.jpeg"
                alt="About Azad Hospital Siwan"
                className="w-full h-[420px] sm:h-[500px] object-cover"
                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800';
                }}
              />
              {/* Soft gradient overlay bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

              {/* Bottom glass badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-4 left-4 right-4 flex items-center gap-3 bg-white/90 backdrop-blur-xl rounded-2xl px-4 py-3 shadow-lg ring-1 ring-white/60"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white shrink-0">
                  <FaHeartbeat className="text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate">Trusted by Families</p>
                  <p className="text-xs text-slate-500 truncate">Siwan & nearby districts</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating award card (top-right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 18 }}
              className="absolute -top-5 -right-5 sm:-right-6 bg-white rounded-2xl p-4 shadow-xl ring-1 ring-slate-900/5"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white mb-2 shadow-md">
                <FaAward className="text-xl" />
              </div>
              <p className="text-2xl font-bold text-slate-900 leading-none">
                <Counter to={15} />+
              </p>
              <p className="text-[11px] text-slate-500 mt-1 whitespace-nowrap">Years of Care</p>
            </motion.div>

            {/* Decorative pulse dot */}
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute top-6 left-6 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-500/30"
            />
          </motion.div>

          {/* ── Content side ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-5">
              Welcome to{' '}
              <span className="relative inline-block">
                <span className="gradient-text">Azad Hospital</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full origin-left"
                />
              </span>{' '}
              Siwan
            </h2>

            <p className="text-slate-600 mb-7 leading-relaxed text-base sm:text-lg">
              Azad Hospital Siwan is a premier healthcare facility dedicated to providing
              exceptional medical care for children and women. Led by renowned specialists{' '}
              <strong className="text-primary-700 font-semibold">Dr. Abul Kalam Azad</strong>{' '}
              (Pediatrician) and{' '}
              <strong className="text-primary-700 font-semibold">Dr. Naghma Aman</strong>{' '}
              (Gynecologist), we blend advanced technology with compassionate, patient-first care.
            </p>

            {/* Feature checklist — animated cards */}
            <div className="grid sm:grid-cols-2 gap-3 mb-9">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-start gap-3 p-3 rounded-xl bg-white/70 hover:bg-white ring-1 ring-slate-200/60 hover:ring-primary-200 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-gradient-to-br from-accent-500 to-emerald-600 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <FaCheckCircle className="text-white text-[10px]" />
                  </span>
                  <span className="text-slate-700 hindi text-sm leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Animated stat cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-9">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="text-center p-4 rounded-2xl bg-white ring-1 ring-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-md`}
                  >
                    {stat.icon}
                  </div>
                  <p className="text-xl font-bold text-slate-900 leading-none">
                    <Counter to={stat.value} />
                    {stat.suffix}
                  </p>
                  <p className="text-[11px] font-medium text-slate-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link to="doctors" smooth duration={500} offset={-80}>
              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary group"
              >
                Meet Our Doctors
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}