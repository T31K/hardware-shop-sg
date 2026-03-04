const PHOTOS = {
  photo1:
    "https://lh3.googleusercontent.com/place-photos/AL8-SNHhqThvyVILUuqtA0Sg4A0EDUnlsr89cRj8VIm2c3iOjzrQBOIbYm4Aq4lzWUNmTdR3MLJmjuvh7SjrcaOmSJFG27-8N3NiSHm_aVFgF40UpkGaSUR_eJ0ZEQ1yu7WVI_g8MLNw7xuInFiyZ9c=s4800-w800",
  photo2:
    "https://lh3.googleusercontent.com/place-photos/AL8-SNGxvJFg8AF3p7De8k9bllq4d9kKIglqevJYWo9IB0LGKzL0xs8miuzc5KVlYdwsWKXpH2WVRppp7a_jqnrmsDhJHh_pHthWKddp-uq0x6S4sjOMPOJNk4sZqYPhQv17JX5ahtEK2N5OHg=s4800-w800",
  photo3:
    "https://lh3.googleusercontent.com/place-photos/AL8-SNEOaovfCwJH-a2ctOUPFysNsWDvj_5gINhBkity5LfdSWta4CYla81swXigFOQH_pOu3zExLFe595td_qhmhlioo5EN2BDILIy-Q_CC_1iGoHLz33Lyg9m61yVQ7q1pAhXHvfi4aAYrl3qjz1s=s4800-w800",
};

const PRODUCTS = [
  { name: "Hand Tools", icon: "🔧" },
  { name: "Power Tools", icon: "⚡" },
  { name: "Fasteners", icon: "🔩" },
  { name: "Paint & Coatings", icon: "🎨" },
  { name: "Pipes & Fittings", icon: "🚿" },
  { name: "Sealants", icon: "🧴" },
  { name: "Electrical", icon: "💡" },
  { name: "Building Materials", icon: "🏗️" },
];

const HOURS = [
  { day: "MON", hours: "8:30 – 18:00" },
  { day: "TUE", hours: "8:30 – 18:00" },
  { day: "WED", hours: "8:30 – 18:00" },
  { day: "THU", hours: "9:00 – 17:00" },
  { day: "FRI", hours: "9:00 – 17:00" },
  { day: "SAT", hours: "9:00 – 17:00" },
  { day: "SUN", hours: "CLOSED" },
];

