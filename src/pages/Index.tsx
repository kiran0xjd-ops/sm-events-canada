import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
 
import { Facebook, Instagram, Mail, Phone, MapPin, CheckCircle2, Images } from "lucide-react";
import type React from "react";
import img1 from "@/assets/ceremony-arch.jpg";
import img2 from "@/assets/table-decor.jpg";
import img3 from "@/assets/stage-backdrop.jpg";

import img5 from "@/assets/floral-centerpieces.jpg";
const gallery6 = "/lovable-uploads/7b2bf313-68a4-4746-aa84-be965c80d1d1.png";
const gallery2 = "/lovable-uploads/7e9f5bf1-c188-43ab-97ec-0105e4262da5.png";
const gallery3 = "/lovable-uploads/47dc5f46-857b-476b-b251-fe3334c703dd.png";
const gallery4 = "/lovable-uploads/c12b6b0c-c635-4886-9708-23d355df7f43.png";

const Index = () => {
  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  return (
    <div>
      <header className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <a href="#home" className="font-display text-2xl font-semibold text-gradient inline-flex items-center">S & M Events Canada</a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Work</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            <a href="#gallery" className="inline-flex"><Button className="btn-elevate" variant="default"><Images className="mr-2 h-4 w-4" /> View our work</Button></a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="home" onMouseMove={handleMouseMove} className="bg-hero">
          <div className="container mx-auto grid md:grid-cols-2 items-center gap-10 py-24">
            <div>
              <h1 className="font-display text-4xl md:text-6xl leading-tight tracking-tight mb-6">
                <span className="text-gradient">S & M Events Canada</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-prose">
                Transforming venues into unforgettable experiences—weddings, engagements, birthdays, and corporate gatherings across Canada.
              </p>
              <div className="flex items-center gap-4">
                <a href="#contact"><Button className="btn-elevate" variant="default">Contact us</Button></a>
                <a href="#services"><Button variant="secondary">Our services</Button></a>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 md:p-8 animate-floaty">
              <div className="grid grid-cols-2 gap-3">
                <AspectRatio ratio={4 / 3} className="rounded-lg overflow-hidden bg-muted/20">
                  <img src={img1} alt="Wedding ceremony arch with greenery and drapery" loading="lazy" className="h-full w-full object-cover" />
                </AspectRatio>
                <AspectRatio ratio={4 / 3} className="rounded-lg overflow-hidden bg-muted/20">
                  <img src={img2} alt="Reception table with dusty rose linens and gold accents" loading="lazy" className="h-full w-full object-cover" />
                </AspectRatio>
                <AspectRatio ratio={4 / 3} className="rounded-lg overflow-hidden bg-muted/20">
                  <img src={img3} alt="Stage backdrop with flowing drapery and soft lighting" loading="lazy" className="h-full w-full object-cover" />
                </AspectRatio>
                <AspectRatio ratio={4 / 3} className="rounded-lg overflow-hidden bg-muted/20">
                  <img src="/lovable-uploads/d05b210f-b301-4aa3-8f3b-8b14c0ec2f22.png" alt="Birthday backdrop with fairy lights and balloons - S & M Events Canada" loading="lazy" className="h-full w-full object-cover" />
                </AspectRatio>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20">
          <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <article>
              <h2 className="font-display text-3xl md:text-4xl mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Welcome to S&M Events Canada. We specialize in creating elegant, stylish, and memorable events. From weddings and engagements to birthdays and corporate gatherings, our team transforms your vision into reality with beautiful décor, high-quality rentals, and personalized service.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At S&M Events Canada, every detail matters. Whether you’re looking for a chic modern setup, timeless classic décor, or something uniquely you, we bring creativity, professionalism, and passion to every celebration.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Stylish designs tailored to your theme","Seamless setup and takedown","Quality rentals for every occasion","A stress-free, enjoyable planning experience"].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </article>
            <aside className="glass-card rounded-2xl p-8">
              <h3 className="font-display text-2xl mb-4">What we value</h3>
              <p className="text-muted-foreground">Creativity, craftsmanship, and care. We curate décor and rentals that elevate your theme while keeping logistics effortless.</p>
            </aside>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 bg-secondary/30">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl mb-10">Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {title:"Event Décor",desc:"Arches, aisles, backdrops, floral frames, and stylish accents for weddings, engagements, birthdays, and more."},
                {title:"Furniture Rentals",desc:"Chairs, tables, and a wide variety of pieces to make your event perfect."},
                {title:"Tabletop & Linen Rentals",desc:"Premium linens, runners, candles, and centerpieces for a refined table setting."},
                {title:"Balloon Décor",desc:"Custom balloon garlands, organic shapes, and luxe colour palettes to add a fun and stylish touch."},
                {title:"Staging",desc:"Pedestals, cake stands, and stage décor to enhance your event atmosphere."},
                {title:"Photo Walls & Backdrops",desc:"Shimmer walls, drapery, and themed setups perfect for memorable photos."},
              ].map((s) => (
                <div key={s.title} className="glass-card rounded-xl p-6 hover:translate-y-1 transition-transform">
                  <h3 className="font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-20">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl mb-10">Our Work</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[img1,gallery2,gallery3,gallery4,img5,gallery6].map((src, i) => (
                <figure key={i} className="rounded-xl glass-card overflow-hidden">
                  <AspectRatio ratio={4 / 3} className="w-full">
                    <img src={src} loading="lazy" decoding="async" alt={`S & M Events Canada gallery image ${i + 1}`} className="h-full w-full object-cover" />
                  </AspectRatio>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-secondary/30">
          <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-6">Let’s create something beautiful</h2>
              <p className="text-muted-foreground mb-6 max-w-prose">Reach out with your date, venue, and inspiration—we’ll craft a tailored proposal and handle the rest.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><Phone className="text-primary" /> <a href="tel:+12506081443" className="hover:underline">+1 (250) 608-1443 | +1 (519) 891-1443</a></div>
                <div className="flex items-center gap-3"><Mail className="text-primary" /> <a href="mailto:smeventscanada@gmail.com" className="hover:underline">smeventscanada@gmail.com</a></div>
                <div className="flex items-center gap-3"><MapPin className="text-primary" /> <span>Canada</span></div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display text-2xl mb-4">Connect with us</h3>
              <div className="flex items-center gap-4">
                <a aria-label="Facebook" href="https://www.facebook.com/SandM.Events.Ca" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border hover:bg-primary hover:text-primary-foreground transition-colors"><Facebook /></a>
                <a aria-label="Instagram" href="https://www.instagram.com/s_m_events_ca?igsh=MXdpanA4YXFweGNrYw==" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram /></a>
                <a aria-label="Email" href="mailto:smeventscanada@gmail.com" className="p-3 rounded-full border hover:bg-primary hover:text-primary-foreground transition-colors"><Mail /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto py-6 text-sm text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} S&M Events Canada • All rights reserved.</span>
          <nav className="flex items-center gap-4">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#gallery" className="hover:text-foreground">Our Work</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
