"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import styles from "./RankingGrid.module.css";

type View = "before" | "after";

// 21 = "20+" (not found in the top 20)
const DATA: Record<View, number[]> = {
  before: [
    21, 21, 19, 18, 21, 21, 21,
    21, 15, 12,  9, 13, 17, 21,
    18, 11,  6,  4,  7, 14, 21,
    16,  8,  3,  1,  2,  9, 19,
    21, 12,  5,  3,  6, 13, 21,
    21, 17, 11,  8, 12, 18, 21,
    21, 21, 21, 16, 21, 21, 21
  ],
  after: [
    4, 3, 2, 2, 3, 5, 7,
    3, 2, 1, 1, 2, 3, 4,
    2, 1, 1, 1, 1, 2, 3,
    2, 1, 1, 1, 1, 1, 2,
    2, 1, 1, 1, 1, 2, 3,
    3, 2, 1, 1, 2, 3, 6,
    5, 3, 2, 2, 3, 4, 9
  ]
};

const TOP3: Record<View, number> = {
  before: DATA.before.filter((v) => v <= 3).length,
  after: DATA.after.filter((v) => v <= 3).length,
};

const CENTRE = 3;
const dist = (i: number) => Math.hypot(Math.floor(i / 7) - CENTRE, (i % 7) - CENTRE);

