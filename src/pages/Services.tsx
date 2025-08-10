import { Helmet } from "react-helmet-async";

const Services = () => {
  const services = [
    { title: "Event Décor", desc: "Arches, aisles, backdrops, floral frames, and stylish accents for weddings, engagements, birthdays, and more." },
    { title: "Furniture Rentals", desc: "Chairs, tables, and a wide variety of pieces to make your event perfect." },
    { title: "Tabletop & Linen Rentals", desc: "Premium linens, runners, candles, and centerpieces for a refined table setting." },
    { title: "Balloon Décor", desc: "Custom balloon garlands, organic shapes, and luxe colour palettes to add a fun and stylish touch." },
    { title: "Staging", desc: "Pedestals, cake stands, and stage décor to enhance your event atmosphere." },
    { title: "Photo Walls & Backdrops", desc: "Shimmer walls, drapery, and themed setups perfect for memorable photos." },
  ];

  return (
    <div>
      <Helmet>
        <title>Event Services in Canada | S & M Events Canada</title>
        <meta name="description" content="Explore S & M Events Canada's services: décor, rentals, balloon garlands, staging, and photo backdrops for events across Canada." />
        <link rel="canonical" href="https://sandmeventscanada.ca/services" />
      </Helmet>
      <header className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <a href="/" className="font-display text-2xl font-semibold text-gradient inline-flex items-center">S & M Events Canada</a>
          <div className="hidden md:flex items-center gap-6">
            <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="/#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Work</a>
            <a href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </nav>
      </header>
      <main>
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto">
            <h1 className="font-display text-4xl md:text-5xl mb-6">Our Services</h1>
            <p className="text-muted-foreground mb-10 max-w-prose">
              Full-service décor and curated rentals for unforgettable events across Canada.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <article key={s.title} className="glass-card rounded-xl p-6 hover:translate-y-1 transition-transform">
                  <h2 className="font-semibold mb-2">{s.title}</h2>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container mx-auto py-6 text-sm text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} S&M Events Canada • All rights reserved.</span>
          <nav className="flex items-center gap-4">
            <a href="/about" className="hover:text-foreground">About</a>
            <a href="/services" className="hover:text-foreground">Services</a>
            <a href="/#gallery" className="hover:text-foreground">Our Work</a>
            <a href="/#contact" className="hover:text-foreground">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Services;
