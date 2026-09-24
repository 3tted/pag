import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/vyrox-nutrition-logo.png";
import heroImage from "@/assets/vyrox-hero.jpg";
import { getCategories } from "@/lib/categories";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VYROX Nutrition | Suplementos en Ciudad Juárez" },
      {
        name: "description",
        content:
          "Suplementos VYROX Nutrition con clientes en el Estado de México, Chihuahua y Nuevo León. Atención personalizada por WhatsApp.",
      },
      { property: "og:title", content: "VYROX Nutrition | Suplementos" },
      {
        property: "og:description",
        content: "Nutrición deportiva y atención personalizada por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  loader: () => getCategories(),
  component: Index,
});

const whatsappUrl =
  "https://wa.me/526561234567?text=Hola%20VYROX%20Nutrition%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20suplementos.";

const coverage = [
  { city: "Chihuahua", meta: "Norte del país", x: "20%", y: "22%" },
  { city: "Monterrey", meta: "Nuevo León · Noreste", x: "70%", y: "34%" },
  { city: "México", meta: "CDMX y Estado de México · Centro", x: "44%", y: "68%" },
];

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.84 9.84 0 0 0-8.46 14.87L2 22l5.25-1.55A9.98 9.98 0 1 0 12.04 2Zm0 17.96a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.12.92.94-3.04-.2-.31a8.05 8.05 0 1 1 6.82 3.74Zm4.45-6.02c-.24-.12-1.44-.71-1.66-.79-.23-.08-.39-.12-.56.12-.16.25-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21a7.3 7.3 0 0 1-1.35-1.68c-.14-.24-.01-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.41.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.56-.42h-.47c-.16 0-.43.06-.65.31-.23.24-.86.84-.86 2.05s.88 2.38 1 2.54c.13.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.18 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

