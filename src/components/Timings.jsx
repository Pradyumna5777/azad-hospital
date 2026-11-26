import { motion } from 'framer-motion';
import {
  FaClock,
  FaSun,
  FaMoon,
  FaCalendarAlt,
  FaRegCalendarCheck,
  FaInfoCircle,
  FaUserMd,
  FaFemale,
  FaCheckCircle,
} from 'react-icons/fa';

/* ── Doctor schedules ─────────────────────────────────── */
const doctors = [
  {
    name: 'Dr. Abul Kalam Azad',
    specialty: 'Pediatrician & Neonatologist',
    hindi: 'नवजात शिशु एवं बाल रोग विशेषज्ञ',
    icon: <FaUserMd />,
    color: 'from-blue-600 to-primary-700',
    light: 'bg-blue-50',
    accent: 'text-blue-700',
    ring: 'ring-blue-100',
    schedule: [
      {
        icon: <FaSun />,
        title: 'Morning',
        hindi: 'सुबह',
        period: '10:00 AM – 4:00 PM',
        sub: 'Monday to Saturday',
      },
      {
        icon: <FaMoon />,
        title: 'Evening',
        hindi: 'शाम',
        period: '6:00 PM – 8:00 PM',
        sub: 'Monday to Saturday',
      },
      {
        icon: <FaCalendarAlt />,
        title: 'Sunday',
        hindi: 'रविवार',
        period: '10:00 AM – 2:00 PM',
        sub: 'Sunday · Half Day',
      },
    ],
  },
  {
    name: 'Dr. Naghma Aman',
    specialty: 'Obstetrician & Gynecologist',
    hindi: 'प्रसूति एवं स्त्री रोग विशेषज्ञ',
    icon: <FaFemale />,
    color: 'from-rose-500 to-pink-600',
    light: 'bg-rose-50',
    accent: 'text-rose-700',
    ring: 'ring-rose-100',
    schedule: [
      {
        icon: <FaSun />,
        title: 'Daily',
        hindi: 'प्रतिदिन',
        period: '10:00 AM – 4:00 PM',
        sub: 'All 7 Days (Mon – Sun)',
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Timings() {
  return (
    <section
      id="timings"
      className="relative overflow-hidden section-padding bg-gradient-to-br from-slate-50 via-blue-50/60 to-teal-50/50"
    >
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-rose-200/20 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 text-xs sm:text-sm font-bold tracking-[0.15em] text-blue-700 shadow-sm mb-5">
            <FaClock className="text-teal-500" />
            DOCTOR TIMINGS
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            मरीज देखने का समय
          </h2>

          <p className="mt-3 text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">
            Consultation Timings
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Doctor-specific schedules so you can plan your visit with ease. Please
            check the relevant schedule before coming to the hospital.
          </p>
        </motion.div>

        {/* ── Doctor schedule grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {doctors.map((doc, docIndex) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: docIndex * 0.12 }}
              className="relative overflow-hidden rounded-3xl border border-white bg-white p-6 sm:p-8 shadow-[0_10px_35px_rgba(15,23,42,0.06)]"
            >
              {/* Decorative corner blob */}
              <div
                className={`absolute -top-20 -right-20 h-48 w-48 rounded-full ${doc.light} opacity-70 blur-2xl pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Doctor header */}
                <div className="flex items-center gap-4 mb-7">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${doc.color} text-2xl text-white shadow-lg`}
                  >
                    {doc.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight truncate">
                      {doc.name}
                    </h3>
                    <p className={`text-xs sm:text-sm font-semibold ${doc.accent} truncate`}>
                      {doc.specialty}
                    </p>
                    <p className="hindi text-xs text-slate-500 truncate">{doc.hindi}</p>
                  </div>
                </div>

                {/* Schedule rows */}
                <div className="space-y-3">
                  {doc.schedule.map((slot, i) => (
                    <motion.div
                      key={slot.title}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                      whileHover={{ x: 4 }}
                      className={`group flex items-center gap-4 rounded-2xl ${doc.light} p-4 ring-1 ${doc.ring} transition-all duration-300`}
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${doc.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                      >
                        {slot.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-extrabold text-slate-900">
                            {slot.title}
                          </p>
                          <span className="hindi text-[11px] font-semibold text-slate-500">
                            {slot.hindi}
                          </span>
                        </div>
                        <p className={`text-base sm:text-lg font-extrabold tracking-tight ${doc.accent}`}>
                          {slot.period}
                        </p>
                        <p className="text-[11px] sm:text-xs font-semibold text-slate-500 flex items-center gap-1.5 mt-0.5">
                          <FaRegCalendarCheck className="text-[10px]" />
                          {slot.sub}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Available every day badge for female doctor */}
                {doc.schedule.length === 1 && (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 ring-1 ring-emerald-200">
                    <FaCheckCircle className="text-emerald-600 text-xs" />
                    <span className="text-xs font-bold text-emerald-700">
                      Available All 7 Days
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Patient information ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-10 mx-auto max-w-5xl overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_12px_40px_rgba(37,99,235,0.07)]"
        >
          <div className="flex flex-col sm:flex-row">
            {/* Left accent */}
            <div className="flex sm:w-20 shrink-0 items-center justify-center bg-gradient-to-br from-blue-700 to-teal-600 py-5 sm:py-0">
              <FaInfoCircle className="text-3xl text-white" />
            </div>

            {/* Notice */}
            <div className="flex-1 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="hindi text-lg font-extrabold text-slate-900">
                  महत्वपूर्ण सूचना
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold tracking-wider text-blue-700">
                  PATIENT INFORMATION
                </span>
              </div>

              <ul className="space-y-2">
                <li className="hindi text-sm sm:text-base leading-8 text-slate-600 flex items-start gap-2">
                  <span className="mt-3 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  यहाँ 0 से 18 साल तक के बच्चों को देखा जाता है।
                </li>
                <li className="hindi text-sm sm:text-base leading-8 text-slate-600 flex items-start gap-2">
                  <span className="mt-3 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  15 दिन तक पूर्जा मान्य होगा।
                </li>
                <li className="hindi text-sm sm:text-base leading-8 text-slate-600 flex items-start gap-2">
                  <span className="mt-3 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  डॉ. नगमा अमान (स्त्री रोग विशेषज्ञ) सभी 7 दिन उपलब्ध हैं।
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-7 text-center text-xs sm:text-sm text-slate-500"
        >
          For appointments and enquiries, please contact the hospital directly.
        </motion.p>
      </div>
    </section>
  );
}