import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

type Item = {
  href: string;
  title: string; // <= 7 words, includes duration
  about: string; // exactly 10 words
  highlight?: boolean; // red if true, black otherwise
};

const items: Item[] = [
  {
    href: "https://www.youtube.com/watch?v=MnrJzXM7a6o",
    title: "Jobs introduces iphone (10min19s)",
    about: "the most iconic moment in tech history",
    highlight: true,
  },
  {
    href: "https://youtube.com/playlist?list=PLyQSN7X0ro23NUN9RYBP5xdBYoiv2_5y2&si=na6ff8Az9jwr1gvz",
    title: "Feynman's Lectures (20h10m)",
    about: "Feynman's lectures on science, forever timeless",
    highlight: true,
  },
  // red
  {
    href: "https://www.youtube.com/watch?v=ycPr5-27vSI",
    title: "Elon (JRE 1169) (2hr37min)",
    about: "elon musk is a genius",
    highlight: false,
  },
  {
    href: "https://www.youtube.com/watch?v=8fOb7ONLzQ0",
    title: "Jump Out by lil O (7min8s)",
    about: "insane levels of creativity and production value",
    highlight: false,
  },
  {
    href: "https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch",
    title: "Code Geass",
    about: "sometimes u might be misunderstood",
    highlight: false,
  },
  {
    href: "https://youtube.com/playlist?list=PLXBcsPKqNstCyT1lKP9DwiNYbbMyiOLel&si=ZiWFpoWQkX94Cxu9",
    title: "GTO (24episodes)",
    about: "one of my fav animes, highly underrated",
    highlight: true,
  },
  {
    href: "https://www.youtube.com/watch?v=8XqNq_oeSMM&list=RD8XqNq_oeSMM",
    title: "Kendrick Control (3min6s)",
    about: "At a time of complacency, Kenny turned up the heat",
    highlight: true,
  },
  {
    href: "https://www.netflix.com/title/81617079",
    title: "Yash Chopra doc (2hr20min)",
    about: "goated director",
    highlight: false,
  },
  // red
  {
    href: "https://www.dailymotion.com/video/x2hjvbg",
    title: "Nirvana Reading '92 (1hr32min)",
    about:
      "the world thought he was dead, but he instead showed up and delivered one of the greatest performances of all time",
    highlight: true,
  },
  // red
  {
    href: "https://www.youtube.com/watch?v=AX4MKIDvXLM",
    title: "The Fountainhead: Roark Courtroom Speech (6m)",
    about:
      "Ayn Rand's masterpiece, a monologue on integrity and creation, rejecting applause and collective compromise",
    highlight: true,
  },
  // red
  {
    href: "https://www.youtube.com/watch?v=4h5eZGj8vcU",
    title: "Whiplash: Caravan (9m39s)",
    about:
      "Drum duel crescendos, control wrestled back, teacher and student collide",
    highlight: true,
  },
  // red
  {
    href: "https://www.youtube.com/watch?v=WPDAbEVCSTU",
    title: "Two words freestyle (2min6s)",
    about:
      "Kanye and Mos Def trade verses, early hunger, documentary teaser hahahaha",
    highlight: false,
  },
  // black
  {
    href: "https://www.youtube.com/watch?v=3qHkcs3kG44",
    title: "Naval Ravikant (JRE 1309) (2h11m)",
    about:
      "Leverage, judgment, specific knowledge, compounding happiness; timeless mental models discussed",
    highlight: true,
  },
  {
    href: "https://www.youtube.com/watch?v=3wMKoSRbGVs",
    title: "Douglas Lenat Lex (2hr52min)",
    about:
      "AI pioneer Lenat discusses Cyc, knowledge, reasoning; insightful Lex interview",
    highlight: false,
  },
];

export default function ContentPage() {
  return (
    <main className="min-h-screen bg-white px-6 md:px-12 lg:px-24 py-12 max-w-[900px]">
      <ThemeToggle />
      {/* Navigation */}
      <nav className="mb-12">
        <div className="flex gap-6 text-lg text-[#888888]">
          <Link href="/" className="hover:text-[#03FFFF] transition-colors">
            home
          </Link>
          <Link
            href="/content"
            className="hover:text-[#03FFFF] transition-colors"
          >
            content
          </Link>
          <a
            href="https://x.com/nihalvsnihal"
            target="_blank"
            rel="noopener"
            className="hover:text-[#03FFFF] transition-colors"
          >
            x
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-[40px] font-bold text-[#111111] leading-tight tracking-[-2.1px]">
          content list.
        </h1>
      </div>

      {/* Intro Section */}
      <div className="text-[20px] leading-[1.5em] text-[#888888] tracking-[-0.7px] space-y-4 mb-8">
        <p>inspired by farza, here&apos;s my list of content that I like.</p>
        <p>i look up to the greats, and i&apos;ve studied them religiously.</p>
        <p>
          The pieces of content in <span className="text-red-400">red</span> are
          ones that deeply affected me, and pieces I return to.
        </p>
      </div>

      {/* Content List */}
      <ul className="list-disc marker:text-[#888888] ml-6 text-[20px] leading-[1.5em] tracking-[-0.7px] space-y-6">
        {items.map((it) => (
          <li key={it.href} className="text-[#111111] group relative">
            <a
              href={it.href}
              target="_blank"
              rel="noopener"
              className={
                (it.highlight ? "text-red-400" : "text-[#111111]") + ""
              }
              title={it.about}
            >
              {it.title}
            </a>

            {/* Tooltip on hover */}
            <div className="hidden group-hover:block absolute left-0 top-full mt-2 bg-gray-900 text-white text-sm px-3 py-2 rounded shadow-lg z-10 max-w-md">
              {it.about}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
