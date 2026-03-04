const PHOTOS = {
  storefront1: "https://lh3.googleusercontent.com/place-photos/AL8-SNHiaAitnK3EpakE_tp_9txLY8ZR7WsNz1H_DQccplak5IRlpnAKaaYUDeLrmRKVfoJ521XfUw0SoPW-Vq4sSfe-SlbKyN0UCC2WJzFu85e8YNAd_fK7fDtJas9MTQe3xdjWnFesQ6o6uEJ3=s4800-w960",
  interior1:   "https://lh3.googleusercontent.com/place-photos/AL8-SNEJ1Gb9pZTy_RodauhHOE_RZJRkeWG4HZRiV62n1Uv5rERRfmzwaUjGZdqC3GqFnT5XXrggj10clHJkuXDgYunoy33GEDeciC1irgsMgajdL4fbbVYAKqoi15zcrDy-ZNW0koD5NgbRATiU=s4800-w1200",
  interior2:   "https://lh3.googleusercontent.com/place-photos/AL8-SNF5PRzUj4c4ulzQNr9D2KqrboOb-TAd_k2te0yQ7f4XdqXdATe3ubL0Gg2d-8d5PwegIVwZaWMMfxQV2XMXXuKmxMCUjze0_mXft4RckAYsrxBDnbk00UhnbrJ8NNKtrUBtvG03qFxWdfZd2ipmh5alNQ=s4800-w960",
  interior3:   "https://lh3.googleusercontent.com/place-photos/AL8-SNEedqC6HX7HIpt8NgGGkO0JTc_cag3r_v3u-ujm75kX8fgdNKE8oFg8w68E1vFZxpMKpnMKqK3B__1r5Mdov5SNTI8doqxkhf0UN0-UfJO5bJUJuWXB93Swmi5YLFTWXuF5wgcyHMXZJeeJ2A=s4800-w960",
  products1:   "https://lh3.googleusercontent.com/place-photos/AL8-SNFj6KGDaE1Qu7xgtXyK2KV25Zi-3oShm2QbX7GA79u7G-Hp9g4OD1kt8KQNgF8K333FCPsuET7G8SLPcbNtqgX4Z5pDoOazRAq0l5mYqrsW6illoVtpjc1FZCtPAVJ01tyu-oMm_t1Ka6lJtp-gmwHKCw=s4800-w1200",
  products2:   "https://lh3.googleusercontent.com/place-photos/AL8-SNHk1Mr8sJqq6EB1ZHY6cieWKphwWDSPa1K3XA6pdQ3Hr_PBRjBWEOogXqgWBeUR77F7IeQvVKGKYXqRzL8tcFL-kCWBWsrt9zDCFOdzAfLmw9g_eskquASQe_4YndXzEidMk4NeBcx18zFZWQmEF2xjxA=s4800-w960",
  products3:   "https://lh3.googleusercontent.com/place-photos/AL8-SNEFXqQL-X_RsNml3e9rp-1A6iokSCj4NWyS-TPoB_R_0SgVMZ0jc083FwvEP6KftJE7Ax5clvGegEjLU7tqNa0n49Q1Id1OHVU-yOWATVhndaCeUA6Pw2SJbFcQFa7zPs9CJyXDRFxCf-PZpw=s4800-w1200",
  products4:   "https://lh3.googleusercontent.com/place-photos/AL8-SNFfwnOruKmTu0KltXu8ytyxaHepUvPgN1lkrWyyNJp8LN14Ps4ti4LQyAQC-EUrGqAzd0rn5vkB40K-qt5RPI1nmDfGt_jVBId0Ubcvt310eYIG_TSr1S88qWomXD0frJX7tNP2xjx4yQDNbUk=s4800-w1200",
};

