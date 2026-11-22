import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaUser,
  FaCommentDots,
  FaExternalLinkAlt,
} from 'react-icons/fa';

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

/* ── Info card (contact tiles) ────────────────────────── */
function InfoCard({ icon, title, accent, children, href, delay = 0 }) {
  const Wrapper = href ? motion.a : motion.div;
  return (
    <Wrapper
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 ring-1 ring-slate-200/60 hover:ring-primary-200 shadow-sm hover:shadow-xl transition-all duration-300 block"
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center text-white text-lg shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-slate-900 mb-1 text-sm tracking-wide uppercase">
            {title}
          </h3>
          {children}
        </div>
      </div>
    </Wrapper>
  );
}

/* ── Field with floating label ────────────────────────── */
function Field({ id, name, label, type = 'text', required, rows, icon, value, onChange }) {
  const isTextarea = type === 'textarea';
  const sharedClass =
    'peer w-full px-4 pt-6 pb-2 rounded-xl border border-slate-200 bg-white/60 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:bg-white transition-all text-slate-800 placeholder-transparent';

  return (
    <div className="relative">
      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          rows={rows || 3}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={label}
          className={`${sharedClass} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={label}
          pattern={type === 'tel' ? '[0-9+\\s-]{7,15}' : undefined}
          className={sharedClass}
        />
      )}
      <label
        htmlFor={id}
        className="absolute left-4 top-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary-700 transition-all duration-200 pointer-events-none flex items-center gap-1.5"
      >
        {icon && <span className="text-primary-500">{icon}</span>}
        {label}
      </label>
    </div>
  );
}

export default function Contact() {
  const phones = ['6207263830', '7322983764', '9264285123'];
  const address =
    'M.M. Colony Main Gate ke najdik, Siswan Dhala, Ismail Shaheed Road, Siwan - 841226';

  const mapQuery = encodeURIComponent('Azad Hospital, Ismail Shaheed Road, Siwan, Bihar 841226');
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const text = [
      'Hello Azad Hospital,',
      "I'd like to book an appointment.",
      '',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Message: ${form.message.trim()}`,
    ].join('\n');

    const url = `https://wa.me/917322983764?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setStatus('sent');
      setForm({ name: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 500);
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      {/* Background accents */}
      <Blob className="w-72 h-72 bg-primary-200/40 -top-10 -left-10" />
      <Blob className="w-96 h-96 bg-emerald-500/15 bottom-0 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(14,165,233,0.06),transparent_50%)] pointer-events-none" />

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
            <FaCommentDots className="text-primary-600" /> CONTACT US
          </span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Reach out for appointments, emergencies, or any queries — we're here to help 24/7.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* ─────────────── Left: Info cards ─────────────── */}
          <div className="space-y-4">
            {/* Address */}
            <InfoCard
              icon={<FaMapMarkerAlt />}
              title="Address"
              accent="from-primary-500 to-primary-700"
              delay={0}
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            >
              <p className="text-sm text-slate-700 hindi leading-relaxed">
                एम०एम० कॉलोनी मेन गेट के नजदीक, सिसवन ढ़ाला, इस्माइल शहीद रोड, सिवान - 841226
              </p>
              <p className="text-xs text-slate-500 mt-2">{address}</p>
              <p className="text-xs text-primary-600 font-semibold mt-2 flex items-center gap-1 group-hover:gap-2 transition-all">
                Open in Maps <FaExternalLinkAlt className="text-[10px]" />
              </p>
            </InfoCard>

            {/* Phones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 ring-1 ring-slate-200/60 hover:ring-green-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-lg shrink-0 shadow-md">
                  <FaPhoneAlt />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-2 text-sm tracking-wide uppercase">
                    Phone Numbers
                  </h3>
                  <div className="space-y-1.5">
                    {phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:+91${phone}`}
                        className="flex items-center gap-2 text-sm text-slate-700 hover:text-green-700 font-medium transition-colors group/phone"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 group-hover/phone:scale-150 transition-transform" />
                        +91 {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <InfoCard
              icon={<FaWhatsapp />}
              title="WhatsApp"
              accent="from-emerald-500 to-green-600"
              delay={0.2}
              href="https://wa.me/917322983764"
            >
              <p className="text-sm text-slate-700">Chat with us instantly</p>
              <p className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1 group-hover:gap-2 transition-all">
                Open WhatsApp <FaExternalLinkAlt className="text-[10px]" />
              </p>
            </InfoCard>

            {/* Timings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 ring-1 ring-slate-200/60 hover:ring-orange-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white text-lg shrink-0 shadow-md">
                  <FaClock />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-2 text-sm tracking-wide uppercase">
                    Timings
                  </h3>
                  <div className="space-y-1.5">
                    {[
                      { label: 'सुबह', time: '9:00 – 4:00' },
                      { label: 'शाम', time: '6:00 – 8:00' },
                      { label: 'रविवार', time: 'दोपहर 2 बजे तक' },
                    ].map((t) => (
                      <div key={t.label} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                        <span className="hindi text-slate-600 font-medium min-w-[60px]">{t.label}</span>
                        <span className="text-slate-700">{t.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ─────────────── Right: Map + Form ─────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Map */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-900/5 h-64 relative group"
            >
              <iframe
                title="Azad Hospital Siwan Location"
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xl rounded-full px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-md flex items-center gap-1.5 pointer-events-none">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Azad Hospital Siwan
              </div>
            </motion.div>

            {/* Appointment form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl ring-1 ring-slate-900/5 relative overflow-hidden"
            >
              {/* Subtle corner gradient */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-green-200/40 to-emerald-200/40 rounded-full blur-2xl pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
                    <FaPaperPlane />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 leading-tight">Book an Appointment</h3>
                    <p className="text-xs text-slate-500">We'll respond via WhatsApp</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Field
                    id="name"
                    name="name"
                    label="Your Name"
                    required
                    icon={<FaUser />}
                    value={form.name}
                    onChange={handleChange}
                  />
                  <Field
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    type="tel"
                    required
                    icon={<FaPhoneAlt />}
                    value={form.phone}
                    onChange={handleChange}
                  />
                  <Field
                    id="message"
                    name="message"
                    label="Message / Reason"
                    type="textarea"
                    rows={3}
                    required
                    icon={<FaCommentDots />}
                    value={form.message}
                    onChange={handleChange}
                  />

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3.5 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl disabled:opacity-80 disabled:cursor-not-allowed overflow-hidden"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {status === 'idle' && (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <FaWhatsapp className="text-lg" />
                          Book on WhatsApp
                        </motion.span>
                      )}
                      {status === 'sending' && (
                        <motion.span
                          key="sending"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Opening WhatsApp…
                        </motion.span>
                      )}
                      {status === 'sent' && (
                        <motion.span
                          key="sent"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <FaCheckCircle className="text-lg" />
                          Opening WhatsApp…
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  <p className="text-center text-xs text-slate-400">
                    By submitting, you'll be redirected to WhatsApp to confirm.
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}