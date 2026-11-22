import { motion } from 'framer-motion';
import {
  FaUserMd,
  FaAward,
  FaGraduationCap,
  FaHospital,
  FaStethoscope,
  FaStar,
  FaQuoteLeft,
} from 'react-icons/fa';

const doctors = [
  {
    name: 'Dr. Abul Kalam Azad',
    nameHindi: 'डा० अबुल कलाम आज़ाद',
    nameUrdu: 'ڈاکٹر ابوالکلام آزاد',
    qualification: 'M.B.B.S, D.C.H (AMU)',
    qualification2: 'D.N.B. (Paediatrics) New Delhi',
    bcmr: 'BCMR No. - 44653',
    specialty: 'नवजात शिशु एवं बाल रोग विशेषज्ञ',
    specialtyEn: 'Pediatrician & Neonatologist',
    experience: [
      'Formerly at: Kurji Holy Family Hospital, Patna',
      'Ex-Consultant (Neonatology), Fortis Hospital, Noida',
      'Jaypee Hospital, Noida',
    ],
    image: '/images/doctor-azad.jpeg',
    color: '',
    accent: 'blue',
    tagline: 'Caring for the smallest, with the biggest hearts.',
  },
  {
    name: 'Dr. Naghma Aman',
    nameHindi: 'डा० नगमा अमान',
    nameUrdu: 'ڈاکٹر نغمہ امان',
    qualification: 'M.B.B.S, M.D (Obs & Gynae)',
    qualification2: '',
    bcmr: 'BCMR No. - 45942',
    specialty: 'प्रसूति एवं स्त्री रोग विशेषज्ञ',
    specialtyEn: 'Obstetrician & Gynecologist',
    experience: [
      'Formerly at: Jyoti Punj Hospital, Patna',
      'Ex-Senior Resident (Obs & Gynae), Adiva Hospital (IVF Centre), New Delhi',
      'ESI Hospital, Noida & Gurgaon',
    ],
    image: '/images/doctor-naghma.jpg',
    color: 'from-pink-500 to-rose-600',
    accent: 'rose',
    tagline: "Women's health, handled with expertise and empathy.",
  },
];

/* ── Floating accent blob ─────────────────────────────── */
function Blob({ className }) {
  return (
    <motion.div
      animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
    />
  );
}

/* ── Single Doctor Card ───────────────────────────────── */
function DoctorCard({ doc, index }) {
  const reverse = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      {/* Outer gradient glow on hover */}
      <div
        className={`absolute -inset-1 bg-gradient-to-br ${doc.color} rounded-[2.5rem] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
      />

      <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-slate-200/60 hover:ring-transparent transition-all duration-500">
        <div className={`grid md:grid-cols-5 ${reverse ? 'md:[direction:rtl]' : ''}`}>
          {/* ── Photo side ── */}
          <div className="md:col-span-2 relative h-80 sm:h-96 md:h-auto md:min-h-[500px] overflow-hidden">
            {/* Gradient backdrop */}
            <div className={`absolute inset-0 bg-gradient-to-br ${doc.color}`} />

            {/* Pattern overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />

            {/* Image with hover scale */}
            <img
              src={doc.image}
              alt={doc.name}
              className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  doc.name
                )}&size=600&background=0284c7&color=fff&bold=true&font-size=0.3`;
              }}
            />

            {/* Bottom fade for text legibility */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900/70 to-transparent" />

            {/* Specialty badge on image (bottom-left) */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl rounded-full px-3 py-1.5 ring-1 ring-white/30">
                <FaStar className="text-amber-300 text-xs" />
                <span className="text-white text-xs font-semibold tracking-wide">
                  {doc.specialtyEn}
                </span>
              </div>
            </div>

            {/* Floating icon (top-right) */}
            <motion.div
              animate={{ rotate: [0, 6, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center text-white ring-1 ring-white/30 shadow-lg"
            >
              <FaUserMd className="text-xl" />
            </motion.div>
          </div>

          {/* ── Info side ── */}
          <div className={`md:col-span-3 p-6 sm:p-8 relative ${reverse ? 'md:[direction:ltr]' : ''}`}>
            {/* Quote accent top */}
            <FaQuoteLeft
              className={`absolute top-6 right-6 text-4xl opacity-[0.06] bg-gradient-to-br ${doc.color} bg-clip-text text-transparent pointer-events-none`}
            />

            {/* Names in 3 languages */}
            <div className="mb-5">
              <p className="urdu text-xl sm:text-2xl text-primary-800 font-semibold mb-1 leading-snug">
                {doc.nameUrdu}
              </p>
              <p className="hindi text-slate-700 font-medium text-sm sm:text-base">
                {doc.nameHindi}
              </p>
            </div>

            {/* English name */}
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 leading-tight">
              {doc.name}
            </h3>

            {/* Specialty pill */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${doc.color} text-white shadow-sm`}
              >
                <FaStethoscope className="text-[10px]" />
                {doc.specialtyEn}
              </span>
              <span className="hindi text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                {doc.specialty}
              </span>
            </div>

            {/* Tagline */}
            <p className="text-sm text-slate-500 italic mb-6 flex items-start gap-2">
              <FaQuoteLeft className="text-[10px] mt-1.5 text-slate-400 shrink-0" />
              {doc.tagline}
            </p>

            {/* Qualifications */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white shrink-0 shadow-sm">
                  <FaGraduationCap className="text-sm" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                    Qualification
                  </p>
                  <p className="text-sm font-semibold text-slate-800 leading-tight">
                    {doc.qualification}
                  </p>
                  {doc.qualification2 && (
                    <p className="text-xs text-slate-600 leading-tight mt-0.5">
                      {doc.qualification2}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                  <FaAward className="text-sm" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                    Registration
                  </p>
                  <p className="text-sm font-semibold text-slate-800 leading-tight">{doc.bcmr}</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="border-t border-slate-100 pt-5">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <FaHospital className="text-primary-700" /> Professional Experience
              </p>
              <ul className="space-y-2">
                {doc.experience.map((exp, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + j * 0.08 }}
                    className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed group/exp"
                  >
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${doc.color} shrink-0 group-hover/exp:scale-150 transition-transform`}
                    />
                    <span>{exp}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Doctors() {
  return (
    <section
      id="doctors"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      {/* Background accents */}
      <Blob className="w-72 h-72 bg-primary-200/40 top-20 -left-20" />
      <Blob className="w-96 h-96 bg-rose-200/30 bottom-20 -right-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.06),transparent_50%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 bg-white px-4 py-2 rounded-full shadow-sm ring-1 ring-primary-100 mb-4">
            <FaUserMd className="text-primary-600" /> OUR DOCTORS
          </span>
          <h2 className="section-title">Meet Our Expert Doctors</h2>
          <p className="section-subtitle">
            Highly qualified and experienced specialists dedicated to your health and wellbeing.
          </p>
        </motion.div>

        {/* Doctor cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {doctors.map((doc, i) => (
            <DoctorCard key={i} doc={doc} index={i} />
          ))}
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center"
        >
          {[
            { icon: <FaAward />, text: 'BCMR Registered' },
            { icon: <FaGraduationCap />, text: 'Advanced Qualifications' },
            { icon: <FaHospital />, text: 'Trusted Hospitals Experience' },
            { icon: <FaStethoscope />, text: 'Expert Specialists' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm font-semibold text-slate-600"
            >
              <span className="w-8 h-8 rounded-full bg-primary-50 text-primary-700 flex items-center justify-center text-xs">
                {item.icon}
              </span>
              {item.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}