"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUp,
  Award,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Clock,
  Dumbbell,
  ExternalLink,
  Filter,
  Flame,
  HeartHandshake,
  Mail,
  MapPin,
  MapPinned,
  Menu,
  MessageCircle,
  Newspaper,
  Phone,
  Play,
  Search,
  Send,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Timer,
  Trophy,
  UsersRound,
  X,
  type LucideIcon
} from "lucide-react";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  academyInfo,
  achievementCards,
  achievementTimeline,
  achievements,
  certificateCategories,
  coaches,
  coachingPrograms,
  coreValues,
  events,
  footballPrograms,
  gallery,
  galleryCategories,
  heroStats,
  leadershipMessages,
  links,
  media,
  navItems,
  news,
  newsCategories,
  objectives,
  partners,
  sports,
  successStories,
  testimonials,
  timeline,
  valueCards,
  videoHighlights,
  whyChoose
} from "../lib/content";

const sportIconMap: Record<string, LucideIcon> = {
  football: CircleDot,
  target: Target,
  activity: Activity,
  goalkeeper: ShieldCheck,
  fitness: Dumbbell,
  tournament: Trophy,
  school: UsersRound,
  coaching: BadgeCheck
};

const whyIcons = [
  BadgeCheck,
  Trophy,
  UsersRound,
  Dumbbell,
  ShieldCheck,
  Award,
  Activity,
  Target,
  HeartHandshake,
  Sparkles
];

type GalleryItem = (typeof gallery)[number];
type EventItem = (typeof events)[number];
type VideoHighlightItem = (typeof videoHighlights)[number];

const staticBasePath = "";

function resolvePublicAssetPath(src: string) {
  if (!src || /^(https?:|data:|blob:|mailto:|tel:)/.test(src)) {
    return src;
  }

  if (staticBasePath) {
    if (src.startsWith(`${staticBasePath}/`)) return src;
    return `${staticBasePath}${src.startsWith("/") ? src : `/${src}`}`;
  }

  if (typeof window === "undefined" || !window.location.hostname.endsWith("github.io")) {
    return src;
  }

  const [repoName] = window.location.pathname.split("/").filter(Boolean);
  if (!repoName || src.startsWith(`/${repoName}/`)) {
    return src;
  }

  return `/${repoName}${src.startsWith("/") ? src : `/${src}`}`;
}

function usePublicAssetPath(src: string) {
  const [assetPath, setAssetPath] = useState(() => resolvePublicAssetPath(src));

  useEffect(() => {
    setAssetPath(resolvePublicAssetPath(src));
  }, [src]);

  return assetPath;
}

function SmartImage({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const publicSrc = usePublicAssetPath(src);
  const [currentSrc, setCurrentSrc] = useState(publicSrc);

  useEffect(() => {
    setCurrentSrc(publicSrc);
  }, [publicSrc]);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
      unoptimized={currentSrc.startsWith("http")}
      onError={() => setCurrentSrc(media.fallback)}
    />
  );
}

function SectionHeader({
  kicker,
  title,
  text,
  centered = false
}: {
  kicker: string;
  title: string;
  text: string;
  centered?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-ysdaBlue shadow-sm">
        <Sparkles className="h-4 w-4 text-flame" />
        {kicker}
      </div>
      <h2 className="font-display text-3xl font-black leading-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{text}</p>
    </motion.div>
  );
}

