import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import {
  FaHospital,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHeart,
  FaWhatsapp,
  FaClock,
  FaArrowUp,
  FaChevronRight,
} from 'react-icons/fa';

const quickLinks = [
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Facilities', to: 'facilities' },
  { name: 'Doctors', to: 'doctors' },
  { name: 'Gallery', to: 'gallery' },
  { name: 'Contact', to: 'contact' },
];

const phones = ['6207263830', '7322983764', '9264285123'];

/* ── Footer link with sliding arrow ───────────────────── */
function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        smooth
        duration={500}
        offset={-80}
        className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white cursor-pointer transition-colors"
      >
        <FaChevronRight className="text-[8px] text-primary-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        <span className="group-hover:translate-x-1 transition-transform duration-300">
          {children}
        </span>
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300 pt-20 pb-8">
      {/* ── Decorative glow ── */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="container-custom relative z-10">
        {/* ── Main grid ── */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 mb-14">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-primary-500/30 overflow-hidden">
                <img
                  src="/images/logo.png"
                  alt="Azad Hospital Logo"
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML =
                      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="w-5 h-5"><path d="M0 384V288c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm96-176v-96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zm96 96v-96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zm96-176v-96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zm96 176v-96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32z"/></svg>';
                  }}
                />
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 blur-md opacity-40 -z-10" />
              </div>
              <div>
                <h3 className="font-bold text-white text-xl leading-tight tracking-tight">
                  AZAD HOSPITAL
                </h3>
                <p className="text-xs text-primary-400 font-semibold tracking-wide">
                  Siwan, Bihar
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-5 max-w-sm">
              Dedicated to providing compassionate & advanced healthcare for children and women.
              Trusted by thousands of families in Siwan & beyond.
            </p>

            <div className="flex items-start gap-2 mb-5">
              <span className="w-1 h-4 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full mt-1" />
              <p className="text-sm italic text-slate-300">
                "Healing with Heart, Caring with Expertise."
              </p>
            </div>

            {/* Emergency CTA */}
            <a
              href="tel:+916207263830"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 transition-all"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
              </span>
              <FaPhoneAlt className="text-xs" />
              Call Now
            </a>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2"
          >
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <FooterLink key={link.to} to={link.to}>
                  {link.name}
                </FooterLink>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3"
          >
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="text-primary-400 text-xs" />
                </div>
                <span className="text-slate-400 leading-relaxed">
                  M.M. Colony Main Gate, Siswan Dhala, Ismail Shaheed Road, Siwan - 841226
                </span>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <FaPhoneAlt className="text-green-400 text-xs" />
                </div>
                <div className="space-y-1.5">
                  {phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:+91${phone}`}
                      className="block text-slate-400 hover:text-white transition-colors"
                    >
                      +91 {phone}
                    </a>
                  ))}
                </div>
              </li>

             
            </ul>
          </motion.div>

          {/* Timings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2"
          >
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Timings
            </h4>
            <ul className="space-y-4 text-sm">
              {/* Male doctor */}
              <li>
                <div className="flex items-center gap-1.5 mb-1">
                  <FaClock className="text-blue-400 text-[10px] shrink-0" />
                  <p className="text-slate-300 font-semibold text-xs">
                    Dr. Abul Kalam Azad
                  </p>
                </div>
                <p className="text-slate-500 text-[11px] pl-4">
                  Mon–Sat: 10 AM – 4 PM and 6 PM – 8 PM
                </p>
                <p className="text-slate-500 text-[11px] pl-4">
                  Sun: 10 AM – 2 PM
                </p>
              </li>

              {/* Female doctor */}
              <li>
                <div className="flex items-center gap-1.5 mb-1">
                  <FaClock className="text-rose-400 text-[10px] shrink-0" />
                  <p className="text-slate-300 font-semibold text-xs">
                    Dr. Naghma Aman
                  </p>
                </div>
                <p className="text-slate-500 text-[11px] pl-4">
                  All 7 Days: 10 AM – 4 PM
                </p>
              </li>
            </ul>

            {/* Note */}
            <div className="mt-5 p-3 rounded-xl bg-red-500/5 border border-red-500/20">
              <p className="text-[11px] text-slate-400 leading-relaxed hindi">
                0–18 साल तक के बच्चों का इलाज उपलब्ध
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-slate-800/80 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()}{' '}
            <span className="text-slate-300 font-semibold">Azad Hospital Siwan</span>. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5">
            <p className="text-xs text-slate-500 flex items-center gap-1.5">
              Crafted with{' '}
              <FaHeart className="text-red-500 animate-pulse" /> by{' '}
              <span className="text-slate-300 font-semibold">Satyam Anand</span>
            </p>

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="group w-9 h-9 rounded-full bg-slate-800/80 hover:bg-primary-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}