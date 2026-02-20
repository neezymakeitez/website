"use client";

import { useEffect } from "react";

type TextMap = {
  nodes: Text[];
  texts: string[];
};

const TYPE_SPEED_MS = 22;

function collectTextNodes(root: HTMLElement): TextMap {
  const nodes: Text[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let current = walker.nextNode();
  while (current) {
    nodes.push(current as Text);
    current = walker.nextNode();
  }
  const texts = nodes.map((node) => node.nodeValue ?? "");
  nodes.forEach((node) => {
    node.nodeValue = "";
  });
  return { nodes, texts };
}

function sleep(ms: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function typeText(map: TextMap) {
  for (let i = 0; i < map.nodes.length; i += 1) {
    const fullText = map.texts[i];
    const node = map.nodes[i];
    for (let j = 0; j < fullText.length; j += 1) {
      node.nodeValue += fullText[j];
      // eslint-disable-next-line no-await-in-loop
      await sleep(TYPE_SPEED_MS);
    }
  }
}

export default function TypewriterOnScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-typewriter]"),
    );

    if (targets.length === 0) {
      return;
    }

    if (prefersReducedMotion) {
      targets.forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const maps = new WeakMap<HTMLElement, TextMap>();
    targets.forEach((el) => {
      maps.set(el, collectTextNodes(el));
    });

    const queue: HTMLElement[] = [];
    let isTyping = false;

    const isWideEnough = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      return rect.left >= 0 && rect.right <= viewportWidth;
    };

    const maybeEnqueue = (el: HTMLElement) => {
      if (el.dataset.typed === "true" || el.dataset.queued === "true") {
        return;
      }
      if (!isWideEnough(el)) {
        return;
      }
      el.dataset.queued = "true";
      queue.push(el);
      void processQueue();
    };

    const processQueue = async () => {
      if (isTyping) {
        return;
      }
      isTyping = true;
      while (queue.length > 0) {
        const el = queue.shift();
        if (!el) {
          break;
        }
        if (el.dataset.typed === "true") {
          continue;
        }
        if (!isWideEnough(el)) {
          el.dataset.queued = "false";
          continue;
        }
        el.dataset.typed = "true";
        el.classList.add("is-visible");
        const map = maps.get(el);
        if (map) {
          // eslint-disable-next-line no-await-in-loop
          await typeText(map);
        }
      }
      isTyping = false;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          const el = entry.target as HTMLElement;
          maybeEnqueue(el);
        });
      },
      { threshold: 0.2 },
    );

    targets.forEach((el) => observer.observe(el));

    const handleResize = () => {
      targets.forEach((el) => {
        if (el.dataset.typed === "true") {
          return;
        }
        if (el.dataset.queued === "true") {
          return;
        }
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          maybeEnqueue(el);
        }
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
}