const MapBg = memo(function MapBg() {
  return (
    <svg className={styles["hkr-map-bg"]} viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" fontFamily="inherit">
    <defs>
      <pattern id="hkr-st-a" width="20" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(12)"><path d="M0 0H20M0 0V26" stroke="#fff" strokeWidth="2.2" fill="none"/></pattern>
      <pattern id="hkr-st-b" width="26" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(-6)"><path d="M0 0H26M0 0V18" stroke="#fff" strokeWidth="2.2" fill="none"/></pattern>
      <pattern id="hkr-st-c" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(-3)"><path d="M0 0H22M0 0V22" stroke="#fff" strokeWidth="2.2" fill="none"/></pattern>
      <pattern id="hkr-st-d" width="18" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(24)"><path d="M0 0H18M0 0V24" stroke="#fff" strokeWidth="2.2" fill="none"/></pattern>
      <pattern id="hkr-st-e" width="24" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(8)"><path d="M0 0H24M0 0V20" stroke="#fff" strokeWidth="2.2" fill="none"/></pattern>
    </defs>

    {/* land */}
    <rect width="400" height="400" fill="#F4F4F2"/>

    {/* suburbs: block tint + street grid */}
    <g fill="#EBEDF0">
      <path d="M0 0H150L140 105L0 112Z"/>
      <path d="M215 0H302C300 40 320 70 400 72V128L215 118Z"/>
      <path d="M0 140L215 132L222 258L0 270Z"/>
      <path d="M240 140L400 150V300C360 330 300 330 250 300Z"/>
      <path d="M30 282L240 268L252 335C200 352 140 322 90 300Z"/>
    </g>
    <path d="M0 0H150L140 105L0 112Z" fill="url(#hkr-st-a)"/>
    <path d="M215 0H302C300 40 320 70 400 72V128L215 118Z" fill="url(#hkr-st-b)"/>
    <path d="M0 140L215 132L222 258L0 270Z" fill="url(#hkr-st-c)"/>
    <path d="M240 140L400 150V300C360 330 300 330 250 300Z" fill="url(#hkr-st-d)"/>
    <path d="M30 282L240 268L252 335C200 352 140 322 90 300Z" fill="url(#hkr-st-e)"/>
    {/* a few curved estate streets */}
    <g fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round">
      <path d="M150 150a26 18 0 1 0 44 30"/>
      <path d="M262 160c20 14 42 10 60 26"/>
      <path d="M175 52c18-10 34-4 40 12"/>
    </g>

    {/* parks */}
    <g fill="#D7EBD2">
      <path d="M302 -5C305 35 330 62 405 64V-5Z"/>
      <path d="M310 225C330 205 380 210 388 240S360 290 330 280 295 245 310 225Z"/>
      <rect x="172" y="34" width="34" height="22" rx="8"/>
      <rect x="86" y="196" width="30" height="20" rx="7"/>
    </g>

    {/* water */}
    <path d="M-10 285C90 280 150 330 210 368S300 388 410 352V410H-10Z" fill="#C8DDEF"/>
    <path d="M-10 285C90 280 150 330 210 368S300 388 410 352" fill="none" stroke="#B5CFE6" strokeWidth="1"/>
    <ellipse cx="40" cy="228" rx="22" ry="13" fill="#C8DDEF"/>
    <path d="M335 -10C305 70 255 140 215 230S175 320 168 345" fill="none" stroke="#C8DDEF" strokeWidth="3" strokeLinecap="round"/>

    {/* arterial roads: casing then fill */}
    <g fill="none" strokeLinecap="round">
      <g stroke="#DCE0E6" strokeWidth="6.5">
        <path d="M-10 120C120 135 250 110 410 140"/>
        <path d="M-10 172C80 168 170 175 245 160"/>
        <path d="M232 -10C240 80 282 150 300 230S322 330 330 372"/>
        <path d="M150 -10C160 100 130 190 110 292"/>
        <path d="M-10 276C90 271 150 320 210 357S300 377 410 341"/>
        <path d="M215 232C225 270 240 300 258 372"/>
      </g>
      <g stroke="#fff" strokeWidth="4.5">
        <path id="hkr-r-main" d="M-10 120C120 135 250 110 410 140"/>
        <path id="hkr-r-vic" d="M-10 172C80 168 170 175 245 160"/>
        <path id="hkr-r-slp" d="M232 -10C240 80 282 150 300 230S322 330 330 372"/>
        <path id="hkr-r-r44" d="M150 -10C160 100 130 190 110 292"/>
        <path id="hkr-r-beach" d="M-10 276C90 271 150 320 210 357S300 377 410 341"/>
        <path id="hkr-r-bway" d="M215 232C225 270 240 300 258 372"/>
      </g>
      {/* N2 highway */}
      <path d="M-10 222C120 205 260 245 410 210" stroke="#D0D6DF" strokeWidth="10"/>
      <path d="M-10 222C120 205 260 245 410 210" stroke="#FFF3D4" strokeWidth="7"/>
    </g>

    {/* street names */}
    <g fontSize="5.6" fontWeight="500" fill="#737A86" stroke="#fff" strokeWidth="2" paintOrder="stroke">
      <text><textPath href="#hkr-r-main" startOffset="20%">Main Rd</textPath></text>
      <text><textPath href="#hkr-r-main" startOffset="68%">Main Rd</textPath></text>
      <text><textPath href="#hkr-r-vic" startOffset="56%">Victoria St</textPath></text>
      <text><textPath href="#hkr-r-slp" startOffset="14%">{"Sir Lowry's Pass Rd"}</textPath></text>
      <text><textPath href="#hkr-r-beach" startOffset="58%">Beach Rd</textPath></text>
      <text><textPath href="#hkr-r-bway" startOffset="35%">Broadway Blvd</textPath></text>
    </g>

    {/* area names */}
    <g fontSize="6.4" fontWeight="600" letterSpacing="1.2" fill="#8C929E" textAnchor="middle" stroke="#F4F4F2" strokeWidth="2" paintOrder="stroke">
      <text x="66" y="14">FIRGROVE</text>
      <text x="120" y="68">SPANISH FARM</text>
      <text x="280" y="68">HELDERBERG</text>
      <text x="62" y="178">HERITAGE PARK</text>
      <text x="253" y="337">BRIDGEWATER</text>
      <text x="360" y="337">{"GORDON'S BAY"}</text>
      <text x="48" y="284" fontSize="7.6" fill="#7E8592">STRAND</text>
      <text x="292" y="177" fontSize="8.4" fill="#767D8A">SOMERSET WEST</text>
    </g>

    {/* park + water names */}
    <g fontSize="5.8" fontWeight="600" fill="#4E8A5A" textAnchor="middle">
      <text x="356" y="11">Helderberg</text>
      <text x="356" y="19">Nature Reserve</text>
      <text x="348" y="285">Erinvale Golf</text>
    </g>
    <g fontStyle="italic" fill="#6A95BC" textAnchor="middle">
      <text x="62" y="340" fontSize="10" letterSpacing="1">False Bay</text>
      <text x="40" y="231" fontSize="5.4">Paardevlei</text>
    </g>

    {/* route shields */}
    <g fontSize="5.6" fontWeight="700" fill="#fff" textAnchor="middle">
      <g transform="translate(70 212)"><rect x="-8" y="-5" width="16" height="10" rx="2" fill="#4C8A62" stroke="#fff"/><text y="2">N2</text></g>
      <g transform="translate(322 226)"><rect x="-8" y="-5" width="16" height="10" rx="2" fill="#4C8A62" stroke="#fff"/><text y="2">N2</text></g>
      <g transform="translate(153 58)"><rect x="-9" y="-5" width="18" height="10" rx="2" fill="#4C8A62" stroke="#fff"/><text y="2">R44</text></g>
      <g transform="translate(118 252)"><rect x="-9" y="-5" width="18" height="10" rx="2" fill="#4C8A62" stroke="#fff"/><text y="2">R44</text></g>
      <g transform="translate(40 126)"><rect x="-11" y="-5" width="22" height="10" rx="2" fill="#4C8A62" stroke="#fff"/><text y="2">R102</text></g>
      <g transform="translate(372 136)"><rect x="-11" y="-5" width="22" height="10" rx="2" fill="#4C8A62" stroke="#fff"/><text y="2">R102</text></g>
    </g>

    {/* points of interest */}
    <g fontSize="5.4" fontWeight="600">
      <g transform="translate(170 283)">
        <circle r="5" fill="#6F86B6" stroke="#fff"/>
        <path d="M-2.4 -0.8h4.8v3.2h-4.8z M-1.2 -0.8v-1a1.2 1.2 0 0 1 2.4 0v1" fill="none" stroke="#fff" strokeWidth=".9"/>
        <text x="8" y="2" fill="#5D6C8F">Somerset Mall</text>
      </g>
      <g transform="translate(104 154)">
        <circle r="5" fill="#8A93A3" stroke="#fff"/>
        <path d="M-.9 -2.6h1.8v1.7h1.7v1.8H.9V2.6H-.9V.9h-1.7V-.9h1.7z" fill="#fff"/>
        <text x="8" y="2" fill="#6F7684">Mediclinic</text>
      </g>
      <g transform="translate(326 120)">
        <circle r="5" fill="#8A93A3" stroke="#fff"/>
        <path d="M-2.6 -1.8h2.4v3.8h-2.4zM.2 -1.8h2.4v3.8H.2z" fill="#fff"/>
        <text x="8" y="2" fill="#6F7684">High School</text>
      </g>
      <g transform="translate(333 262)">
        <circle r="5" fill="#5E9A6C" stroke="#fff"/>
        <path d="M-1 2.6V-2.6l2.8 1.1L-1 -.4" fill="none" stroke="#fff" strokeWidth=".9"/>
      </g>
    </g>
      </svg>
  );
});

