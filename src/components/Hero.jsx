
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaArrowRight,
  FaUserMd,
  FaHeartbeat,
  FaBaby,
  FaCheckCircle,
  FaAmbulance,
  FaShieldAlt,
  FaWhatsapp
} from 'react-icons/fa';

const stats = [
  { icon: <FaUserMd />, value: '15+', label: 'Years Experience' },
  { icon: <FaHeartbeat />, value: '10K+', label: 'Happy Patients' },
  { icon: <FaBaby />, value: '24/7', label: 'Emergency Care' },
];

export default function Hero() {
  const whatsappNumber = '917322983764';

  const whatsappMessage = encodeURIComponent(
    'Hello Azad Hospital, I would like to enquire about an appointment.'
  );

  return (
    <section
      id="home"
      className="relative md:mt-7 isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-teal-50/60 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:min-h-[90vh] lg:pt-28 lg:pb-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-cyan-200/30 blur-[100px]" />
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-teal-200/30 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-200/20 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(#0f766e 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 text-center lg:text-left"
          >
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-100 bg-white/90 px-4 py-2 shadow-sm shadow-emerald-900/5 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>

              <span className="text-xs font-bold tracking-wide text-slate-700 sm:text-sm">
                24/7 Emergency Healthcare Available
              </span>
            </motion.div>

            {/* Main heading */}
            <h1 className="mb-6 text-[2.65rem] font-extrabold leading-[1.13] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
              Caring for Lives,
              <br />
              <span className="bg-gradient-to-r from-primary-700 via-teal-600 to-cyan-500 bg-clip-text text-transparent">
                Nurturing Futures.
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              Your family's health deserves the best care. At{' '}
              <strong className="font-bold text-slate-800">
                Azad Hospital, Siwan
              </strong>
              , we bring compassionate healthcare for women and children
              together with dedicated medical expertise.
            </p>

            {/* Doctors */}
            <div className="mb-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <div className="flex -space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-primary-100 text-primary-700">
                  <FaUserMd />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-teal-100 text-teal-700">
                  <FaUserMd />
                </div>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-sm font-bold text-slate-800">
                  Experienced Medical Professionals
                </p>
                <p className="text-xs text-slate-500">
                  Dr. Abul Kalam Azad & Dr. Naghma Aman
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mb-11 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Azad Hospital on WhatsApp"
                className="group flex cursor-pointer items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-600/30"
              >
                <FaWhatsapp className="text-xl" />
                Chat on WhatsApp
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Call Button */}
              <a
                href="tel:6207263830"
                className="flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:text-primary-700 hover:shadow-lg"
              >
                <FaPhoneAlt className="text-primary-600" />
                Call Now
              </a>
            </div>

            {/* Trust points */}
            <div className="mb-10 flex flex-wrap justify-center gap-x-5 gap-y-3 text-xs font-medium text-slate-600 sm:text-sm lg:justify-start">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500" />
                Women & Child Care
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500" />
                Dedicated Medical Team
              </span>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 pt-7">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="px-2 text-center lg:text-left"
                >
                  <div className="mb-2 flex items-center justify-center gap-2 text-primary-700 lg:justify-start">
                    <span className="text-lg">{stat.icon}</span>
                    <span className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                      {stat.value}
                    </span>
                  </div>

                  <p className="text-[10px] font-medium leading-tight text-slate-500 sm:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* Decorative circles */}
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border-[18px] border-teal-100/60 sm:-right-8 sm:-top-8 sm:h-40 sm:w-40" />

            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-primary-200/40 blur-2xl sm:-bottom-8 sm:-left-8" />

            {/* Main image */}
            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-slate-100 shadow-2xl shadow-slate-900/15 sm:rounded-[2.5rem] sm:border-[10px]">
              <div className="aspect-[5/4] sm:aspect-[4/4] lg:aspect-[4/4.5]">
                <img
                  src="/images/azad-hospital.jpeg"
                  alt="Azad Hospital Siwan"
                  loading="eager"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    if (e.currentTarget.dataset.fallback) return;
                    e.currentTarget.dataset.fallback = 'true';
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000';
                  }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

              {/* Image label */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 backdrop-blur-xl">
                  <FaShieldAlt className="text-white" />
                  <span className="text-xs font-semibold text-white">
                    Your Health, Our Priority
                  </span>
                </div>
              </div>
            </div>

            {/* Floating emergency card */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -bottom-7 left-3 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl sm:-left-8 sm:bottom-12 sm:gap-4 sm:p-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 sm:h-14 sm:w-14">
                <FaAmbulance className="text-xl sm:text-2xl" />
              </div>
              <div>
                <p className="text-[10px] font-medium text-slate-500 sm:text-xs">
                  Emergency Services
                </p>
                <p className="text-sm font-extrabold text-slate-900 sm:text-base">
                  Available 24/7
                </p>
              </div>
            </motion.div>

            {/* Floating healthcare card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5
              }}
              className="absolute -right-1 top-5 flex items-center gap-2 rounded-xl border border-white/80 bg-white/95 px-3 py-3 shadow-xl shadow-slate-900/10 sm:-right-6 sm:top-12 sm:gap-3 sm:px-4"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-700 sm:h-11 sm:w-11">
                <FaHeartbeat className="text-lg" />
              </div>
              <div>
                <p className="text-[9px] text-slate-500 sm:text-xs">
                  Dedicated Care
                </p>
                <p className="text-xs font-bold text-slate-900 sm:text-sm">
                  Women & Children
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
