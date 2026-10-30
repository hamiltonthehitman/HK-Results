import Image from "next/image";

// Add each client logo to public/logos/ and list it here, for example:
// { src: "/logos/client-name.png", alt: "Client name", width: 160, height: 64 }
// While this list is empty, marked placeholders show instead.
// `dark: true` puts a logo on a dark tile, for logos with white lettering.
type Logo = { src: string; alt: string; width: number; height: number; dark?: boolean };

const logos: Logo[] = [
  { src: "/logos/dental-care-cape-town.png", alt: "Dental Care Cape Town", width: 2167, height: 726, dark: true },
  { src: "/logos/zimba-electrical.png", alt: "Zimba Electrical", width: 1536, height: 1024 },
  { src: "/logos/frank-gardening-service.png", alt: "Frank Gardening Service", width: 1254, height: 1254 },
  { src: "/logos/jimmy-builder-carpenter.png", alt: "Jimmy Builder & Carpenter", width: 1254, height: 1254 },
  { src: "/logos/kerbore-properties.png", alt: "Kerbore Properties", width: 1536, height: 1024 },
  { src: "/logos/thando.png", alt: "Thando", width: 2347, height: 2322 },
  { src: "/logos/house-of-visconti.png", alt: "House of Visconti", width: 1154, height: 1363 },
];

// Repeat a short list so one track is always wider than the screen.
const repeats = logos.length > 0 ? Math.ceil(10 / logos.length) : 1;
const row = Array.from({ length: repeats }, (_, r) => logos.map((logo) => ({ ...logo, key: `${r}-${logo.src}` }))).flat();

const PLACEHOLDER_COUNT = 6;

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-14 pr-14 md:gap-20 md:pr-20" aria-hidden={hidden || undefined}>
      {logos.length > 0
        ? row.map((logo) => (
            <li
              key={logo.key}
              className={`flex h-16 shrink-0 items-center ${logo.dark ? "rounded-lg bg-neutral-900 px-3" : ""}`}
            >
              <Image
                src={logo.src}
                alt={hidden || logo.key.startsWith("0-") === false ? "" : logo.alt}
                width={logo.width}
                height={logo.height}
                className={`w-auto max-w-[200px] object-contain ${logo.dark ? "h-10" : "h-16"}`}
              />
            </li>
          ))
        : Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => (
            <li
              key={i}
              className="flex h-16 w-40 items-center justify-center border-2 border-dashed border-neutral-300 text-xs font-bold tracking-wider text-neutral-500"
            >
              [CLIENT LOGO]
            </li>
          ))}
    </ul>
  );
}

export default function ClientLogos() {
  return (
    <section aria-label="Businesses we work with" className="pb-16 md:pb-20">
      <p className="px-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600 sm:px-6">
        Some of the businesses we work with
      </p>
      <div className="logo-marquee-mask mt-8 overflow-hidden">
        <div className="logo-marquee flex w-max">
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  );
}
