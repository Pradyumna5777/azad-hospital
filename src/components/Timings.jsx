
import { motion } from 'framer-motion';
import {
  FaClock,
  FaSun,
  FaMoon,
  FaCalendarAlt,
  FaRegCalendarCheck,
  FaInfoCircle,
  FaArrowRight,
} from 'react-icons/fa';

const timings = [
  {
    icon: <FaSun />,
    title: 'Morning',
    hindi: 'सुबह',
    time: '9:00 AM',
    endTime: '4:00 PM',
    period: '9:00 AM – 4:00 PM',
    sub: 'Monday to Saturday',
    color: 'from-amber-400 to-orange-500',
    light: 'bg-amber-50',
    accent: 'text-amber-600',
    tag: 'MORNING HOURS',
  },
  {
    icon: <FaMoon />,
    title: 'Evening',
    hindi: 'शाम',
    time: '6:00 PM',
    endTime: '8:00 PM',
    period: '6:00 PM – 8:00 PM',
    sub: 'Monday to Saturday',
    color: 'from-indigo-500 to-purple-600',
    light: 'bg-indigo-50',
    accent: 'text-indigo-600',
    tag: 'EVENING HOURS',
  },
  {
    icon: <FaCalendarAlt />,
    title: 'Sunday',
    hindi: 'रविवार',
    time: '9:00 AM',
    endTime: '2:00 PM',
    period: '9:00 AM – 2:00 PM',
    sub: 'Sunday · Half Day',
    color: 'from-emerald-500 to-teal-600',
    light: 'bg-emerald-50',
    accent: 'text-emerald-600',
    tag: 'SUNDAY HOURS',
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
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />

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
            VISITING HOURS
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            मरीज देखने का समय
          </h2>

          <p className="mt-3 text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">
            Consultation Timings
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Plan your visit with ease. Please check our consultation
            schedule before coming to the hospital.
          </p>
        </motion.div>

        {/* Timing cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {timings.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -9 }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-3xl border border-white bg-white p-7 sm:p-8 text-center shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-300 group-hover:shadow-[0_22px_50px_rgba(37,99,235,0.12)]">

                {/* Decorative circle */}
                <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full ${item.light} opacity-70 transition-transform duration-500 group-hover:scale-125`} />

                <div className="relative z-10">

                  {/* Icon */}
                  <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-3xl text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                    {item.icon}
                  </div>

                  {/* Label */}
                  <div className={`mt-6 inline-flex rounded-full ${item.light} px-4 py-1.5 text-[10px] font-extrabold tracking-[0.15em] ${item.accent}`}>
                    {item.tag}
                  </div>

                  <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="hindi mt-1 text-sm font-semibold text-slate-500">
                    {item.hindi}
                  </p>

                  {/* Time */}
                  <div className="mt-6 rounded-2xl bg-slate-50 px-4 py-5 transition-colors duration-300 group-hover:bg-blue-50/70">
                    <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      <FaClock className={item.accent} />
                      Consultation Time
                    </div>

                    <p className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-800">
                      {item.period}
                    </p>
                  </div>

                  {/* Days */}
                  <div className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-slate-500">
                    <FaRegCalendarCheck className={item.accent} />
                    {item.sub}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${item.color} transition-all duration-500 group-hover:w-full`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Patient information */}
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

              <p className="hindi text-sm sm:text-base leading-8 text-slate-600">
                यहाँ 0 से 18 साल तक के बच्चों को देखा जाता है।
                15 दिन तक पूर्जा मान्य होगा।
              </p>
            </div>

            {/* Arrow decoration */}
            <div className="hidden lg:flex items-center pr-8 text-blue-200">
              <FaArrowRight className="text-2xl" />
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
