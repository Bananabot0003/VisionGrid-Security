export default function Hero() {
    return(
        <section className="flex min-h-screen flex-col justify-center bg-slate-950 px-6 text-white">
            <div className="mx-auto w-full max-w-6x1">

                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-lime-400">
                    Tyler, Texas - East Texas
                </p>

                <h1 className="text-5x1 font-bold tracking-tight md:text-7x1">
                    VisionGrid Security LLC
                </h1>

                <p className="mt-6 text-1 text-slate-300">
                    Protected. Connected. Always Secure.
                </p>
                
                <a
                    href="tel:+1(903)474-7520"
                    className="mt-8 inline-block rounded-lg bg-lime-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-lime-300"
                >
                    Request an Estimate
                </a>

            </div>
        </section>
    );
}