function PrimaryButton({
  href,
  onClick,
  children,
  variant = "blue",
  icon: Icon = ArrowRight
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "blue" | "warm" | "white";
  icon?: LucideIcon;
}) {
  const style =
    variant === "warm"
      ? "warm-gradient text-white shadow-warm"
      : variant === "white"
        ? "bg-white text-ink shadow-glow"
        : "cta-gradient text-white shadow-glow";

  const className = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition ${style}`;

  if (!href) {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={className}
      >
        <span>{children}</span>
        <Icon className="h-4 w-4" />
      </motion.button>
    );
  }

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      <span>{children}</span>
      <Icon className="h-4 w-4" />
    </motion.a>
  );
}

function AnimatedCounter({
  value,
  suffix = "",
  className = ""
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}

function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const logoSrc = usePublicAssetPath("/brand/ysda-logo-white.png");

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 1400);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-[120] grid place-items-center overflow-hidden bg-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(32,183,255,0.26),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(255,210,63,0.28),transparent_28%),linear-gradient(135deg,rgba(11,92,255,0.12),rgba(255,122,26,0.12))]" />
          <div className="absolute inset-0 sport-grid-bg opacity-45" />
          <motion.div
            initial={{ y: 20, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative z-10 w-[min(86vw,460px)] text-center"
          >
            <div className="mx-auto rounded-[2rem] border border-blue-100 bg-white p-4 shadow-glow">
              <div className="relative mx-auto h-32 w-full overflow-hidden rounded-[1.5rem] bg-white">
                <Image
                  src={logoSrc}
                  alt="Youth Sports Development Academy logo"
                  fill
                  priority
                  sizes="460px"
                  className="object-contain p-2"
                />
              </div>
            </div>
            <p className="mt-6 text-sm font-black uppercase tracking-[0.24em] text-ysdaBlue">
              Loading Football Energy
            </p>
            <div className="mx-auto mt-4 h-3 max-w-xs overflow-hidden rounded-full bg-blue-100">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.15, ease: "easeInOut" }}
                className="h-full rounded-full bg-sport-gradient"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const cursorX = useMotionValue(-120);
  const cursorY = useMotionValue(-120);
  const ringX = useSpring(cursorX, { stiffness: 260, damping: 28, mass: 0.45 });
  const ringY = useSpring(cursorY, { stiffness: 260, damping: 28, mass: 0.45 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");

    const updateAvailability = () => {
      const shouldUseAnimatedCursor = finePointer.matches && navigator.onLine;
      setEnabled(shouldUseAnimatedCursor);
      setActive(false);
      document.body.classList.toggle("ysda-custom-cursor", shouldUseAnimatedCursor);
    };

    const move = (event: MouseEvent) => {
      if (!navigator.onLine || !finePointer.matches) return;
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    const updateActiveTarget = (event: MouseEvent) => {
      if (!navigator.onLine || !finePointer.matches) {
        setActive(false);
        return;
      }
      const target = event.target;
      setActive(target instanceof Element && Boolean(target.closest("a, button, input, textarea, select")));
    };

    updateAvailability();
    window.addEventListener("online", updateAvailability);
    window.addEventListener("offline", updateAvailability);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", updateActiveTarget);
    document.addEventListener("mouseout", updateActiveTarget);
    finePointer.addEventListener?.("change", updateAvailability);

    return () => {
      document.body.classList.remove("ysda-custom-cursor");
      window.removeEventListener("online", updateAvailability);
      window.removeEventListener("offline", updateAvailability);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", updateActiveTarget);
      document.removeEventListener("mouseout", updateActiveTarget);
      finePointer.removeEventListener?.("change", updateAvailability);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[110] hidden h-9 w-9 rounded-full border-2 border-ysdaBlue/70 bg-white/20 shadow-glow backdrop-blur-sm lg:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          scale: active ? 1.65 : 1
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[111] hidden h-4 w-4 rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffffff_0_18%,#20B7FF_19%_52%,#172033_53%_100%)] shadow-lg lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: active ? 0.72 : 1
        }}
      />
    </>
  );
}

function BrandLogo({
  size = "nav",
  priority = false
}: {
  size?: "nav" | "footer";
  priority?: boolean;
}) {
  const sizeClass = size === "footer" ? "h-20 w-28 sm:w-32" : "h-14 w-20 sm:w-24";
  const logoSrc = usePublicAssetPath("/brand/ysda-logo-white.png");

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-2xl border border-white/80 bg-white shadow-glow ${sizeClass}`}
    >
      <Image
        src={logoSrc}
        alt="Youth Sports Development Academy logo"
        fill
        priority={priority}
        sizes={size === "footer" ? "128px" : "96px"}
        className="object-contain p-1"
      />
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/88 py-2 shadow-lg shadow-blue-900/10 backdrop-blur-xl" : "bg-white/12 py-4 backdrop-blur-sm"
      }`}
    >
      <div className="section-wrap flex items-center justify-between gap-4">
        <a href="#home" className="group flex shrink-0 items-center" aria-label="YSDA home">
          <BrandLogo priority />
        </a>

        <nav
          className="hidden min-w-0 flex-1 flex-nowrap items-center justify-center gap-0 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="whitespace-nowrap rounded-full px-2 py-2 text-[11px] font-extrabold text-slate-700 transition hover:bg-blue-50 hover:text-ysdaBlue xl:px-3 xl:text-xs"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 2xl:flex">
          <SocialIcon href={links.instagram} label="Instagram" icon={<FaInstagram />} />
          <SocialIcon href={links.youtube} label="YouTube" icon={<FaYoutube />} />
          <SocialIcon href={links.whatsapp} label="WhatsApp" icon={<FaWhatsapp />} />
          <PrimaryButton href={links.whatsapp} icon={MessageCircle}>
            WhatsApp
          </PrimaryButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Open mobile menu"
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-md lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.25 }}
            className="section-wrap mt-3 rounded-3xl border border-white/80 bg-white/96 p-4 shadow-2xl shadow-blue-900/15 backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-2 sm:grid-cols-2">
              {navItems.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-black text-slate-700 transition hover:bg-blue-50 hover:text-ysdaBlue"
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <SocialIcon href={links.instagram} label="Instagram" icon={<FaInstagram />} />
              <SocialIcon href={links.youtube} label="YouTube" icon={<FaYoutube />} />
              <SocialIcon href={links.whatsapp} label="WhatsApp" icon={<FaWhatsapp />} />
              <PrimaryButton href={links.whatsapp} icon={MessageCircle}>
                Contact on WhatsApp
              </PrimaryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function SocialIcon({
  href,
  label,
  icon
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      whileHover={{ y: -3, scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="grid h-11 w-11 place-items-center rounded-full border border-white/70 bg-white text-lg text-ysdaBlue shadow-md transition hover:text-flame"
    >
      {icon}
    </motion.a>
  );
}

function Hero() {
  const heroPoster = usePublicAssetPath(media.heroPoster);
  const heroVideo = usePublicAssetPath(media.heroVideo);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;
    video.muted = true;
    void video.play().catch(() => {
      // Browsers may defer autoplay until the first user gesture.
    });
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <SmartImage
          src={media.heroPoster}
          alt="YSDA football training poster"
          className="object-cover"
          sizes="100vw"
          priority
        />
        <video
          ref={heroVideoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${videoReady && !videoFailed ? "opacity-100" : "opacity-0"}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroPoster}
          onCanPlay={() => {
            setVideoReady(true);
            setVideoFailed(false);
          }}
          onError={() => {
            setVideoReady(false);
            setVideoFailed(true);
          }}
          aria-label="YSDA football training background video"
        >
          <source src={heroVideo} type="video/mp4" />
          <source src={media.heroVideoFallback} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(11,92,255,0.92),rgba(32,183,255,0.58)_36%,rgba(255,122,26,0.44)_74%,rgba(255,210,63,0.28))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.35),transparent_28%),linear-gradient(90deg,rgba(3,25,68,0.42),rgba(23,32,51,0.18)_48%,rgba(23,32,51,0.42))]" />
      </div>

      <div className="pointer-events-none absolute inset-0 sport-grid-bg opacity-45" />
      <FloatingSportElements />

      <div className="section-wrap relative z-10 flex min-h-[100svh] flex-col justify-end pb-10 pt-32 sm:pb-14 lg:justify-center lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/20 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
            <Flame className="h-4 w-4 text-gold" />
            Established {academyInfo.established} - Football Development Academy
          </div>
          <h1 className="font-display text-4xl font-black leading-[1.05] text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
            {academyInfo.tagline}
          </h1>
          <p className="mt-6 max-w-3xl text-base font-semibold leading-8 text-white/90 sm:text-xl">
            Professional football coaching, structured training, fitness development, tournaments,
            trials, camps, and youth-development pathways from Mhow, Indore.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="#about" variant="white">
              Explore Our Academy
            </PrimaryButton>
            <PrimaryButton href="#sports" variant="blue">
              View Football Training
            </PrimaryButton>
            <PrimaryButton href="#events" variant="warm" icon={CalendarDays}>
              Upcoming Events
            </PrimaryButton>
            <PrimaryButton href={links.whatsapp} variant="white" icon={MessageCircle}>
              Contact on WhatsApp
            </PrimaryButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.7 }}
          className="mt-8 grid gap-4 pr-16 sm:grid-cols-2 sm:pr-0 lg:mt-10 lg:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="glass rounded-3xl p-5">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="font-display text-3xl font-black text-ysdaBlue"
              />
              <p className="mt-1 text-sm font-bold text-slate-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FloatingSportElements() {
  const elements = [
    { Icon: CircleDot, className: "left-[7%] top-[24%] text-gold", delay: 0 },
    { Icon: Trophy, className: "right-[9%] top-[20%] text-white", delay: 0.7 },
    { Icon: Dumbbell, className: "bottom-[22%] right-[15%] text-gold", delay: 1.2 },
    { Icon: Target, className: "bottom-[18%] left-[8%] text-white", delay: 1.8 }
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
      {elements.map(({ Icon, className, delay }) => (
        <motion.div
          key={className}
          animate={{ y: [0, -18, 0], rotate: [0, 7, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, delay }}
          className={`absolute grid h-16 w-16 place-items-center rounded-3xl border border-white/35 bg-white/16 text-3xl shadow-2xl backdrop-blur-md ${className}`}
        >
          <Icon className="h-8 w-8" />
        </motion.div>
      ))}
    </div>
  );
}

function AboutSection() {
  const focusAreas = [
    "Professional football coaching",
    "Grassroots player development",
    "Talent identification",
    "Competitive exposure",
    "School, district, state, national and international events",
    "Leadership, teamwork and sportsmanship",
    "Youth fitness and discipline",
    "Safe and supportive training environment"
  ];

  const facts = [
    `Established: ${academyInfo.established}`,
    `Location: ${academyInfo.location}`,
    `Associated with: ${academyInfo.organisation}`,
    `President: ${academyInfo.president}`,
    `Secretary: ${academyInfo.secretary}`
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="section-wrap grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeader
            kicker="About YSDA"
            title="A professionally managed football-development academy in Mhow, Indore."
            text={academyInfo.about}
          />

          <p className="mt-6 rounded-3xl border border-blue-100 bg-white p-5 text-sm font-bold leading-7 text-slate-700 shadow-sm">
            {academyInfo.belief}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {facts.map((fact) => (
              <span key={fact} className="rounded-full bg-blue-50 px-4 py-2 text-xs font-black text-ysdaBlue">
                {fact}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {focusAreas.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-turf" />
                <span className="text-sm font-extrabold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
          className="relative min-h-[520px]"
        >
          <div className="absolute left-0 top-8 h-72 w-[72%] overflow-hidden rounded-[2rem] shadow-glow">
            <SmartImage src={media.aboutPrimary} alt="YSDA football training" className="object-cover" />
          </div>
          <div className="absolute bottom-8 right-0 h-72 w-[70%] overflow-hidden rounded-[2rem] border-8 border-white shadow-warm">
            <SmartImage src={media.aboutSecondary} alt="Football coaching" className="object-cover" />
          </div>
          <div className="glass absolute left-8 top-[80%] max-w-xs rounded-3xl p-5">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-flame">{academyInfo.location}</p>
            <p className="mt-2 text-2xl font-black text-ink">Structured coaching. Fair opportunity. Bigger platforms.</p>
          </div>
        </motion.div>
      </div>

      <div className="section-wrap mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {valueCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm"
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-ysdaBlue">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-black">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ValuesObjectivesSection() {
  const valueIcons = [Target, ShieldCheck, UsersRound, Award, HeartHandshake, Trophy, BadgeCheck, Sparkles];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeader
          kicker="Values and Objectives"
          title="Skill development backed by discipline, integrity, and fair opportunity."
          text="YSDA develops footballers through clear values, structured objectives, safe training practices, school-level participation, and pathways toward bigger competitive platforms."
          centered
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, index) => {
            const Icon = valueIcons[index] ?? CheckCircle2;
            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -7 }}
                className="rounded-3xl border border-blue-100 bg-slate-50 p-5 shadow-sm"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 via-sky-400 to-orange-400 text-white shadow-glow">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-black">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{value.text}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="relative overflow-hidden rounded-[2rem] bg-sport-gradient p-7 text-white shadow-glow">
            <div className="absolute inset-0 sport-grid-bg opacity-35" />
            <div className="relative z-10">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-gold">Our Goal</p>
              <h3 className="mt-3 font-display text-3xl font-black leading-tight">
                Build a professional and inclusive football ecosystem.
              </h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-white/90">
                YSDA aims to help young footballers learn, train, compete, grow, and build long-term football careers
                through partnerships with schools, clubs, academies, officials, and football bodies.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {objectives.map((objective, index) => (
              <motion.div
                key={objective}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.03 }}
                className="flex gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold text-sm font-black text-ink">
                  {index + 1}
                </span>
                <p className="text-sm font-bold leading-6 text-slate-700">{objective}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SportsSection() {
  const [featured, ...others] = sports;

  return (
    <section id="sports" className="bg-field-lines py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeader
          kicker="Football Training"
          title="Focused football programmes for every stage of player development."
          text="YSDA now presents a clear football-only academy pathway: grassroots development, beginner coaching, technical skill work, goalkeeping, football fitness, match practice, school football programmes, and personal coaching."
          centered
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <motion.article
            whileHover={{ y: -8 }}
            className="relative overflow-hidden rounded-[2rem] bg-white shadow-glow"
          >
            <div className="relative h-[400px]">
              <SmartImage src={featured.image} alt="Featured football academy program" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/82 via-blue-800/20 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-ysdaBlue">
                <CircleDot className="h-4 w-4 text-flame" />
                Featured Football Academy
              </div>
              <h3 className="font-display text-3xl font-black text-white sm:text-4xl">{featured.name}</h3>
              <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-white/88 sm:text-base">
                {featured.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white/18 px-4 py-2 text-sm font-black text-white backdrop-blur">
                  {featured.level}
                </span>
                <PrimaryButton href="#football" variant="white">
                  Learn More
                </PrimaryButton>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {others.slice(0, 4).map((sport) => (
              <SportMiniCard key={sport.name} sport={sport} />
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {others.slice(4).map((sport) => (
            <SportCard key={sport.name} sport={sport} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SportMiniCard({ sport }: { sport: (typeof sports)[number] }) {
  const Icon = sportIconMap[sport.icon] ?? Trophy;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="grid grid-cols-[112px_1fr] overflow-hidden rounded-3xl bg-white shadow-sm"
    >
      <div className="relative min-h-32">
        <SmartImage src={sport.image} alt={`${sport.name} training`} className="object-cover" />
      </div>
      <div className="p-4">
        <div className="mb-3 flex items-center gap-2">
          <span className={`grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br ${sport.color} text-white`}>
            <Icon className="h-5 w-5" />
          </span>
          <p className="font-display text-lg font-black">{sport.name}</p>
        </div>
        <p className="line-clamp-2 text-sm leading-6 text-slate-600">{sport.description}</p>
      </div>
    </motion.article>
  );
}

function SportCard({ sport }: { sport: (typeof sports)[number] }) {
  const Icon = sportIconMap[sport.icon] ?? Trophy;

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-3xl bg-white shadow-sm"
    >
      <div className="relative h-52">
        <SmartImage src={sport.image} alt={`${sport.name} program`} className="object-cover" />
      </div>
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${sport.color} text-white`}>
            <Icon className="h-5 w-5" />
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
            {sport.level}
          </span>
        </div>
        <h3 className="font-display text-xl font-black">{sport.name}</h3>
        <p className="mt-3 min-h-24 text-sm leading-7 text-slate-600">{sport.description}</p>
        <a
          href="#football"
          className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ysdaBlue"
        >
          Learn More <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}

