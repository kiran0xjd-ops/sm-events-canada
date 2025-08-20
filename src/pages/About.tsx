import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About S & M Events Canada | Event Décor & Rentals</title>
        <meta name="description" content="Discover S & M Events Canada — our story, values, and commitment to elegant event décor and rentals across Canada." />
        <link rel="canonical" href="https://sandmeventscanada.ca/about" />
      </Helmet>
      <header className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <Link to="/" className="font-display text-2xl font-semibold text-gradient inline-flex items-center">S & M Events Canada</Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link>
            <a href="/#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Work</a>
            <a href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </nav>
      </header>
      <main>
        <section className="py-20">
          <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <article>
              <h1 className="font-display text-4xl md:text-5xl mb-6">About S & M Events Canada</h1>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We specialize in transforming venues into unforgettable experiences. From weddings and engagements to birthdays and corporate events, our team delivers elegant décor, premium rentals, and seamless execution.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every detail matters to us. Whether your style is modern, classic, or uniquely yours, we bring creativity, professionalism, and care to every celebration.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {["Stylish designs tailored to your theme","Seamless setup and takedown","Quality rentals for every occasion","A stress-free planning experience"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="h-5 w-5 rounded-full bg-primary/10 border border-primary/20 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <aside className="glass-card rounded-2xl p-8">
              <h2 className="font-display text-2xl mb-4">Our Promise</h2>
              <p className="text-muted-foreground">Creativity, craftsmanship, and care. We curate décor and rentals that elevate your theme while keeping logistics effortless.</p>
            </aside>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container mx-auto py-6 text-sm text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} S&M Events Canada • All rights reserved.</span>
          <nav className="flex items-center gap-4">
            <Link to="/about" className="hover:text-foreground">About</Link>
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <a href="/#gallery" className="hover:text-foreground">Our Work</a>
            <a href="/#contact" className="hover:text-foreground">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default About;
