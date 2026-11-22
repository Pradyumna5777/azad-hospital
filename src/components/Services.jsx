
import { motion } from 'framer-motion';
import {
  FaStethoscope,
  FaBed,
  FaBaby,
  FaHeartbeat,
  FaPills,
  FaSyringe,
  FaAmbulance,
  FaVial,
  FaFemale,
  FaClinicMedical,
  FaArrowRight,
  FaCheckCircle,
  FaPhoneAlt,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaStethoscope />,
    title: 'OPD Consultation',
    desc: 'Outpatient consultations, medical examinations and expert guidance for patients of all age groups.',
    color: 'from-blue-500 to-cyan-500',
    light: 'bg-blue-50',
  },
  {
    icon: <FaBed />,
    title: 'IPD Services',
    desc: 'Inpatient care with comfortable accommodation, medical supervision and attentive nursing support.',
    color: 'from-violet-500 to-purple-500',
    light: 'bg-violet-50',
  },
  {
    icon: <FaBaby />,
    title: 'NICU',
    desc: 'Specialized care and monitoring facilities for newborn babies requiring additional medical attention.',
    color: 'from-pink-500 to-rose-500',
    light: 'bg-pink-50',
  },
  {
    icon: <FaHeartbeat />,
    title: 'PICU',
    desc: 'Dedicated pediatric intensive care for children who need close observation and specialized treatment.',
    color: 'from-red-500 to-orange-500',
    light: 'bg-red-50',
  },
  {
    icon: <FaClinicMedical />,
    title: 'Day Care Services',
    desc: 'Convenient same-day medical procedures, treatments and observation under professional supervision.',
    color: 'from-teal-500 to-emerald-500',
    light: 'bg-teal-50',
  },
  {
    icon: <FaVial />,
    title: 'Pathology',
    desc: 'Diagnostic laboratory services to support accurate medical evaluation and treatment decisions.',
    color: 'from-indigo-500 to-blue-500',
    light: 'bg-indigo-50',
  },
  {
    icon: <FaPills />,
    title: 'Pharmacy',
    desc: 'Access to essential medicines and healthcare products for your treatment and recovery.',
    color: 'from-green-500 to-emerald-500',
    light: 'bg-green-50',
  },
  {
    icon: <FaFemale />,
    title: 'CTG Monitoring',
    desc: 'Cardiotocography monitoring to assess fetal heartbeat and uterine contractions during pregnancy.',
    color: 'from-rose-500 to-pink-500',
    light: 'bg-rose-50',
  },
  {
    icon: <FaHeartbeat />,
    title: 'ECG',
    desc: 'Electrocardiogram testing to record heart activity and assist in cardiac health assessment.',
    color: 'from-orange-500 to-amber-500',
    light: 'bg-orange-50',
  },
  {
    icon: <FaAmbulance />,
    title: '24-Hour Ambulance',
    desc: 'Ambulance support for emergency transportation and timely access to medical care.',
    color: 'from-red-600 to-rose-600',
    light: 'bg-red-50',
  },
  {
    icon: <FaSyringe />,
    title: 'Vaccination',
    desc: 'Vaccination services for children and adults to support preventive healthcare.',
    color: 'from-cyan-500 to-sky-500',
    light: 'bg-cyan-50',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/40 section-padding"
    >
      {/* Background decoration */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 h-80 w-80 rounded-full bg-teal-100/30 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-xs sm:text-sm font-bold tracking-[0.15em] text-blue-700 mb-5">
            <FaHeartbeat className="text-teal-500" />
            OUR MEDICAL SERVICES
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Complete Care for
            <span className="block mt-2 bg-gradient-to-r from-blue-700 via-blue-600 to-teal-500 bg-clip-text text-transparent">
              Every Stage of Life
            </span>
          </h2>

          <p className="mt-5 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            From routine consultations to specialized maternal and child
            healthcare, we are committed to providing compassionate medical
            care for you and your family.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              <div className="relative h-full min-h-[245px] overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.045)] transition-all duration-300 group-hover:border-blue-100 group-hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)]">

                {/* Hover background accent */}
                <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-blue-50 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

                {/* Card content */}
                <div className="relative z-10">

                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-2xl text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                    >
                      {service.icon}
                    </div>

                    <span className="text-xs font-bold text-slate-300 transition-colors group-hover:text-blue-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 transition-colors group-hover:text-blue-700">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-500">
                    {service.desc}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    Quality Healthcare
                    <FaArrowRight />
                  </div>
                </div>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.color} transition-all duration-500 group-hover:w-full`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Emergency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-800 via-blue-700 to-teal-600 p-7 sm:p-10 lg:p-12 shadow-xl"
        >
          {/* CTA decoration */}
          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full border-[35px] border-white/10" />
          <div className="absolute right-20 -bottom-28 h-64 w-64 rounded-full border-[35px] border-white/10" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-7">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold tracking-wider text-white mb-4">
                <FaCheckCircle />
                WE ARE HERE FOR YOU
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Need Medical Assistance?
              </h3>

              <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-blue-100">
                Your health matters to us. Contact our hospital for
                appointments, medical information or assistance.
              </p>
            </div>

            <a
              href="tel:6207263830"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-blue-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl"
            >
              <FaPhoneAlt className="text-teal-600" />
              <span>Call: 6207263830</span>
              <FaArrowRight className="text-sm" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}