export default function TampinesHardware() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* NAV */}
      <nav className="border-b border-zinc-800 bg-zinc-950/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-yellow-400" />
            <span className="text-lg font-black tracking-tight uppercase">
              Tampines Hardware
            </span>
          </div>
          <div className="hidden sm:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
            <a
              href="#about"
              className="hover:text-yellow-400 transition-colors"
            >
              About
            </a>
            <a
              href="#products"
              className="hover:text-yellow-400 transition-colors"
            >
              Products
            </a>
            <a
              href="#gallery"
              className="hover:text-yellow-400 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#hours"
              className="hover:text-yellow-400 transition-colors"
            >
              Hours
            </a>
            <a
              href="#contact"
              className="hover:text-yellow-400 transition-colors"
            >
              Find Us
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-950 min-h-[90vh] flex items-end">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src={PHOTOS.photo1}
            alt="Tampines Hardware"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32 w-full">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] mb-6">
            10 Chai Chee Road · Singapore 467010
          </p>
          <h1 className="text-7xl sm:text-[10rem] font-black uppercase leading-none tracking-tighter text-white mb-8">
            TAM
            <br />
            <span className="text-yellow-400">PINES</span>
            <br />
            HARD
            <br />
            WARE
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors"
            >
              Get Directions
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-3 border border-zinc-600 hover:border-yellow-400 hover:text-yellow-400 text-zinc-400 font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors"
            >
              What We Sell
            </a>
          </div>
        </div>

        {/* Corner tag */}
        <div className="absolute top-8 right-6 hidden sm:block text-right">
          <p className="text-zinc-500 text-xs uppercase tracking-widest">
            Open Mon–Sat
          </p>
          <p className="text-zinc-500 text-xs uppercase tracking-widest">
            Closed Sun
          </p>
        </div>
      </section>

      {/* TICKER BAR */}
      <div className="bg-yellow-400 text-zinc-950 py-3 overflow-hidden">
        <p className="text-xs font-black uppercase tracking-widest text-center">
          Tools &nbsp;·&nbsp; Building Materials &nbsp;·&nbsp; Paint
          &nbsp;·&nbsp; Fasteners &nbsp;·&nbsp; Pipes &amp; Fittings
          &nbsp;·&nbsp; Sealants &nbsp;·&nbsp; Electrical &nbsp;·&nbsp; Hardware
        </p>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Est. Chai Chee
            </p>
            <h2 className="text-5xl sm:text-6xl font-black uppercase leading-none mb-8">
              No
              <br />
              Frills.
              <br />
              <span className="text-yellow-400">Just</span>
              <br />
              Hardware.
            </h2>
            <div className="w-12 h-1 bg-yellow-400 mb-8" />
            <p className="text-zinc-400 leading-relaxed text-lg mb-4">
              Tampines Hardware is a straight-up, no-nonsense shop for people
              who know what they need — and for those who don&apos;t, we&apos;ll
              figure it out together.
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Tools, building materials, household essentials. If it&apos;s
              hardware, we carry it. Come in, get it done, get on with your day.
            </p>
          </div>
          <div className="relative">
            <img
              src={PHOTOS.photo2}
              alt="Inside the shop"
              className="w-full h-[480px] object-cover grayscale"
            />
            <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-zinc-950 px-6 py-4">
              <p className="text-xs font-black uppercase tracking-widest">
                Open 6 Days
              </p>
              <p className="text-3xl font-black">Mon–Sat</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 border-b border-zinc-800 pb-8">
            <div>
              <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] mb-2">
                Stock
              </p>
              <h2 className="text-5xl font-black uppercase">What We Carry</h2>
            </div>
            <p className="text-zinc-600 text-sm hidden sm:block">
              If we don&apos;t have it, you probably don&apos;t need it.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-800">
            {PRODUCTS.map((p) => (
              <div
                key={p.name}
                className="bg-zinc-950 p-8 hover:bg-zinc-900 transition-colors group"
              >
                <span className="text-3xl block mb-4 grayscale group-hover:grayscale-0 transition-all">
                  {p.icon}
                </span>
                <p className="font-black uppercase text-sm tracking-wider text-zinc-300 group-hover:text-white transition-colors">
                  {p.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] mb-2">
            The Shop
          </p>
          <h2 className="text-5xl font-black uppercase mb-12">Photos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-6 pb-24 max-w-7xl mx-auto">
          <img
            src={PHOTOS.photo1}
            alt="Tampines Hardware"
            className="w-full h-72 object-cover grayscale hover:grayscale-0 transition-all duration-500 md:col-span-2"
          />
          <img
            src={PHOTOS.photo2}
            alt="Shop interior"
            className="w-full h-72 object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <img
            src={PHOTOS.photo3}
            alt="Products"
            className="w-full h-72 object-cover grayscale hover:grayscale-0 transition-all duration-500 md:col-span-3"
          />
        </div>
      </section>

      {/* HOURS */}
      <section id="hours" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] mb-2">
            When
          </p>
          <h2 className="text-5xl font-black uppercase mb-12">Opening Hours</h2>
          <div className="grid grid-cols-7 gap-1">
            {HOURS.map((h) => (
              <div
                key={h.day}
                className={`p-6 text-center ${h.hours === "CLOSED" ? "bg-zinc-900 text-zinc-700" : "bg-zinc-800 hover:bg-yellow-400 hover:text-zinc-950 transition-colors group"}`}
              >
                <p
                  className={`text-xs font-black uppercase tracking-widest mb-3 ${h.hours === "CLOSED" ? "text-zinc-700" : "text-zinc-400 group-hover:text-zinc-900"}`}
                >
                  {h.day}
                </p>
                <p
                  className={`font-black text-sm leading-snug ${h.hours === "CLOSED" ? "text-zinc-700" : "text-white group-hover:text-zinc-950"}`}
                >
                  {h.hours === "CLOSED" ? "—" : h.hours.replace(" – ", "\n–\n")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] mb-2">
              Find Us
            </p>
            <h2 className="text-5xl font-black uppercase mb-10">Location</h2>
            <div className="space-y-8">
              <div className="border-l-2 border-yellow-400 pl-6">
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">
                  Address
                </p>
                <p className="text-xl font-bold">10 Chai Chee Road</p>
                <p className="text-zinc-400">Singapore 467010</p>
              </div>
              <div className="border-l-2 border-zinc-700 pl-6">
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">
                  Getting Here
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Near Bedok MRT. Accessible via major bus routes along Chai
                  Chee Road.
                </p>
              </div>
              <div className="border-l-2 border-zinc-700 pl-6">
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">
                  Hours
                </p>
                <p className="text-zinc-400 text-sm">
                  Mon – Wed: 8:30 AM – 6:00 PM
                </p>
                <p className="text-zinc-400 text-sm">
                  Thu – Sat: 9:00 AM – 5:00 PM
                </p>
                <p className="text-zinc-600 text-sm">Sun: Closed</p>
              </div>
              <a
                href="https://maps.app.goo.gl/ot1djgSoeB8iJrxC8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors"
              >
                Open in Google Maps
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="h-80 md:h-auto min-h-[320px]">
            <iframe
              title="Tampines Hardware Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d103.9245!3d1.3273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d52c0c14b87%3A0x2bf007f2dd683730!2sTampines%20Hardware!5e0!3m2!1sen!2ssg!4v1741100000000!5m2!1sen!2ssg"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg)",
                minHeight: "320px",
              }}
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
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-yellow-400" />
            <div>
              <p className="font-black uppercase tracking-tight text-white">
                Tampines Hardware
              </p>
              <p className="text-zinc-600 text-xs">
                10 Chai Chee Road · Singapore 467010
              </p>
            </div>
          </div>
          <p className="text-zinc-700 text-xs">
            &copy; {new Date().getFullYear()} Tampines Hardware. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
