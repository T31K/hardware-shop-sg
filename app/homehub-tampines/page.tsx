const PHOTOS = {
  p1: "https://lh3.googleusercontent.com/place-photos/AL8-SNHRYZ0uAQkC-ddfAArZXPHc5qRGAaXOS45hWGdfk154m74IdWPmcwZaiHk5O3OnTcb-WhYKFb-tL3dZMcCVcqDmpGX3nAG9I9zMJrIV9OcACZaGGO_JCiz71Tfzyu9oEtxyJtVfviha7Sssbg=s4800-w1200",
  p2: "https://lh3.googleusercontent.com/place-photos/AL8-SNGmTth58mpUte1uhtsRlM6WaVg50RMQORdVjOktqBjVZ0KbNK025tVQA1Izoeb8Vb0HBj3VyCAEQn7u24wIb2s2Hc5IdGRn96_76Mh-6DljFmkm1UdXTbbhWbG3KwHGmMorbcEAdPhAATwJBw=s4800-w1200",
  p3: "https://lh3.googleusercontent.com/place-photos/AL8-SNFVNCAF3LpkybPLm-0uXQqF-DarkjpOhxpkxm5NbMZsDbpojrzFJ-FMd-WHeMvNz0fIw1cCozRc1f7dWI_JKZseHPz0Cl-EpYA8eeSyL5BA5rOFydVhH122VhKgQkfuNbjYsUUmOHsbnEhscQ=s4800-w1200",
  p4: "https://lh3.googleusercontent.com/place-photos/AL8-SNFrhITvFiEiSeXe886NMnQQSPirPBjAl986XyZ0-lPOKz7nZBm--H9kGsUzn8gWcrta5UHgVeGJEd42RE6mPBABtwqBz8VRgjoNHZMeOr-RTrdrSUbRvuhWMBOSjoY2c9sfN45QkSmwKMXBcsg=s4800-w1200",
  p5: "https://lh3.googleusercontent.com/place-photos/AL8-SNEzC6HleuFKcZQ3qlgiwpns6IsH5AmyQXcgpWJ3XUIPfqHuQ2bJ6BT1Ez6VIb0vg2tzEmknZuSCne7v4jnIPtnba2U-6UPv67HEs1SznpNWJ2HhjKOOiQmaYlzPvTKxKxJ349sYC5IXI-rPUg=s4800-w1200",
};

const REVIEWS = [
  {
    name: "f a",
    rating: 4,
    text: "Excellent selection of plumbing fittings and parts. They have in-house handyman that you can contact to get works done. Cashier/staff is friendly and polite.",
  },
  {
    name: "Winson Ho",
    rating: 5,
    text: "Mr Boon came to my home and advised on which products are necessary, which are not. Friendly, willing to answer enquiries and provide timely installation at a reasonable price.",
  },
  {
    name: "Sally Gan",
    rating: 5,
    text: "Excellent service! Their staff's knowledge on the products I was looking for was impressive. Handyman service provides installation at a reasonable price.",
  },
  {
    name: "Jim",
    rating: 5,
    text: "Staff friendly and knowledgeable.",
  },
];

const HOURS = [
  { day: "MON", hours: "9:30 – 21:30" },
  { day: "TUE", hours: "9:30 – 21:30" },
  { day: "WED", hours: "9:30 – 21:30" },
  { day: "THU", hours: "9:30 – 21:30" },
  { day: "FRI", hours: "9:30 – 21:30" },
  { day: "SAT", hours: "9:30 – 21:30" },
  { day: "SUN", hours: "9:30 – 21:00" },
];

