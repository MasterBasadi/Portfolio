import { useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, BookOpenCheck, Rocket } from "lucide-react";

export default function Portfolio() {
    const [copied, setCopied] = useState(false);
    const email = "basitumair751@gmail.com";

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
            // eslint-disable-next-line no-unused-vars
        } catch (e) { /* empty */ }
    };

    const projects = [
        {
            title: "BookTrackr",
            tagline: "Full‑stack textbook manager",
            tech: ["Java", "Spring Boot", "Thymeleaf", "PostgreSQL", "Maven"],
            description:
                "CRUD for textbooks/loans, role‑based auth (Spring Security), user‑scoped dashboards, CSV export.",
            links: {
                repo: "https://github.com/MasterBasadi/Booktrackr",
            },
            icon: <BookOpenCheck className="w-6 h-6"/>,
        },
    ];

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            {/* Nav */}
            <header className="sticky top-0 z-20 backdrop-blur bg-neutral-950/70 border-b border-neutral-800">
                <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="font-semibold tracking-tight">Basit Umair</div>
                    <nav className="flex gap-4 text-sm">
                        <a href="#projects" className="hover:text-white/90">Projects</a>
                        <a href="#about" className="hover:text-white/90">About</a>
                        <a href="#contact" className="hover:text-white/90">Contact</a>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="max-w-5xl mx-auto px-4 pt-16 pb-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                            CS @ Carleton • Full‑stack builder • Interested in AI & aviation
                        </h1>
                        <p className="mt-4 text-neutral-300">
                            I love the idea of building software to help people. I just finished building <span className="font-medium">BookTrackr</span> in Java/Spring Boot
                            and learning Python to dive into the world AI.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white text-neutral-900 font-medium shadow hover:opacity-90"
                                href="/Basit Umair Resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Rocket className="w-4 h-4"/> Resume
                            </a>
                            <a
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-700 hover:border-neutral-500"
                                href="https://github.com/MasterBasadi" target="_blank" rel="noreferrer"
                            >
                                <Github className="w-4 h-4"/> GitHub
                            </a>
                            <a
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-700 hover:border-neutral-500"
                                href="https://linkedin.com/in/basit-umair-358066311" target="_blank" rel="noreferrer"
                            >
                                <Linkedin className="w-4 h-4"/> LinkedIn
                            </a>
                            <button
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-700 hover:border-neutral-500"
                                onClick={copyEmail}
                            >
                                <Mail className="w-4 h-4"/> {copied ? "Copied!" : email}
                            </button>
                        </div>
                    </div>
                    <div className="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/40">
                        <div className="text-sm text-neutral-300">Current skills</div>
                        <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
                            {[
                                "Java", "Spring Boot", "Thymeleaf", "PostgreSQL",
                                "Maven", "Python", "Linux", "JavaScript (learning)"
                            ].map((t) => (
                                <li key={t} className="px-3 py-2 rounded-xl border border-neutral-800 bg-neutral-900/60">{t}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="max-w-5xl mx-auto px-4 py-12">
                <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    {projects.map((p) => (
                        <article key={p.title} className="group border border-neutral-800 rounded-2xl p-5 bg-neutral-900/40 hover:bg-neutral-900/70 transition">
                            <div className="flex items-center gap-2 text-neutral-300">
                                {p.icon}
                                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                            </div>
                            <p className="mt-2 text-sm text-neutral-300">{p.tagline}</p>
                            <p className="mt-3 text-sm text-neutral-300">{p.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                    <span key={t} className="text-xs px-2 py-1 rounded-lg border border-neutral-800">{t}</span>
                                ))}
                            </div>
                            <div className="mt-4 flex gap-3 text-sm">
                                {p.links.repo && (
                                    <a href={p.links.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
                                        <Github className="w-4 h-4"/> Repo <ExternalLink className="w-3 h-3"/>
                                    </a>
                                )}
                                {p.links.demo && (
                                    <a href={p.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
                                        Live <ExternalLink className="w-3 h-3"/>
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* About */}
            <section id="about" className="max-w-5xl mx-auto px-4 py-12">
                <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
                <p className="mt-4 text-neutral-300 leading-relaxed">
                    First‑year CS at Carleton.
                    I’m learning React/JavaScript and interested in artificial intelligence & aviation. Looking for student teams where I can ship features fast
                    and learn from code reviews.
                </p>
            </section>

            {/* Contact */}
            <section id="contact" className="max-w-5xl mx-auto px-4 pb-16">
                <div className="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/40">
                    <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
                    <p className="mt-3 text-neutral-300">Email me. Open to student dev roles, and collabs.</p>
                    <div className="mt-4 flex gap-3">
                        <a className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-700 hover:border-neutral-500" href="https://github.com/MasterBasadi" target="_blank" rel="noreferrer"><Github className="w-4 h-4"/> GitHub</a>
                        <a className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-700 hover:border-neutral-500" href="https://linkedin.com/in/basit-umair-358066311" target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4"/> LinkedIn</a>
                        <button onClick={copyEmail} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-700 hover:border-neutral-500"><Mail className="w-4 h-4"/> {copied ? "Copied!" : email}</button>
                    </div>
                </div>
            </section>
        </div>
    );
}