const REVIEWS = [
  {
    name: "Tabi",
    rating: 5,
    date: "Dec 2024",
    text: "The shop really provides everything you need in a household! Price is really cheap, cheaper than many places. They provide customised Nippon Paint colours and have a machine to customise keys. Boss worked here for 40 years — really knowledgeable and helpful!",
  },
  {
    name: "kelly",
    rating: 5,
    date: "Nov 2025",
    text: "Really impressed with the service. The owner is friendly, patient, and really knows his stuff. I came in unsure of what the exact item was called, but he quickly figured it out. The shop may look small, but it's packed with all the essentials.",
  },
  {
    name: "chetan kishnani",
    rating: 5,
    date: "Nov 2025",
    text: "The owner really knows his stuff and is incredibly helpful. Even though the shop is small, they somehow carry just about everything. I wasn't describing what I needed very well, but the owner immediately understood. I truly appreciate the great service here.",
  },
  {
    name: "LiL Becky",
    rating: 5,
    date: "Dec 2024",
    text: "I visited to help my parents purchase paints and some home equipment. The owner was very friendly, knowledgeable about the products, and well-versed in pricing. Would recommend this shop to my fellow peers.",
  },
  {
    name: "andre aw",
    rating: 5,
    date: "Nov 2025",
    text: "A compact but very well-stocked shop, offering everything from tools and paint supplies to household essentials. Staff are helpful and knowledgeable. There's also a convenient key-cutting service right at the front. A dependable, no-nonsense hardware store.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-brand-blue text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-orange rounded flex items-center justify-center font-bold text-white text-sm">
              CH
            </div>
            <span className="text-lg font-bold tracking-tight">Chin Hoe Hup Kee</span>
          </div>
          <div className="hidden sm:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-brand-orange-light transition-colors">About</a>
            <a href="#services" className="hover:text-brand-orange-light transition-colors">Services</a>
            <a href="#gallery" className="hover:text-brand-orange-light transition-colors">Gallery</a>
            <a href="#reviews" className="hover:text-brand-orange-light transition-colors">Reviews</a>
            <a href="#hours" className="hover:text-brand-orange-light transition-colors">Hours</a>
            <a href="#contact" className="hover:text-brand-orange-light transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero — split layout with real shop photo */}
      <section className="bg-brand-blue text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 min-h-[520px]">
          {/* Left: text */}
          <div className="flex flex-col justify-center px-8 py-16 gap-6">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 rounded-full px-4 py-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
              <span className="text-sm font-medium text-brand-orange-light">Open Now · Tampines</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Chin Hoe Hup Kee<br />
              <span className="text-brand-orange">Hardware</span>
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Serving the Tampines community for over <strong className="text-white">40 years</strong>.
              Tools, paint, key cutting &amp; everything in between.
            </p>
            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex text-yellow-400 text-xl">★★★★<span className="text-yellow-300">★</span></div>
              <span className="font-bold text-lg">4.3</span>
              <span className="text-blue-300 text-sm">· 43 Google Reviews</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:+6567851910"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white font-semibold px-7 py-3 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                6785 1910
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-7 py-3 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                Find Us
              </a>
            </div>
          </div>
          {/* Right: shop photo */}
          <div className="hidden md:block relative overflow-hidden">
            <img
              src={PHOTOS.interior1}
              alt="Inside Chin Hoe Hup Kee Hardware"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-brand-orange text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm font-medium">
          <span>✓ 40+ Years Experience</span>
          <span>✓ Nippon Paint Authorised</span>
          <span>✓ Custom Colour Mixing</span>
          <span>✓ On-Site Key Cutting</span>
          <span>✓ Wholesale Available</span>
        </div>
      </div>

      {/* About */}
      <section id="about" className="py-16 px-4 bg-brand-cream">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">Est. for over 40 years</p>
            <h2 className="text-3xl font-bold text-brand-blue mb-5">
              Your Neighbourhood Hardware Expert
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              What we lack in size, we more than make up for in stock and expertise.
              Our owner has spent over <strong>40 years</strong> in this very shop —
              which means when you walk in not knowing exactly what you need, you
              walk out with exactly the right thing.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We carry <strong>Nippon Paint</strong> with an in-store{" "}
              <strong>custom colour-mixing machine</strong>, a full range of tools,
              hardware, sealants and household essentials, plus an{" "}
              <strong>on-site key-cutting service</strong> right at the front of the
              shop.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Prices are competitive and the advice is free. Whether you&apos;re a
              DIY homeowner, a contractor stocking up, or just need a spare key cut —
              we&apos;ve got you.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img
              src={PHOTOS.storefront1}
              alt="Shop exterior"
              className="rounded-xl object-cover h-48 w-full col-span-2"
            />
            <img
              src={PHOTOS.interior2}
              alt="Shop interior"
              className="rounded-xl object-cover h-36 w-full"
            />
            <img
              src={PHOTOS.products2}
              alt="Products"
              className="rounded-xl object-cover h-36 w-full"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2 text-center">What We Stock</p>
          <h2 className="text-3xl font-bold text-brand-blue mb-10 text-center">
            Products &amp; Services
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Nippon Paint", desc: "Custom colour mixing available in-store", icon: "🎨", color: "bg-red-50 border-red-200 hover:border-red-400" },
              { name: "Tools & Hardware", desc: "Hand tools, fasteners & fittings", icon: "🔧", color: "bg-blue-50 border-blue-200 hover:border-blue-400" },
              { name: "Key Cutting", desc: "On-site key duplication service", icon: "🗝️", color: "bg-yellow-50 border-yellow-200 hover:border-yellow-400" },
              { name: "Sealants & Adhesives", desc: "All sealing and bonding needs", icon: "🧴", color: "bg-green-50 border-green-200 hover:border-green-400" },
              { name: "Wall Coatings", desc: "Interior & exterior paint finishes", icon: "🏠", color: "bg-purple-50 border-purple-200 hover:border-purple-400" },
              { name: "Household Essentials", desc: "Everyday home repair items", icon: "🏡", color: "bg-pink-50 border-pink-200 hover:border-pink-400" },
              { name: "Storage Solutions", desc: "Shelving, bins & organisers", icon: "📦", color: "bg-orange-50 border-orange-200 hover:border-orange-400" },
              { name: "Wholesale", desc: "Bulk orders for contractors & businesses", icon: "🏪", color: "bg-teal-50 border-teal-200 hover:border-teal-400" },
            ].map((s) => (
              <div key={s.name} className={`${s.color} border-2 rounded-xl p-5 text-center transition-all hover:shadow-md`}>
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1 text-sm">{s.name}</h3>
                <p className="text-xs text-gray-500 leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-16 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2 text-center">Inside the Shop</p>
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <img src={PHOTOS.interior1} alt="Shop interior" className="rounded-lg object-cover h-48 w-full md:col-span-2 md:h-64" />
            <img src={PHOTOS.products1} alt="Products on shelf" className="rounded-lg object-cover h-48 w-full" />
            <img src={PHOTOS.interior3} alt="Store aisle" className="rounded-lg object-cover h-48 w-full" />
            <img src={PHOTOS.products3} alt="Hardware products" className="rounded-lg object-cover h-48 w-full" />
            <img src={PHOTOS.products4} alt="Paint section" className="rounded-lg object-cover h-48 w-full" />
            <img src={PHOTOS.products2} alt="Store shelves" className="rounded-lg object-cover h-48 w-full md:col-span-2 md:h-48" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 px-4 bg-brand-cream">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2 text-center">Google Reviews</p>
          <h2 className="text-3xl font-bold text-brand-blue mb-3 text-center">What Customers Say</h2>
          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="text-yellow-400 text-2xl">★★★★</span>
            <span className="text-yellow-300 text-2xl">★</span>
            <span className="text-2xl font-bold text-brand-blue ml-1">4.3</span>
            <span className="text-gray-500 text-sm ml-1">· 43 reviews on Google</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-3 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {r.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{r.name}</p>
                      <p className="text-xs text-gray-400">{r.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-yellow-400 text-base">{"★".repeat(r.rating)}</div>
                <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://maps.app.goo.gl/hYaUnXvL3PQbdH1v5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-brand-blue hover:text-brand-orange font-medium underline underline-offset-4 transition-colors"
            >
              See all reviews on Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section id="hours" className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2 text-center">We&apos;re Open</p>
          <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">Opening Hours</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <table className="w-full">
              <tbody>
                {[
                  { day: "Monday",    hours: "8:00 AM – 5:45 PM", sun: false },
                  { day: "Tuesday",   hours: "8:00 AM – 5:45 PM", sun: false },
                  { day: "Wednesday", hours: "8:00 AM – 5:45 PM", sun: false },
                  { day: "Thursday",  hours: "8:00 AM – 5:45 PM", sun: false },
                  { day: "Friday",    hours: "8:00 AM – 5:45 PM", sun: false },
                  { day: "Saturday",  hours: "8:00 AM – 5:45 PM", sun: false },
                  { day: "Sunday",    hours: "8:00 AM – 12:30 PM", sun: true },
                ].map((row, i) => (
                  <tr
                    key={row.day}
                    className={`border-b border-gray-50 last:border-0 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                  >
                    <td className={`px-6 py-3.5 text-left font-medium ${row.sun ? "text-brand-orange" : "text-gray-700"}`}>
                      {row.day}
                    </td>
                    <td className={`px-6 py-3.5 text-right ${row.sun ? "text-brand-orange font-semibold" : "text-gray-600"}`}>
                      {row.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-400 mt-4">
            Closes early on Sundays at 12:30 PM
          </p>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-16 px-4 bg-brand-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2 text-center">Get In Touch</p>
          <h2 className="text-3xl font-bold text-brand-blue mb-10 text-center">Location &amp; Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">139 Tampines Street 11<br />#01-26, Singapore 521139</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                  <a href="tel:+6567851910" className="text-brand-orange hover:text-brand-orange-light text-lg font-semibold transition-colors">
                    +65 6785 1910
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Getting Here</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Ground floor of Block 139, Tampines Street 11, unit #01-26.
                    Accessible from Tampines MRT and bus services along Tampines St 11.
                  </p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/hYaUnXvL3PQbdH1v5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                Open in Google Maps
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 h-72 md:h-auto">
              <iframe
                title="Chin Hoe Hup Kee Hardware Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6!2d103.9445516!3d1.346505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d166229599b:0xbae463a8d31057c3!2sChin+Hoe+Hup+Kee+Hardware!5e0!3m2!1sen!2ssg!4v1741100000000!5m2!1sen!2ssg"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "288px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-10 px-4">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-brand-orange rounded flex items-center justify-center font-bold text-white text-sm">CH</div>
              <span className="font-bold text-base">Chin Hoe Hup Kee Hardware</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Serving the Tampines community for over 40 years with quality hardware, paint, and home essentials.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-300 mb-3">Contact</p>
            <p className="text-gray-400">139 Tampines Street 11</p>
            <p className="text-gray-400">#01-26, Singapore 521139</p>
            <a href="tel:+6567851910" className="text-brand-orange hover:text-brand-orange-light transition-colors mt-1 block">
              +65 6785 1910
            </a>
          </div>
          <div>
            <p className="font-semibold text-gray-300 mb-3">Hours</p>
            <p className="text-gray-400">Mon – Sat: 8:00 AM – 5:45 PM</p>
            <p className="text-brand-orange">Sun: 8:00 AM – 12:30 PM</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Chin Hoe Hup Kee Hardware. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
