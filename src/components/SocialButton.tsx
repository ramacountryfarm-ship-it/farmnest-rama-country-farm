interface SocialButtonProps {
  href: string;
  label: string;
  sublabel: string;
  gradient: string;
  shadowColor: string;
  animationClass: string;
  icon: React.ReactNode;
}

export default function SocialButton({
  href,
  label,
  sublabel,
  gradient,
  shadowColor,
  animationClass,
  icon,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`social-card animate-slide-up ${animationClass} block w-full rounded-2xl p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400`}
      style={{
        background: gradient,
        boxShadow: `0 8px 32px ${shadowColor}`,
      }}
    >
      {/* Inner card face */}
      <div
        className="flex items-center gap-5 rounded-2xl px-6 py-5 sm:py-6"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)",
          backdropFilter: "blur(2px)",
        }}
      >
        {/* Icon circle */}
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl sm:h-16 sm:w-16"
          style={{
            background: "rgba(255,255,255,0.18)",
          }}
        >
          {icon}
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <span className="font-poppins text-lg font-semibold leading-tight text-white sm:text-xl">
            {label}
          </span>
          <span className="mt-0.5 font-outfit text-sm font-normal text-white/70">
            {sublabel}
          </span>
        </div>

        {/* Arrow */}
        <div className="ml-auto">
          <svg
            className="h-5 w-5 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}
