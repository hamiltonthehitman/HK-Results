"use client";

const cards = [
  {
    src: "/icons/gbp.svg",
    label: "Full Google Business Profile Optimization",
    description:
      "We fully rebuild your Google Business Profile to meet Google's exact standards giving you the strongest possible foundation for local search visibility.",
    defaultFilter:
      "brightness(0) invert(29%) sepia(76%) saturate(1697%) hue-rotate(205deg) brightness(103%) contrast(97%)",
    hoverFilter: "brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(100deg)",
    size: "w-44 h-44",
    blendMode: "normal" as const,
  },
  {
    src: "/icons/website-enhancement.png",
    label: "Website Performance Enhancements",
    description:
      "We handle every backend fix and optimisation so your site consistently turns browsers into paying customers.",
    defaultFilter:
      "invert(21%) sepia(90%) saturate(2000%) hue-rotate(212deg) brightness(103%) contrast(97%)",
    hoverFilter: "invert(48%) sepia(79%) saturate(600%) hue-rotate(100deg) brightness(110%)",
    size: "w-52 h-52",
    blendMode: "multiply" as const,
  },
  {
    src: "/icons/local.svg",
    label: "Become the Trusted Local Authority",
    description:
      "We establish your business as the dominant authority in your area by building the citations, content, and signals that Google actually uses to determine who deserves to rank at the top.",
    defaultFilter:
      "brightness(0) invert(29%) sepia(76%) saturate(1697%) hue-rotate(205deg) brightness(103%) contrast(97%)",
    hoverFilter: "brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(100deg)",
    size: "w-44 h-44",
    blendMode: "normal" as const,
  },
];

export default function IconCards() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div
          key={card.label}
          className="group bg-neutral-100 flex flex-col items-center pt-8 pb-8 px-8 gap-4 border-2 border-transparent hover:border-blue-600 transition-colors duration-300"
        >
          <img
            src={card.src}
            alt={card.label}
            className={`${card.size} object-contain transition-all duration-300`}
            style={{ filter: card.defaultFilter, mixBlendMode: card.blendMode }}
          />
          <h3 className="text-2xl font-black tracking-tight text-center text-black">
            {card.label}
          </h3>
          <p className="text-sm text-black text-center leading-relaxed">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
