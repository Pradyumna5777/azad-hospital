
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTimes,
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaImages
} from 'react-icons/fa';

const items = [
  { type: 'image', src: '/images/hospital-16.jpeg', alt: 'Patient Care', category: 'Our Doctor', featured: true },
  { type: 'image', src: '/images/hospital-1.jpeg', alt: 'Parking Area', category: 'Parking' },
  { type: 'image', src: '/images/hospital-17.jpeg', alt: "Doctor's Clinic", category: 'Patient Care' },
  { type: 'video', src: '/videos/hospital-tour.mp4', alt: 'Hospital Tour', poster: '/images/hospital-1.jpg', category: 'Virtual Tour' },
    { type: 'video', src: '/videos/hospital-tour1.mp4', alt: 'Independance Day', poster: '/images/hospital-1.jpg', category: 'Celebration' },
  { type: 'video', src: '/videos/hospital-tour2.mp4', alt: 'Independance Day', poster: '/images/hospital-1.jpg', category: 'Celebration' },
  { type: 'video', src: '/videos/hospital-tour3.mp4', alt: 'Independance Day', poster: '/images/hospital-1.jpg', category: 'Celebration' },
  { type: 'image', src: '/images/hospital-2.jpeg', alt: 'Waiting Area', category: 'Facilities' },
  { type: 'image', src: '/images/hospital-3.jpeg', alt: 'Pharmacy', category: 'Facilities' },
  { type: 'image', src: '/images/hospital-4.jpeg', alt: 'Parking Area', category: 'Parking Area' },
  { type: 'image', src: '/images/hospital-5.jpeg', alt: 'Pharmacy', category: 'Facilities' },
  { type: 'image', src: '/images/hospital-6.jpeg', alt: 'Waiting Area', category: 'Facilities' },
  { type: 'image', src: '/images/hospital-7.jpeg', alt: 'Waiting Area', category: 'Facilities' },
  { type: 'image', src: '/images/hospital-8.jpeg', alt: 'Patient Care', category: 'Patient Care' },
  { type: 'image', src: '/images/hospital-9.jpeg', alt: 'Pharmacy', category: 'Facilities' },
  { type: 'image', src: '/images/hospital-10.jpeg', alt: 'PICU Unit', category: 'Facilities' },
  { type: 'image', src: '/images/hospital-11.jpeg', alt: 'Operation Theatre', category: 'Facilities' },
  { type: 'image', src: '/images/hospital-12.jpeg', alt: 'Laboratory', category: 'Patient Care' },
  { type: 'image', src: '/images/hospital-13.jpeg', alt: 'Parking Area', category: 'Facilities' },
  { type: 'image', src: '/images/hospital-14.jpeg', alt: 'Reception', category: 'Facilities' },
  { type: 'image', src: '/images/hospital-15.jpeg', alt: 'Hospital Building', category: 'Facilities' },
];

