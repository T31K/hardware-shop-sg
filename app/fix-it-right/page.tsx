const PHOTOS = {
  store: "https://lh3.googleusercontent.com/places/ANXAkqFW99-qIxvjVq5pSsEvYB7PmDiqt4j_IHh223T0UgAI19Ggbyn_8WJ-Y5auoSRA95DYswL6iGsdKMHL_FHgT1rrabD7QUGU9Z0=s4800-w1200",
  interior: "https://lh3.googleusercontent.com/place-photos/AL8-SNFO3YwrlpEkQSmvJSYR9VXNru3ZEw3PxVCUJgaekgi98V75FK44GgSgrlPaXxhoraTe2ix1hrED_uYavPgarzsnZcsR5FV_WlpLX4ll9mzyOGXkOFv4afwaMDTkGsHw0hfka3ju9q579LsoAAQ=s4800-w1200",
};

const CATEGORIES = [
  {
    name: "Screw & Nut Drivers",
    img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&q=80",
  },
  {
    name: "Hardware & Tools",
    img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&q=80",
  },
  {
    name: "Lightings",
    img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80",
  },
  {
    name: "Door Hardware & Locks",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    name: "Paint & Coatings",
    img: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=400&q=80",
  },
  {
    name: "Sealants & Adhesives",
    img: "https://images.unsplash.com/photo-1581244277943-fe4a9c777540?w=400&q=80",
  },
  {
    name: "Electrical Supplies",
    img: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=400&q=80",
  },
  {
    name: "Storage & Organisation",
    img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
  },
];

const BRANDS = [
  { name: "3M", bg: "bg-white", textColor: "text-red-600", size: "text-4xl" },
  { name: "Yale", bg: "bg-yellow-400", textColor: "text-blue-900", size: "text-3xl" },
  { name: "Bosch", bg: "bg-white", textColor: "text-red-600", size: "text-4xl" },
  { name: "WD-40", bg: "bg-yellow-400", textColor: "text-blue-900", size: "text-3xl" },
  { name: "Stanley", bg: "bg-white", textColor: "text-yellow-500", size: "text-3xl" },
  { name: "Makita", bg: "bg-white", textColor: "text-sky-600", size: "text-3xl" },
];

const REVIEWS = [
  {
    name: "Chro Mo",
    rating: 5,
    text: "By far the friendliest uncle who helps with my paint planning. 3rd time here in a span of 2 weeks and he helped a lot. Not pushy at all! Definitely going to be a regular.",
  },
  {
    name: "Zhuang Xuefang",
    rating: 5,
    text: "Excellent customer service. Highly recommend.",
  },
  {
    name: "Siti Raudha",
    rating: 5,
    text: "Awesome service and help by the Uncle in store.",
  },
  {
    name: "Raihan Jumat",
    rating: 5,
    text: "Cool selection of tools and stationery. Been around for more than 20 years.",
  },
];

const HOURS = [
  { day: "Monday",    hours: "12:00 PM – 8:00 PM", open: true },
  { day: "Tuesday",   hours: "12:00 PM – 8:00 PM", open: true },
  { day: "Wednesday", hours: "12:00 PM – 8:00 PM", open: true },
  { day: "Thursday",  hours: "12:00 PM – 7:00 PM", open: true },
  { day: "Friday",    hours: "12:00 PM – 8:00 PM", open: true },
  { day: "Saturday",  hours: "12:00 PM – 6:00 PM", open: true },
  { day: "Sunday",    hours: "Closed",              open: false },
];

