import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.ezst.app/projects/d2693fb2-555d-4f25-8423-f9769d795159/files/1159acd8-e9ba-43e8-93bd-7312af1be59e.jpg";
const STEAK_IMG = "https://cdn.ezst.app/projects/d2693fb2-555d-4f25-8423-f9769d795159/files/6a6d5a34-1034-42c0-8cdb-128f683866b9.jpg";
const DESSERT_IMG = "https://cdn.ezst.app/projects/d2693fb2-555d-4f25-8423-f9769d795159/files/02a207bc-c4e0-402b-ade3-506407a5564e.jpg";
const SALMON_IMG = "https://cdn.ezst.app/projects/d2693fb2-555d-4f25-8423-f9769d795159/files/12b5183c-9f49-4fdf-af2e-aa8dcdc7c6c7.jpg";

const menuItems = [
  {
    category: "Starters",
    items: [
      { name: "Beef Carpaccio", desc: "Thinly sliced tenderloin, truffle oil, parmesan, capers", price: "$18" },
      { name: "Burrata & Heirloom", desc: "Fresh burrata, heirloom tomatoes, basil oil, sea salt", price: "$16" },
      { name: "Seared Scallops", desc: "Pan-seared scallops, cauliflower purée, crispy pancetta", price: "$22" },
    ],
  },
  {
    category: "Mains",
    items: [
      { name: "Filet Mignon", desc: "8oz tenderloin, red wine reduction, truffle mashed potato", price: "$52" },
      { name: "Atlantic Salmon", desc: "Herb-crusted salmon, asparagus, lemon beurre blanc", price: "$38" },
      { name: "Duck Confit", desc: "Slow-cooked duck leg, cherry jus, roasted root vegetables", price: "$44" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Chocolate Fondant", desc: "Warm lava cake, vanilla bean ice cream, gold leaf", price: "$14" },
      { name: "Crème Brûlée", desc: "Classic vanilla custard, caramelized sugar crust", price: "$12" },
      { name: "Cheese Selection", desc: "Artisan cheeses, honeycomb, seasonal fruit compote", price: "$16" },
    ],
  },
];

const reviews = [
  { name: "Alexandra M.", rating: 5, text: "An extraordinary dining experience. Every dish was a masterpiece — the filet mignon melted in my mouth. Truly world-class.", date: "March 2024" },
  { name: "James R.", rating: 5, text: "The ambiance is unmatched. Perfect for celebrating special occasions. The sommelier's wine pairing was spot on.", date: "February 2024" },
  { name: "Sophie L.", rating: 5, text: "We've dined here three times now. Consistently exceptional food, impeccable service, and a warm, elegant atmosphere.", date: "January 2024" },
];

const galleryImages = [
  { src: HERO_IMG, alt: "Restaurant interior" },
  { src: STEAK_IMG, alt: "Filet mignon" },
  { src: DESSERT_IMG, alt: "Chocolate fondant" },
  { src: SALMON_IMG, alt: "Atlantic salmon" },
];

const hours = [
  { day: "Monday – Thursday", time: "5:00 PM – 10:00 PM" },
  { day: "Friday – Saturday", time: "5:00 PM – 11:00 PM" },
  { day: "Sunday", time: "4:00 PM – 9:00 PM" },
  { day: "Lunch (Fri – Sun)", time: "12:00 PM – 3:00 PM" },
];

export default function Index() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#1A1612]" style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#1A1612]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="text-white">
            <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl font-light tracking-[0.2em] text-white">MAISON</span>
          </button>
          <div className="hidden md:flex items-center gap-8">
            {["menu","about","gallery","reviews","hours","contact"].map(s => (
              <button key={s} onClick={() => scrollTo(s)}
                className="text-white/80 hover:text-[#C9A84C] uppercase text-xs tracking-[0.15em] transition-colors duration-300">
                {s}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")}
              className="bg-[#C9A84C] text-white px-5 py-2 text-xs tracking-[0.15em] uppercase hover:bg-[#b8963d] transition-colors duration-300">
              Reserve
            </button>
          </div>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#1A1612] px-6 pb-6 flex flex-col gap-4">
            {["menu","about","gallery","reviews","hours","contact"].map(s => (
              <button key={s} onClick={() => scrollTo(s)}
                className="text-white/80 hover:text-[#C9A84C] uppercase text-xs tracking-[0.15em] text-left transition-colors">
                {s}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")}
              className="bg-[#C9A84C] text-white px-5 py-2 text-xs tracking-[0.15em] uppercase w-fit">
              Reserve a Table
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Maison Restaurant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1612]/60 via-[#1A1612]/40 to-[#1A1612]/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-[#C9A84C] uppercase text-xs tracking-[0.4em] mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Fine Dining Experience
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-white text-7xl md:text-9xl font-light tracking-[0.15em] mb-6 opacity-0 animate-fade-in-up"
            style2={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            MAISON
          </h1>
          <div className="flex items-center justify-center gap-4 mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            <div className="h-px w-16 bg-[#C9A84C]" />
            <span className="text-white/70 text-sm tracking-[0.2em] uppercase">Est. 2018</span>
            <div className="h-px w-16 bg-[#C9A84C]" />
          </div>
          <p className="text-white/80 text-lg font-light max-w-md mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            Where every dish tells a story of craft, passion, and refined taste
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
            <button onClick={() => scrollTo("menu")}
              className="bg-[#C9A84C] text-white px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#b8963d] transition-colors duration-300">
              View Menu
            </button>
            <button onClick={() => scrollTo("contact")}
              className="border border-white text-white px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-[#1A1612] transition-colors duration-300">
              Reserve a Table
            </button>
          </div>
        </div>
        <button onClick={() => scrollTo("menu")} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <Icon name="ChevronDown" size={28} />
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 bg-[#1A1612]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#C9A84C] uppercase text-xs tracking-[0.4em] mb-4">Our Story</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white text-5xl md:text-6xl font-light leading-tight mb-6">
              A Passion for<br /><em>Exceptional</em> Cuisine
            </h2>
            <div className="h-px w-16 bg-[#C9A84C] mb-8" />
            <p className="text-white/60 leading-relaxed mb-6 text-sm">
              Founded in 2018, Maison was born from a simple belief: that dining is one of life's greatest pleasures. 
              Our chef brings together seasonal ingredients from local farms and artisan producers to create menus 
              that celebrate both tradition and innovation.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Every detail — from the hand-picked tableware to the curated wine list — is chosen with care, 
              ensuring each visit is a memory worth cherishing.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[["6+", "Years of Excellence"], ["12k+", "Happy Guests"], ["4", "Awards Won"]].map(([num, label]) => (
                <div key={label} className="border-t border-[#C9A84C]/30 pt-4">
                  <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#C9A84C] text-3xl font-light">{num}</div>
                  <div className="text-white/50 text-xs uppercase tracking-widest mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={HERO_IMG} alt="Restaurant interior" className="w-full h-96 md:h-[520px] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-[#C9A84C] p-6 hidden md:block">
              <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white text-2xl italic">"Food is art,<br />art is life."</p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-28 bg-[#F7F4EF]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#C9A84C] uppercase text-xs tracking-[0.4em] mb-4">Culinary Journey</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#1A1612] text-5xl md:text-6xl font-light mb-6">Our Menu</h2>
            <div className="h-px w-16 bg-[#C9A84C] mx-auto" />
          </div>

          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {menuItems.map((cat, i) => (
              <button key={i} onClick={() => setActiveMenu(i)}
                className={`px-8 py-3 text-xs uppercase tracking-[0.2em] transition-all duration-300 ${activeMenu === i ? "bg-[#1A1612] text-white" : "bg-white text-[#1A1612] border border-[#1A1612]/20 hover:border-[#C9A84C]"}`}>
                {cat.category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
            {menuItems[activeMenu].items.map((item, i) => (
              <div key={i} className="py-6 border-b border-[#1A1612]/10 group">
                <div className="flex justify-between items-start mb-2">
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl font-light group-hover:text-[#C9A84C] transition-colors duration-300">{item.name}</h3>
                  <span className="text-[#C9A84C] font-medium ml-4 shrink-0">{item.price}</span>
                </div>
                <p className="text-[#1A1612]/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#1A1612] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white text-2xl font-light">Ready to Order?</p>
              <p className="text-white/50 text-xs mt-1 tracking-wide">Order online for pickup or delivery</p>
            </div>
            <button className="bg-[#C9A84C] text-white px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#b8963d] transition-colors whitespace-nowrap">
              Order Online
            </button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#C9A84C] uppercase text-xs tracking-[0.4em] mb-4">Our World</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#1A1612] text-5xl md:text-6xl font-light mb-6">Gallery</h2>
            <div className="h-px w-16 bg-[#C9A84C] mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className={`overflow-hidden ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                <img src={img.src} alt={img.alt}
                  className={`w-full object-cover transition-transform duration-700 hover:scale-105 ${i === 0 ? "h-80 md:h-full" : "h-44"}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-28 bg-[#1A1612]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#C9A84C] uppercase text-xs tracking-[0.4em] mb-4">What Guests Say</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white text-5xl md:text-6xl font-light mb-6">Reviews</h2>
            <div className="h-px w-16 bg-[#C9A84C] mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 hover:border-[#C9A84C]/40 transition-colors duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Icon key={j} name="Star" size={14} className="text-[#C9A84C] fill-[#C9A84C]" />
                  ))}
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white text-lg font-light leading-relaxed mb-6 italic">"{r.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#C9A84C] text-sm font-medium">{r.name}</span>
                  <span className="text-white/30 text-xs">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section id="hours" className="py-28 bg-[#F7F4EF]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#C9A84C] uppercase text-xs tracking-[0.4em] mb-4">We're Open</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#1A1612] text-5xl md:text-6xl font-light mb-6">Hours</h2>
            <div className="h-px w-16 bg-[#C9A84C] mx-auto" />
          </div>
          <div className="bg-white shadow-sm">
            {hours.map((h, i) => (
              <div key={i} className={`flex justify-between items-center px-10 py-6 ${i !== hours.length - 1 ? "border-b border-[#1A1612]/10" : ""}`}>
                <span className="text-[#1A1612]/60 text-sm tracking-wide">{h.day}</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#1A1612] text-xl font-light">{h.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3 justify-center text-[#1A1612]/50 text-sm">
            <Icon name="Info" size={14} />
            <span>Holiday hours may vary. Call ahead to confirm.</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 bg-[#1A1612]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-[#C9A84C] uppercase text-xs tracking-[0.4em] mb-4">Get in Touch</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white text-5xl md:text-6xl font-light mb-6">Reserve a<br /><em>Table</em></h2>
            <div className="h-px w-16 bg-[#C9A84C] mb-10" />
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#C9A84C]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="MapPin" size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium mb-1">Location</p>
                  <p className="text-white/50 text-sm leading-relaxed">24 Rue de la Paix<br />New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#C9A84C]/40 flex items-center justify-center shrink-0">
                  <Icon name="Phone" size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium mb-1">Reservations</p>
                  <p className="text-white/50 text-sm">+1 (212) 555-0192</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#C9A84C]/40 flex items-center justify-center shrink-0">
                  <Icon name="Mail" size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium mb-1">Email</p>
                  <p className="text-white/50 text-sm">reservations@maison-nyc.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-8">
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white text-3xl font-light mb-8">Make a Reservation</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">First Name</label>
                  <input type="text" placeholder="John"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" />
                </div>
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">Last Name</label>
                  <input type="text" placeholder="Smith"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">Email</label>
                <input type="email" placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">Date</label>
                  <input type="date"
                    className="w-full bg-white/5 border border-white/10 text-white/60 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" />
                </div>
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">Guests</label>
                  <select className="w-full bg-white/5 border border-white/10 text-white/60 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors bg-[#1A1612]">
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">Special Requests</label>
                <textarea rows={3} placeholder="Allergies, special occasions..."
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors resize-none" />
              </div>
              <button className="w-full bg-[#C9A84C] text-white py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#b8963d] transition-colors duration-300 mt-2">
                Confirm Reservation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F0D0A] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white text-2xl tracking-[0.3em] font-light">MAISON</span>
            <div className="flex gap-8">
              {["menu","about","gallery","reviews","hours","contact"].map(s => (
                <button key={s} onClick={() => scrollTo(s)}
                  className="text-white/40 hover:text-[#C9A84C] uppercase text-xs tracking-widest transition-colors">
                  {s}
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              {["Instagram","Facebook","Twitter"].map(s => (
                <button key={s} className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
                  <Icon name={s} size={14} fallback="Globe" />
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center text-white/20 text-xs tracking-widest">
            © 2024 MAISON. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

    </div>
  );
}
