
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaHospital,
  FaChevronRight,
  FaArrowRight,
} from 'react-icons/fa';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Facilities', to: 'facilities' },
  { name: 'Doctors', to: 'doctors' },
  { name: 'Gallery', to: 'gallery' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  const closeMenu = () => setIsOpen(false);

  // Detect page scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scrolling while drawer is open
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Close drawer on Escape and desktop resize
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-slate-100/80 bg-white/95 py-2 shadow-lg shadow-slate-900/[0.06] backdrop-blur-2xl'
            : 'border-b border-white/30 bg-white/70 py-3 backdrop-blur-xl sm:py-4'
        }`}
      >
        <div className="container-custom flex h-14 items-center justify-between gap-3">

  {/* LOGO */}
  <Link
    to="home"
    smooth
    duration={600}
    onClick={closeMenu}
    className="group flex shrink-0 cursor-pointer items-center gap-2.5 sm:gap-3"
  >
    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg shadow-primary-700/20 transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12 sm:rounded-2xl">
      <img
        src="/images/logo.jpeg"
        alt="Azad Hospital Logo"
        className="h-full w-full rounded-xl object-contain p-1 sm:rounded-2xl"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="h-5 w-5 sm:h-6 sm:w-6"><path d="M0 384V288c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm96-176v-96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zm96 96v-96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zm96-176v-96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zm96 176v-96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zM32 448h64c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32zm96 0h64c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32zm96 0h64c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32zm96 0h64c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32zm96 0h64c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32z"/></svg>';
        }}
      />

    </div>

    <div className="leading-tight">
      <h1 className="text-sm font-extrabold tracking-tight text-slate-900 sm:text-lg">
        AZAD <span className="text-primary-700">HOSPITAL</span>
      </h1>

      <p className="mt-1 text-[10px] font-medium tracking-[0.16em] text-slate-500 sm:text-xs">
        SIWAN, BIHAR
      </p>
    </div>
  </Link>

  {/* DESKTOP NAVIGATION */}
  <ul className="hidden items-center gap-0.5 xl:flex">
    {navItems.map((item) => (
      <li key={item.to}>
        <Link
          to={item.to}
          smooth
          duration={600}
          spy
          offset={-85}
          onSetActive={() => setActive(item.to)}
          className={`relative cursor-pointer rounded-full px-3 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
            active === item.to
              ? 'bg-primary-700 text-white shadow-md shadow-primary-700/20'
              : 'text-slate-600 hover:bg-primary-50 hover:text-primary-700'
          }`}
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>

  {/* DESKTOP EMERGENCY BUTTON */}
  <a
    href="tel:6207263830"
    className="hidden shrink-0 items-center gap-2.5 rounded-full bg-gradient-to-r from-rose-600 to-red-500 px-5 py-3 text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-500/30 xl:flex"
  >
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
      <FaPhoneAlt className="text-xs" />
    </span>

    <span className="text-left">
      <span className="block text-[9px] font-medium uppercase tracking-wider text-white/80">
        Emergency
      </span>

      <span className="block text-sm font-bold">
        6207263830
      </span>
    </span>
  </a>

  {/* MOBILE ACTIONS */}
  <div className="flex items-center gap-2 xl:hidden">

    <a
      href="tel:6207263830"
      aria-label="Call Azad Hospital"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-600 transition hover:bg-rose-100 sm:h-11 sm:w-11"
    >
      <FaPhoneAlt className="text-sm" />
    </a>

    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 sm:h-11 sm:w-11 ${
        isOpen
          ? 'border-primary-200 bg-primary-50 text-primary-700'
          : 'border-slate-200 bg-white text-slate-800 hover:border-primary-200'
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isOpen ? 'close' : 'open'}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.span>
      </AnimatePresence>
    </button>
  </div>
</div>

        {/* TABLET NAVIGATION */}

        <div className="hidden border-t border-slate-100/80 px-4 py-2 xl:hidden lg:block">
          <ul className="container-custom flex items-center justify-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth
                  duration={600}
                  spy
                  offset={-85}
                  onSetActive={() => setActive(item.to)}
                  className={`block cursor-pointer rounded-full px-3 py-2 text-xs font-semibold transition ${
                    active === item.to
                      ? 'bg-primary-700 text-white'
                      : 'text-slate-600 hover:bg-primary-50 hover:text-primary-700'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* ================= MOBILE RIGHT DRAWER ================= */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-slate-950/50 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* DRAWER */}

            <motion.aside
              id="mobile-navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 280,
                mass: 0.8,
              }}
              className="fixed right-0 top-0 z-[70] flex h-[100dvh] w-[85%] max-w-[380px] flex-col overflow-hidden bg-slate-50 shadow-2xl lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {/* DRAWER BACKGROUND IMAGE */}

              <div className="pointer-events-none absolute inset-0 z-0">
                <img
                  src="/images/azad-hospital.jpeg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />

                {/* White glass overlay */}
                <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]" />

                {/* Blue and teal tint */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white/80 to-teal-50/60" />
              </div>

             
{/* DRAWER HEADER WITH HOSPITAL BACKGROUND IMAGE */}

<div className="relative overflow-hidden px-6 pb-7 pt-7 text-white">

  {/* Background image */}
  <img
    src="/images/azad-hospital.jpeg"
    alt=""
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  {/* Dark overlay for readable text */}
  <div className="absolute inset-0 bg-black/45" />

  {/* Header content */}
  <div className="relative z-10 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/20 shadow-lg backdrop-blur-sm">
        <FaHospital className="text-2xl" />
      </div>

      <div>
        <h2 className="text-base font-extrabold tracking-wide">
          AZAD HOSPITAL
        </h2>

        <p className="mt-1 text-xs text-white/90">
          Siwan, Bihar
        </p>
      </div>
    </div>

    <button
      type="button"
      onClick={closeMenu}
      aria-label="Close navigation"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-sm transition-all hover:rotate-90 hover:bg-white/30"
    >
      <FaTimes className="text-lg" />
    </button>
  </div>

 
</div>


              {/* NAVIGATION LINKS */}

              <div className="relative z-10 flex-1 overflow-y-auto px-5 py-6">
                <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                  MAIN MENU
                </p>

                <ul className="space-y-1.5">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.to}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.12 + i * 0.055,
                        duration: 0.3,
                      }}
                    >
                      <Link
                        to={item.to}
                        smooth
                        duration={600}
                        spy
                        offset={-85}
                        onSetActive={() => setActive(item.to)}
                        onClick={closeMenu}
                        className={`group flex cursor-pointer items-center justify-between rounded-xl px-4 py-3.5 transition-all duration-300 ${
                          active === item.to
                            ? 'bg-primary-50/95 text-primary-700 shadow-sm'
                            : 'text-slate-700 hover:bg-white/80 hover:text-primary-700'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`h-1.5 w-1.5 rounded-full transition-all ${
                              active === item.to
                                ? 'bg-primary-600 ring-4 ring-primary-100'
                                : 'bg-slate-300 group-hover:bg-primary-500'
                            }`}
                          />

                          <span className="text-sm font-semibold">
                            {item.name}
                          </span>
                        </span>

                        <FaChevronRight
                          className={`text-xs transition-transform duration-300 group-hover:translate-x-1 ${
                            active === item.to
                              ? 'text-primary-600'
                              : 'text-slate-400'
                          }`}
                        />
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* EMERGENCY CARD */}

                <div className="mt-8 rounded-2xl bg-gradient-to-br from-rose-600 to-red-500 p-5 text-white shadow-xl shadow-red-500/15">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                      <FaPhoneAlt className="text-lg" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/75">
                        Need immediate help?
                      </p>

                      <h3 className="mt-1 text-lg font-extrabold">
                        Emergency Call
                      </h3>
                    </div>
                  </div>

                  <a
                    href="tel:6207263830"
                    onClick={closeMenu}
                    className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3.5 text-sm font-extrabold text-rose-600 shadow-lg transition-all hover:bg-rose-50 active:scale-[0.98]"
                  >
                    <FaPhoneAlt />
                    Call 6207263830
                    <FaArrowRight className="ml-auto" />
                  </a>
                </div>
              </div>

              {/* DRAWER FOOTER */}

              <div className="relative z-10 border-t border-slate-200/70 bg-white/80 px-6 py-4 text-center backdrop-blur-md">
                <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-500">
                  AZAD HOSPITAL · SIWAN, BIHAR
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
