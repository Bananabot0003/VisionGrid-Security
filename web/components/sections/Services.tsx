import { services } from "@/data/services";

export default function Services() {
    return(
        <section
            id="services"
            className="bg-slate-50 py-24 text-slate-950"
        >
            <div className="mx-auto max-w-6x1 px-6">

                <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
                    What We Do
                </p>

                <h2 className="mt-4 text-4x1 font-bold tracking-tight md:text-5x1">
                    Our Services
                </h2>

                <p className=" mt-4 max-w-2x1 text-slate-600">
                    Security and technology solutions for homes 
                    and businesses throughout East Texas.
                </p>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {services.map((service, index) => (
                        <article
                            key={service.id}
                            className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
                        >
                            <span className="text-sm font-bold text-green-700">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <h3 className="mt-6 text-xl font-bold">
                                        {service.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                        {service.description}
                            </p>
                        </article>
                    ))}
                </div> 
                  
            </div>
        </section>
    );
}