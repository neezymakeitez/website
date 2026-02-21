"use client";

import { useEffect, useMemo, useState } from "react";

function formatRemaining(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (value: number) => String(value).padStart(2, "0");

  return `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
}

export default function ApparelPage() {
  const target = useMemo(
    () => new Date("2026-02-24T00:00:00-05:00").getTime(),
    []
  );
  const [remaining, setRemaining] = useState(() => target - Date.now());

  useEffect(() => {
    const tick = () => setRemaining(target - Date.now());
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center gap-10 px-6">
      <section className="grid grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="w-24 h-24 md:w-28 md:h-28 border-2 border-black flex items-center justify-center text-3xl font-semibold"
            aria-hidden="true"
          >
            X
          </div>
        ))}
      </section>

      <div className="text-center space-y-2">
        <div
          className="font-mono text-2xl md:text-3xl tracking-wide"
          aria-live="polite"
        >
          {formatRemaining(remaining)}
        </div>
        <p className="text-sm md:text-base text-neutral-700">
          Note: This apparel drop is solely to raise funds for future projects.
        </p>
      </div>
    </main>
  );
}