function Pin() {
  return (
    <svg className={styles["hkr-pin"]} viewBox="0 0 24 32" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.3 0 11.9 0 20.8 12 32 12 32s12-11.2 12-20.1C24 5.3 18.6 0 12 0z" fill="#1F5BFF" />
      <circle cx="12" cy="12" r="4.6" fill="#fff" />
    </svg>
  );
}

const rankClass = (rank: number) =>
  [styles["hkr-dot"], rank > 20 && styles["is-out"], rank <= 3 ? styles["r-top"] : rank <= 10 ? styles["r-mid"] : styles["r-low"]]
    .filter(Boolean)
    .join(" ");

export default function RankingGrid() {
  const [view, setView] = useState<View>("before");
  const [ranks, setRanks] = useState<number[]>(DATA.before);
  const [count, setCount] = useState(TOP3.before);

  const rootRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const viewRef = useRef<View>("before");
  const shownCount = useRef(TOP3.before);
  const reduce = useRef(false);
  const userTook = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const anims = useRef<Animation[]>([]);
  const raf = useRef(0);
  const auto = useRef<ReturnType<typeof setInterval> | null>(null);

  const countUp = useCallback((to: number) => {
    const from = shownCount.current;
    shownCount.current = to;
    cancelAnimationFrame(raf.current);
    if (reduce.current) {
      setCount(to);
      return;
    }
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / 900, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(from + (to - from) * e));
      if (p < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  }, []);

  const clearMotion = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    anims.current.forEach((a) => a.cancel());
    anims.current = [];
  }, []);

  const render = useCallback(
    (next: View, animate: boolean) => {
      if (next === viewRef.current) return;
      viewRef.current = next;
      setView(next);
      countUp(TOP3[next]);
      clearMotion();

      const target = DATA[next];
      if (!animate || reduce.current) {
        setRanks(target);
        return;
      }
      // ripple outwards from the business location
      target.forEach((rank, i) => {
        const dot = dotRefs.current[i];
        if (!dot || !dot.animate) {
          setRanks((prev) => prev.map((v, j) => (j === i ? rank : v)));
          return;
        }
        timers.current.push(
          setTimeout(() => {
            const out = dot.animate(
              [
                { transform: "scale(1)", opacity: 1 },
                { transform: "scale(.2)", opacity: 0.3 },
              ],
              { duration: 150, easing: "ease-in", fill: "forwards" },
            );
            anims.current.push(out);
            out.onfinish = () => {
              setRanks((prev) => prev.map((v, j) => (j === i ? rank : v)));
              out.cancel();
              anims.current.push(
                dot.animate(
                  [
                    { transform: "scale(.2)", opacity: 0.3 },
                    { transform: "scale(1.18)", opacity: 1, offset: 0.6 },
                    { transform: "scale(1)", opacity: 1 },
                  ],
                  { duration: 420, easing: "cubic-bezier(.2,.8,.3,1)" },
                ),
              );
            };
          }, dist(i) * 90),
        );
      });
    },
    [clearMotion, countUp],
  );

  const stopAuto = useCallback(() => {
    if (auto.current) clearInterval(auto.current);
    auto.current = null;
  }, []);

  const startAuto = useCallback(() => {
    if (auto.current || userTook.current || reduce.current) return;
    auto.current = setInterval(() => render(viewRef.current === "before" ? "after" : "before", true), 3600);
  }, [render]);

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;
    let observer: IntersectionObserver | undefined;
    if (root && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => (entries[0].isIntersecting ? startAuto() : stopAuto()),
        { threshold: 0.4 },
      );
      observer.observe(root);
    } else {
      startAuto();
    }
    return () => {
      observer?.disconnect();
      stopAuto();
      clearMotion();
      cancelAnimationFrame(raf.current);
    };
  }, [startAuto, stopAuto, clearMotion]);

  const choose = (v: View) => {
    userTook.current = true;
    stopAuto();
    render(v, true);
  };

  return (
    <div ref={rootRef} className={styles["hkr-rank"]} data-view={view}>
      <div className={styles["hkr-card"]}>
        <div className={styles["hkr-head"]}>
          <span className={styles["hkr-label"]}>Example ranking map</span>
          <div className={styles["hkr-toggle"]} role="group" aria-label="Show ranking">
            <span className={styles["hkr-toggle-thumb"]} aria-hidden="true" />
            <button type="button" aria-pressed={view === "before"} onClick={() => choose("before")}>
              Before
            </button>
            <button type="button" aria-pressed={view === "after"} onClick={() => choose("after")}>
              After
            </button>
          </div>
        </div>

        <div
          className={styles["hkr-map"]}
          role="img"
          aria-label="Map grid of Google Maps rankings around a business. Before: top 3 only right next to the shop. After: top 3 across most of the area."
        >
          <MapBg />
          <div className={styles["hkr-grid"]}>
            {ranks.map((rank, i) => {
              const you = i === 24;
              return (
                <div key={i} className={you ? `${styles["hkr-cell"]} ${styles["is-you"]}` : styles["hkr-cell"]}>
                  <span
                    ref={(el) => {
                      dotRefs.current[i] = el;
                    }}
                    className={rankClass(rank)}
                  >
                    {rank > 20 ? "20+" : rank}
                  </span>
                  {you && (
                    <>
                      <Pin />
                      <span className={styles["hkr-you"]}>Your business</span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles["hkr-foot"]}>
          <div className={styles["hkr-foot-row"]}>
            <p className={styles["hkr-stat"]}>
              <strong>{count}</strong> of 49 areas in Google’s top 3
            </p>
            <ul className={styles["hkr-legend"]} aria-label="Rank colours">
              <li>
                <i style={{ "--c": "var(--hkr-top)" } as React.CSSProperties} />
                1–3
              </li>
              <li>
                <i style={{ "--c": "var(--hkr-mid)" } as React.CSSProperties} />
                4–10
              </li>
              <li>
                <i style={{ "--c": "var(--hkr-low)" } as React.CSSProperties} />
                11–20+
              </li>
            </ul>
          </div>
          <div className={styles["hkr-bar"]} aria-hidden="true">
            <span style={{ "--p": `${((TOP3[view] / 49) * 100).toFixed(1)}%` } as React.CSSProperties} />
          </div>
        </div>
      </div>
    </div>
  );
}