const fallback =
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000';

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  const next = useCallback(() => {
    setSelected(prev =>
      prev === null ? null : (prev + 1) % items.length
    );
  }, []);

  const prev = useCallback(() => {
    setSelected(prev =>
      prev === null ? null : (prev - 1 + items.length) % items.length
    );
  }, []);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (selected === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selected, next, prev, close]);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-cyan-100/30 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white px-5 py-2 shadow-sm">
            <FaImages className="text-primary-600" />
            <span className="text-xs font-bold tracking-[0.2em] text-primary-700">
              OUR GALLERY
            </span>
          </div>

          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
            A Closer Look at{' '}
            <span className="bg-gradient-to-r from-primary-600 to-cyan-500 bg-clip-text text-transparent">
              Azad Hospital
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-500 sm:text-base md:text-lg">
            Explore our modern healthcare facilities, thoughtfully designed
            spaces and the environment where compassionate care comes first.
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-1 w-10 rounded-full bg-primary-600" />
            <span className="h-1 w-3 rounded-full bg-cyan-400" />
            <span className="h-1 w-1 rounded-full bg-slate-300" />
          </div>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">

          {items.map((item, i) => (
            <motion.button
              type="button"
              key={item.src}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.55,
                delay: (i % 4) * 0.08,
                ease: 'easeOut'
              }}
              whileHover={{ y: -5 }}
              onClick={() => setSelected(i)}
              aria-label={`View ${item.alt}`}
              className={`group relative block w-full overflow-hidden rounded-2xl bg-slate-200 text-left shadow-md shadow-slate-200/60 outline-none ring-primary-500 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary-900/15 focus-visible:ring-4 sm:rounded-3xl ${
                i === 0
                  ? 'col-span-2 aspect-[2/1] md:aspect-[2/1]'
                  : 'aspect-[1/1]'
              }`}
            >
              <img
                src={item.type === 'video' ? item.poster : item.src}
                alt={item.alt}
                loading={i < 4 ? 'eager' : 'lazy'}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                onError={(e) => {
                  if (e.currentTarget.dataset.fallback) return;
                  e.currentTarget.dataset.fallback = 'true';
                  e.currentTarget.src = fallback;
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent opacity-70 transition-all duration-500 group-hover:opacity-100" />

              {/* Top label */}
              <div className="absolute left-3 top-3 sm:left-5 sm:top-5">
                <span className="rounded-full border border-white/30 bg-black/25 px-3 py-1.5 text-[9px] font-semibold tracking-wider text-white backdrop-blur-md sm:text-[10px]">
                  {item.category}
                </span>
              </div>

              {/* Center play/view icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-11 w-11 scale-90 items-center justify-center rounded-full border border-white/60 bg-white/20 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 sm:h-14 sm:w-14">
                  {item.type === 'video' ? (
                    <FaPlay className="ml-1 text-sm sm:text-lg" />
                  ) : (
                    <FaExpand className="text-sm sm:text-lg" />
                  )}
                </div>
              </div>

              {/* Bottom title */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <p className="mb-1 text-[9px] font-medium uppercase tracking-[0.18em] text-white/70 sm:text-[10px]">
                      {item.type === 'video' ? 'WATCH VIDEO' : 'EXPLORE'}
                    </p>
                    <h3 className="text-sm font-bold text-white sm:text-lg">
                      {item.alt}
                    </h3>
                  </div>
                  <FaChevronRight className="mb-1 shrink-0 text-xs text-white opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
              </div>
            </motion.button>
          ))}

        </div>

        {/* Bottom information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:mt-14 sm:flex-row"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-600">
            <FaImages />
          </span>
          <p className="text-sm text-slate-500">
            Showing all{' '}
            <strong className="text-slate-800">{items.length} moments</strong>
            {' '}from Azad Hospital. Click any image to explore.
          </p>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-3 backdrop-blur-xl sm:p-6"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image viewer"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery"
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white backdrop-blur-lg transition hover:rotate-90 hover:bg-white/20 sm:right-8 sm:top-8"
            >
              <FaTimes />
            </button>

            {/* Counter */}
            <div className="absolute left-5 top-5 z-20 text-xs font-semibold tracking-widest text-white/70 sm:left-8 sm:top-8">
              {String(selected + 1).padStart(2, '0')}
              <span className="mx-2 text-white/30">/</span>
              {String(items.length).padStart(2, '0')}
            </div>

            {/* Previous */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-lg transition hover:bg-white/25 sm:left-7 sm:h-14 sm:w-14"
            >
              <FaChevronLeft />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-lg transition hover:bg-white/25 sm:right-7 sm:h-14 sm:w-14"
            >
              <FaChevronRight />
            </button>

            {/* Media */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, scale: 0.94, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="flex max-h-[82vh] w-full max-w-6xl flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {items[selected].type === 'video' ? (
                  <video
                    key={items[selected].src}
                    src={items[selected].src}
                    poster={items[selected].poster}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[75vh] w-full rounded-2xl bg-black object-contain shadow-2xl"
                  />
                ) : (
                  <img
                    src={items[selected].src}
                    alt={items[selected].alt}
                    className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl sm:rounded-2xl"
                    onError={(e) => {
                      if (e.currentTarget.dataset.fallback) return;
                      e.currentTarget.dataset.fallback = 'true';
                      e.currentTarget.src = fallback;
                    }}
                  />
                )}

                <div className="mt-5 text-center">
                  <h3 className="text-lg font-bold text-white sm:text-2xl">
                    {items[selected].alt}
                  </h3>
                  <p className="mt-1 text-sm text-white/50">
                    Azad Hospital · {items[selected].category}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}