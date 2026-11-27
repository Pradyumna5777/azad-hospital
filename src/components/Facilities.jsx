import { motion } from 'framer-motion';
import {
  FaBaby,
  FaFemale,
  FaHeartbeat,
  FaCut,
  FaProcedures,
  FaChild,
  FaStar,
  FaArrowRight,
} from 'react-icons/fa';

const facilities = [
  {
    icon: <FaChild />,
    title: 'General Paediatrics',
    desc: 'Comprehensive child healthcare from newborn to 18 years.',
    color: 'from-sky-400 to-blue-600',
    glow: 'shadow-sky-500/40',
    tag: 'Pediatrics',
  },
  {
    icon: <FaBaby />,
    title: 'Neonatology',
    desc: 'Specialized care for newborns & premature infants.',
    color: 'from-pink-400 to-rose-600',
    glow: 'shadow-pink-500/40',
    tag: 'Newborn',
  },
  {
    icon: <FaFemale />,
    title: 'Obs & Gynae',
    desc: 'Complete obstetrics & gynecology care for women.',
    color: 'from-purple-400 to-fuchsia-600',
    glow: 'shadow-purple-500/40',
    tag: 'Women',
  },
  {
    icon: <FaHeartbeat />,
    title: 'Cesarean Section Delivery',
    desc: 'Safe surgical deliveries with advanced monitoring.',
    color: 'from-red-400 to-orange-600',
    glow: 'shadow-red-500/40',
    tag: 'Surgical',
  },
  {
    icon: <FaProcedures />,
    title: 'Normal Vaginal Delivery',
    desc: 'Natural birthing support with expert care.',
    color: 'from-green-400 to-emerald-600',
    glow: 'shadow-green-500/40',
    tag: 'Natural',
  },
  {
    icon: <FaCut />,
    title: 'Hysterectomy / BTL',
    desc: "Advanced surgical procedures for women's health.",
    color: 'from-indigo-400 to-violet-600',
    glow: 'shadow-indigo-500/40',
    tag: 'Surgery',
  },
  {
    icon: <FaProcedures />,
    title: 'D&E',
    desc: 'Dilation & Evacuation procedures with utmost care.',
    color: 'from-teal-400 to-cyan-600',
    glow: 'shadow-teal-500/40',
    tag: 'Procedure',
  },
];

/* ── Animated floating orb ────────────────────────────── */
function Orb({ className, delay = 0 }) {
  return (
    <motion.div
      animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
    />
  );
}

/* ── Single facility card ─────────────────────────────── */
function FacilityCard({ facility, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      {/* Outer gradient glow */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-br ${facility.color} rounded-3xl opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-500`}
      />

      {/* Card body */}
      <div className="relative h-full bg-slate-800/60 backdrop-blur-xl border border-white/10 group-hover:border-white/20 rounded-3xl p-6 overflow-hidden transition-all duration-500">
        {/* Corner gradient shimmer */}
        <div
          className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity duration-500 pointer-events-none`}
        />

        {/* Tag chip */}
        <div className="absolute top-4 right-4">
          <span className="text-[9px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors">
            {facility.tag}
          </span>
        </div>

        {/* Icon */}
        <div className="relative mb-5">
          <motion.div
            whileHover={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 0.5 }}
            className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center text-white text-2xl shadow-lg ${facility.glow} group-hover:scale-110 transition-transform duration-300`}
          >
            {facility.icon}
            {/* Icon glow ring */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${facility.color} blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10`}
            />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 group-hover:bg-clip-text transition-all duration-300">
          {facility.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
          {facility.desc}
        </p>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Arrow (hover reveal) */}
        <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <FaArrowRight className="text-white text-xs" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="section-padding relative overflow-hidden bg-slate-950 text-white"
    >
      {/* ── Background layers ── */}
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Animated orbs */}
      <Orb className="w-72 h-72 bg-primary-600/30 top-10 left-10" delay={0} />
      <Orb className="w-96 h-96 bg-accent-500/20 bottom-20 right-10" delay={2} />
      <Orb className="w-80 h-80 bg-purple-600/20 top-1/2 left-1/3" delay={4} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(2,6,23,0.8)_100%)] pointer-events-none" />

      {/* ── Content ── */}
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-500 bg-accent-500/10 px-4 py-2 rounded-full ring-1 ring-accent-500/20 mb-4">
            <FaStar className="text-accent-500 text-xs" />
            FACILITIES AVAILABLE
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 leading-tight">
            World-Class Medical{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-emerald-400 bg-clip-text text-transparent">
                Facilities
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 via-accent-400 to-emerald-400 rounded-full origin-left"
              />
            </span>
          </h2>

          <p className="text-center text-slate-400 max-w-2xl mx-auto">
            Advanced treatments and procedures delivered with compassion and expertise.
          </p>
        </motion.div>

        {/* Facility grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, i) => (
            <FacilityCard key={i} facility={facility} index={i} />
          ))}

          {/* CTA card in the grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: facilities.length * 0.08,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl opacity-40 group-hover:opacity-80 blur-lg transition-opacity duration-500" />
            <div className="relative h-full bg-gradient-to-br from-primary-700 to-accent-600 rounded-3xl p-6 overflow-hidden flex flex-col justify-center items-center text-center min-h-[220px]">
              {/* Inner shimmer */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>

              <div className="relative">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl mb-4 ring-1 ring-white/30 group-hover:scale-110 transition-transform">
                  <FaHeartbeat />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  Need Help Choosing?
                </h3>
                <p className="text-sm text-white/80 mb-4 leading-relaxed">
                  Our doctors are here to guide you to the right care.
                </p>
                <a
                  href="#doctors"
                  className="inline-flex items-center gap-2 bg-white text-primary-700 px-4 py-2 rounded-full text-xs font-bold hover:bg-slate-100 transition-all shadow-md group-hover:shadow-lg"
                >
                  Talk to a Doctor <FaArrowRight className="text-[10px]" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { label: 'Modern Equipment', value: '100%' },
            { label: 'Expert Doctors', value: 'Qualified' },
            { label: 'Modern Facilities', value: '100%' },
            { label: 'Patient Safety', value: 'Priority' },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <p className="text-lg font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                {item.value}
              </p>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-1 font-semibold">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}