import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
    return (
        <main className="min-h-screen bg-white px-6 md:px-12 lg:px-24 py-12 max-w-[900px]">
            <ThemeToggle />
            {/* Navigation */}
            <nav className="mb-12">
                <div className="flex gap-6 text-lg text-[#888888]">
                    <Link href="/" className="hover:text-[#03FFFF] transition-colors">
                        home
                    </Link>
                    <Link href="/content" className="hover:text-[#03FFFF] transition-colors">
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

            {/* Hero */}
            <div className="mb-6">
                <h1 className="text-[40px] md:text-[48px] font-bold text-[#111111] leading-tight tracking-[-2.1px]">
                    hi i&apos;m nihal.
                </h1>
            </div>

            {/* Bio */}
            <div className="text-[30px] leading-[1.6em] text-[#888888] tracking-[-0.4px] space-y-5">
                <p className="font-extrabold">
                    i&apos;m:
                </p>
                <div className="font-extrabold !mt-10 ml-8">
                    failing in public<br />
                    building & shipping fast<br />
                    optimizing for utility, vibes, & retention
                </div>

                <p className="font-extrabold !mt-20">
                    right now i&apos;m all-in on{" "}
                    <a
                        // href="https://systemhealthai.com"
                        target="_blank"
                        rel="noopener"
                        className="text-[#03FFFF] no-underline"
                    >
                        SYSTEM
                    </a>
                    — a health companion that changes your life
                </p>

                <p className="font-extrabold">stuff i&apos;ve built / shipped:</p>

                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <a
                            href="https://apps.apple.com/us/app/foodgrind/id1664938134"
                            target="_blank"
                            rel="noopener"
                            className="text-[#F7D41C]"
                        >
                            FoodGrind (&apos;23)
                        </a>{" "}
                        — CalDining ratings app with 1k daily users
                    </li>
                    <li>
                        <a
                            href="https://beternal.app"
                            target="_blank"
                            rel="noopener"
                            className="text-[#00FF99]"
                        >
                            Beternal (&apos;24)
                        </a>{" "}
                        — betting (DFS & book) algorithms, scrapers, & analytics
                    </li>
                    <li>
                        <a
                            href="https://discourseapp.com"
                            target="_blank"
                            rel="noopener"
                            className="bg-gradient-to-r from-[#FF0000] to-[#45A9F5] inline-block text-transparent bg-clip-text no-underline relative after:content-[&apos;&apos;] after:absolute after:left-0 after:bottom-[3px] after:h-[2px] after:w-full after:bg-gradient-to-r after:from-[#FF0000] after:to-[#45A9F5]"
                        >
                            Discourse (&apos;24)
                        </a>{" "}
                        — real-time debates with AI for the 1st amendment
                    </li>
                    <li>
                        <a
                            href="https://prismclips.com"
                            target="_blank"
                            rel="noopener"
                            className="bg-gradient-to-r from-[#383091] to-[#8E97C6] inline-block text-transparent bg-clip-text no-underline relative after:content-[&apos;&apos;] after:absolute after:left-0 after:bottom-[3px] after:h-[2px] after:w-full after:bg-gradient-to-r after:from-[#383091] after:to-[#8E97C6]"
                        >
                            Prism Clips (&apos;25)
                        </a>{" "}
                        — ai editor that finds the viral moments in long-form video and auto-generates clips/titles.
                    </li>
                    <li>
                        <a
                            // href="https://systemhealthai.com"
                            target="_blank"
                            rel="noopener"
                            className="text-[#03FFFF] no-underline"
                        >
                            SYSTEM (&apos;26)
                        </a>{" "}
                        — current focus. full AI accountability for your health, that goes away & steps in, when it needs to.
                    </li>
                </ul>

                <p className="font-extrabold">some wins, lots of Ls, constant iteration. i like building simple things that feel inevitable once you use them.</p>

                <p className="text-[#777777] font-extrabold">
                    i also tinker with ml systems (rag + memory, mission engines, video understanding). wrote papers, shipped infra, and i&apos;m still happiest
                    when the loop is: idea → prototype → users → refactor → ship again.
                </p>
            </div>

            {/* Footer */}
            <div className="mt-10 text-[18px] leading-[1.6em] text-[#777777]">
                <p>
                    p.s. if you want to build something together or have a crisp ask (&lt;300 chars), email{" "}
                    <a href="mailto:nihal@berkeley.edu" className="text-[#03FFFF]">
                        nihal@berkeley.edu
                    </a>
                    . i usually reply.
                </p>
            </div>
        </main>
    );
}
