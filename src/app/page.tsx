import Image from "next/image";
import { BRAND, SOCIAL_LINKS } from "@/lib/constants";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function FssaiBadge() {
  return (
    <svg viewBox="0 0 56 56" width="52" height="52" aria-label="FSSAI Certified">
      <circle cx="28" cy="28" r="27" fill="none" stroke="#1a6faf" strokeWidth="2" />
      <path d="M 28 1 A 27 27 0 0 1 55 28" fill="none" stroke="#FF9933" strokeWidth="3.5" />
      <path d="M 1 28 A 27 27 0 0 1 28 1" fill="none" stroke="#138808" strokeWidth="3.5" />
      <circle cx="28" cy="28" r="23" fill="white" />
      <path d="M18 36 C16 30 17 24 19 20" stroke="#f0b322" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <ellipse cx="17" cy="20" rx="2" ry="3.5" fill="#f0b322" transform="rotate(-15 17 20)" />
      <ellipse cx="19.5" cy="22" rx="2" ry="3.5" fill="#f0b322" transform="rotate(-5 19.5 22)" />
      <path d="M38 36 C40 30 39 24 37 20" stroke="#f0b322" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <ellipse cx="39" cy="20" rx="2" ry="3.5" fill="#f0b322" transform="rotate(15 39 20)" />
      <ellipse cx="36.5" cy="22" rx="2" ry="3.5" fill="#f0b322" transform="rotate(5 36.5 22)" />
      <text x="28" y="32" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="8.5" fill="#1a6faf" letterSpacing="0.5">FSSAI</text>
      <text x="28" y="40" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="3.2" fill="#555" letterSpacing="0.1">FOOD SAFETY</text>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#112419] p-3 sm:p-5 lg:p-6 animate-fade-in font-poppins">
      {/*
        Grid columns:
          mobile  → 2 cols
          sm/tab  → 4 cols
        Max width grows with screen so it never looks like a thin column on tablets.
      */}
      <div className="mx-auto max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">

        {/* ══════════════════════════════════════
            CARD 1 · Header
            always full-width
        ══════════════════════════════════════ */}
        <div className="col-span-2 sm:col-span-4 bg-[#1a3d2e] rounded-3xl px-4 sm:px-6 py-3.5 sm:py-4 flex items-center gap-3 sm:gap-5 border border-white/5">
          <Image
            src="/RCF_new_logo_Yellow on Tranparent.png"
            alt="Rama Country Farm"
            width={56}
            height={56}
            className="shrink-0 object-contain sm:w-16 sm:h-16"
            priority
          />
          <div className="flex-1 min-w-0">
            <p className="text-white/40 text-xs sm:text-sm font-outfit tracking-wide">@rama_country_farm</p>
            <a
              href="mailto:ramacountryfarm@gmail.com"
              className="text-[#f0b322]/60 text-[11px] sm:text-xs font-outfit truncate block mt-0.5 hover:text-[#f0b322] transition-colors"
            >
              ramacountryfarm@gmail.com
            </a>
          </div>
          <div className="shrink-0 flex items-center gap-1.5 bg-[#f0b322]/10 border border-[#f0b322]/25 rounded-full px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f0b322] animate-pulse" />
            <span className="text-[#f0b322] text-xs font-medium">Live</span>
          </div>
        </div>

        {/* ══════════════════════════════════════
            CARD 2 · Hero Tagline
            mobile: full-width
            tablet: left half (2 of 4 cols), stretches to match card 3+4 height
        ══════════════════════════════════════ */}
        <div className="col-span-2 sm:col-span-2 bg-[#fef9ee] rounded-3xl px-6 py-7 sm:px-8 sm:py-8 flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-[#1a3d2e] leading-[1.15] tracking-tight text-[2.5rem] sm:text-[3rem] lg:text-[3.4rem]">
              Eat{" "}
              <span className="inline-block px-3 py-[3px] rounded-xl align-middle" style={{ background: "#f0b322", color: "#1a3d2e" }}>
                real,
              </span>
            </h1>
            <h1 className="font-bold text-[#1a3d2e] leading-[1.15] tracking-tight text-[2.5rem] sm:text-[3rem] lg:text-[3.4rem] mt-1">
              live{" "}
              <span className="inline-block px-3 py-[3px] rounded-xl align-middle" style={{ background: "#1a3d2e", color: "#f0b322" }}>
                real
              </span>
            </h1>
            <div className="mt-5 h-px bg-[#1a3d2e]/10" />
            <p className="mt-4 text-[#1a3d2e]/50 text-sm sm:text-base font-outfit leading-relaxed">
              Farm fresh desi country eggs — straight from our farm to your family.
            </p>
          </div>
          {/* Bottom tag row */}
          <div className="mt-5 flex flex-wrap gap-2">
            {["🥚 Desi Eggs", "🌿 Natural", "🐓 Country Farm"].map((b) => (
              <span key={b} className="text-xs font-medium text-[#1a3d2e]/55 bg-[#1a3d2e]/8 border border-[#1a3d2e]/10 px-3 py-1 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            CARDS 3+4 · Instagram & YouTube
            mobile: side-by-side (1 col each)
            tablet: stacked on the right half (both in a 2-col wrapper)
        ══════════════════════════════════════ */}
        <div className="col-span-2 sm:col-span-2 grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">

          {/* Instagram */}
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
            className="social-card rounded-3xl p-5 sm:p-6 flex flex-col justify-between min-h-[148px] sm:min-h-0 sm:flex-1"
            style={{ background: "linear-gradient(145deg, #405de6, #833ab4, #c13584, #e1306c, #fd1d1d, #f77737)" }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
              <InstagramIcon />
            </div>
            <div>
              <p className="text-white font-semibold text-base sm:text-lg leading-tight">Instagram</p>
              <p className="text-white/60 text-xs sm:text-sm mt-0.5 font-outfit">Follow our farm life</p>
            </div>
          </a>

          {/* YouTube */}
          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch on YouTube"
            className="social-card rounded-3xl p-5 sm:p-6 flex flex-col justify-between min-h-[148px] sm:min-h-0 sm:flex-1"
            style={{ background: "linear-gradient(145deg, #cc0000 0%, #ff0000 100%)" }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
              <YouTubeIcon />
            </div>
            <div>
              <p className="text-white font-semibold text-base sm:text-lg leading-tight">YouTube</p>
              <p className="text-white/60 text-xs sm:text-sm mt-0.5 font-outfit">Watch farm videos</p>
            </div>
          </a>

        </div>

        {/* ══════════════════════════════════════
            CARD 5 · WhatsApp Order
            always full-width
        ══════════════════════════════════════ */}
        <a
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on WhatsApp"
          className="social-card col-span-2 sm:col-span-4 rounded-3xl px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4"
          style={{ background: "linear-gradient(135deg, #075E54 0%, #128C7E 50%, #25D366 100%)" }}
        >
          <div>
            <p className="text-white font-bold text-xl sm:text-2xl lg:text-3xl leading-tight">
              Order on WhatsApp
            </p>
            <p className="text-white/65 text-sm sm:text-base mt-0.5 font-outfit">
              Message us for fresh eggs
            </p>
          </div>
          <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-white/15 rounded-2xl flex items-center justify-center text-white">
            <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
        </a>

        {/* ══════════════════════════════════════
            CARD 6 · Feature Tiles
            always full-width wrapper, inner 3-col always
        ══════════════════════════════════════ */}
        <div className="col-span-2 sm:col-span-4 grid grid-cols-3 gap-3 sm:gap-4">
          {[
            { icon: "🥚", label: "Farm Raised" },
            { icon: "🌿", label: "100% Natural" },
            { icon: "🚚", label: "Home Delivery" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="bg-[#1a3d2e] rounded-2xl px-2 py-4 sm:py-6 flex flex-col items-center gap-2 border border-white/5"
            >
              <span className="text-2xl sm:text-3xl">{icon}</span>
              <span className="text-white/50 text-xs sm:text-sm text-center font-outfit leading-tight">{label}</span>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════
            CARD 7 · No Growth Hormones
            mobile: full-width
            tablet: left half
        ══════════════════════════════════════ */}
        <div className="col-span-2 sm:col-span-2 bg-[#fef9ee] rounded-2xl px-5 py-4 sm:px-6 sm:py-5 flex items-center gap-4">
          <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#204d3a] flex items-center justify-center text-xl sm:text-2xl">
            🌿
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[#1a3d2e] font-semibold text-sm sm:text-base leading-tight">
              No Growth Hormones
            </p>
            <p className="text-[#1a3d2e]/50 text-xs sm:text-sm font-outfit mt-0.5">
              Full natural feed • Raised the right way
            </p>
          </div>
          <span className="shrink-0 text-xs font-semibold text-[#1a3d2e] bg-[#f0b322] px-2.5 py-1 rounded-full whitespace-nowrap">
            100% Pure
          </span>
        </div>

        {/* ══════════════════════════════════════
            CARD 8 · FSSAI Certification
            mobile: full-width
            tablet: right half
        ══════════════════════════════════════ */}
        <div className="col-span-2 sm:col-span-2 bg-[#1a3d2e] rounded-2xl px-5 py-4 sm:px-6 sm:py-5 flex items-center gap-4 border border-white/5">
          <div className="shrink-0">
            <FssaiBadge />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white/80 font-semibold text-sm sm:text-base leading-tight">
              FSSAI Certified
            </p>
            <p className="text-white/35 text-xs font-outfit mt-0.5 tracking-wide">
              Lic. No: <span className="text-[#f0b322]/60">XXXX XXXX XXXX XX</span>
            </p>
            <p className="text-white/25 text-[10px] sm:text-xs font-outfit mt-0.5">
              Food Safety &amp; Standards Authority of India
            </p>
          </div>
          <span className="shrink-0 text-[10px] sm:text-xs font-semibold text-[#138808] bg-[#138808]/10 border border-[#138808]/25 px-2 py-1 rounded-full">
            Verified
          </span>
        </div>

        {/* ══════════════════════════════════════
            CARD 9 · Complaints Phone
            always full-width
        ══════════════════════════════════════ */}
        <a
          href="tel:+917569322984"
          className="social-card col-span-2 sm:col-span-4 bg-[#1a3d2e] rounded-2xl px-5 py-4 sm:px-6 sm:py-5 flex items-center gap-4 border border-white/5"
          aria-label="Call us for complaints"
        >
          <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#f0b322]/15 border border-[#f0b322]/20 flex items-center justify-center text-[#f0b322]">
            <PhoneIcon />
          </div>
          <div>
            <p className="text-white/45 text-xs sm:text-sm font-outfit">Complaints? Call us</p>
            <p className="text-white font-semibold text-base sm:text-lg tracking-wide mt-0.5">
              +91 75693 22984
            </p>
          </div>
          <div className="ml-auto text-white/25">
            <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>

        {/* ══════════════════════════════════════
            CARD 10 · Footer
        ══════════════════════════════════════ */}
        <div className="col-span-2 sm:col-span-4 flex items-center justify-center gap-3 py-2 sm:py-3">
          <Image
            src="/RCF_new_logo_Yellow on Tranparent.png"
            alt=""
            width={28}
            height={28}
            className="object-contain opacity-50"
            aria-hidden="true"
          />
          <span className="text-[#f0b322]/50 text-xs sm:text-sm font-outfit">{BRAND.footer}</span>
        </div>

      </div>
    </main>
  );
}