function FootballAcademySection() {
  return (
    <section id="football" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 field-gradient" />
      <div className="absolute inset-0 sport-grid-bg opacity-30" />

      <div className="section-wrap relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionHeader
              kicker="Football Academy"
              title="The strongest visual identity of YSDA belongs to football."
              text="From beginner confidence to advanced match readiness, the football academy trains technical quality, tactical awareness, disciplined fitness, goalkeeping, small-sided games, match practice, and player assessment."
            />
            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryButton href={links.whatsapp} variant="white" icon={MessageCircle}>
                Join Football Training
              </PrimaryButton>
              <PrimaryButton href="#events" variant="warm" icon={CalendarDays}>
                View Training Schedule
              </PrimaryButton>
              <PrimaryButton href="#videos" variant="white" icon={Play}>
                Watch Highlights
              </PrimaryButton>
              <PrimaryButton href="#contact" variant="white" icon={Phone}>
                Contact Academy
              </PrimaryButton>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {footballPrograms.map((program, index) => (
              <motion.div
                key={program}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="glass flex items-center gap-3 rounded-3xl p-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white text-ysdaBlue">
                  <CircleDot className="h-5 w-5" />
                </span>
                <span className="text-sm font-black text-slate-700">{program}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.82fr]">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-blue-950/20">
            <div className="relative h-[390px]">
              <SmartImage src={media.footballFeature} alt="Football match practice" className="object-cover" />
              <button
                type="button"
                onClick={() => document.getElementById("videos")?.scrollIntoView({ behavior: "smooth" })}
                className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-ysdaBlue shadow-lg"
              >
                <Play className="h-4 w-4 fill-current" />
                Highlights
              </button>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              {["Technical Lab", "Match IQ", "Fitness Edge"].map((item, index) => (
                <div key={item} className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Module 0{index + 1}</p>
                  <p className="mt-2 font-display text-xl font-black">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <TacticalGraphic />
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {timeline.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="glass rounded-3xl p-6"
            >
              <p className="text-sm font-black uppercase tracking-[0.16em] text-ysdaBlue">{item.week}</p>
              <h3 className="mt-3 font-display text-xl font-black text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TacticalGraphic() {
  const players = [
    "left-[48%] top-[9%]",
    "left-[25%] top-[28%]",
    "right-[25%] top-[28%]",
    "left-[18%] bottom-[28%]",
    "right-[18%] bottom-[28%]",
    "left-[48%] bottom-[12%]"
  ];

  return (
    <div className="glass relative min-h-[390px] overflow-hidden rounded-[2rem] p-6">
      <div className="absolute inset-6 rounded-[1.5rem] border-2 border-white/70" />
      <div className="absolute left-1/2 top-6 h-[calc(100%-48px)] w-px -translate-x-1/2 bg-white/60" />
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/70" />
      {players.map((pos, index) => (
        <motion.span
          key={pos}
          animate={{ scale: [1, 1.14, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.18 }}
          className={`absolute ${pos} grid h-11 w-11 place-items-center rounded-full bg-white text-sm font-black text-ysdaBlue shadow-lg`}
        >
          {index + 1}
        </motion.span>
      ))}
      <div className="relative z-10 flex h-full min-h-[330px] flex-col justify-end">
        <div className="rounded-3xl bg-white/80 p-5 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-flame">Interactive tactical focus</p>
          <h3 className="mt-2 font-display text-2xl font-black">Shape, scanning, transitions, and teamwork.</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Small-sided games make decision-making visible, practical, and fun for young footballers.
          </p>
        </div>
      </div>
    </div>
  );
}

function WhyChooseSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeader
          kicker="Why Choose YSDA"
          title="A player-focused pathway from grassroots participation to competitive exposure."
          text="YSDA combines structured coaching, safe training, equal opportunity, school partnerships, competition preparation, and character development for young athletes."
          centered
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {whyChoose.map((item, index) => {
            const Icon = whyIcons[index] ?? CheckCircle2;
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -7 }}
                className="rounded-3xl border border-blue-100 bg-white p-5 text-center shadow-sm"
              >
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 text-white shadow-glow">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-4 text-sm font-black leading-6 text-slate-700">{item}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CoachingProgramsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="programs" className="bg-white py-20 sm:py-28">
      <div className="section-wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          kicker="Courses and Training Programmes"
          title="Structured football programmes for beginners, schools, teams, coaches, and competitive players."
          text="Each course can display football focus, age group, level, duration, schedule, coach, venue, fee, capacity, equipment, certificate availability, registration, and WhatsApp enquiry details after verification."
        />
        <div className="space-y-3">
          {coachingPrograms.map((program, index) => (
            <div key={program.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-display text-base font-black text-ink sm:text-lg">{program.title}</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-ysdaBlue shadow-sm">
                  {openIndex === index ? <X className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-7 text-slate-600">{program.text}</p>
                      <div className="mt-4 grid gap-2 sm:grid-cols-3">
                        {program.details.map((detail) => (
                          <span
                            key={detail}
                            className="rounded-2xl bg-white px-3 py-2 text-xs font-black leading-5 text-slate-600 shadow-sm"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <PrimaryButton href={links.whatsapp} variant="blue" icon={Send}>
                          Registration
                        </PrimaryButton>
                        <PrimaryButton href={links.whatsapp} variant="warm" icon={MessageCircle}>
                          WhatsApp Enquiry
                        </PrimaryButton>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoachesSection() {
  const coachingApproach = [
    "Technical skill development",
    "Tactical awareness",
    "Strength and conditioning",
    "Speed, agility, balance and coordination",
    "Match preparation",
    "Mental strength and confidence",
    "Injury-prevention awareness",
    "Performance evaluation",
    "Individual player feedback",
    "Discipline and sportsmanship"
  ];

  return (
    <section id="coaches" className="py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeader
          kicker="Coaches and Technical Team"
          title="Complete athlete development through qualified guidance and structured feedback."
          text="YSDA publishes only verified coach, certificate and qualification details. The current profiles present the academy's coaching roles and technical philosophy until individual verified records are added."
          centered
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {coachingApproach.map((item, index) => {
            const Icon = whyIcons[index] ?? CheckCircle2;
            return (
              <div key={item} className="rounded-3xl border border-blue-100 bg-white p-4 text-center shadow-sm">
                <Icon className="mx-auto h-6 w-6 text-flame" />
                <p className="mt-3 text-xs font-black leading-5 text-slate-700">{item}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3600, disableOnInteraction: false }}
            breakpoints={{
              760: { slidesPerView: 2 },
              1080: { slidesPerView: 4 }
            }}
          >
            {coaches.map((coach) => (
              <SwiperSlide key={coach.name} className="pb-10">
                <motion.article whileHover={{ y: -8 }} className="h-full overflow-hidden rounded-3xl bg-white shadow-sm">
                  <div className="relative h-72">
                    <SmartImage src={coach.image} alt={coach.name} className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-black">{coach.name}</h3>
                    <p className="mt-1 text-sm font-black text-ysdaBlue">{coach.role}</p>
                    <div className="mt-4 space-y-2 text-sm text-slate-600">
                      <p>
                        <strong>Sport:</strong> {coach.sport}
                      </p>
                      <p>
                        <strong>Experience:</strong> {coach.experience}
                      </p>
                      <p>
                        <strong>Qualification:</strong> {coach.qualification}
                      </p>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{coach.intro}</p>
                    <div className="mt-5 flex gap-2">
                      <SocialIcon href={links.instagram} label={`${coach.name} Instagram`} icon={<FaInstagram />} />
                      <SocialIcon href={links.whatsapp} label={`${coach.name} WhatsApp`} icon={<FaWhatsapp />} />
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function LeadershipMessagesSection() {
  return (
    <section className="bg-field-lines py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeader
          kicker="Leadership"
          title="Messages from YSDA leadership."
          text="YSDA is led with a focus on organised planning, transparent coordination, player welfare, school partnerships, event management, and long-term grassroots football development."
          centered
        />

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          {leadershipMessages.map((leader, index) => {
            const imageFocus = index === 0 ? "object-[center_42%]" : "object-[center_34%]";

            return (
              <motion.article
                key={leader.name}
                whileHover={{ y: -8 }}
                className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm shadow-blue-950/5"
              >
                <div className="relative m-4 mb-0 overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-ysdaBlue via-sky to-flame p-1 shadow-xl shadow-blue-950/15">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-slate-100">
                    <SmartImage
                      src={leader.image}
                      alt={leader.name}
                      className={`object-cover ${imageFocus}`}
                      sizes="(max-width: 1024px) 100vw, 560px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/68 via-transparent to-transparent" />
                    <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-3">
                      <span className="rounded-full bg-white/92 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-ysdaBlue shadow-sm backdrop-blur">
                        YSDA Leadership
                      </span>
                      <span className="rounded-full bg-gold px-3 py-2 text-xs font-black text-ink shadow-sm">
                        {index === 0 ? "President" : "Secretary"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-flame">{leader.role}</p>
                  <h3 className="mt-2 font-display text-2xl font-black text-ink">{leader.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{leader.message}</p>
                  <blockquote className="mt-auto rounded-3xl bg-blue-50 p-4 text-sm font-black leading-7 text-ysdaBlue">
                    {leader.closing}
                  </blockquote>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-flame">
            Directors, staff and certificates
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Director, administrator, team manager, physiotherapist, media coordinator, event coordinator and support
            staff profiles should be published only after names, qualifications, responsibilities, photographs and
            certificates are verified by the academy.
          </p>
        </div>
      </div>
    </section>
  );
}

function Countdown() {
  const targetEvent = events.find((event) => event.status === "Upcoming") ?? events[0];
  const target = useMemo(() => new Date(`${targetEvent.date}T07:00:00+05:30`).getTime(), [targetEvent.date]);
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const updateRemaining = () => setRemaining(target - Date.now());
    updateRemaining();
    const interval = window.setInterval(updateRemaining, 1000);
    return () => window.clearInterval(interval);
  }, [target]);

  const safeRemaining = Math.max(remaining ?? 0, 0);
  const days = Math.floor(safeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((safeRemaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((safeRemaining / (1000 * 60)) % 60);
  const seconds = Math.floor((safeRemaining / 1000) % 60);

  return (
    <div className="glass rounded-[2rem] p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-ink">
          <Timer className="h-6 w-6" />
        </span>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-flame">Next big event</p>
          <h3 className="font-display text-xl font-black">{targetEvent.title}</h3>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-4 gap-3">
        {[
          ["Days", days],
          ["Hours", hours],
          ["Mins", minutes],
          ["Secs", seconds]
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-white p-3 text-center shadow-sm">
            <p className="font-display text-2xl font-black text-ysdaBlue">{String(value).padStart(2, "0")}</p>
            <p className="mt-1 text-[11px] font-black uppercase tracking-[0.12em] text-slate-500">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function EventsSection() {
  const [status, setStatus] = useState("Upcoming");
  const [registrationEvent, setRegistrationEvent] = useState<EventItem | null>(null);
  const filtered = events.filter((event) => event.status === status);

  return (
    <section id="events" className="bg-field-lines py-20 sm:py-28">
      <div className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <SectionHeader
            kicker="Events"
            title="Upcoming, ongoing, and completed football tournaments, trials, camps, and workshops."
            text="Event records include official status, date range, venue, football category, eligible categories, registration details, required documents, and direct WhatsApp enquiry."
          />
          <Countdown />
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
          {["Upcoming", "Ongoing", "Completed"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setStatus(item)}
              className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-black transition ${
                status === item ? "cta-gradient text-white shadow-glow" : "bg-white text-slate-600 shadow-sm"
              }`}
            >
              {item} Events
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {filtered.map((event) => (
            <EventCard key={event.title} event={event} onRegister={() => setRegistrationEvent(event)} />
          ))}
        </div>
      </div>
      {registrationEvent && (
        <RegistrationModal event={registrationEvent} onClose={() => setRegistrationEvent(null)} />
      )}
    </section>
  );
}

function EventCard({ event, onRegister }: { event: EventItem; onRegister: () => void }) {
  const startDate = new Date(event.date).toLocaleDateString("en-IN", { dateStyle: "medium" });
  const endDate = event.endDate
    ? new Date(event.endDate).toLocaleDateString("en-IN", { dateStyle: "medium" })
    : null;
  const dateText = endDate ? `${startDate} - ${endDate}` : startDate;

  return (
    <motion.article whileHover={{ y: -8 }} className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-sm">
      <div className="relative h-56">
        <SmartImage src={event.image} alt={event.title} className="object-cover" />
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-black text-ysdaBlue">
          {event.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-flame">{event.type}</p>
        <h3 className="font-display text-xl font-black">{event.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{event.description}</p>
        <div className="mt-5 grid gap-3 text-sm text-slate-600">
          <InfoRow icon={CalendarDays} text={dateText} />
          <InfoRow icon={Clock} text={event.time} />
          <InfoRow icon={MapPin} text={event.venue} />
          <InfoRow icon={Trophy} text={`${event.sport} | ${event.age}`} />
          <InfoRow icon={Timer} text={`Registration deadline: ${event.deadline}`} />
          <InfoRow icon={BadgeCheck} text={`Entry fee: ${event.fee}`} />
          <InfoRow icon={CheckCircle2} text={`Documents: ${event.documents}`} />
        </div>
        <div className="mt-auto grid gap-2 pt-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          <PrimaryButton href="#contact" variant="blue">
            View Details
          </PrimaryButton>
          <PrimaryButton onClick={onRegister} variant="white" icon={Send}>
            Register Now
          </PrimaryButton>
          <PrimaryButton href={links.whatsapp} variant="warm" icon={MessageCircle}>
            WhatsApp Enquiry
          </PrimaryButton>
        </div>
      </div>
    </motion.article>
  );
}

function RegistrationModal({
  event,
  onClose
}: {
  event: EventItem;
  onClose: () => void;
}) {
  const [form, setForm] = useState({ name: "", address: "", phone: "", dob: "" });
  const [error, setError] = useState("");

  const submitRegistration = (submitEvent: React.FormEvent<HTMLFormElement>) => {
    submitEvent.preventDefault();

    const name = form.name.trim();
    const address = form.address.trim();
    const phone = form.phone.trim();
    const dob = form.dob.trim();
    const phoneDigits = phone.replace(/\D/g, "");

    if (name.length < 2 || name.length > 80) {
      setError("Please enter a valid name.");
      return;
    }
    if (address.length < 5 || address.length > 240) {
      setError("Please enter a complete address.");
      return;
    }
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      setError("Please enter a valid contact number.");
      return;
    }
    if (!dob) {
      setError("Please select the date of birth.");
      return;
    }

    const message = [
      "Hello YSDA, I would like to register.",
      `Event: ${event.title}`,
      `Name: ${name}`,
      `Address: ${address}`,
      `Contact number: ${phone}`,
      `Date of birth: ${dob}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/919009071697?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-blue-950/70 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="registration-title"
      onClick={(clickEvent) => {
        if (clickEvent.target === clickEvent.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="max-h-[92svh] w-full max-w-xl overflow-y-auto rounded-[2rem] bg-white p-5 shadow-2xl sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-flame">Registration</p>
            <h2 id="registration-title" className="mt-2 font-display text-2xl font-black text-ink">
              Register for {event.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Enter your basic details. The form will open WhatsApp with your registration enquiry.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close registration form"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-50 text-ink transition hover:bg-blue-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form className="mt-6 grid gap-4" onSubmit={submitRegistration}>
          <label className="grid gap-2 text-sm font-black text-ink">
            Full name
            <input
              required
              value={form.name}
              onChange={(inputEvent) => setForm((current) => ({ ...current, name: inputEvent.target.value }))}
              maxLength={80}
              autoComplete="name"
              className="min-h-12 rounded-2xl border border-blue-100 bg-blue-50/40 px-4 outline-none transition focus:border-ysdaBlue focus:ring-2 focus:ring-blue-100"
            />
          </label>
          <label className="grid gap-2 text-sm font-black text-ink">
            Address
            <textarea
              required
              value={form.address}
              onChange={(inputEvent) => setForm((current) => ({ ...current, address: inputEvent.target.value }))}
              maxLength={240}
              rows={3}
              autoComplete="street-address"
              className="rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 outline-none transition focus:border-ysdaBlue focus:ring-2 focus:ring-blue-100"
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-ink">
              Contact number
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(inputEvent) => setForm((current) => ({ ...current, phone: inputEvent.target.value }))}
                maxLength={20}
                inputMode="tel"
                autoComplete="tel"
                className="min-h-12 rounded-2xl border border-blue-100 bg-blue-50/40 px-4 outline-none transition focus:border-ysdaBlue focus:ring-2 focus:ring-blue-100"
              />
            </label>
            <label className="grid gap-2 text-sm font-black text-ink">
              Date of birth
              <input
                required
                type="date"
                value={form.dob}
                onChange={(inputEvent) => setForm((current) => ({ ...current, dob: inputEvent.target.value }))}
                max={new Date().toISOString().split("T")[0]}
                className="min-h-12 rounded-2xl border border-blue-100 bg-blue-50/40 px-4 outline-none transition focus:border-ysdaBlue focus:ring-2 focus:ring-blue-100"
              />
            </label>
          </div>

          {error && <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">{error}</p>}

          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={onClose}
              className="min-h-12 rounded-full bg-slate-100 px-5 py-3 text-sm font-black text-slate-700 transition hover:bg-slate-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full cta-gradient px-5 py-3 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5"
            >
              Send on WhatsApp
              <FaWhatsapp className="h-4 w-4" />
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

function InfoRow({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-4 w-4 shrink-0 text-flame" />
      <span>{text}</span>
    </div>
  );
}

function GallerySection() {
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<GalleryItem | null>(null);
  const filtered = category === "All" ? gallery : gallery.filter((item) => item.category === category);
  const activePoster = usePublicAssetPath(active?.image ?? media.fallback);
  const activeVideo = usePublicAssetPath(active?.video ?? "");

  const moveLightbox = (direction: 1 | -1) => {
    if (!active) return;
    const list = filtered.length ? filtered : gallery;
    const current = list.findIndex((item) => item.title === active.title);
    const nextIndex = (current + direction + list.length) % list.length;
    setActive(list[nextIndex]);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeader
          kicker="Gallery"
          title="Filterable YSDA football activities with event context and captions."
          text="Football training sessions, match action, championships, trials, camps, awards, team photographs, school programmes, media coverage, and video highlights stay aligned across mobile and desktop."
          centered
        />
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
          {galleryCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-black transition ${
                category === item ? "cta-gradient text-white shadow-glow" : "bg-white text-slate-600 shadow-sm"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 rounded-3xl bg-white p-8 text-center font-bold text-slate-600">
            No gallery items found for this category.
          </p>
        ) : (
          <div className="masonry mt-8">
            {filtered.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(item)}
                className="masonry-item group overflow-hidden rounded-3xl bg-white text-left shadow-sm"
              >
                <div className="relative h-72 overflow-hidden">
                  <SmartImage
                    src={item.image}
                    alt={item.title}
                    className="object-cover transition duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {item.video && (
                    <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/90 text-ysdaBlue">
                      <Play className="h-5 w-5 fill-current" />
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-flame">{item.category}</p>
                  <p className="mt-1 font-display text-lg font-black">{item.title}</p>
                  <p className="mt-2 text-sm font-black text-ysdaBlue">{item.eventName}</p>
                  <p className="mt-1 text-xs font-bold text-slate-500">
                    {item.date} | {item.location}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.caption}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-blue-950/82 p-4 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close gallery preview"
                className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-lg"
              >
                <X className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => moveLightbox(-1)}
                aria-label="Previous gallery item"
                className="absolute left-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-lg"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => moveLightbox(1)}
                aria-label="Next gallery item"
                className="absolute right-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-lg"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="relative aspect-video bg-slate-100">
                {active.video ? (
                  <video src={activeVideo} poster={activePoster} controls autoPlay muted playsInline className="h-full w-full object-cover" />
                ) : (
                  <SmartImage src={active.image} alt={active.title} className="object-cover" priority />
                )}
              </div>
              <div className="p-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-flame">{active.category}</p>
                <h3 className="mt-1 font-display text-2xl font-black">{active.title}</h3>
                <p className="mt-2 text-sm font-black text-ysdaBlue">{active.eventName}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  {active.date} | {active.location}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{active.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CertificatesSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="section-wrap grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div>
          <SectionHeader
            kicker="Professional Certificates"
            title="A dedicated certificate gallery for verified academy records."
            text="YSDA can display registration documents, affiliation certificates, coaching licences, AIFF certificates, referee records, event authorisations, school partnerships, appreciation certificates, player achievements, and international participation documents."
          />
          <p className="mt-6 rounded-3xl border border-orange-100 bg-orange-50 p-5 text-sm font-bold leading-7 text-slate-700">
            Only clear, valid, and verified certificate images should be uploaded. Sensitive numbers, identity details,
            signatures, and personal addresses should be hidden where necessary.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <PrimaryButton href={links.whatsapp} variant="blue" icon={MessageCircle}>
              Submit Certificate
            </PrimaryButton>
            <PrimaryButton href="#contact" variant="warm" icon={Award}>
              Contact Admin
            </PrimaryButton>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] shadow-warm sm:row-span-2">
            <SmartImage src={media.certificatePhoto} alt="YSDA certificate records" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/72 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/88 p-5 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-flame">Verification first</p>
              <h3 className="mt-2 font-display text-2xl font-black">Clean records. Safe publishing.</h3>
            </div>
          </div>
          {certificateCategories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.03 }}
              className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gold text-ink">
                <Award className="h-5 w-5" />
              </span>
              <p className="text-sm font-black leading-6 text-slate-700">{category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoHighlightsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="bg-white py-20 sm:py-28">
      <div className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeader
            kicker="Video Highlights"
            title="Training energy, match moments, and coach guidance."
            text="Responsive video cards showcase football highlights, training sessions, player stories, and academy moments."
          />
          <PrimaryButton href={links.youtube} variant="warm" icon={ExternalLink}>
            Subscribe on YouTube
          </PrimaryButton>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {videoHighlights.map((video) => (
            <VideoHighlightCard
              key={video.title}
              video={video}
              isPlaying={activeVideo === video.title}
              onPlay={() => setActiveVideo(video.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoHighlightCard({
  video,
  isPlaying,
  onPlay
}: {
  video: VideoHighlightItem;
  isPlaying: boolean;
  onPlay: () => void;
}) {
  const coverImage = usePublicAssetPath(video.image);
  const videoSrc = usePublicAssetPath(video.video);
  const fallbackCover = usePublicAssetPath(media.heroPoster);
  const [currentCover, setCurrentCover] = useState(coverImage);

  useEffect(() => {
    setCurrentCover(coverImage);
  }, [coverImage]);

  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-[2rem] bg-slate-50 shadow-sm"
    >
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        {isPlaying ? (
          <video
            src={videoSrc}
            poster={coverImage}
            controls
            autoPlay
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        ) : (
          <button
            type="button"
            onClick={onPlay}
            className="group absolute inset-0 block w-full overflow-hidden text-left"
            aria-label={`Play ${video.title}`}
          >
            <img
              src={currentCover}
              alt={`${video.title} cover`}
              loading="lazy"
              onError={() => setCurrentCover(fallbackCover)}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/72 via-ink/10 to-transparent" />
            <span className="absolute left-5 top-5 rounded-full bg-white/92 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-ysdaBlue shadow-sm backdrop-blur">
              {video.tag}
            </span>
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-red-600 shadow-2xl shadow-blue-950/25 transition group-hover:scale-110">
                <Play className="ml-1 h-7 w-7 fill-current" />
              </span>
            </span>
            <span className="absolute inset-x-5 bottom-5 font-display text-xl font-black leading-tight text-white drop-shadow">
              {video.title}
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-flame">{video.tag}</p>
        <h3 className="mt-2 font-display text-xl font-black">{video.title}</h3>
        <a
          href={links.youtube}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-black text-white"
        >
          <FaYoutube className="text-lg" />
          YouTube Channel
        </a>
      </div>
    </motion.article>
  );
}

function NewsSection() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const pageSize = 3;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return news.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  useEffect(() => {
    setPage(1);
  }, [category, query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);
  const featured = news[0];

  const share = async (title: string) => {
    const payload = { title, text: title, url: window.location.href };
    if (navigator.share) {
      await navigator.share(payload);
    } else {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <section id="news" className="py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeader
          kicker="News and Updates"
          title="Searchable football academy announcements, results, trials, and schedules."
          text="Football news cards include images, category filters, dates, recent posts, featured updates, pagination, and sharing actions."
          centered
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_330px]">
          <div>
            <div className="rounded-[2rem] bg-white p-4 shadow-sm">
              <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                <label className="relative block">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search news, trials, training schedules..."
                    className="h-12 w-full rounded-full border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm font-semibold outline-none transition focus:border-ysdaBlue focus:bg-white"
                  />
                </label>
                <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
                  <Filter className="h-5 w-5 shrink-0 text-flame" />
                  {newsCategories.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCategory(item)}
                      className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-black ${
                        category === item ? "cta-gradient text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {paged.length === 0 ? (
              <p className="mt-6 rounded-3xl bg-white p-8 text-center font-bold text-slate-600">
                No news found. Try another search or category.
              </p>
            ) : (
              <div className="mt-6 grid gap-6">
                {paged.map((item) => (
                  <motion.article
                    key={item.title}
                    whileHover={{ y: -6 }}
                    className="grid overflow-hidden rounded-[2rem] bg-white shadow-sm md:grid-cols-[260px_1fr]"
                  >
                    <div className="relative min-h-64">
                      <SmartImage src={item.image} alt={item.title} className="object-cover" />
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.13em] text-slate-500">
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-ysdaBlue">{item.category}</span>
                        <span>{new Date(item.date).toLocaleDateString("en-IN", { dateStyle: "medium" })}</span>
                      </div>
                      <h3 className="mt-3 font-display text-2xl font-black">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <PrimaryButton href="#contact" variant="blue">
                          Read More
                        </PrimaryButton>
                        <button
                          type="button"
                          onClick={() => share(item.title)}
                          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-slate-100 px-5 py-3 text-sm font-black text-slate-700"
                        >
                          <Share2 className="h-4 w-4" />
                          Share
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}

            <div className="mt-6 flex items-center justify-center gap-2">
              {Array.from({ length: pageCount }, (_, index) => (
                <button
                  key={index + 1}
                  type="button"
                  onClick={() => setPage(index + 1)}
                  className={`grid h-10 w-10 place-items-center rounded-full text-sm font-black ${
                    page === index + 1 ? "cta-gradient text-white" : "bg-white text-slate-600"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
              <div className="relative h-48">
                <SmartImage src={featured.image} alt={featured.title} className="object-cover" />
              </div>
              <div className="p-5">
                <p className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-xs font-black uppercase tracking-[0.13em] text-ink">
                  <Newspaper className="h-4 w-4" />
                  Featured News
                </p>
                <h3 className="mt-3 font-display text-xl font-black">{featured.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{featured.summary}</p>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-5 shadow-sm">
              <h3 className="font-display text-xl font-black">Recent Posts</h3>
              <div className="mt-4 space-y-4">
                {news.slice(0, 4).map((item) => (
                  <a key={item.title} href="#news" className="block border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                    <p className="text-xs font-black uppercase tracking-[0.13em] text-flame">{item.category}</p>
                    <p className="mt-1 text-sm font-black leading-6 text-slate-700">{item.title}</p>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section id="achievements" className="bg-field-lines py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeader
          kicker="Achievements"
          title="Grassroots football growth through training, tournaments, partnerships, and player-development activity."
          text="Since 2021, YSDA has contributed to grassroots football through academy training, tournament participation, school partnerships, football-network activity, and opportunities for state, national, and international exposure."
          centered
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => (
            <div key={item.label} className="rounded-[2rem] bg-white p-6 text-center shadow-sm">
              <Trophy className="mx-auto h-9 w-9 text-gold" />
              <AnimatedCounter value={item.value} suffix={item.suffix} className="mt-4 block font-display text-4xl font-black text-ysdaBlue" />
              <p className="mt-2 text-sm font-black text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-warm">
            <SmartImage src={media.achievementHero} alt="YSDA trophies and achievements" className="object-cover" />
          </div>
          <div className="space-y-5">
            {achievementTimeline.map((item) => (
              <motion.article
                key={item.year}
                whileHover={{ x: 6 }}
                className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-black uppercase tracking-[0.16em] text-flame">{item.year}</p>
                <h3 className="mt-2 font-display text-2xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {achievementCards.map((item) => (
            <motion.article
              key={item.title}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-[2rem] bg-white shadow-sm"
            >
              <div className="relative h-56">
                <SmartImage src={item.image} alt={item.title} className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-flame">{item.category}</p>
                <h3 className="mt-2 font-display text-2xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessStoriesSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeader
          kicker="Academy Achievements Gallery"
          title="Short stories of exposure, participation, and development pathways."
          text="These cards are ready for verified photographs, event reports, player achievements, certificates, awards, testimonials, and media coverage as official records become available."
          centered
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {successStories.map((story) => (
            <motion.article key={story.name} whileHover={{ y: -8 }} className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
              <div className="relative h-64">
                <SmartImage src={story.image} alt={story.name} className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-flame">{story.sport}</p>
                <h3 className="mt-2 font-display text-2xl font-black">{story.name}</h3>
                <p className="mt-2 text-sm font-black text-ysdaBlue">{story.achievement}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{story.journey}</p>
                <blockquote className="mt-4 rounded-3xl bg-blue-50 p-4 text-sm font-bold leading-7 text-slate-700">
                  "{story.testimonial}"
                </blockquote>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeader
          kicker="Testimonials"
          title="Trusted by players, parents, schools, and coaches."
          text="A smooth automatic slider with manual controls keeps social proof easy to scan."
          centered
        />
        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3800, disableOnInteraction: false }}
            breakpoints={{ 820: { slidesPerView: 2 }, 1120: { slidesPerView: 3 } }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name} className="pb-12">
                <article className="h-full rounded-[2rem] bg-slate-50 p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <SmartImage src={item.image} alt={item.name} className="object-cover" sizes="80px" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-black">{item.name}</h3>
                      <p className="text-sm font-bold text-slate-500">{item.role}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex gap-1 text-gold">
                    {Array.from({ length: item.rating }, (_, index) => (
                      <Star key={index} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="py-14">
      <div className="section-wrap">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm">
          <p className="mb-6 text-center text-sm font-black uppercase tracking-[0.16em] text-slate-500">
            Partners, schools, sponsors and supporting institutions
          </p>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={16}
            loop
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={3800}
            breakpoints={{ 720: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }}
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner}>
                <div className="grid h-24 place-items-center rounded-3xl border border-slate-100 bg-slate-50 px-4 text-center font-display text-sm font-black text-slate-600">
                  {partner}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 field-gradient opacity-95" />
      <div className="section-wrap relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/16 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] backdrop-blur">
            <Send className="h-4 w-4 text-gold" />
            Contact Us
          </div>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight sm:text-5xl">Start training with YSDA.</h2>
          <p className="mt-5 text-base font-semibold leading-8 text-white/90">
            Youth Sports Development Academy is based in Mhow, Indore, Madhya Pradesh and fully focused on professional football development. WhatsApp, call, email, or view location directly from here.
          </p>

          <div className="mt-8 grid gap-4">
            <ContactInfo icon={MapPinned} title="Academy Name" text={academyInfo.name} />
            <ContactInfo icon={MapPin} title="Location" text={`${academyInfo.location}, India`} />
            <ContactInfo icon={UsersRound} title="Academy" text={academyInfo.organisation} />
            <ContactInfo icon={Phone} title="WhatsApp Number" text="+91 9009071697" />
            <ContactInfo icon={Mail} title="Email" text="Info@ysdasports.com" />
            <ContactInfo icon={Clock} title="Timings" text="Morning and evening batches. Contact for current schedule." />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href={links.phone} variant="white" icon={Phone}>
              Call Now
            </PrimaryButton>
            <PrimaryButton href={links.whatsapp} variant="warm" icon={MessageCircle}>
              WhatsApp Now
            </PrimaryButton>
            <PrimaryButton href={links.email} variant="white" icon={Mail}>
              Send Email
            </PrimaryButton>
            <PrimaryButton href={links.maps} variant="white" icon={MapPin}>
              View Location
            </PrimaryButton>
          </div>
        </div>

        <div className="glass overflow-hidden rounded-[2rem] p-4">
          <iframe
            title="YSDA Mhow Indore location map"
            className="map-frame h-[420px] w-full rounded-[1.5rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Youth%20Sports%20Development%20Academy%20Mhow%20Indore%20Madhya%20Pradesh&output=embed"
          />
          <div className="grid gap-3 p-4 sm:grid-cols-3">
            <SocialContact href={links.whatsapp} label="WhatsApp" icon={<FaWhatsapp />} />
            <SocialContact href={links.instagram} label="Instagram" icon={<FaInstagram />} />
            <SocialContact href={links.youtube} label="YouTube" icon={<FaYoutube />} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <div className="flex items-center gap-4 rounded-3xl border border-white/30 bg-white/16 p-4 backdrop-blur">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-ysdaBlue">
        <Icon className="h-6 w-6" />
      </span>
      <div>
        <p className="text-xs font-black uppercase tracking-[0.16em] text-white/70">{title}</p>
        <p className="mt-1 font-black text-white">{text}</p>
      </div>
    </div>
  );
}

function SocialContact({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-black text-ysdaBlue shadow-sm transition hover:text-flame"
    >
      <span className="text-lg">{icon}</span>
      {label}
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-white pt-14">
      <div className="section-wrap grid gap-8 pb-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo size="footer" />
            <div>
              <p className="font-display text-xl font-black">YSDA</p>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                {academyInfo.name}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
            {academyInfo.name} is a professionally managed football academy established in {academyInfo.established},
            based in {academyInfo.location}, and focused on professional football development.
          </p>
          <div className="mt-5 flex gap-2">
            <SocialIcon href={links.instagram} label="Instagram" icon={<FaInstagram />} />
            <SocialIcon href={links.youtube} label="YouTube" icon={<FaYoutube />} />
            <SocialIcon href={links.whatsapp} label="WhatsApp" icon={<FaWhatsapp />} />
          </div>
        </div>
        <FooterList title="Quick Links" items={navItems.slice(0, 6).map(([label, href]) => ({ label, href }))} />
        <FooterList
          title="Football Training"
          items={sports.slice(0, 7).map((sport) => ({ label: sport.name, href: "#football" }))}
        />
        <div>
          <h3 className="font-display text-lg font-black">Contact Details</h3>
          <div className="mt-4 space-y-3 text-sm font-semibold text-slate-600">
            <p>{academyInfo.location}, India</p>
            <p>President: {academyInfo.president}</p>
            <p>Secretary: {academyInfo.secretary}</p>
            <p>WhatsApp: +91 9009071697</p>
            <p>Email: Info@ysdasports.com</p>
          </div>
          <a
            href="#home"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-ysdaBlue"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </a>
        </div>
      </div>
      <div className="border-t border-slate-100 py-5 text-center text-sm font-bold text-slate-500">
        &copy; Youth Sports Development Academy, Indore. All Rights Reserved.
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-lg font-black">{title}</h3>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <a key={`${title}-${item.label}`} href={item.href} className="text-sm font-semibold text-slate-600 hover:text-ysdaBlue">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <div className="hidden rounded-full bg-white px-3 py-2 text-xs font-black text-slate-600 shadow-lg sm:block">
        Chat with YSDA
      </div>
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with YSDA on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-2xl shadow-green-700/30 sm:h-16 sm:w-16 sm:text-3xl"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulseRing" />
        <FaWhatsapp className="relative z-10" />
        <span className="pointer-events-none absolute bottom-full right-0 mb-3 hidden whitespace-nowrap rounded-full bg-ink px-3 py-2 text-xs font-black text-white opacity-0 transition group-hover:block group-hover:opacity-100">
          Chat with YSDA
        </span>
      </a>
      <div className="hidden gap-2 rounded-full bg-white p-2 shadow-lg sm:flex">
        <SocialIcon href={links.instagram} label="Instagram" icon={<FaInstagram />} />
        <SocialIcon href={links.youtube} label="YouTube" icon={<FaYoutube />} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <LoadingScreen />
      <CustomCursor />
      <Header />
      <Hero />
      <AboutSection />
      <ValuesObjectivesSection />
      <SportsSection />
      <FootballAcademySection />
      <WhyChooseSection />
      <CoachingProgramsSection />
      <CoachesSection />
      <LeadershipMessagesSection />
      <EventsSection />
      <GallerySection />
      <CertificatesSection />
      <VideoHighlightsSection />
      <NewsSection />
      <AchievementsSection />
      <SuccessStoriesSection />
      <TestimonialsSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
      <FloatingActions />
    </main>
  );
}




