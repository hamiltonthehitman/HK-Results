// Fires the Meta Pixel Lead event. The pixel itself is loaded in layout.tsx.
export function trackLead() {
  try {
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
    if (typeof fbq === "function") fbq("track", "Lead");
  } catch {
    // Tracking must never break the form or the link.
  }
}