export default function FixItRight() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* TOP BAR */}
      <div className="bg-sky-600 text-white py-2 px-4 text-center text-xs font-semibold tracking-wide">
        100% Authentic Product Quality Guaranteed &nbsp;·&nbsp; Free advice in-store &nbsp;·&nbsp;
        <a href="https://www.lazada.sg/shop/fixitright/" target="_blank" rel="noopener noreferrer" className="underline hover:text-sky-200 transition-colors">
          Also shop us on Lazada →
        </a>
      </div>

      {/* HEADER */}
      <header className="bg-sky-50 border-b-2 border-sky-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
            <div>
              <p className="text-xl font-black text-blue-900 leading-none">FIX IT RIGHT</p>
              <p className="text-xs text-sky-500 font-semibold">Your hardware store with value prices</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-bold text-blue-900">
            <a href="#categories" className="hover:text-sky-500 transition-colors">Categories</a>
            <a href="#brands"     className="hover:text-sky-500 transition-colors">Brands</a>
            <a href="#about"      className="hover:text-sky-500 transition-colors">About</a>
            <a href="#reviews"    className="hover:text-sky-500 transition-colors">Reviews</a>
            <a href="#visit"      className="hover:text-sky-500 transition-colors">Visit Us</a>
          </nav>

          {/* CTA */}
          <a
            href="https://www.lazada.sg/shop/fixitright/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
          >
            Shop on Lazada
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-sky-100 via-sky-50 to-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Open Today · 12:00 PM – 8:00 PM
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-blue-900 leading-tight mb-5">
              Your Hardware<br />
              Store with<br />
              <span className="text-sky-500">Value Prices</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Tools, lighting, locks, paint, electrical and more — all under one roof.
              Serving Tampines for over <strong className="text-blue-900">20 years</strong>.
              In-store expert advice, always free.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#categories"
                className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors"
              >
                Browse Categories
              </a>
              <a
                href="tel:+6567814718"
                className="inline-flex items-center gap-2 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold px-7 py-3.5 rounded-full transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                6781 4718
              </a>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["100% Authentic", "Expert Advice", "Value Prices", "20+ Years"].map(b => (
                <span key={b} className="bg-white border border-sky-200 text-blue-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  ✓ {b}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={PHOTOS.store}
              alt="Fix It Right store"
              className="w-full rounded-2xl object-cover shadow-xl"
              style={{ aspectRatio: "4/3" }}
            />
            {/* Floating rating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className={`text-lg ${i <= 4 ? "text-yellow-400" : "text-yellow-300"}`}>★</span>
                ))}
              </div>
              <div>
                <p className="font-black text-blue-900 text-lg leading-none">4.3</p>
                <p className="text-slate-400 text-xs">Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sky-500 font-bold text-sm uppercase tracking-widest mb-2">Shop by Category</p>
            <h2 className="text-4xl font-black text-blue-900">What We Carry</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="group cursor-pointer">
                <div className="rounded-xl overflow-hidden mb-3 relative">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors" />
                </div>
                <p className="text-center text-sky-600 font-bold text-sm group-hover:text-sky-500 transition-colors">{cat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY BANNER */}
      <div className="bg-sky-400 py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-4xl sm:text-5xl font-black text-blue-900">
            100% Authentic Product Quality Guaranteed
          </p>
        </div>
      </div>

      {/* BRANDS */}
      <section id="brands" className="py-16 px-6 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sky-500 font-bold text-sm uppercase tracking-widest mb-2">We Carry</p>
            <h2 className="text-4xl font-black text-blue-900">Featured Brands</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className={`${brand.bg} rounded-xl border-2 border-sky-100 flex items-center justify-center h-28 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all`}
              >
                <span className={`${brand.textColor} ${brand.size} font-black`}>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src={PHOTOS.interior}
              alt="Inside Fix It Right"
              className="w-full rounded-2xl object-cover shadow-lg"
              style={{ aspectRatio: "4/3" }}
            />
            <div className="absolute top-4 right-4 bg-orange-500 text-white rounded-xl px-4 py-3 text-center shadow-lg">
              <p className="text-2xl font-black">20+</p>
              <p className="text-xs font-bold uppercase">Years Serving<br/>Tampines</p>
            </div>
          </div>
          <div>
            <p className="text-sky-500 font-bold text-sm uppercase tracking-widest mb-3">About the Shop</p>
            <h2 className="text-4xl font-black text-blue-900 mb-5">
              Your Neighbourhood Hardware Expert
            </h2>
            <div className="w-12 h-1 bg-sky-400 rounded-full mb-7" />
            <p className="text-slate-500 leading-relaxed text-lg mb-4">
              INHOME Tampines, trading as <strong className="text-blue-900">Fix It Right</strong>, has been
              serving the Tampines community for over 20 years. Walk in anytime from noon —
              whether you need tools, lighting, locks, or paint advice.
            </p>
            <p className="text-slate-500 leading-relaxed text-lg mb-8">
              Our friendly in-store expert will help you find exactly what you need, without
              any hard sell. And if you can&apos;t make it in, you can shop our full range on
              Lazada from the comfort of home.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.lazada.sg/shop/fixitright/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3 rounded-full transition-colors text-sm"
              >
                Shop on Lazada →
              </a>
              <a
                href="#visit"
                className="inline-flex items-center gap-2 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold px-6 py-3 rounded-full transition-colors text-sm"
              >
                Visit the Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-16 px-6 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sky-500 font-bold text-sm uppercase tracking-widest mb-2">Customer Reviews</p>
            <h2 className="text-4xl font-black text-blue-900 mb-2">What People Say</h2>
            <div className="flex items-center justify-center gap-2">
              <span className="text-yellow-400 text-xl">★★★★</span>
              <span className="text-yellow-300 text-xl">★</span>
              <span className="font-black text-xl text-blue-900">4.3</span>
              <span className="text-slate-400 text-sm">· Google Reviews</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-yellow-400 text-base">★</span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 italic">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-2 pt-2 border-t border-sky-50">
                  <div className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center text-white text-xs font-black">
                    {r.name.charAt(0)}
                  </div>
                  <p className="text-xs font-bold text-blue-900">{r.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://maps.app.goo.gl/abk9AP6HKCaykxkq5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-600 text-sm font-bold underline underline-offset-4 transition-colors"
            >
              See all reviews on Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* VISIT / HOURS / CONTACT */}
      <section id="visit" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sky-500 font-bold text-sm uppercase tracking-widest mb-2">Come See Us</p>
            <h2 className="text-4xl font-black text-blue-900">Store Hours &amp; Location</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">

            {/* Hours */}
            <div className="bg-sky-50 rounded-2xl p-7 border border-sky-100">
              <h3 className="font-black text-blue-900 text-lg mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </span>
                Opening Hours
              </h3>
              <div className="space-y-2.5">
                {HOURS.map(row => (
                  <div key={row.day} className="flex justify-between text-sm">
                    <span className={`font-semibold ${!row.open ? "text-slate-400" : "text-blue-900"}`}>{row.day}</span>
                    <span className={`font-bold ${row.open ? "text-sky-600" : "text-slate-400"}`}>{row.hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-xs mt-4">Opens from noon daily — perfect for weekday evenings!</p>
            </div>

            {/* Address & phone */}
            <div className="bg-blue-900 rounded-2xl p-7 text-white">
              <h3 className="font-black text-lg mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-sky-400 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </span>
                Find Us
              </h3>
              <p className="text-sky-200 text-sm mb-1 font-semibold uppercase tracking-wide">Address</p>
              <p className="text-white font-bold text-lg mb-1">272 Tampines Street 22</p>
              <p className="text-sky-300 mb-6">Singapore 520272</p>
              <p className="text-sky-200 text-sm mb-1 font-semibold uppercase tracking-wide">Phone</p>
              <a href="tel:+6567814718" className="text-white font-black text-2xl hover:text-sky-300 transition-colors block mb-6">
                6781 4718
              </a>
              <a
                href="https://maps.app.goo.gl/abk9AP6HKCaykxkq5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-300 text-blue-900 font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>

            {/* Lazada CTA */}
            <div className="bg-orange-50 rounded-2xl p-7 border-2 border-orange-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                </div>
                <h3 className="font-black text-blue-900 text-lg mb-3">Can&apos;t Make It In?</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Shop our full catalogue online. Same authentic products, value prices, delivered to your door.
                </p>
                <div className="flex gap-1 mb-4">
                  {["Screw Drivers", "Locks", "Lighting", "Tools"].map(t => (
                    <span key={t} className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <a
                href="https://www.lazada.sg/shop/fixitright/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3.5 rounded-full transition-colors text-sm"
              >
                Visit our Lazada Store →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <div className="h-64 w-full">
        <iframe
          title="Fix It Right Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6!2d103.950233!3d1.349125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d19f0597ecf%3A0xd131d2a27b00dfb8!2sINHOME%20Tampines!5e0!3m2!1sen!2ssg!4v1741100000000!5m2!1sen!2ssg"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-400 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            </div>
            <div>
              <p className="font-black text-lg leading-none">FIX IT RIGHT</p>
              <p className="text-sky-300 text-xs">272 Tampines Street 22 · Singapore 520272</p>
            </div>
          </div>
          <div className="flex flex-col sm:items-end gap-1">
            <a href="https://www.lazada.sg/shop/fixitright/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 text-sm font-bold transition-colors">
              lazada.sg/shop/fixitright →
            </a>
            <p className="text-sky-600 text-xs">&copy; {new Date().getFullYear()} Fix It Right (INHOME Tampines). All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
