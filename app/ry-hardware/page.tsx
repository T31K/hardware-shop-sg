const PHOTOS = {
  p1: "https://lh3.googleusercontent.com/places/ANXAkqH7Un1g5YPnI3F7oX-afYh22IqxVlUId2cT7VU4IR9QN0JX89vNChsdzQaP-hfFafNsDTByP-9ttjD9wsDcNy3eweCOdz20LL4=s4800-w1200",
  p2: "https://lh3.googleusercontent.com/place-photos/AL8-SNFlGmA0q3BTu0a4omsB2MJG3ObvyElTeseSlxldorrO9_7tQSCVlu0xK-HlZwdHdnfro8DF1b2qVqa9NBDjtZijsmpPTbqss3487z2oBfsB16JTkoaI0ef3-FWQCsTsKX6QLc2C7rU8rxJcf4AjHWtpLQ=s4800-w1200",
  p3: "https://lh3.googleusercontent.com/places/ANXAkqEZ8zqsc3ulbgDuDC7u6UftrFizvH73TtqSaaHChUGz_9Gw5JblxPF9oX1zvPVVNV8PdoGwYwuCQhCGgg94kymy83ymZ-3ws3M=s4800-w1200",
};

const REVIEWS = [
  {
    name: "Shruti Gupta",
    rating: 5,
    text: "Variety of hardware products at affordable prices — everything you may need for home repair. The owner David is very friendly and nice. Highly recommend.",
  },
  {
    name: "gaurav kelshikar",
    rating: 5,
    text: "Uncle always supports and guides what is best for the household with many options. Son is calm, understands the need and comes up with the best solution. Repair rates are very good compared to others in the market.",
  },
  {
    name: "Sangeetha Loretta",
    rating: 5,
    text: "Very helpful and friendly. Excellent in their household jobs. Very knowledgeable and go the extra mile to help. Prices very reasonable. Ree & Ying came over and fixed the electric wiring and switch. Thank you!",
  },
];

