import Image from "next/image";

export default function FarmLogo() {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-[#fef9ee] flex items-center justify-center shrink-0">
      <Image
        src="/RCF_new_logo_Yellow on Tranparent.png"
        alt="Rama Country Farm"
        width={72}
        height={72}
        className="object-contain w-full h-full p-1"
        priority
      />
    </div>
  );
}