export default function HomeHubTampines() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">

      {/* NAV */}
      <nav className="border-b border-zinc-800 bg-zinc-950/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-cyan-400 flex items-center justify-center">
              <span className="text-zinc-950 font-black text-xs">HH</span>
            </div>
            <div>
              <span className="text-base font-black tracking-tight uppercase text-white">Home Hub Store</span>
              <span className="text-zinc-500 text-xs ml-2 hidden sm:inline">Pte Ltd</span>
            </div>
          </div>
          <div className="hidden sm:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-cyan-400 transition-colors">Gallery</a>
            <a href="#reviews" className="hover:text-cyan-400 transition-colors">Reviews</a>
            <a href="#hours" className="hover:text-cyan-400 transition-colors">Hours</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Find Us</a>
          </div>
        </div>
      </nav>

      {/* HERO — horizontal split, no full-bleed text stack */}
      <section className="relative bg-zinc-950 min-h-screen grid md:grid-cols-[1fr_1fr] overflow-hidden">
        {/* Left panel */}
        <div className="flex flex-col justify-center px-10 py-24 md:py-0 relative z-10">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em]">878c Tampines Ave 8 · #01-69</span>
          </div>
          <h1 className="text-6xl sm:text-7xl font-black uppercase leading-[0.9] mb-6">
            Home<br />
            <span className="text-cyan-400">Hub</span><br />
            Store
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-sm mb-10">
            Hardware, plumbing, tools — and an in-house handyman team.
            Everything for your home, under one roof.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+6567850106"
              className="inline-flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-black uppercase tracking-widest text-sm px-7 py-4 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              6785 0106
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-zinc-700 hover:border-cyan-400 hover:text-cyan-400 text-zinc-400 font-bold uppercase tracking-widest text-sm px-7 py-4 transition-colors"
            >
              Get Directions
            </a>
          </div>
          {/* Open badge */}
          <div className="mt-10 inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-5 py-3 w-fit">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Open 7 Days · Until 9:30 PM</span>
          </div>
        </div>

        {/* Right panel — photo mosaic */}
        <div className="hidden md:grid grid-rows-2 grid-cols-2 gap-1 h-screen">
          <img src={PHOTOS.p1} alt="Home Hub Store" className="object-cover w-full h-full col-span-2 row-span-1" />
          <img src={PHOTOS.p2} alt="Store interior" className="object-cover w-full h-full" />
          <img src={PHOTOS.p3} alt="Products" className="object-cover w-full h-full" />
        </div>
      </section>

      {/* STATS BAR */}
      <div className="bg-cyan-400 text-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-black">4.1★</p>
            <p className="text-xs font-bold uppercase tracking-widest mt-1">Google Rating</p>
          </div>
          <div>
            <p className="text-3xl font-black">7</p>
            <p className="text-xs font-bold uppercase tracking-widest mt-1">Days a Week</p>
          </div>
          <div>
            <p className="text-3xl font-black">9:30</p>
            <p className="text-xs font-bold uppercase tracking-widest mt-1">Opens Daily</p>
          </div>
          <div>
            <p className="text-3xl font-black">9:30<span className="text-xl">PM</span></p>
            <p className="text-xs font-bold uppercase tracking-widest mt-1">Closes (Mon–Sat)</p>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-cyan-400" />
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em]">What We Offer</p>
            </div>
            <h2 className="text-5xl font-black uppercase">Products &amp; Services</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-1">
            {/* Hardware block */}
            <div className="bg-zinc-800 p-10 hover:bg-zinc-800/80 transition-colors">
              <div className="text-4xl mb-6">🔧</div>
              <h3 className="text-2xl font-black uppercase mb-4">Hardware &amp; Tools</h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                {["Plumbing fittings & parts", "Hand & power tools", "Fasteners & fixings", "Paint & coatings", "Pipes & fittings", "Sealants & adhesives", "Electrical supplies", "Building materials"].map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            {/* Handyman block */}
            <div className="bg-zinc-950 border border-cyan-400/30 p-10 hover:border-cyan-400/60 transition-colors">
              <div className="text-4xl mb-6">🏠</div>
              <h3 className="text-2xl font-black uppercase mb-2">In-House Handyman</h3>
              <div className="h-px w-10 bg-cyan-400 mb-6" />
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Don&apos;t just buy the part — get it installed. Our in-house handyman team
                handles home repairs and installations at reasonable rates. Just ask at the counter.
              </p>
              <ul className="space-y-2 text-zinc-400 text-sm">
                {["Plumbing installation & repair", "Fixture replacement", "General home repairs", "On-site assessment & advice"].map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href="tel:+6567850106"
                className="inline-flex items-center gap-2 mt-8 text-cyan-400 text-sm font-bold uppercase tracking-widest hover:text-cyan-300 transition-colors"
              >
                Call to enquire
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-cyan-400" />
            <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em]">Inside the Store</p>
          </div>
          <h2 className="text-5xl font-black uppercase mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            <img src={PHOTOS.p4} alt="Store shelves" className="w-full h-56 object-cover hover:opacity-80 transition-opacity" />
            <img src={PHOTOS.p5} alt="Products" className="w-full h-56 object-cover hover:opacity-80 transition-opacity" />
            <img src={PHOTOS.p1} alt="Store front" className="w-full h-56 object-cover hover:opacity-80 transition-opacity" />
            <img src={PHOTOS.p2} alt="Interior" className="w-full h-56 object-cover hover:opacity-80 transition-opacity md:col-span-2" />
            <img src={PHOTOS.p3} alt="Hardware" className="w-full h-56 object-cover hover:opacity-80 transition-opacity" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-cyan-400" />
            <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em]">Google Reviews</p>
          </div>
          <div className="flex items-end gap-6 mb-14">
            <h2 className="text-5xl font-black uppercase">What Customers Say</h2>
            <p className="text-zinc-500 text-sm pb-2 hidden sm:block">4.1 · 14 reviews</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-zinc-800 p-7 flex flex-col gap-4 hover:bg-zinc-700/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-cyan-400 flex items-center justify-center">
                    <span className="text-zinc-950 font-black text-xs">{r.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <span key={i} className="text-cyan-400 text-sm">★</span>
                    ))}
                  </div>
                </div>
                <p className="font-bold text-sm text-white">{r.name}</p>
                <p className="text-zinc-400 text-xs leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="https://maps.app.goo.gl/aHTZMPcXvN3rgHis9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest hover:text-cyan-300 transition-colors"
            >
              See all reviews on Google Maps
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section id="hours" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-cyan-400" />
            <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em]">Opening Hours</p>
          </div>
          <h2 className="text-5xl font-black uppercase mb-4">Open Every Day</h2>
          <p className="text-zinc-500 text-sm mb-12">Including weekends &amp; public holidays</p>
          <div className="grid grid-cols-7 gap-1">
            {HOURS.map((h, i) => (
              <div
                key={h.day}
                className={`p-6 text-center group hover:bg-cyan-400 hover:text-zinc-950 transition-colors ${i === 6 ? "bg-zinc-800" : "bg-zinc-800"}`}
              >
                <p className="text-xs font-black uppercase tracking-widest mb-3 text-zinc-400 group-hover:text-zinc-900">{h.day}</p>
                <p className="font-black text-xs leading-snug text-white group-hover:text-zinc-950">{h.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-cyan-400" />
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em]">Find Us</p>
            </div>
            <h2 className="text-5xl font-black uppercase mb-10">Location</h2>
            <div className="space-y-8">
              <div>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Address</p>
                <div className="border-l-2 border-cyan-400 pl-5">
                  <p className="text-xl font-bold">878c Tampines Ave 8</p>
                  <p className="text-zinc-400">#01-69, Singapore 523878</p>
                </div>
              </div>
              <div>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Phone</p>
                <div className="border-l-2 border-zinc-700 pl-5">
                  <a href="tel:+6567850106" className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                    +65 6785 0106
                  </a>
                </div>
              </div>
              <div>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Getting Here</p>
                <div className="border-l-2 border-zinc-700 pl-5">
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Located at Tampines Ave 8, #01-69. Near Tampines MRT and bus routes through Tampines Ave 8.
                  </p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/aHTZMPcXvN3rgHis9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors"
              >
                Open in Google Maps
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>
          </div>
          <div className="h-80 md:h-[480px]">
            <iframe
              title="Home Hub Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5!2d103.9294742!3d1.3512098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d99adb5d24f%3A0x2e3ab13fbec5abb!2sHome%20Hub%20Store%20Pte%20Ltd!5e0!3m2!1sen!2ssg!4v1741100000000!5m2!1sen!2ssg"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-cyan-400 flex items-center justify-center">
              <span className="text-zinc-950 font-black text-xs">HH</span>
            </div>
            <div>
              <p className="font-black uppercase tracking-tight text-white text-sm">Home Hub Store Pte Ltd</p>
              <p className="text-zinc-600 text-xs">878c Tampines Ave 8 · #01-69 · Singapore 523878</p>
            </div>
          </div>
          <p className="text-zinc-700 text-xs">&copy; {new Date().getFullYear()} Home Hub Store Pte Ltd. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