function Index() {
  const categories = Route.useLoaderData();
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <p className="hidden text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground md:block">
            Nutrición para tu siguiente nivel
          </p>
          <a href="#inicio" aria-label="Ir al inicio" className="mx-auto md:absolute md:left-1/2 md:-translate-x-1/2">
            <img src={logo} alt="VYROX Nutrition" className="h-20 w-auto object-contain md:h-24" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:text-primary/75 md:flex"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
        </div>
        <nav aria-label="Navegación principal" className="border-y border-border">
          <div className="mx-auto flex max-w-4xl items-center justify-center gap-6 overflow-x-auto px-5 py-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] md:gap-12">
            <a className="whitespace-nowrap transition-colors hover:text-primary" href="#productos">Productos</a>
            <a className="whitespace-nowrap transition-colors hover:text-primary" href="#cobertura">Cobertura</a>
            <a className="whitespace-nowrap transition-colors hover:text-primary" href="#nosotros">Nosotros</a>
            <a className="whitespace-nowrap transition-colors hover:text-primary" href="#contacto">Contacto</a>
          </div>
        </nav>
      </header>

      <section id="inicio" className="relative min-h-[68vh] bg-foreground md:min-h-[72vh]">
        <img
          src={heroImage}
          alt="Batido verde, proteína y suplementos en una mesa luminosa"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-end px-5 pb-12 md:min-h-[72vh] md:items-center md:px-10 md:pb-0">
          <div className="max-w-2xl text-primary-foreground">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em]">VYROX Nutrition</p>
            <h1 className="max-w-xl font-display text-5xl leading-[0.92] uppercase sm:text-6xl md:text-8xl">
              Impulsa tu mejor versión
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/85 md:text-lg">
              Suplementos para acompañar tu rendimiento, recuperación y bienestar con atención directa y personalizada.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-6 text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Cotiza por WhatsApp
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="productos" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-8 border-b border-border pb-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Encuentra lo que buscas</p>
            <h2 className="font-display text-4xl leading-none uppercase sm:text-5xl md:text-6xl">
              Suplementos para cada objetivo
            </h2>
          </div>
          <div className="grid md:grid-cols-3">
            {categories.map((category) => (
              <article key={category.position} className="group border-b border-border py-10 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <span className="text-xs font-bold text-primary">{String(category.position).padStart(2, "0")}</span>
                <h3 className="mt-12 font-display text-3xl uppercase transition-colors group-hover:text-primary">{category.name}</h3>
                <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">{category.copy}</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary"
                >
                  Consultar <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cobertura" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-8 border-b border-border pb-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Cobertura VYROX</p>
            <h2 className="font-display text-4xl leading-none uppercase sm:text-5xl md:text-6xl">
              Clientes en todo el país
            </h2>
          </div>

          <div className="mt-10 grid overflow-hidden border border-border bg-card lg:grid-cols-[1.1fr_0.9fr]">
            <div className="coverage-map relative min-h-[380px] overflow-hidden p-6 md:min-h-[460px]">
              <p className="relative text-[0.6rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                Cobertura nacional
              </p>
              {coverage.map((place) => (
                <div
                  key={place.city}
                  className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
                  style={{ left: place.x, top: place.y }}
                >
                  <span className="relative mx-auto flex size-3 items-center justify-center">
                    <span className="absolute size-7 animate-ping rounded-full bg-primary/20" />
                    <span className="relative size-3 rounded-full bg-primary ring-4 ring-background" />
                  </span>
                  <p className="mt-3 whitespace-nowrap font-display text-xl uppercase leading-none">
                    {place.city}
                  </p>
                </div>
              ))}
            </div>

            <ul className="border-t border-border lg:border-l lg:border-t-0">
              {coverage.map((place) => (
                <li
                  key={place.city}
                  className="flex items-center justify-between gap-4 border-b border-border px-6 py-5 transition-colors hover:bg-surface"
                >
                  <div>
                    <p className="font-display text-2xl uppercase leading-none">{place.city}</p>
                    <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {place.meta}
                    </p>
                  </div>
                  <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                </li>
              ))}
              <li className="flex flex-wrap items-center justify-between gap-3 px-6 py-5">
                <p className="text-sm text-muted-foreground">¿Tu ciudad no aparece? Escríbenos y lo confirmamos.</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary"
                >
                  Consultar <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="nosotros" className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center md:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary-foreground/70">Atención VYROX</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-none uppercase sm:text-5xl md:text-6xl">
              Elige con claridad. Avanza con confianza.
            </h2>
          </div>
          <div className="border-l border-primary-foreground/25 pl-6 md:pl-10">
            <p className="max-w-lg text-lg leading-relaxed text-primary-foreground/85">
              Cuéntanos qué estás buscando y te ayudamos a conocer las opciones disponibles para tu rutina.
            </p>
            <ul className="mt-8 space-y-4 text-sm font-semibold uppercase tracking-[0.08em]">
              <li className="flex items-center gap-3"><Check className="size-5" /> Atención personalizada</li>
              <li className="flex items-center gap-3"><Check className="size-5" /> Comunicación directa</li>
              <li className="flex items-center gap-3"><Check className="size-5" /> Opciones según tu objetivo</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-10">
          <MessageCircle className="mx-auto size-10 text-primary" aria-hidden="true" />
          <h2 className="mt-6 font-display text-4xl uppercase leading-none sm:text-5xl md:text-6xl">Hablemos de tu meta</h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Escríbenos para consultar disponibilidad, precios y recomendaciones de productos.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-7 text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary/85"
          >
            <WhatsAppIcon /> Enviar mensaje
          </a>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 text-center md:flex-row md:px-10 md:text-left">
          <img src={logo} alt="VYROX Nutrition" loading="lazy" className="h-14 w-auto object-contain" />
          <p className="text-xs text-muted-foreground">© 2026 VYROX Nutrition. Todos los derechos reservados.</p>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar a VYROX Nutrition por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-contact transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </main>
  );
}