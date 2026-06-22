"use client";

import { useEffect, useState } from "react";

export default function LocationBadge() {
  const [location, setLocation] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((d) => {
        if (d.city && d.country_name) {
          setLocation(`${d.city}, ${d.country_name}`);
        }
      })
      .catch(() => {});
  }, []);

  if (!location) return null;

  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-black">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      {location}
    </span>
  );
}
