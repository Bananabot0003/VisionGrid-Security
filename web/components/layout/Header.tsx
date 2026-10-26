import { business } from "@/config/business";
import Link from "next/link";

export default function Header() {
 return (
    <header className="border-b border-white/10 bg-slate-950 text-white">
        <nav
            aria-label="Main navigation"
            className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-6"
        >
            <Link href="/" className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-lg bg-lime-400 font-bold text-slate-950">
                        VG
                </span>
                <span className="hidden text-sm font-bold sm:block">
                        {business.name}
                </span>
                <span className="text-sm font-bold sm:hidden">
                        VisionGrid
                </span>
            </Link>

            <a
                href={business.phone.href}
                className="rounded-lg border border-lime-400 px-4 py-2 text-sm font-semibold text-lime-400 transition-colors hover:bg-lime-400 hover:text-slate-950"
            >
                <span className="hidden sm:inline">
                        Call for an Estimate
                </span>
                <span className="sm:hidden">
                        Call Now
                </span>
            </a>
        </nav>
    </header>
    );
}