export default function RYHardware() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-lime-400 font-black text-2xl leading-none">RY</span>
              <div className="w-px h-6 bg-slate-600 mx-1" />
              <span className="text-white font-bold text-sm leading-tight">Hardware<br />&amp; Contractor</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#services" className="hover:text-lime-400 transition-colors">Services</a>
            <a href="#gallery"  className="hover:text-lime-400 transition-colors">Gallery</a>
            <a href="#reviews"  className="hover:text-lime-400 transition-colors">Reviews</a>
            <a href="#contact"  className="hover:text-lime-400 transition-colors">Find Us</a>
          </div>
          <a
            href="tel:+6589504217"
            className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-slate-950 font-black text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
            Call Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img src={PHOTOS.p1} alt="RY Hardware" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          {/* Location pill */}
          <div className="inline-flex items-center gap-2 border border-slate-700 rounded-full px-4 py-2 text-xs text-slate-400 font-bold uppercase tracking-widest mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
            122 Bedok North Street 2 · #01-104
          </div>

          {/* Main headline */}
          <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-black leading-none tracking-tighter mb-6">
            <span className="text-white">Hardware</span><br />
            <span className="text-white">&amp; Home</span><br />
            <span className="text-lime-400">Repairs.</span>
          </h1>

          {/* The big differentiator */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10 mb-14">
            <div className="bg-lime-400 text-slate-950 px-8 py-5 rounded-2xl">
              <p className="text-xs font-black uppercase tracking-widest mb-1">Open Every Day</p>
              <p className="text-4xl font-black leading-none">8<span className="text-2xl">AM</span> – 10:30<span className="text-2xl">PM</span></p>
            </div>
            <div className="space-y-1">
              <p className="text-slate-400 text-sm">When your tap bursts at 9pm.</p>
              <p className="text-slate-400 text-sm">When your light trips on a Sunday.</p>
              <p className="text-white font-bold text-sm">We&apos;re open. Call us.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+6589504217"
              className="inline-flex items-center gap-3 bg-lime-400 hover:bg-lime-300 text-slate-950 font-black px-8 py-4 rounded-full transition-colors text-sm uppercase tracking-widest"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              8950 4217
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 border border-slate-600 hover:border-lime-400 hover:text-lime-400 text-slate-300 font-bold px-8 py-4 rounded-full transition-colors text-sm uppercase tracking-widest"
            >
              Our Services
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mt-16 pt-16 border-t border-slate-800 max-w-lg">
            <div>
              <p className="text-3xl font-black text-lime-400">4.6★</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Google Rating</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">7</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Days a Week</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">14.5<span className="text-xl">hr</span></p>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Open Daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-lime-400 text-xs font-black uppercase tracking-[0.3em] mb-3">What We Do</p>
            <h2 className="text-5xl font-black">Two Ways We Help</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">

            {/* Hardware store */}
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden p-10 border border-slate-800 hover:border-lime-400/40 transition-colors group">
              <div className="text-6xl mb-8">🔧</div>
              <p className="text-lime-400 text-xs font-black uppercase tracking-[0.3em] mb-3">Walk-In Store</p>
              <h3 className="text-3xl font-black mb-5">Hardware &amp; Supplies</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Everything for your home repair and improvement needs. Tools, fasteners,
                electrical parts, plumbing fittings, paint and more — all at affordable prices.
              </p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-slate-300">
                {["Hand & power tools", "Electrical supplies", "Plumbing fittings", "Paint & coatings", "Fasteners & fixings", "Lighting fixtures", "Door hardware", "Household essentials"].map(i => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-lime-400 flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contractor */}
            <div className="relative bg-lime-400 rounded-2xl overflow-hidden p-10 group hover:bg-lime-300 transition-colors">
              <div className="text-6xl mb-8">⚡</div>
              <p className="text-slate-700 text-xs font-black uppercase tracking-[0.3em] mb-3">Home Services</p>
              <h3 className="text-3xl font-black text-slate-950 mb-5">Contractor &amp; Repairs</h3>
              <p className="text-slate-700 leading-relaxed mb-8">
                Ree &amp; Ying come to you. Electrical work, lighting installation,
                water heater replacement — done properly, at rates far better than the market.
              </p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-slate-800">
                {["Electrical wiring", "Water heater install", "LED lighting", "Switch replacement", "Cove lighting", "Power points", "Home assessment", "Emergency repairs"].map(i => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-slate-600 flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href="tel:+6589504217"
                className="inline-flex items-center gap-2 mt-8 bg-slate-950 hover:bg-slate-800 text-white font-black text-sm px-6 py-3 rounded-full transition-colors uppercase tracking-widest"
              >
                Book a Visit →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-lime-400 text-xs font-black uppercase tracking-[0.3em] mb-3">The Store</p>
          <h2 className="text-5xl font-black mb-12">See For Yourself</h2>
          <div className="grid grid-cols-12 gap-3">
            <img src={PHOTOS.p2} alt="RY Hardware interior" className="col-span-12 md:col-span-8 h-72 w-full object-cover rounded-2xl" />
            <img src={PHOTOS.p3} alt="Hardware products" className="col-span-12 md:col-span-4 h-72 w-full object-cover rounded-2xl" />
            <img src={PHOTOS.p1} alt="Store front" className="col-span-12 h-64 w-full object-cover rounded-2xl object-top" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-lime-400 text-xs font-black uppercase tracking-[0.3em] mb-3">What Customers Say</p>
              <h2 className="text-5xl font-black">4.6 Stars · 32 Reviews</h2>
            </div>
            <a
              href="https://maps.app.goo.gl/EdLPs6bheqfTZu3o8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-lime-400 text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap pb-2"
            >
              See all on Google →
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {REVIEWS.map((r, i) => (
              <div
                key={r.name}
                className={`p-8 rounded-2xl flex flex-col gap-5 ${i === 0 ? "bg-lime-400 text-slate-950" : "bg-slate-900 border border-slate-800"}`}
              >
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className={`text-lg ${i === 0 ? "text-slate-700" : "text-lime-400"}`}>★</span>
                  ))}
                </div>
                <p className={`text-sm leading-relaxed flex-1 italic ${i === 0 ? "text-slate-700" : "text-slate-300"}`}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className={`text-xs font-black uppercase tracking-widest ${i === 0 ? "text-slate-600" : "text-slate-500"}`}>
                  — {r.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOURS + CONTACT */}
      <section id="contact" className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Hours */}
          <div>
            <p className="text-lime-400 text-xs font-black uppercase tracking-[0.3em] mb-3">Opening Hours</p>
            <h2 className="text-5xl font-black mb-10">Always Open</h2>
            <div className="rounded-2xl overflow-hidden border border-slate-700">
              {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((day, i) => (
                <div key={day} className={`flex justify-between items-center px-6 py-4 ${i < 6 ? "border-b border-slate-800" : ""}`}>
                  <span className="font-semibold text-slate-300">{day}</span>
                  <span className="font-black text-lime-400 text-sm">8:00 AM – 10:30 PM</span>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-lime-400/10 border border-lime-400/30 rounded-xl px-5 py-4">
              <p className="text-lime-400 text-sm font-bold">
                Open 7 days · 14.5 hours a day · Including public holidays
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-lime-400 text-xs font-black uppercase tracking-[0.3em] mb-3">Find Us</p>
            <h2 className="text-5xl font-black mb-10">Get In Touch</h2>
            <div className="space-y-7">
              <div className="border-l-2 border-lime-400 pl-6">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Address</p>
                <p className="text-xl font-bold">122 Bedok North Street 2</p>
                <p className="text-slate-400">#01-104, Singapore 460122</p>
              </div>
              <div className="border-l-2 border-slate-700 pl-6">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+6589504217" className="text-3xl font-black text-lime-400 hover:text-lime-300 transition-colors">
                  8950 4217
                </a>
              </div>
              <div className="border-l-2 border-slate-700 pl-6">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Getting Here</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Ground floor of Block 122, Bedok North Street 2, unit #01-104.
                  Accessible from Bedok MRT and bus services along Bedok North.
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/EdLPs6bheqfTZu3o8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-lime-400 hover:bg-lime-300 text-slate-950 font-black text-sm px-8 py-4 rounded-full transition-colors uppercase tracking-widest"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <div className="h-64">
        <iframe
          title="RY Hardware Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7!2d103.9376836!3d1.3286168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3da945ef66ab%3A0xc5e27ddfe5c8a448!2sRY%20hardware!5e0!3m2!1sen!2ssg!4v1741100000000!5m2!1sen!2ssg"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* FOOTER */}
      <footer className="bg-black border-t border-slate-800 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lime-400 font-black text-2xl">RY</span>
            <div className="w-px h-6 bg-slate-700" />
            <div>
              <p className="font-bold text-white text-sm">Hardware &amp; Contractor</p>
              <p className="text-slate-600 text-xs">122 Bedok North Street 2 · #01-104 · Singapore 460122</p>
            </div>
          </div>
          <p className="text-slate-700 text-xs">&copy; {new Date().getFullYear()} RY Hardware &amp; Contractor. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
